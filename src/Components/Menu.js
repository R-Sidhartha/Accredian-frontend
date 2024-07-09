import React, { useState } from "react";

const Menu = () => {
  const [active, setactive] = useState("#refer");
  // Function to handle link clicks
  const handleLinkClick = (sectionId) => {
    setactive(sectionId);

    // Scroll to the corresponding section when a link is clicked
    const sectionElement =
      sectionId === "#refer"
        ? document.body
        : document.querySelector(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex justify-center items-center ">
      <div
        className={` flex lg:flex-col mx-2 overflow-y-auto bg-blue-500/25 py-1 sm:py-2.5 rounded-xl border border-blue-500/25 `}
      >
        <nav className={`bg-transparent lg:text-base`}>
          <ul className={`lg:mx-3 flex flex-1 lg:flex-col`}>
            <li>
              <ul className="mx-4 gap-3 md:gap-8  flex font-semibold text-sm">
                <a
                  className={`flex flex-col sm:flex-row rounded-md ${
                    active === "#refer"
                      ? "bg-blue-600 text-white shadow-lg"
                      : " text-blue-900"
                  } hover:bg-transparent hover:text-blue-900 py-1 gap- sm:gap-2 items-center border-2 border-transparent px-1.5  sm:px-4 hover:border-blue-600 transition duration-200 ease-in-out hover:shadow-lg text-xs sm:text-sm`}
                  href="#refer"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("#refer");
                  }}
                >
                  Refer
                </a>
                <a
                  className={`flex flex-col sm:flex-row rounded-md ${
                    active === "#benefits"
                      ? "bg-blue-600 text-white shadow-lg"
                      : " text-blue-900"
                  } hover:bg-transparent hover:text-blue-900 py-1 gap- sm:gap-2 items-center border-2 border-transparent px-1.5  sm:px-4 hover:border-blue-600 transition duration-200 ease-in-out hover:shadow-lg text-xs sm:text-sm`}
                  href="#benefits"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("#benefits");
                  }}
                >
                  Benefits
                </a>
                <a
                  className={`flex flex-col sm:flex-row rounded-md ${
                    active === "#faqs"
                      ? "bg-blue-600 text-white shadow-lg"
                      : " text-blue-900"
                  } hover:bg-transparent hover:text-blue-900 py-1 gap- sm:gap-2 items-center border-2 border-transparent px-1.5  sm:px-4 hover:border-blue-600 transition duration-200 ease-in-out hover:shadow-lg text-xs sm:text-sm`}
                  href="#faqs"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("#faqs");
                  }}
                >
                  FAQs
                </a>
                <a
                  className={`flex rounded-md ${
                    active === "#support"
                      ? "bg-blue-600 text-white shadow-lg"
                      : " text-blue-900"
                  } hover:bg-transparent hover:text-blue-900 py-1 gap- sm:gap-2 items-center border-2 border-transparent px-1.5  sm:px-4 hover:border-blue-600 transition duration-200 ease-in-out hover:shadow-lg text-xs sm:text-sm`}
                  href="#support"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("#support");
                  }}
                >
                  Support
                </a>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
