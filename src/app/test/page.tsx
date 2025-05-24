import SecondHeader from "@/components/secondheader";
import { FaFilePdf } from "react-icons/fa";

const AboutSection = () => {
  return (
    <div className="min-h-screen bg-gray-100 md:p-2 lg:p-4 xl:p-6">
      <div className="flex gap-6 mt-6 ">
        <div className="flex flex-col flex-[4] bg-white  overflow-hidden shadow-sm">
          <div className="bg-blue-600 text-center text-xl text-white font-semibold p-4 mb-4">
            ABOUT CIT KOKRAJHAR
          </div>
          <div className=" flex-1 flex flex-col items-center justify-start text-center text-xl text-black ">
            <img
              src="/images/citlogo.jpg"
              className="w-40 h-40 object-cover mb-4"
              alt="CIT Kokrajhar Logo"
            />
            <p className="text-left text-md text-justify-start leading-relaxed p-2 m-4">
              Central Institute of Technology (CIT), Kokrajhar is situated in
              Kokrajhar District of Bodoland Territorial Region (BTR) in Assam.
              CIT has been established for the basic objective of fulfilling the
              aspirations of the Bodo People relating to their cultural
              identity, language, education and overall economic development of
              the region and to impart Bodo youths with requisite technological
              and vocational training to produce the required manpower to give
              the impetus to economic growth of this area and to integrate the
              Bodo People into the mainstream of Technical and Vocational
              Education. It is a Centrally Funded Institute under the Ministry
              of Human Resource Development, Government of India.The Institute
              was established on the 19th of December 2006.
            </p>
          </div>
        </div>
        <div className="min-h-screen w-[40%] shadow-lg bg-white overflow-hidden">
          <div className="p-6">
            <div className="text-center w-full">
              <a
                href="/CFP ICTCon 2024.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-blue-600 hover:bg-blue-800 font-bold py-2 px-4 rounded-lg inline-flex items-center justify-center shadow-sm transition duration-300 ease-in-out transform hover:scale-105 w-full uppercase"
                download
              >
                <FaFilePdf className="mr-2 text-lg" />
                Call for Papers
              </a>
            </div>
            <h2 className="text-3xl font-bold mb-6 text-center">
              Proceedings By
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10 justify-items-center">
              <a
                href="https://www.springer.com/series/7899"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:scale-105"
              >
                <img
                  src="/images/springer.webp"
                  alt="springer"
                  className="h-40 bg-gray-200 object-contain rounded-lg shadow-lg p-2"
                />
              </a>
              <a
                href="https://www.springer.com/series/7899"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:scale-105"
              >
                <img
                  src="/images/ccis.webp"
                  alt="scopus"
                  className="h-40 bg-gray-200 object-contain rounded-lg shadow-lg p-2"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
