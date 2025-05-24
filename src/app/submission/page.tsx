import DownloadButton from "@/components/donwlaodbutton";
import SecondHeader from "@/components/secondheader";
import Link from "next/link";

const SubmissionPage = () => {
  return (
    <div>
      <SecondHeader title={"Instructions for Preparing Manuscripts"} />
      <div className="md:text-xl text-md  text-black md:px-44 px-5 space-y-5">
        <div className="mt-10">
          Prospective authors are invited to submit full-length original
          research papers. In submitting a manuscript to ICTCon 2024, authors
          acknowledge that no paper substantially similar in content has been or
          will be submitted to another journal, conference or workshop during
          the review period. In such a case, the paper will be rejected without
          review.
        </div>

        <div>
          Papers must be electronically submitted to the Microsoft Research
          paper submission portal before the deadline expires without exception.
        </div>

        <div>
          Authors should prepare their manuscripts of 12-15 pages (including all
          text, figures, and references). The manuscript must be submitted in
          pdf format only and the file size of your manuscript should not exceed
          10 MB as per guidelines of Springer-CCIS Series{" "}
          <span className="text-rose-600">
            (
            <Link
              target="_blank"
              className="text-rose-600 underline"
              href={
                "https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines"
              }
            >
              Click
            </Link>
            )
          </span>
          .
        </div>

        <div>
          Use a proper tool to convert the resulting source into a pdf document
          that has only scalable fonts with all fonts embedded.
        </div>

        <div>
          The images embedded in the paper must not contain transparent pixels
          (i.e., an alpha-channel of a transparent color) since this could lead
          to problems when displaying or printing the pdf.
        </div>

        <div>
          The pdf manuscript must not have Adobe Document Protection or Document
          Security enabled.
        </div>

        <div className="space-y-1">
          <div className="font-bold">Proceedings:</div>
          The proceedings of the conference will be published by Scopus Indexed
          ‐ Springer in{" "}
          <Link
            target="_blank"
            className="text-rose-600 underline"
            href={"https://www.springer.com/series/7899"}
          >
            Communications in Computer and Information Science series{" "}
          </Link>
          . CCIS is abstracted/ indexed in DBLP, Google Scholar, EI-Compendex,
          Mathematical Reviews, SCImago, Scopus. CCIS volumes are also submitted
          for the inclusion in ISI Proceedings.
        </div>

        <div className="space-y-1">
          <div className="font-bold">Preparing Your Proceedings Paper:</div>
          For your convenience, we have summarized in the “Author Guidelines”
          document how a proceedings paper should be structured, how elements
          (headings, figures, references) should be formatted using our
          predefined styles, etc. We also give some insight on how your paper
          will be typeset at ICTCON. The PDF of the Authors Guidelines can be
          downloaded here{" "}
          <Link
            target="_blank"
            className="text-rose-600 underline"
            href={
              "https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines"
            }
          >
            Proceedings Guidelines for Authors{" "}
          </Link>
          .
        </div>

        <div className="space-y-1">
          <div className="font-bold">Proceedings Guidelines for Authors:</div>
          Authors must use the manuscript template specified here. The LaTeX and
          Word templates can be downloaded from the following links:
          <ul className="list-disc ml-10">
            <li>
              <DownloadButton
                href={"/LaTeX2e_ICTCon-2024.zip"}
                filename={"LaTeX2e_ICTCon-2024.zip"}
                text={"LaTeX Template"}
              />
            </li>
            <li>
              <DownloadButton
                href={"/Microsoft_Word_ICTCON-2024.zip"}
                filename={"Microsoft_Word_ICTCON-2024.zip"}
                text={"Word Template"}
              />
            </li>
          </ul>
          <div>
            Authors can use the{" "}
            <Link
              target="_blank"
              className="text-rose-600 underline"
              href={
                "https://www.overleaf.com/latex/templates/springer-lecture-notes-in-computer-science/kzwwpvhwnvfj#.WuA4JS5uZpi"
              }
            >
              LaTeX2e Proceedings Templates
            </Link>{" "}
            available in the scientific authoring platform Overleaf.
          </div>
        </div>

        <div className="space-y-1">
          <div className="font-bold">
            Instruction for Manuscript Submission:
          </div>
          The manuscript has to be uploaded online at the ICTCON 2024 Microsoft
          Research paper submission portal at the following link:
          {/* <div> */}
          <Link
            target="_blank"
            className="text-rose-600 underline flex"
            href={"https://cmt3.research.microsoft.com/ICTCon2024"}
          >
            https://cmt3.research.microsoft.com/ICTCon2024
          </Link>
          {/* </div> */}
        </div>
      </div>
      <div className="h-32"></div>
    </div>
  );
};

export default SubmissionPage;
