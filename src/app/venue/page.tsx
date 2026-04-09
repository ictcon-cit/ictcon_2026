"use client";
import SecondHeader from "@/components/secondheader";
import { FaEnvelope } from "react-icons/fa";

export default function VenuePage() {
  return (
    <div className="relative">
      <div className="relative z-10">
        <SecondHeader title={"VENUE"} />

        <main className="w-full flex justify-center pb-16 px-4">
          <div className="w-full max-w-6xl mt-10 space-y-16">

            {/* ================= HOST INSTITUTE ================= */}
            <section className="bg-white rounded-2xl shadow-lg border p-6 md:p-10">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Address: National Forensic Sciences University Goa Campus
              </h2>

              <div className="w-20 h-1 bg-blue-500 mb-6 rounded-full"></div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Text */}
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  Located in the lush greenery of Ponda in South Goa, the transit campus of NFSU Goa was inaugurated on 14 October 2021 by the Hon’ble Union Home Minister of India. In a short time, it has evolved into a full-fledged academic institution offering specialized programs in Forensic Science and Cyber Security. Along with academics, the campus actively conducts training, conferences, and workshops to promote forensic best practices. With a vision to become a Centre of Excellence, NFSU Goa focuses on high-quality education, research, and overall student development, aiming to produce technologically skilled and ethically strong professionals.
                </p>

                {/* Map */}
                <div className="w-full h-64 md:h-72 rounded-xl overflow-hidden border">
                  <iframe
                    title="NIT Calicut Map"
                    className="w-full h-full"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d523.7819934578334!2d74.01301173776356!3d15.412295799688136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfbb145af949a9%3A0x1655ee05cab626a4!2sNational%20Forensic%20Sciences%20University!5e1!3m2!1sen!2sin!4v1775129264778!5m2!1sen!2sin"
                  ></iframe>
                </div>
              </div>
            </section>

            

            {/* ================= STAY IN PONDA ================= */}
            <section className="bg-white rounded-2xl shadow-lg border p-6 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
                Stay in Ponda, Goa <span className="text-red-600">(NEARBY HOTELS)</span>
              </h2>

              <ul className="list-disc pl-6 text-blue-700 space-y-2 font-medium">
                <li>Farmagudi Hill Retreat</li>
                <li>Hotel Royal Punjab</li>
                <li>Hotel Menino</li>
                <li>Farmagudi Residency</li>
                <li>OYO 1152 Hotel Sun Inn</li>
                <li>Rock Valley Goa</li>
                <li>Hotel Menino Executive</li>
                <li>Hotel Yashoda Deluxe</li>
                <li>The Enchanting Nest</li>
                <li>Ganesh Residency Hotel</li>
                <li>Marias House</li>
              </ul>

              {/* IMAGE PLACEHOLDER */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="h-40 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                  Image Placeholder
                </div>
                <div className="h-40 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                  Image Placeholder
                </div>
                <div className="h-40 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                  Image Placeholder
                </div>
              </div>
            </section>

            {/* ================= TOURIST ATTRACTIONS ================= */}
            <section className="bg-white rounded-2xl shadow-lg border p-6 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-6">
                Tourist Attractions in Goa
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Goa offers far more than its golden coastline: it is a remarkable blend of Indian tradition and centuries of Portuguese influence. Nestled on the western shore of India, this vibrant state invites you to explore lush forests, elegant baroque churches, spice-rich cuisine, colorful markets, and a relaxed coastal charm. From witnessing history at the UNESCO-listed Basilica of Bom Jesus — home to the sacred relics of St. Francis Xavier — to experiencing the calm of Palolem’s iconic “Silent Noise” gatherings or feeling the mist of the majestic Dudhsagar Falls, Goa promises a refreshing mix of culture, nature, and leisure. 

              </p>

              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                Beaches
              </h3>

              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li><b>Baga and Calangute:</b> Known for water sports.</li>
                <li><b>Palolem and Agonda:</b> Peaceful beaches,ideal for leisurely walks.</li>
                <li><b>Arambol:</b> Bohemian vibe.</li>
                <li><b>Anjuna:</b> Famous flea market and vibrant nightlife.</li>
              </ul>

              {/* IMAGE PLACEHOLDER GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                  Image Placeholder
                </div>
                <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                  Image Placeholder
                </div>
                <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                  Image Placeholder
                </div>
                <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                  Image Placeholder
                </div>
              </div>
            </section>

          </div>
        </main>
      </div>
    </div>
  );
}