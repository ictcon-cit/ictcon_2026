import { useState } from "react";
import { FaFilePdf, FaHandPointRight } from "react-icons/fa6";

// All possible about section contents
const aboutContents = {
  cit: {
    title: "ABOUT CIT KOKRAJHAR",
    image: "/images/cit.png",
    imageAlt: "CIT Kokrajhar Logo",
    description: `Central Institute of Technology (CIT), Kokrajhar is situated in
      Kokrajhar District of Bodoland Territorial Region (BTR) in Assam.
      CIT has been established for the basic objective of fulfilling the
      aspirations of the Bodo People relating to their cultural identity,
      language, education and overall economic development of the region
      and to impart Bodo youths with requisite technological and
      vocational training to produce the required manpower to give the
      impetus to economic growth of this area and to integrate the Bodo
      People into the mainstream of Technical and Vocational Education. It
      is a Centrally Funded Institute under the Ministry of Human Resource
      Development, Government of India.The Institute was established on
      the 19th of December 2006.`,
  },
  conference: {
    title: "ABOUT THE CONFERENCE",
    image: "/images/icons/new_ictcon.jpg",
    imageAlt: "ICTCon Conference Banner",
    description: `The 3rd International Intelligent Computing and Technology Conference (ICTCon 2025) being organized by Central Institute of Technology Kokrajhar during 2nd-3rd December, 2025. The aim of the conference ICTCon-2025 is to provide a platform that brings together academicians, scholars, engineers, industry people, and students to present their original work and exchange their ideas, experiences, tools, and techniques and applications in various domains of computing and technologies.`,
  },
  btr: {
    title: "ABOUT BTR, ASSAM",
    image: "/images/gate2.jpg",
    imageAlt: "Bodoland Territorial Region",
    description: `Bodoland Territorial Region, is an autonomous region in Assam, Northeast India. It made up of four districts on the north bank of the Brahmaputra river, by the foothills of Bhutan and Arunachal Pradesh. It is administered by an elected body known as the Bodoland Territorial Council which came into existence under the terms of a peace agreement signed in February 2003 and its autonomy was further extended by an agreement signed in 27th of January 2020. The region covers an area of over nine thousand square kilometres and is predominantly inhabited by the Bodo people and other indigenous communities of Assam.`,
  },
  iitgoa: {
    title: "ABOUT IIT GOA",
    image: "/images/iit_goa.jpg",
    imageAlt: "IIT Goa Logo",
    description: `Indian Institute of Technology (IIT) Goa is an Institution of National Importance (INI) created by an Act of Parliament of India. IIT Goa is located in Farmagudi, Ponda in the State of Goa, it is focused on higher education and research in different engineering disciplines. It accepts students from all across the country and the world for its various degree programs. IIT Goa offers various B.Tech. programs of 4 years duration and postgraduate programmes as M.Tech of 2 years and PhD. degree in various disciplines. The High Performance Computing Nodal Center (HPC-NC) at the Indian Institute of Technology Goa (IIT Goa) is established in 2020 under the National Supercomputing Mission (NSM) of India.`,
  },
};

type AboutSectionKey = keyof typeof aboutContents;

export default function AboutSection() {
  const [currentSection, setCurrentSection] =
    useState<AboutSectionKey>("conference");
  const aboutContent = aboutContents[currentSection];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
        <div className="flex flex-col flex-1 lg:flex-[4] bg-white overflow-hidden shadow-sm rounded-lg">
          {/* Section tab indicator inside the content container */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 bg-blue-600 py-3 sm:py-4 rounded-t-lg mb-2">
            {Object.entries(aboutContents).map(([key, value]) => (
              <button
                key={key}
                onClick={() => setCurrentSection(key as AboutSectionKey)}
                className={`px-3 sm:px-5 py-2 rounded-lg font-bold transition-colors duration-200 focus:outline-none tracking-wide text-sm sm:text-base w-full sm:w-auto
                  ${
                    currentSection === key
                      ? "bg-white text-blue-600 shadow border-2 border-blue-600 scale-105"
                      : "bg-blue-600 text-white hover:bg-blue-800 border-2 border-transparent"
                  }`}
                style={{ minWidth: 0 }}
              >
                <span className="hidden sm:inline">{value.title}</span>
                <span className="sm:hidden">
                  {key === "cit"
                    ? "CIT"
                    : key === "conference"
                    ? "CONFERENCE"
                    : key === "btr"
                    ? "BTR"
                    : key === "iitgoa"
                    ? "IIT GOA"
                    : key}
                </span>
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-2 items-center justify-start text-center text-lg sm:text-xl text-black px-3 sm:px-5">
            <img
              src={aboutContent.image}
              className={
                currentSection === "cit"
                  ? "w-32 sm:w-48 object-fill"
                  : currentSection === "iitgoa"
                  ? "max-h-48 sm:max-h-64 w-auto object-contain mx-auto"
                  : currentSection === "conference"
                  ? "object-cover w-full max-h-56 sm:max-h-72 lg:max-h-80 mx-auto"
                  : "object-cover h-48 sm:h-64 lg:h-72 w-full"
              }
              style={
                currentSection === "conference"
                  ? { objectFit: "cover" }
                  : undefined
              }
              alt={aboutContent.imageAlt}
            />
            <p className="text-left text-sm sm:text-base lg:text-lg text-justify-start leading-relaxed mb-2 px-2 sm:px-0">
              {aboutContent.description}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-[40%] shadow-lg bg-white overflow-hidden rounded-lg">
          <div className="p-3 sm:p-5">
            <div className="text-center w-full mb-4">
              <a
                href="/CFP 2025 ICTCon.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-blue-600 hover:bg-blue-800 font-bold py-3 sm:py-4 px-3 sm:px-4 rounded-lg inline-flex items-center justify-center shadow-sm transition duration-300 ease-in-out transform hover:scale-105 w-full uppercase text-sm sm:text-base"
                download
              >
                <FaFilePdf className="mr-2 text-base sm:text-lg" />
                Call for Papers
              </a>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">
              Proceedings By
            </h2>
            <div className="flex justify-center mb-6 sm:mb-10">
              <a
                href="https://www.springer.com/series/7899"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:scale-105"
              >
                <img
                  src="/images/springer.webp"
                  alt="springer"
                  className="h-28 sm:h-32 lg:h-40 bg-gray-200 object-contain rounded-lg shadow-lg p-2"
                />
              </a>
            </div>
            <div className="mb-4 sm:mb-6 text-center">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                Last Date of Paper Submission
              </h3>
              <p className="font-bold text-base sm:text-lg text-red-600 mb-1 sm:mb-2">
                <span className="line-through">15th September, 2025</span>
              </p>
              <p className="font-bold text-base sm:text-lg text-red-600 mb-1 sm:mb-2">
                <span className="line-through">30th September, 2025 (Extended)</span>
              </p>
              <p className="font-bold text-base sm:text-lg text-green-700 mb-3 sm:mb-4">
                12th October, 2025 <span className="text-xs">(Hard Deadline)</span>
              </p>
              <a
                href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICTCon2025"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline flex items-center justify-center hover:text-blue-700 hover:underline text-sm sm:text-base"
              >
                <FaHandPointRight className="mr-2" />
                Submit your paper here
              </a>
            </div>
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-semibold">
                Date of Conference
              </h3>
              <p className="font-semibold text-sm sm:text-base">
                (Hybrid mode)
              </p>
              <p className="text-base sm:text-lg font-bold text-red-600 mb-4">
                2nd-3rd December, 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
