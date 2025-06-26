import React from "react";
import ContactInfo from "@/components/Content/ContactInfo.json";
import { IoIosCall } from "react-icons/io";
import { FaPhoneVolume, FaToilet } from "react-icons/fa";
import Image from "next/image";

const CallButtonMobile = () => {
  return (
    <div>
      {/* <div className=" visible fixed -bottom-2 z-10 flex  h-20 w-screen items-center justify-around bg-main md:hidden px-4">
        <FaToilet className="text-6xl text-white" />
        <div className="w-fit p-2 text-center">
          <a id="cta-id" href={`tel:${ContactInfo.tel}`}>
            <p className="flex justify-center items-center px-4 text-center text-sm font-bold text-white sm:text-xl gap-2">
              <FaPhoneVolume className="text-2xl" />
              Clean Porta Potties – Reserve Today, Delivered Fast
            </p>
            <p className="w-full text-2xl font-bold text-white  ">
              {" "}
              {ContactInfo.No}
            </p>
          </a>
        </div>
      </div> */}
      <div className="z-100 fixed  w-full md:block ">
        <div className="group fixed bottom-0 flex w-full items-center justify-center bg-main p-2 transition duration-200 ease-in group px-4">
          <div className="p-2 bg-main rounded-full -mt-10" >

          <Image src="https://ik.imagekit.io/serviceproviders/solid_white_lines_only.png?updatedAt=1749206222673" alt="" className="w-10 m-2 md:hidden "  height={1000} width={1000} />
          </div>
          <a id="cta-id" href={`tel:${ContactInfo.tel}`} className="w-fit text-center">
            <p className="flex gap-2 justify-around items-center px-4 text-center font-bold text-white text-base md:text-2xl py-2 capitalize group-hover:scale-110 transition">
              <FaPhoneVolume className="text-2xl md:text-3xl" />
              Call Us:- {ContactInfo.No}
            </p>
            {/* <p className="w-full text-2xl font-bold text-white">
              {" "}
              
            </p> */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallButtonMobile;