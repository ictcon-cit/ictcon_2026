"use client";
import { FaEnvelope, FaHandPointRight, FaFilePdf } from "react-icons/fa";
import HomeCara from "@/components/carousel";
import Countdown from "@/components/countdown";
import Card from "@/components/homecard";
import HorizontalScroll from "@/components/horizontalscroll";
import { useState } from "react";

import { HomeCardData } from "@/utils/homecards";
import AboutSection from "@/components/newui/aboutsection";
import HorizontalScrollA from "@/components/newui/horizontalscroll";

interface PopupProps {
  onClose: () => void;
  children: React.ReactNode;
}

function Popup({ onClose, children }: PopupProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 min-h-screen p-4">
      <div className="bg-white w-full max-w-4xl max-h-[90vh] p-4 sm:p-6 rounded-lg shadow-lg relative overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl sm:text-4xl z-10 bg-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

export default function Home() {
  const [showPopup1, setShowPopup1] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [showPopup3, setShowPopup3] = useState(false);

  const hall1Programs = [
    {
      name: "Felicitation and Inaugural Ceremony",
      time: "9:30 AM – 11:15 AM",
      link: "https://meet.google.com/iws-occj-jav",
      details: [
        {
          session:
            "Invited Guests and General Chairs: Mr. N. K. Barua, Prof. M. C. Govil (Director, NIT Sikkim), Prof. Petia Radeva (University of Barcelona, Spain), Prof. Biswajeet Pradhan (University of Technology Sydney, Australia)",
          paperIds: "",
          sessionChairs: "",
        },
      ],
    },
    {
      name: "Keynote Talk 1",
      time: "11:45 AM – 12:00 PM",
      link: "https://meet.google.com/iws-occj-jav",
      details: [
        {
          session:
            "Speaker: Prof. Manish Kumar (IIIT Allahabad)\nTitle - Data Analytics in Healthcare: Big Data Perspectives, Opportunities & Challenges",
          paperIds: "",
          sessionChairs: "",
        },
      ],
    },
    {
      name: "Workshop",
      time: "12:45 PM – 01:30 PM",
      link: "https://meet.google.com/iws-occj-jav",
      details: [
        {
          session:
            "Workshop Speaker: Mr. Pankaj Jadhav, ARK-TSI\nTitle - AR/VR Across Industries: Preparing Future-Ready Students Through Immersive Technologies",
          paperIds: "",
          sessionChairs: "",
        },
      ],
    },
    {
      name: "Invited Talk 1",
      time: "2:30 PM – 2:55 PM",
      link: "https://meet.google.com/iws-occj-jav",
      details: [
        {
          session:
            "Speaker: Dr. Deep Singh (Dr. B.R.Ambedkar University Delhi, New Delhi)\nTitle - Securing Visual Data: Current Advancements in Cryptography",
          paperIds: "",
          sessionChairs: "",
        },
      ],
    },
    {
      name: "Technical Session: Medical & Clinical Imaging (5 papers)",
      time: "03:00 PM – 04:15 PM",
      link: "https://meet.google.com/iws-occj-jav",
      details: [
        {
          session: "Session 1: Medical & Clinical Imaging",
          paperIds: "105, 34, 141, 124, 114",
          sessionChairs:
            "Session Chair: Dr. Pankaj Pratap Singh, CIT Kokrajhar\nSession Co-Chair: Dr. Deepak Gupta, MNNIT Allahabad",
        },
      ],
    },
  ];

  const hall2Programs = [
    {
      name: "Technical Session: Computer Vision - Detection & Segmentation (5 papers)",
      time: "03:00 PM – 04:15 PM",
      link: "https://meet.google.com/khi-srxw-imu",
      details: [
        {
          session: "Session 2: Computer Vision - Detection & Segmentation",
          paperIds: "4, 139, 28, 59, 102",
          sessionChairs:
            "Session Chair: Dr. Shitala Prasad, IIT Goa\nSession Co-Chair: Dr. Deep Gupta, NIT Nagpur",
        },
      ],
    },
  ];

  const hall3Programs = [
    {
      name: "Technical Session: Core AI & Generative Methods (4 papers)",
      time: "03:00 PM – 04:15 PM",
      link: "https://meet.google.com/ksp-bygr-aom",
      details: [
        {
          session: "Session 3: Core AI & Generative Methods",
          paperIds: "45, 51, 22, 27, 6",
          sessionChairs:
            "Session Chair: Dr. Piyush Kumar, NIT Patna\nSession Co-Chair: Dr. Kaushlendra Pandey, CIT Kokrajhar",
        },
      ],
    },
  ];

  return (
    <main className="flex min-h-screen flex-col text-gray-800 bg-gray-100">
      <div className="sm:mb-3">
        <HomeCara />
      </div>
      <div className="mb-3 px-4 sm:px-16">
        <HorizontalScroll />
      </div>
      <div className="mb-3 mx-4 sm:mx-16 px-5 py-3 bg-white rounded-md shadow-md">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Join the Conference
        </h2>
        <div className="flex items-center justify-center gap-5 sm:gap-8 flex-col sm:flex-row">
          <div className="flex flex-col">
            <button
              onClick={() => setShowPopup1(true)}
              className="text-white bg-blue-600 hover:bg-blue-800 font-bold py-2 px-20 rounded-lg"
            >
              HALL 1
            </button>
            <div className="text-sm text-slate-500 font-semibold text-center">
              (BKB Seminal Hall)
            </div>
          </div>
          <div className="flex flex-col">
            <button
              onClick={() => setShowPopup2(true)}
              className="text-white bg-green-600 hover:bg-green-800 font-bold py-2 px-20 rounded-lg"
            >
              HALL 2
            </button>
            <div className="text-sm text-slate-500 font-semibold text-center">
              (VCR)
            </div>
          </div>
          <div className="flex flex-col">
            <button
              onClick={() => setShowPopup3(true)}
              className="text-white bg-purple-600 hover:bg-purple-800 font-bold py-2 px-20 rounded-lg"
            >
              HALL 3
            </button>
            <div className="text-sm text-slate-500 font-semibold text-center">
              (STIHUB Conference Room)
            </div>
          </div>
        </div>
      </div>

      {showPopup1 && (
        <Popup onClose={() => setShowPopup1(false)}>
          <h2 className="text-2xl font-bold mb-4">
            Hall 1{" "}
            <span className="text-xl text-red-500">(BKB Seminal Hall)</span>
          </h2>
          <ul className="list-none pl-0">
            {hall1Programs.map((program, index) => (
              <li
                key={index}
                className="mb-4 p-4 border rounded-lg shadow-sm bg-gray-50 flex justify-between items-center hover:bg-gray-200 transition duration-500"
              >
                <div>
                  <p className="font-bold text-lg">{program.name}</p>
                  <p className="text-gray-600">{program.time}</p>
                  {program.details &&
                    program.details.map((detail, idx) => {
                      const isBoldKey = detail.session.includes(
                        "Invited Guests and General Chairs:"
                      );
                      let keyPart = "";
                      let valuePart = "";
                      if (isBoldKey) {
                        const parts = detail.session.split(": ");
                        keyPart = parts[0] + ": ";
                        valuePart = parts.slice(1).join(": ");
                      }
                      return (
                        <div key={idx} className="mt-2">
                          {isBoldKey ? (
                            <p className="text-gray-700">
                              <span className="font-bold">{keyPart}</span>
                              {valuePart}
                            </p>
                          ) : (
                            <p className="text-gray-700">{detail.session}</p>
                          )}
                          {detail.paperIds && (
                            <p className="text-gray-600">
                              Paper IDs: {detail.paperIds}
                            </p>
                          )}
                          {detail.sessionChairs && (
                            <div className="text-gray-600">
                              {detail.sessionChairs
                                .split("\n")
                                .map((line, i) => (
                                  <p key={i}>{line}</p>
                                ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                </div>
                <a
                  href={program.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-blue-600 hover:bg-blue-800 font-bold py-2 px-8 rounded-lg"
                >
                  Join
                </a>
              </li>
            ))}
          </ul>
        </Popup>
      )}
      {showPopup2 && (
        <Popup onClose={() => setShowPopup2(false)}>
          <h2 className="text-2xl font-bold mb-4">
            Hall 2 <span className="text-xl text-red-500">(VCR)</span>
          </h2>
          <ul className="list-none pl-0">
            {hall2Programs.map((program, index) => (
              <li
                key={index}
                className="mb-4 p-4 border rounded-lg shadow-sm bg-gray-50 flex justify-between items-center hover:bg-gray-200 transition duration-500"
              >
                <div>
                  <p className="font-bold text-lg">{program.name}</p>
                  <p className="text-gray-600">{program.time}</p>
                  {program.details &&
                    program.details.map((detail, idx) => {
                      const isBoldKey = detail.session.includes(
                        "Invited Guests and General Chairs:"
                      );
                      let keyPart = "";
                      let valuePart = "";
                      if (isBoldKey) {
                        const parts = detail.session.split(": ");
                        keyPart = parts[0] + ": ";
                        valuePart = parts.slice(1).join(": ");
                      }
                      return (
                        <div key={idx} className="mt-2">
                          {isBoldKey ? (
                            <p className="text-gray-700">
                              <span className="font-bold">{keyPart}</span>
                              {valuePart}
                            </p>
                          ) : (
                            <p className="text-gray-700">{detail.session}</p>
                          )}
                          {detail.paperIds && (
                            <p className="text-gray-600">
                              Paper IDs: {detail.paperIds}
                            </p>
                          )}
                          {detail.sessionChairs && (
                            <div className="text-gray-600">
                              {detail.sessionChairs
                                .split("\n")
                                .map((line, i) => (
                                  <p key={i}>{line}</p>
                                ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                </div>
                <a
                  href={program.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-green-600 hover:bg-green-800 font-bold py-2 px-8 rounded-lg"
                >
                  Join
                </a>
              </li>
            ))}
          </ul>
        </Popup>
      )}
      {showPopup3 && (
        <Popup onClose={() => setShowPopup3(false)}>
          <h2 className="text-2xl font-bold mb-4">
            Hall 3{" "}
            <span className="text-xl text-red-500">
              (STIHUB Conference Room)
            </span>
          </h2>
          <ul className="list-none pl-0">
            {hall3Programs.map((program, index) => (
              <li
                key={index}
                className="mb-4 p-4 border rounded-lg shadow-sm bg-gray-50 flex justify-between items-center hover:bg-gray-200 transition duration-500"
              >
                <div>
                  <p className="font-bold text-lg">{program.name}</p>
                  <p className="text-gray-600">{program.time}</p>
                  {program.details &&
                    program.details.map((detail, idx) => {
                      const isBoldKey = detail.session.includes(
                        "Invited Guests and General Chairs:"
                      );
                      let keyPart = "";
                      let valuePart = "";
                      if (isBoldKey) {
                        const parts = detail.session.split(": ");
                        keyPart = parts[0] + ": ";
                        valuePart = parts.slice(1).join(": ");
                      }
                      return (
                        <div key={idx} className="mt-2">
                          {isBoldKey ? (
                            <p className="text-gray-700">
                              <span className="font-bold">{keyPart}</span>
                              {valuePart}
                            </p>
                          ) : (
                            <p className="text-gray-700">{detail.session}</p>
                          )}
                          {detail.paperIds && (
                            <p className="text-gray-600">
                              Paper IDs: {detail.paperIds}
                            </p>
                          )}
                          {detail.sessionChairs && (
                            <div className="text-gray-600">
                              {detail.sessionChairs
                                .split("\n")
                                .map((line, i) => (
                                  <p key={i}>{line}</p>
                                ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                </div>
                <a
                  href={program.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-purple-600 hover:bg-purple-800 font-bold py-2 px-8 rounded-lg"
                >
                  Join
                </a>
              </li>
            ))}
          </ul>
        </Popup>
      )}
      <div className="mb-3 px-4 sm:px-16">
        <AboutSection />
      </div>
      {/* 
      <div className="flex flex-col-reverse sm:grid sm:grid-cols-3 sm:gap-5 grid-cols-1 gap-3 sm:px-16 px-5">
        {HomeCardData.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
            url={item.url}
          />
        ))}
        <div className="rounded-lg shadow-lg bg-white overflow-hidden">
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
            <div className="mb-6 text-center">
              <h3 className="text-2xl font-semibold mb-2">
                Last Date of Paper Submission
              </h3>
              <p className="font-bold text-gray-500 line-through">
                30th September, 2024
              </p>
              <p className="font-bold text-gray-500 line-through">
                10th October, 2024 (Extended)
              </p>
              <p className="font-bold text-gray-500 line-through">
                17th October, 2024 (Hard Deadline)
              </p>
              <a
                href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICTCon2024"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline flex items-center justify-center hover:text-blue-700 hover:underline"
              >
                <FaHandPointRight className="mr-2" />
                Submit your paper here
              </a>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold">Date of Conference</h3>
              <p className="font-semibold">(Hybrid mode)</p>
              <p className="text-lg font-bold text-red-600 mb-4">
                2nd-3rd December, 2024
              </p>
              <Countdown targetDate="2024-12-02T00:00:00" />
            </div>
          </div>
        </div>
      </div> */}
      {/* Our Speakers Section */}
      <div className="px-4 sm:px-16 py-3">
        <div className="shadow-sm bg-gradient-to-br from-blue-100 via-white to-blue-100 overflow-hidden rounded-lg">
          <h1 className="text-2xl sm:text-3xl font-bold text-center py-4 sm:py-5 bg-gradient-to-r from-blue-700 to-blue-400 text-white tracking-wide mb-4 rounded-t-md">
            ICTCon2025 Keynote Speakers
          </h1>
          <div className="flex flex-wrap justify-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8 ">
            {[
              {
                name: "Prof. Mahesh Chandra Govil",
                img: "/images/speakers/Prof. Mahesh Chandra Govil Director.jpg",
                title: "Director - NIT Sikkim",
              },
              {
                name: "Prof. Petia Radeva",

                img: "/images/speakers/newProf.jpg",
                title: "University of Barcelona, Spain",
              },

              {
                name: "Prof. Manish Kumar",
                img: "/images/speakers/Prof. Manish Kumar.jpg",
                title: "IIIT Allahabad, India",
              },
              {
                name: " Prof. Jonathan Chan",
                img: "/images/speakers/Prof. Jonathan Chan.jpg",
                title: "ETRO, Vrije Universiteit Brussel (VUB), Belgium",
              },
              {
                name: "Prof. Dr. G. Kulanthaivel",
                img: "/images/speakers/Proj Dr G.jpg",
                title: "NITTTR, Chennai, India",
              },
              {
                name: "Dr. Shitala Prasad",
                img: "/images/speakers/Dr. shitala Prasad.jpg",
                title: "Assistant Professor, IIT Goa",
              },
            ].map((speaker, idx) => (
              <div
                key={idx}
                className="rounded-xl shadow-lg bg-white text-black hover:shadow-2xl transition-all duration-300 w-64 md:w-72 h-[320px] flex flex-col items-center justify-star"
              >
                <img
                  src={speaker.img}
                  alt={speaker.name}
                  className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-full border-4 border-blue-200 mb-3 sm:mb-4 shadow-lg"
                />
                <div className="text-lg sm:text-xl font-bold text-blue-800 text-center mb-1">
                  {speaker.name}
                </div>
                <div className="text-sm sm:text-base text-gray-600 text-center">
                  {speaker.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Address Section */}
      <div className="px-4 sm:px-16 py-3 mb-2">
        <div className="relative rounded-2xl shadow-sm bg-gradient-to-br from-white via-blue-50 to-blue-100 overflow-hidden border border-blue-200 flex flex-col lg:flex-row items-stretch">
          <div className="flex-1 flex flex-col justify-center items-center p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-blue-100 to-white border-b lg:border-b-0 lg:border-r border-blue-200">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-800 text-center tracking-wider drop-shadow-lg mb-4">
              Address
            </h2>
            <p className="text-base sm:text-lg leading-relaxed mb-4 text-gray-700 text-center font-medium">
              <span className="block text-blue-900 text-xl sm:text-1.5xl mb-2 font-bold">
                Department of Computer Science & Engineering
              </span>
              <span className="block text-blue-900 text-xl sm:text-2xl mb-2 font-bold">
                Central Institute of Technology, Kokrajhar
              </span>
              Balagaon, PO: Kokrajhar, Dist: Kokrajhar, BTAD
              <br />
              Assam 783370
              <br />
              India
            </p>
            <a
              href="mailto:ictcon@cit.ac.in"
              className="inline-flex items-center gap-2 mt-4 px-4 sm:px-6 py-2 bg-blue-700 text-white font-semibold rounded-lg shadow hover:bg-blue-800 transition-colors text-base sm:text-lg underline decoration-2 decoration-blue-400"
            >
              <FaEnvelope className="text-lg sm:text-xl" />
              <span className="break-all sm:break-normal">
                ictcon@cit.ac.in
              </span>
            </a>
          </div>
          <div className="flex-1 w-full h-full p-4 sm:p-6 bg-blue-50 flex items-center justify-center">
            <div className="w-full h-64 sm:h-72 rounded-xl overflow-hidden border border-blue-100">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps?q=Central+Institute+of+Technology,+Kokrajhar&hl=es;z=14&output=embed"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="flex-1 w-full h-full p-4 sm:p-6 bg-blue-50 flex flex-col items-center justify-center">
            <div className="w-full h-64 sm:h-72 rounded-xl overflow-hidden border border-blue-100 bg-white shadow-md">
              <a
                href="https://link.springer.com/book/9783032102492"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <img
                  src="/SpringerAdd.jpg"
                  alt="springer"
                  className="w-full h-full object-contain bg-white hover:scale-105 transition-transform duration-300"
                />
              </a>
            </div>

            <p className="mt-3 text-2xl font-semibold text-gray-700 text-center">
              Previous Edition of ICTCon 2024
            </p>
          </div>
        </div>
      </div>
      {/* <div className="sm:px-16 px-5 py-3 bg-white sm:mx-16 mx-5 rounded-md shadow-md my-5">
        <h2 className="text-4xl font-bold mb-6 text-center">Sponsors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {["IndianOil.png", "doma.png", "stihub.jpg", "ntpc.jpg"].map(
            (sponsor, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={`/images/sponsors/${sponsor}`}
                  alt={`sponsor ${index + 1}`}
                  className={`h-44 object-fill ${
                    index === 1 ? "bg-slate-400" : ""
                  }`}
                />
              </div>
            )
          )}
        </div>
      </div> */}
      <div className="w-full py-4 sm:py-5 bg-gradient-to-br from-blue-300 via-blue-200/80 to-blue-300 flex flex-col items-center px-4">
        <h5 className="text-2xl sm:text-3xl font-extrabold text-center mb-6 sm:mb-8 text-blue-900 drop-shadow-lg tracking-wide">
          Our Sponsors
        </h5>
        <HorizontalScrollA />
      </div>
    </main>
  );
}
