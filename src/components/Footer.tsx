import { FaFacebookF, FaHome, FaInstagram, FaLinkedinIn, FaPhoneSquare, FaRegCopyright, FaTwitter, } from "react-icons/fa";
import { AiOutlineFolder } from "react-icons/ai";
import { RiMailOpenLine } from "react-icons/ri";
import { ImEarth } from "react-icons/im"

export default function Footer() {
    return <>
        <div className="flex bg-slate-800 p-4  text-white flex-col md:flex-row gap-8 pb-16" >


            <div className="md:w-1/3 w-full p-2 md:p-12 flex flex-col gap-6 ">
                <h3 className="text-xl">
                    Logo
                </h3>
                <p className="text-sm text-gray-400">
                    Search for will uncover many web sites variables onto of passages of lorem ipsum available but the majority the words all predefined humour to met chunks recently with desktop.
                </p>
                <div className="flex gap-2 text-gray-400 ">
                    <span className="border p-2 ">
                        <FaFacebookF ></FaFacebookF>
                    </span>
                    <span className="border p-2 " >
                        <FaTwitter ></FaTwitter>
                    </span>
                    <span className="border p-2 " >
                        <FaLinkedinIn ></FaLinkedinIn>
                    </span>
                    <span className="border p-2" >
                        <FaInstagram ></FaInstagram>
                    </span>
                </div>
            </div>
            {/** Quick Links */}
            <div className="md:w-1/3 w-full p-2 md:p-12 " >
                <h3 className="text-xl pb-4" >Quick Links</h3>
                <div className="flex flex-col gap-4 text-gray-400" >
                    <div className="flex gap-2 items-center" >
                        <AiOutlineFolder></AiOutlineFolder>
                        <p>Home</p>
                    </div>
                    <div className="flex gap-2 items-center" >
                        <AiOutlineFolder></AiOutlineFolder>
                        <p>About Us</p>
                    </div>
                    <div className="flex gap-2 items-center" >
                        <AiOutlineFolder></AiOutlineFolder>
                        <p>Services</p>
                    </div>
                    <div className="flex gap-2 items-center" >
                        <AiOutlineFolder></AiOutlineFolder>
                        <p>Dive With Us</p>
                    </div>
                    <div className="flex gap-2 items-center" >
                        <AiOutlineFolder></AiOutlineFolder>
                        <p>Contact</p>
                    </div>
                </div>
            </div>
            {/** Contact Info */}
            <div className="md:w-1/3 w-full p-2 md:p-12 " >
                <h3 className="text-xl pb-4" >Contact Info</h3>
                <div className="flex flex-col gap-6 text-gray-400" >
                    <div className="flex gap-2 items-center" >
                        <FaHome></FaHome>
                        <p>10A, San Andreno, USA</p>
                    </div>
                    <div className="flex gap-2 items-center" >
                        <RiMailOpenLine></RiMailOpenLine>
                        <p>example@booking.com</p>
                    </div>
                    <div className="flex gap-2 items-center" >
                        <FaPhoneSquare></FaPhoneSquare>
                        <p>+1-333-444-555</p>
                    </div>
                    <div className="flex gap-2 items-center" >
                        <ImEarth></ImEarth>
                        <p>www.example.com</p>
                    </div>
                </div>
            </div>

        </div>
        <div className="bg-slate-900 p-6 px-12 text-slate-400 hidden md:block" >© Copyrights 2023 Logo. All Rights Reserved</div>
        <div className="bg-slate-900 p-6 text-slate-400 md:hidden">Copyright 2023 | Logo | All Rights Reserved</div>
    </>
}