import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import { faFacebook } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <>
      <div className="bg-sky-600 py-5 px-7 center flex w-100vh border-emerald-50 h-3/6 md:justify-between sm: px-12 px-4 py-7 md:items-center">
        <div className=" text-stone-50 w-1/3	 block text-left py-4 px-12 md:mb-0 mb-6 lg: leading-normal md:w:2/5">
          <h5 className="flex md:mb-0 mb-6 lg: leading-normal md:w:2/5">
            <img
              src="/"
              srcset="/"
              alt="Enter logo"
              className="flex px-4 text-sm"
            />
            Aroma
          </h5>
          <p className="text-xs py-6">
            Aroma English Secondary School is the product of a deep research and
            plan to supplement the sociedt with an academic institution having
            the best culture for learning. Aroma has succeed in the fulfillment
            of its deep seated mission 'from p.g to P-G(Play Group to Post
            Graduate)
          </p>
          {/* <FontAwesomeIcon icon={faFacebook} /> */}
        </div>
        <div className=" text-stone-50 w-1/4	py-6 block text-center ">
          <p className="text-sm text-left">Where are we</p>
          <img className=" py-4 block" src="images/maps.jpg" alt="" srcset="" />
        </div>
        <div className=" text-stone-50 w-1/3	px-6 py-6 text-right  ">
          <p className="text-left text-sm">Ping Us at...</p>

          <ul className="text-xs py-4 text-left">
            <li className="py-2">
              <FontAwesomeIcon
                icon={faLocationArrow}
                style={{ color: "#a2431a" }}
                className="px-2"
              />
              Balmandir Road, Bharatpur-10, Chitwan
            </li>
            <li className="py-2">
              <FontAwesomeIcon
                icon={faPhone}
                style={{ color: "#a2431a" }}
                className="px-2"
              />
              tel: +977-056-595593, +977-056-5995593 (science block)
            </li>
            <li className="py-2">
              <FontAwesomeIcon
                icon={faPhone}
                style={{ color: "#a2431a" }}
                className="px-2"
              />
              tel: +977-056-595545 (Management Block)
            </li>
            <li className="py-2">
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ color: "#a2431a" }}
                className="px-2"
              />
              aromachitwan@gmail.com
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-teal-950 h-8">
        <p className="text-stone-300 justify text-center py-1 ">
          &copy; 2020 Copright Aroma English Higher Secondar School, Designed
          and Developed by mcs
        </p>
      </div>
    </>
  );
}

export default Footer;
