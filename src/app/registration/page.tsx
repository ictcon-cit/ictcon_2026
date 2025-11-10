import DownloadButton from "@/components/donwlaodbutton";
import SecondHeader from "@/components/secondheader";

const RegistrationPage = () => {
  return (
    <div>
      <SecondHeader title={"REGISTRATION"} />
      {/* <div className="flex min-h-screen justify-center items-center">
        <div className="w-full flex justify-center">
          <div className="w-full h-24 flex flex-col justify-center items-center border-2 border-blue-400 rounded-lg bg-white shadow-lg">
            <span className="text-l font-semibold text-blue-600 text-center">
              The necessary guidelines for registration will be notified soon.
              Further information and instructions regarding the registration
              process will be notified shortly.
            </span>
          </div>
        </div>
      </div> */}

      <div>
        <div className="relative overflow-x-auto md:px-20 md:py-5 px-5 py-1">
          <div className="w-full text-center text-black md:text-3xl text-xl font-bold p-5">
            Registration Fees
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                    Indian Authors (₹)
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                    Foreign Authors ($)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-6 py-4 border-b border-gray-300 text-sm leading-5 text-gray-700">
                    Student
                  </td>
                  <td className="px-6 py-4 border-b border-gray-300 text-sm leading-5 text-gray-700">
                    ₹4500
                  </td>
                  <td className="px-6 py-4 border-b border-gray-300 text-sm leading-5 text-gray-700">
                    $120
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-b border-gray-300 text-sm leading-5 text-gray-700">
                    Faculty/Academia
                  </td>
                  <td className="px-6 py-4 border-b border-gray-300 text-sm leading-5 text-gray-700">
                    ₹6500
                  </td>
                  <td className="px-6 py-4 border-b border-gray-300 text-sm leading-5 text-gray-700">
                    $180
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-b border-gray-300 text-sm leading-5 text-gray-700">
                    Industry
                  </td>
                  <td className="px-6 py-4 border-b border-gray-300 text-sm leading-5 text-gray-700">
                    ₹8000
                  </td>
                  <td className="px-6 py-4 border-b border-gray-300 text-sm leading-5 text-gray-700">
                    $220
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="text-center text-red-500 font-semibold mt-2 animate-pulse">
            Note: A late fee of ₹500 for students, ₹1000 for faculty/Academia
            and $15 Foreign members after the 15 November 2025.
          </div>
          {/* Special Issue - Open Access Table */}
          <div className="mt-6">
            <div className="w-full text-center text-black text-xl font-bold mb-2">
              Special Issue - Open Access
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <tbody>
                  <tr>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm leading-5 text-gray-700 font-semibold">
                      Workshop Registration
                    </td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm leading-5 text-gray-700 font-semibold">
                      ₹25000 + 18% GST
                    </td>
                    <td className="px-6 py-4 border-b border-gray-300 text-sm leading-5 text-gray-700 font-semibold">
                      $282
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="md:px-20 px-5 py-5 text-black">
        <h2 className="text-2xl text-center font-bold mb-4">
          Registration Instructions
        </h2>
        <div className="border border-gray-300 p-4 rounded-lg bg-gray-50">
          <ol className="list-decimal list-inside mb-4">
            <li className="mb-2">
              Registration fees is to be paid at the following A/C:
              <ul className="list-disc list-inside ml-5 mt-2">
                <li>Name: Central Institute of Technology Kokrajhar</li>
                <li>A/c No.: 30495666063</li>
                <li>IFSC: SBIN0007379</li>
                <li>Bank: SBI, North Kokrajhar Branch</li>
                <li>(REMARK AS ICTCon2025 #paper id)</li>
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
              <a
                href="/citkokrajhar@sbi.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 font-semibold underline"
              >
                QR code
              </a>
              : (Remark as <strong>ICTCon2025 #paper id</strong>)
            </li>
          </ol>
        </div>
        <div className="border border-gray-300 p-4 rounded-lg bg-gray-50 mt-4">
          <h3 className="text-xl font-bold mb-2">
            Please note the following conditions before registering:
          </h3>
          <ul className="list-disc list-inside ml-5">
            <li>
              Registration form is available at{" "}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSe6N--pXWbVpUP4i24OZ3QDtSlViDrTBkc6fdxvivmO5qG2Mw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 font-semibold underline"
              >
                Registration Form
              </a>
            </li>
            <li>
              At least one author for an accepted paper is compulsory to
              register and present the paper to be included in the conference
              proceedings.
            </li>
            <li>
              In case of Student Author, he/she is required to upload a valid
              proof of being a student during the registration.
            </li>
            <li>
              If the final manuscript in Springer format exceeds 15 pages, the
              additional fee will be charged for each extra page.
            </li>
          </ul>
        </div>
      </div>
      <div className="md:px-20 px-5 py-5 text-black">
        <div className="border border-gray-300 p-4 rounded-lg bg-gray-50 mt-4">
          <h2 className="text-xl text-center font-bold mb-4">
            Each accepted paper must be accompanied by the author&apos;s
            registration. Papers that are not accompanied by the author
            registration will not be included in the conference proceedings and
            will not appear in the Springer proceedings format.
          </h2>
          <ul className="list-decimal list-inside mb-4">
            <li>Instructions for preparing the final camera-ready paper</li>
            <li>Instructions for preparing the copyright form</li>
            <li>
              Step-by-step procedure for uploading the camera-ready submission
            </li>
          </ul>
          <p>
            Read these instructions carefully and follow them exactly to
            minimize the problems and delays with the production of the
            conference proceedings.
          </p>
        </div>
        <h2 className="text-2xl text-center font-bold mb-4">
          Instructions for Preparing the Final Camera-Ready Paper
        </h2>
        <div className="border border-gray-300 p-4 rounded-lg bg-gray-50">
          <ol className="list-decimal list-inside mb-4">
            <li className="mb-2">
              The deadline for camera-ready submission is November 15, 2025, at
              11:59 P.M. Pacific Time. This deadline will not be extended.
              Papers submitted after the deadline may not be included in the
              conference proceedings.
            </li>
            <li className="mb-2">
              Authors should submit their accepted manuscript as per{" "}
              <a
                href="https://www.springer.com/series/7899"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline font-bold"
              >
                Springer Proceedings
              </a>{" "}
              (
              <DownloadButton
                href={"/Microsoft_Word_ICTCON-2025_Updated.zip"}
                filename={"Microsoft_Word_ICTCON-2025_Updated.zip"}
                text={"Word"}
              />{" "}
              /{" "}
              <DownloadButton
                href={"/LaTeX2e_ICTCon-2025_Updated.zip"}
                filename={"LaTeX2e_ICTCon-2025_Updated.zip"}
                text={"LaTeX"}
              />
              ).
            </li>
            <li className="mb-2">
              Please make sure that the similarity index of your camera-ready
              submission is below 20% (excluding the bibliography/references)
              and below 15% for single source similarities, using standard
              plagiarism checking software (e.g., Turnitin, etc.), before
              submitting the camera-ready paper. Papers with a similarity score
              greater than 20% in total and/or greater than 15% for a single
              source will not be included in the conference proceedings.
            </li>
            <li className="mb-2">
              Please include all authors&apos; details (Name, Affiliation, and
              Email address) in the final manuscript as mentioned in your
              initial submission.
            </li>
            <li>
              The page limit for all papers is 15 pages including figures,
              tables, equations, references, acknowledgments, etc. Note that
              there are extra-page charges if the page limit exceeds 15 pages.
              If the final manuscript in Springer provided format exceeds 15
              pages, then extra page will be charged.
            </li>
          </ol>
        </div>
        <h2 className="text-2xl text-center font-bold mb-4">
          Instructions for Preparing the Copyright Form
        </h2>
        <div className="border border-gray-300 p-4 rounded-lg bg-gray-50">
          <ol className="list-decimal list-inside mb-4">
            <li className="mb-2">
              Copyright form can be downloaded here (
              <a
                href="/LaTeX2e_ICTCon-2025_Updated.zip"
                download
                className="text-blue-500 underline font-bold"
              >
                Word
              </a>
              ) (
              <a
                href="/Microsoft_Word_ICTCON-2025_Updated.zip"
                download
                className="text-blue-500 underline font-bold"
              >
                PDF
              </a>
              ).
            </li>
            <li className="mb-2">
              Fill the following details as per the information submitted
              earlier to ICTCon 2025. Any changes in the paper title and name of
              authors will not be entertained.
              <ul className="list-disc list-inside ml-5 mt-2">
                <li>Proposed title of the contribution</li>
                <li>Author(s) Full Name(s)</li>
                <li>Corresponding Author Name</li>
              </ul>
            </li>
            <li className="mb-2">
              Sign the copyright form and fill the other details such as date,
              address, E-mail id, name, etc.
            </li>
            <li>
              Please don&apos;t change any pre-filled information in the
              copyright form.
            </li>
          </ol>
        </div>
        <h2 className="text-2xl text-center font-bold mb-4">
          Step-by-Step Procedure for Uploading the Camera-Ready Submission
        </h2>
        <div className="border border-gray-300 p-4 rounded-lg bg-gray-50 overflow-x-auto">
          <ol className="list-decimal list-inside mb-4">
            <li className="mb-2">
              Followings files need to be submitted by November 15, 2025.
              <ul className="list-disc list-inside ml-5 mt-2">
                <li>
                  Final Camera Ready Copy (in PDF format) of accepted manuscript
                  as per{" "}
                  <a
                    href="https://www.springer.com/series/7899"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline font-bold"
                  >
                   Springer proceedings format
                  </a>
                </li>
                <li>
                  Source Editable (Word/LaTeX format) file of Camera Ready Copy
                  (in Zip folder) with all supporting files (without
                  highlighting changes after the incorporated comments)
                </li>
                <li>
                  Source Editable (Word/LaTeX format) file of Camera Ready Copy
                  (in Zip folder) with all supporting files (with highlighting
                  changes after the incorporated comments)
                </li>
                <li>Filled and Signed Copyright Form (in PDF format)</li>
              </ul>
            </li>
            <li className="mb-2">
              The name of your final Camera Ready Copy must be in the form
              xxx.pdf where xxx is the three-digit paper ID (zero-padded if
              necessary). For example, if your paper ID is 24, the filename must
              be 024.pdf.
            </li>
            <li className="mb-2">
              Similarly, Source Editable Manuscript with all supporting files in
              ZIP folder must be in the form xxx.zip where xxx is the
              three-digit paper ID (zero-padded if necessary). For example, if
              your paper ID is 24, the filename must be 024.zip.
            </li>
            <li className="mb-2">
              Similarly, the name of Copyright Form must be in the form
              CRF_xxx.pdf where xxx is the three-digit paper ID (zero-padded if
              necessary). For example, if your paper ID is 24, the filename must
              be CRF_024.pdf.
            </li>
            <li className="mb-2">
              Login to the CMT site:{" "}
              <a
                href="https://cmt3.research.microsoft.com/ICTCon2025"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 font-semibold underline"
              >
                https://cmt3.research.microsoft.com/ICTCon5
              </a>
            </li>
            <li className="mb-2">
              In the CMT “Author Console”, your accepted paper(s) will appear
              with a “Create Camera Ready Submission” link. Click on the “Create
              Camera Ready Submission” link to take you to the camera-ready
              submission page for your accepted paper.
            </li>
            <li className="mb-2">
              In the camera-ready submission page, verify that the paper title
              and abstract are correct in the “Title and Abstract” section.
            </li>
            <li className="mb-2">
              Please verify that you upload the final camera-ready paper PDF,
              Zip folder of source files (in Word or LaTeX) and signed Copyright
              form PDF.
            </li>
            <li>
              Click the “Submit” button or “Save changes” button if you&apos;re
              editing a previous submission—at the bottom of the page to save
              all your changes. Unless you press the “Submit”/“Save changes”
              button, any changes you&apos;ve made to the camera-ready
              submission (including file uploads and changes to the title,
              abstract, and author list) will not be saved.
            </li>
          </ol>
        </div>
        <div className="text-center text-black font-semibold mt-4 flex flex-col">
          Oral PowerPoint presentation slides template for ICTCon 2025
          conference:
          <a
            href="/ICTCon2025_IDXXX.pptx"
            download
            className="text-blue-500 underline font-bold"
          >
            ICTCon2025_IDXXX.pptx
          </a>
          (paper Id number &apos;xxx&apos; like as &apos;121&apos;)
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
