import React, { useState } from 'react'

const Menu = () => {
    const [nav, setNav] = useState("refer");
    const handleNavClick = (section) => {
        setNav(section);
      };
    return (
        <div className="flex justify-center items-center ">
            <div className={` flex lg:flex-col mx-2 overflow-y-auto bg-blue-500/25 py-1 sm:py-2.5 rounded-xl border border-blue-500/25 `}>
              <nav className={`bg-transparent lg:text-base`}>
                <ul className={`lg:mx-3 flex flex-1 lg:flex-col`}>
                  <li>
                    <ul className="mx-4 gap-3 md:gap-8  flex font-semibold text-sm">
                      <a
                        className={`flex flex-col sm:flex-row rounded-md ${
                          nav === "refer" ? "bg-blue-600 text-white shadow-lg" : " text-blue-900"
                        } hover:bg-transparent hover:text-blue-900 py-1 gap- sm:gap-2 items-center border-2 border-transparent px-1.5  sm:px-4 hover:border-blue-600 transition duration-200 ease-in-out hover:shadow-lg text-xs sm:text-sm`}
                        href='#refer'
                        onClick={() => handleNavClick("refer")}

                      >
                        Refer
                      </a>
                      <a
                        className={`flex flex-col sm:flex-row rounded-md ${
                          nav === "benefits" ? "bg-blue-600 text-white shadow-lg" : " text-blue-900"
                        } hover:bg-transparent hover:text-blue-900 py-1 gap- sm:gap-2 items-center border-2 border-transparent px-1.5  sm:px-4 hover:border-blue-600 transition duration-200 ease-in-out hover:shadow-lg text-xs sm:text-sm`}
                         href='#benefits'
                        onClick={() => handleNavClick("benefits")}
                      >
                        Benefits
                      </a>
                      <a
                        className={`flex flex-col sm:flex-row rounded-md ${
                          nav === "faqs"
                            ? "bg-blue-600 text-white shadow-lg" : " text-blue-900"
                        } hover:bg-transparent hover:text-blue-900 py-1 gap- sm:gap-2 items-center border-2 border-transparent px-1.5  sm:px-4 hover:border-blue-600 transition duration-200 ease-in-out hover:shadow-lg text-xs sm:text-sm`}
                           href='#faqs'
                        onClick={() => handleNavClick("faqs")}
                      >
                        FAQs
                      </a>
                      <a
                        className={`flex rounded-md ${
                          nav === "support"
                            ? "bg-blue-600 text-white shadow-lg" : " text-blue-900"
                        } hover:bg-transparent hover:text-blue-900 py-1 gap- sm:gap-2 items-center border-2 border-transparent px-1.5  sm:px-4 hover:border-blue-600 transition duration-200 ease-in-out hover:shadow-lg text-xs sm:text-sm`}
                           href='#support'
                        onClick={() => handleNavClick("support")}
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
}

export default Menu
