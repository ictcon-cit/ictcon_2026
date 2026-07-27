import DownloadButton from "@/components/donwlaodbutton";
import SecondHeader from "@/components/secondheader";

const RegistrationPage = () => {
  return (
    <div>
      <SecondHeader title={"REGISTRATION"} />

      <div>
        <div className="relative overflow-x-auto md:px-20 md:py-5 px-5 py-1">
          <div className="w-full text-center text-black md:text-3xl text-xl font-bold p-5">
            Registration Fees
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-medium text-gray-600 uppercase">
                    Category
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-medium text-gray-600 uppercase">
                    Indian Authors (₹)
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-medium text-gray-600 uppercase">
                    Foreign Authors ($)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-6 py-4 border-b text-sm text-gray-700">
                    Student
                  </td>
                  <td className="px-6 py-4 border-b text-sm text-gray-700">
                    INR 7000 + 18% GST = INR 8,260
                  </td>
                  <td className="px-6 py-4 border-b text-sm text-gray-700">
                    $180
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-b text-sm text-gray-700">
                    Faculty/Academia
                  </td>
                  <td className="px-6 py-4 border-b text-sm text-gray-700">
                    INR 9000 + 18% GST = INR 10,620
                  </td>
                  <td className="px-6 py-4 border-b text-sm text-gray-700">
                    $250
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-b text-sm text-gray-700">
                    Industry
                  </td>
                  <td className="px-6 py-4 border-b text-sm text-gray-700">
                    INR 11000 + 18% GST = INR 12,980
                  </td>
                  <td className="px-6 py-4 border-b text-sm text-gray-700">
                    $280
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center text-red-500 font-semibold mt-2 animate-pulse">
            Note: A late fee of ₹500 for students, ₹1000 for faculty/Academia
            and $15 Foreign members after the 10th August , 2026.
          </div>
        </div>
      </div>

      <div className="md:px-20 px-5 py-5 text-black">
        <h2 className="text-2xl text-center font-bold mb-4">
          Registration Instructions
        </h2>

        <div className="border p-4 rounded-lg bg-gray-50">
          <ol className="list-decimal list-inside mb-4">
            <li className="mb-2">
              Registration fees is to be paid at the following A/C:
              <ul className="list-disc list-inside ml-5 mt-2">
                {/* Original details commented */}
                {/* 
                <li>Name: Central Institute of Technology Kokrajhar</li>
                <li>A/c No.: 30495666063</li>
                <li>IFSC: SBIN0007379</li>
                <li>Bank: SBI, North Kokrajhar Branch</li> 
                */}

                {/* Updated TBD */}
                <li>Name: TBD</li>
                <li>A/c No.: TBD</li>
                <li>IFSC: TBD</li>
                <li>Bank: TBD</li>

                <li>(REMARK AS ICTCon2026 #paper id)</li>
              </ul>
            </li>

            <li className="mb-2">
              After making payment, kindly take a print/screenshot of your
              registration receipt.
            </li>

            <li className="mb-2">
              Once the registration fee is paid, enter the details in the
              Registration form and upload the receipt.
            </li>

            <li>
              To pay, click on the{" "}
              {/* Disabled QR link */}
              {/*
              <a
                href="/citkokrajhar@sbi.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 font-semibold underline"
              >
                QR code
              </a>
              */}
              <span className="text-gray-400 font-semibold cursor-not-allowed">
                QR code (TBD)
              </span>
              : (Remark as <strong>ICTCon2026 #paper id</strong>)
            </li>
          </ol>
        </div>

        <div className="border p-4 rounded-lg bg-gray-50 mt-4">
          <h3 className="text-xl font-bold mb-2">
            Please note the following conditions before registering:
          </h3>
          <ul className="list-disc list-inside ml-5">
            <li>
              Registration form is available at{" "}
              <a
                href="https://forms.gle/UPd6gwEfeuDHeby28"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 font-semibold underline"
              >
                Registration Form
              </a>
            </li>
            <li>
              At least one author for an accepted paper is compulsory.
            </li>
            <li>
              Student authors must upload valid proof.
            </li>
            <li>
              Extra page charge: INR 600 or USD 15 per page.
            </li>
          </ul>
        </div>
      </div>

      <div className="md:px-20 px-5 py-5 text-black">
        <div className="border p-4 rounded-lg bg-gray-50 mt-4">
          <h2 className="text-xl text-center font-bold mb-4">
            Each accepted paper must be accompanied by registration.
          </h2>
        </div>

 <h2 className="text-2xl text-center font-bold mb-4">
  Instructions for Preparing the Final Camera-Ready Paper
</h2>

<div className="border p-4 rounded-lg bg-gray-50">
  <ol className="list-decimal list-inside space-y-3">
    <li>
      The deadline for camera-ready submission is{" "}
      <span className="font-semibold text-red-600">
        August 10, 2026
      </span>
      , at 11:59 P.M. Pacific Time. This deadline will not be extended.
      Papers submitted after the deadline may not be included in the
      conference proceedings.
    </li>

    <li>
      Authors should submit their accepted manuscript as per Springer
      Proceedings (
      <DownloadButton
        href={"/Microsoft_Word_ICTCON-2026.zip"}
        filename={"Microsoft_Word_ICTCON-2026.zip"}
        text={"Word"}
      />{" "}
      /{" "}
      <DownloadButton
        href={"/LaTeX2e_ICTCon-2026.zip"}
        filename={"LaTeX2e_ICTCon-2026.zip"}
        text={"LaTeX"}
      />
      ).
    </li>

    <li>
      Please ensure that the similarity index of your camera-ready
      submission is below <strong>20%</strong> (excluding the
      bibliography/references) and below <strong>15%</strong> for any
      single source similarity, using standard plagiarism checking
      software (e.g., Turnitin) before submitting the camera-ready paper.
      Papers with a similarity score greater than 20% in total and/or
      greater than 15% for a single source will not be included in the
      conference proceedings.
    </li>

    <li>
      Please include all authors' details (Name, Affiliation, and Email
      address) in the final manuscript as mentioned in your initial
      submission.
    </li>

    <li>
      The page limit for all papers is <strong>15 pages</strong> including
      figures, tables, equations, references, acknowledgments, etc. Note that there are extra-page charges if the page limit exceeds 15 pages. If the final manuscript in Springer provided format exceeds 15 pages, then each extra page INR 600 or USD 15 will be charged.
    </li>
  </ol>
</div>


<h2 className="text-2xl text-center font-bold mb-4">
  Instructions for Copyright Form
</h2>

<div className="border p-4 rounded-lg bg-gray-50">
  <ol className="list-decimal list-inside space-y-3">
    <li>
      Copyright form can be downloaded here (
      <DownloadButton
        href={"/Copyright From_ICTCon2026 (1).docx"} // Replace later
        filename={"copyright-form-word.docx"}
        text={"Word"}
      />{" "}
      /{" "}
      <DownloadButton
        href={"/Copyright From_ICTCon2026.pdf"} // Replace later
        filename={"copyright-form.pdf"}
        text={"PDF"}
      />
      ).
    </li>

    <li>
      Fill the following details as per the information submitted earlier
      to ICTCon 2026. Any changes in the paper title and name of authors
      will not be entertained.
      <ul className="list-disc list-inside mt-2 ml-4">
        <li>Proposed title of the contribution</li>
        <li>Author(s) Full Name(s)</li>
        <li>Corresponding Author Name</li>
      </ul>
    </li>

    <li>
      Sign the copyright form and fill the other details such as date,
      address, E-mail ID, name, etc.
    </li>

    <li>
      Please don't change any pre-filled information in the copyright
      form.
    </li>
  </ol>
</div>

        <h2 className="text-2xl text-center font-bold mb-4">
          Step-by-Step Procedure for Uploading the final Camera-Ready Submission
        </h2>

        <div className="border p-4 rounded-lg bg-gray-50">
  <ol className="list-decimal list-inside space-y-3">
    <li>
      Following files need to be submitted by{" "}
      <span className="font-semibold text-red-600">
        August 10, 2026
      </span>
      .
      <ul className="list-disc list-inside mt-2 ml-4">
        <li>
          Final Camera Ready Copy (in PDF format) of accepted manuscript
          as per Springer proceedings format.
        </li>
        <li>
          Source Editable (Word/LaTeX format) file of Camera Ready Copy
          (in ZIP folder) with all supporting files (without highlighting
          changes after the incorporated comments).
        </li>
        <li>
          Source Editable (Word/LaTeX format) file of Camera Ready Copy
          (in ZIP folder) with all supporting files (with highlighting
          changes after the incorporated comments).
        </li>
        <li>
          Filled and Signed Copyright Form (in PDF format).
        </li>
      </ul>
    </li>

    <li>
      The name of your final Camera Ready Copy must be in the form
      <strong> xxx.pdf</strong> where <strong>xxx</strong> is the
      three-digit paper ID (zero-padded if necessary). For example, if
      your paper ID is 24, the filename must be <strong>024.pdf</strong>.
    </li>

    <li>
      Similarly, Source Editable Manuscript with all supporting files in
      ZIP folder must be in the form <strong>xxx.zip</strong> where
      <strong> xxx</strong> is the three-digit paper ID (zero-padded if
      necessary). For example, if your paper ID is 24, the filename must
      be <strong>024.zip</strong>.
    </li>

    <li>
      Similarly, the name of Copyright Form must be in the form
      <strong> CRF_xxx.pdf</strong> where <strong>xxx</strong> is the
      three-digit paper ID (zero-padded if necessary). For example, if
      your paper ID is 24, the filename must be
      <strong> CRF_024.pdf</strong>.
    </li>

    <li>
      Login to the CMT site:{" "}
      <a
        href="https://cmt3.research.microsoft.com/ICTCon2026"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        https://cmt3.research.microsoft.com/ICTCon2026
      </a>
    </li>

    <li>
      In the CMT "Author Console", your accepted paper(s) will appear
      with a "Create Camera Ready Submission" link. Click on the "Create
      Camera Ready Submission" link to take you to the camera-ready
      submission page for your accepted paper.
    </li>

    <li>
      In the camera-ready submission page, verify that the paper title
      and abstract are correct in the "Title and Abstract" section.
    </li>

    <li>
      Please verify that you upload the final camera-ready paper PDF, ZIP
      folder of source files (in Word or LaTeX) and signed Copyright form
      PDF.
    </li>

    <li>
      Click the "Submit" button or "Save changes" button if you're
      editing a previous submission—at the bottom of the page to save all
      your changes. Unless you press the "Submit"/"Save changes" button,
      any changes you've made to the camera-ready submission (including
      file uploads and changes to the title, abstract, and author list)
      will not be saved.
    </li>
  </ol>
</div>

        <div className="text-center font-semibold mt-4 flex flex-col">
          Oral PowerPoint presentation slides template:

          {/* Disabled PPT link */}
          {/*
          <a
            href="/PID_xx_ICTCon_2025.pptx"
            download
            className="text-blue-500 underline font-bold"
          >
            ICTCon2025_IDXXX.pptx
          </a>
          */}
          <span className="text-gray-400 underline font-bold cursor-not-allowed">
            TBD
          </span>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
