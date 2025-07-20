import React from "react";
import eforexKurtAdams from "@/assets/ipc-eforex-kurt-adams-large.jpg";
import bankAcqusition from "@/assets/Case-Study-Bank-Acqusition.jpg";
import bankPapua from "@/assets/Case-Study-Bank-Papua.jpg";

const InsightsSection = () => (
  <section className="bg-white py-16">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-light text-ipc-navy mb-4">
        Latest Insights
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* <!-- Card 1 --> */}
        <div>
          <img
            src={bankPapua}
            alt="Bank Papua Enhances Trading"
            className="w-full h-auto rounded-md"
          />
          <p className="text-pink-600 font-medium mt-4">Case Study</p>
          <h3 className="text-xl font-semibold mt-1">
            Bank Papua Enhances Trading Communications with IPC Unigy Upgrade
          </h3>
          <p className="text-gray-600 text-sm mt-2">
            Bank Papua, a leading national investment bank, partnered with IPC
            Systems to successfully modernize its trading...
          </p>
          <a
            href="#"
            className="text-sm text-black font-medium underline mt-4 inline-block"
          >
            READ MORE
          </a>
        </div>

        {/* <!-- Card 2 --> */}
        <div>
          <img
            src={eforexKurtAdams}
            alt="IPC FX Trading"
            className="w-full h-auto rounded-md"
          />
          <p className="text-pink-600 font-medium mt-4">Q&A</p>
          <h3 className="text-xl font-semibold mt-1">
            IPC Systems: Facilitating smarter, faster and more efficient FX
            trading
          </h3>
          <p className="text-gray-600 text-sm mt-2">
            IPC Systems has more than 50 years of experience in delivering
            award-winning SaaS communication platforms and ultra-low...
          </p>
          <a
            href="#"
            className="text-sm text-black font-medium underline mt-4 inline-block"
          >
            READ MORE
          </a>
        </div>

        {/* <!-- Card 3 --> */}
        <div>
          <div className="relative">
            <img
              src={bankAcqusition}
              alt="Kurt Adams Interview"
              className="w-full h-auto rounded-md"
            />
            <span className="absolute top-2 right-2 bg-pink-600 text-white text-xs px-2 py-1 rounded-full">
              WATCH NOW
            </span>
          </div>
          <p className="text-pink-600 font-medium mt-4">Video</p>
          <h3 className="text-xl font-semibold mt-1">
            IPC’s CEO Kurt Adams on Innovation, Acquisition, & Development of
            ICE Voice
          </h3>
          <p className="text-gray-600 text-sm mt-2">
            In September 2024, ICE and IPC Systems partnered to launch ICE
            Voice, a powerful new tool for market participants...
          </p>
          <a
            href="#"
            className="text-sm text-black font-medium underline mt-4 inline-block"
          >
            READ MORE
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default InsightsSection;
