
import Image from "next/image"
import { SlBadge } from "react-icons/sl"
import { FaCar, FaPlay } from "react-icons/fa"
import { RiEmotionHappyLine } from "react-icons/ri"
import { BsArrowRightCircle } from "react-icons/bs"
import { RxAvatar } from "react-icons/rx"
export default function FeedBack() {
    return <div className="flex flex-col md:flex-row p-4">
        <div className="w-full md:w-3/5 p-2 md:p-8 flex flex-col   gap-2 " >
            <p className="capitalize">Like always. Like never before.</p>
            <span className="block bg-yellow-400 w-10 h-1" ></span>
            <h3 className="text-3xl font-bold tracking-wide">Bespoke Software & Digital Transformation.</h3>
            <p className="p-4 pl-0 font-light text-gray-700" >By automating processes and tasks, businesses can reduce costs and improve productivity.
                Additionally, custom software tailored to the specific needs of a business can give them a
                significant advantage over their competitors.</p>
            <p className="p-4 pl-0 font-light text-gray-700">Our software development agency has a team of experienced and skilled professionalswho can
                create custom software solutions for your business. We understand the unique requirements
                of each business and create tailor-made solutions that can help them achieve their goals.</p>
            <button className="bg-yellow-400 px-8 py-3 rounded-none text-white w-40" >Get Quote  <BsArrowRightCircle className="inline" ></BsArrowRightCircle></button>
            {/* Numbers */}
            <div className="flex p-4 justify-between md:justify-around flex-wrap items-start md:items-center " >
                <div className="flex flex-col items-center justify-center gap-2 w-1/2 md:w-1/3"  >
                    <div className="relative">
                        <div className="absolute px-2 border -top-1/4 left-1/2 rounded-md bg-white">500</div>
                        <div className="border p-4 rounded-full text-yellow-400 w-12 h-12 flex items-center justify-center"><RiEmotionHappyLine className="scale-150"></RiEmotionHappyLine></div>
                    </div>
                    <div className="flex flex-col gap-2" >
                        <p>Happy Customers</p>
                        <div className="w-12 h-1 bg-yellow-400 self-end" ></div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 w-1/2 md:w-1/3"  >
                    <div className="relative">
                        <div className="absolute px-2 border -top-1/4 left-1/2 rounded-md bg-white">500</div>
                        <div className="border p-4 rounded-full text-yellow-400 w-12 h-12 flex items-center justify-center"><FaCar className="scale-150"></FaCar></div>
                    </div>
                    <div className="flex flex-col gap-2" >
                        <p>Luxury Cars</p>
                        <div className="w-12 h-1 bg-yellow-400 self-end" ></div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-start md:justify-center gap-2 w-1/2 md:w-1/3 md:mt-0 mt-10"  >
                    <div className="relative">
                        <div className="absolute px-2 border -top-1/4 left-1/2 rounded-md bg-white">500</div>
                        <div className="border p-4 rounded-full text-yellow-400 w-12 h-12 flex items-center justify-center"><RxAvatar className="scale-150"></RxAvatar></div>
                    </div>
                    <div className="flex flex-col gap-2" >
                        <p>Expert Drivers</p>
                        <div className="w-12 h-1 bg-yellow-400 self-end" ></div>
                    </div>
                </div>
            </div>
        </div>
        {/* Div For Images */}
        <div className="md:w-2/5 w-full md:block hidden">
            <div className="relative">
                <Image src="/images/about-style-fimg.jpg" alt="numbes" className="rounded-full mx-auto" width={400} height={400}>
                </Image>
                <div className="absolute w-12 h-12 rounded-full bg-white text-yellow-400 top-1/2 right-1/2 flex
         items-center justify-center "><span className="scale-125"><FaPlay></FaPlay></span></div>
                <div className=" flex flex-col items-center justify-center absolute w-40 h-40 rounded-full bg-yellow-400 -bottom-16 right-1/4 border-4 text-white gap-2 -rotate-3">
                    <div className="scale-150" ><SlBadge></SlBadge></div>
                    <p className="px-4 uppercase font-bold text-center">Won Award In Year 2023</p>
                </div>
            </div>
        </div>
        <div className="w-full md:hidden flex items-center justify-center" >
            <Image src={"/images/lady.png"} width={400} height={400} alt="about" ></Image>
        </div>

    </div>
}