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
            and $15 Foreign members after the 5th August , 2026.
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
                href="https://docs.google.com/forms/d/e/1FAIpQLSe6N--pXWbVpUP4i24OZ3QDtSlViDrTBkc6fdxvivmO5qG2Mw/viewform"
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
          <ol className="list-decimal list-inside mb-4">
            <li>Deadline: 5th August 2026</li>

            <li>
              Submit as per Springer format (
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
              )
            </li>

            <li>Similarity index must be below limits.</li>
            <li>Include all author details.</li>
            <li>Max 15 pages.</li>
          </ol>
        </div>

        <h2 className="text-2xl text-center font-bold mb-4">
          Step-by-Step Submission
        </h2>

        <div className="border p-4 rounded-lg bg-gray-50">
          <ol className="list-decimal list-inside mb-4">
            <li>Upload PDF, ZIP, and Copyright form</li>
            <li>Follow naming format</li>
            <li>
              Login to{" "}
              <a
                href="https://cmt3.research.microsoft.com/ICTCon2026"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                CMT Portal
              </a>
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