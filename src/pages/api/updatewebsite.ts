import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import base64 from "base-64";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { secret } = req.body;

  // Load environment variables
  const expectedSecret = process.env.NEXT_PRIVATE_SECRET;
  const owner = process.env.NEXT_PRIVATE_OWNER;
  const repo = process.env.NEXT_PRIVATE_REPO;
  const branch = "master";
  const path = "package.json";
  const accessToken = process.env.NEXT_PRIVATE_GITHUB_API_KEY;

  // Validate environment variables
  if (!expectedSecret || !owner || !repo || !accessToken) {
    return res
      .status(400)
      .json({ error: "Missing required environment variables" });
  }

  // Validate secret
  if (secret !== expectedSecret) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    // Fetch the current file details to get the SHA and content
    const { data } = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`,
      {
        headers: {
          Authorization: `token ${accessToken}`,
        },
      }
    );

    // Decode the existing content
    const decodedContent = base64.decode(data.content);
    const packageJson = JSON.parse(decodedContent);

    // Increment the patch version
    const versionParts = packageJson.version.split(".");
    versionParts[2] = (parseInt(versionParts[2], 10) + 1).toString();
    packageJson.version = versionParts.join(".");

    // Encode the updated content
    const updatedContent = base64.encode(
      JSON.stringify(packageJson, null, 2) + "\n"
    );

    const currenttime = new Date().toISOString();

    // Update the file with new content
    const response = await axios.put(
      `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
      {
        message: `chore: increment version to ${packageJson.version} at ${currenttime}`,
        content: updatedContent,
        sha: data.sha,
        branch,
      },
      {
        headers: {
          Authorization: `token ${accessToken}`,
        },
      }
    );

    res.status(200).json({
      success: true,
      message: `Version incremented to ${packageJson.version}`,
      data: response.data,
    });
  } catch (error) {
    console.error("Error updating version:", error);
    res.status(500).json({
      error: "Failed to update version",
      details:
        "Check if the repository's package.json file exists and is accessible",
    });
  }
}
