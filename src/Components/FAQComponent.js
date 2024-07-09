import React, { useState } from "react";
import Button from "./UI/Button";

const FAQComponent = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-xl text-center font-bold mb-8">
        Frequently Asked <span className="text-blue-600">Questions</span>
      </h2>
      <div className="flex">
        <div className="w-1/4 flex flex-col gap-4">
          <Button title="Eligibility" type="button" />
          <Button title="How To Use?" type="button" />
          <Button title="Terms & Conditions" type="button" />
        </div>
        <div className="w-3/4 pl-6">
          <div>
            <button
              className="text-left w-full text-sm font-semibold text-blue-600"
              onClick={() => toggleFAQ(0)}
            >
              Do I need to have prior Product Management and Project Management
              experience to enroll in the program?
            </button>
            {openIndex === 0 && (
              <p className="mt-2 text-gray-700 text-sm">
                No, the program is designed to be inclusive of all levels of
                experience. All topics will be covered from the basics, making
                it suitable for individuals from any field of work.
              </p>
            )}
          </div>
          <div className="mt-4">
            <button
              className="text-left w-full text-sm font-semibold text-blue-600"
              onClick={() => toggleFAQ(1)}
            >
              What is the minimum system configuration required?
            </button>
            {openIndex === 1 && (
              <p className="mt-2 text-gray-700 text-sm">
                You need a computer with at least 4GB of RAM, 10GB of free disk
                space, and a stable internet connection.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;
