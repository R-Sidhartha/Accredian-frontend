import React from "react";
import footer from './Pics/footer.jpg'
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaYoutubeSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className=" lg:grid lg:grid-cols-5 bg-black ">
      <div className="relative block h-32 lg:col-span-2 lg:h-full">
        <img
          src={footer}
          alt=""
          className="absolute inset-0 h-full w-full object-fit"
        />
      </div>

      <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <p>
              <span className="text-xs uppercase tracking-wide text-blue-500">
                {" "}
                Call us{" "}
              </span>

              <Link
                to="/"
                className="block text-2xl font-medium text-white hover:opacity-75 sm:text-3xl"
              >
                0123456789
              </Link>
            </p>
            <ul className="mt-8 flex gap-6">
              <li>
                <Link
                  to="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white transition hover:opacity-75"
                >
                  <FaFacebook className="text-2xl"/>
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white transition hover:opacity-75"
                >
                  <BsInstagram className="text-2xl"/>
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white transition hover:opacity-75"
                >
                  <FaSquareXTwitter className="text-2xl"/>
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white transition hover:opacity-75"
                >
                  <IoLogoLinkedin className="text-2xl"/>
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white transition hover:opacity-75"
                >
                  <FaYoutubeSquare className="text-2xl"/>
                </Link>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <p className="font-medium text-blue-500">Programs</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    to="/"
                    className="text-white transition hover:opacity-75"
                  >
                    {" "}
                    Data Science & AI
                  </Link>
                </li>

                <li>
                  <Link
                    to="/"
                    className="text-white transition hover:opacity-75"
                  >
                    {" "}
                    Product Management
                  </Link>
                </li>

                <li>
                  <Link
                    to="/"
                    className="text-white transition hover:opacity-75"
                  >
                    {" "}
                    Business Analytics
                  </Link>
                </li>

                <li>
                  <Link
                    to="/"
                    className="text-white transition hover:opacity-75"
                  >
                    {" "}
                    Digital Transformation
                  </Link>
                </li>

                <li>
                  <Link
                    to="/"
                    className="text-white transition hover:opacity-75"
                  >
                    {" "}
                    Business Management
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-blue-500">Accredian</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    to="/"
                    className="text-white transition hover:opacity-75"
                  >
                    {" "}
                    About{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    to="/"
                    className="text-white transition hover:opacity-75"
                  >
                    {" "}
                    Carrer
                  </Link>
                </li>

                <li>
                  <Link
                    to="/"
                    className="text-white transition hover:opacity-75"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-white transition hover:opacity-75"
                  >
                    Admission Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-white transition hover:opacity-75"
                  >
                    Referral Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-12">
          <div className="sm:flex sm:items-center sm:justify-between">
            <ul className="flex flex-wrap gap-4 text-xs">
              <li>
                <Link
                  to="/"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  {" "}
                  Terms & Conditions{" "}
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  {" "}
                  Privacy Policy{" "}
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  {" "}
                  Cookies{" "}
                </Link>
              </li>
            </ul>

            <p className="mt-8 text-xs text-gray-500 sm:mt-0">
              &copy; 2024. Accredian. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
