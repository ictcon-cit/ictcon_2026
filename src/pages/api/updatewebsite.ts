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

  const body =
    typeof req.body === "string" ? JSON.parse(req.body) : req.body ?? {};
  const secret = typeof body.secret === "string" ? body.secret : "";

  const expectedSecret = process.env.NEXT_PRIVATE_SECRET;
  const owner = process.env.NEXT_PRIVATE_OWNER;
  const repo = process.env.NEXT_PRIVATE_REPO;
  const accessToken = process.env.NEXT_PRIVATE_GITHUB_API_KEY;
  const path = "package.json";

  if (!expectedSecret || !owner || !repo || !accessToken) {
    return res
      .status(400)
      .json({ error: "Missing required environment variables" });
  }

  if (secret !== expectedSecret) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const repoResponse = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: "application/vnd.github+json",
        },
      }
    );

    const branch =
      process.env.NEXT_PRIVATE_BRANCH?.trim() ||
      repoResponse.data?.default_branch ||
      "main";

    const { data } = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${encodeURIComponent(
        branch
      )}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: "application/vnd.github+json",
        },
      }
    );

    if (!data || typeof data !== "object" || Array.isArray(data)) {
      throw new Error("Package file is unavailable");
    }

    const decodedContent = base64.decode(data.content ?? "");
    const packageJson = JSON.parse(decodedContent);

    if (!packageJson || typeof packageJson.version !== "string") {
      throw new Error("package.json is missing a valid version field");
    }

    const versionParts = packageJson.version.split(".");
    versionParts[2] = (parseInt(versionParts[2] || "0", 10) + 1).toString();
    packageJson.version = versionParts.join(".");

    const updatedContent = base64.encode(
      JSON.stringify(packageJson, null, 2) + "\n"
    );
    const currentTime = new Date().toISOString();

    const response = await axios.put(
      `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
      {
        message: `chore: increment version to ${packageJson.version} at ${currentTime}`,
        content: updatedContent,
        sha: data.sha,
        branch,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: "application/vnd.github+json",
          "Content-Type": "application/json",
        },
      }
    );

    return res.status(200).json({
      success: true,
      message: `Version incremented to ${packageJson.version}`,
      data: response.data,
    });
  } catch (error) {
    console.error("Error updating version:", error);
    return res.status(500).json({
      error: "Failed to update version",
      details:
        "Check if the repository's package.json file exists, the default branch is correct, and the GitHub token has permission to edit it.",
    });
  }
}
