import Image from "next/image"
import { SlBadge } from "react-icons/sl"
import { FaDollarSign, FaPlay } from "react-icons/fa"
import { RiEmotionHappyLine } from "react-icons/ri"
import { BsArrowRightCircle } from "react-icons/bs"
export default function Home() {
  return (
    <main
    >
      <HeroSection></HeroSection>
      <Features></Features>
      <FeedBack></FeedBack>
    </main>
  )
}



function HeroSection() {
  return (
    <div className="flex  flex-col items-center justify-center relative  overflow-x-hidden">
      <div className="min-h-screen flex items-center justify-center">

        <Image
          className="h-[130vh] md:h-screen"
          src="/images/landing.png"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute bg-black opacity-70 inset-0"></div>
        <div className="z-10 text-white flex  mx-auto md:px-16 items-center">
          <div className="self-center md:block hidden ">
            <p>Free changes for life</p>
            <h1 className="text-5xl font-semibold mb-4">Hand-Made Website For Your Bussiness</h1>
            <button>BookCall</button>
          </div>
          <div className="w-full md:w-auto items-center " >
            <Image src="/images/hero.svg" className="scale-125 sm:scale-105" alt="hero" width={900} height={900} priority  ></Image>
          </div>
        </div>
        <div className="absolute top-[100vh] w-full"></div>
      </div>
      <div className="z-10 md:hidden text-white p-4 mt-10 " >
        <p>From Sedans To Coach Buses</p>
        <h2 className="text-2xl  font-bold capitalize" >Easy Airport Transfers to and from your Accomodations</h2>
      </div>
    </div>
  )
}
function Features() {
  return <div className="gird grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-2 md:p-12 gap-4" >
    <div className="inline-flex w-full sm:w-1/2 lg:w-1/4 sm:p-2 items-center gap-4 mx-auto self-center p-6" >
      <div className="text-yellow-400 scale-150"><Image src="/images/dollar-sign.svg" width={40} height={40} alt="dollar" ></Image> </div>
      <div>
        <div className="bold">Best Price Guaranteed</div>
        <div className="text-sm text-gray-800">A more recently with desktop softy like aldus page maker.</div>
      </div>
    </div>
    <div className="inline-flex w-full sm:w-1/2 lg:w-1/4 sm:p-2 items-center gap-4 mx-auto self-center p-6 " >
      <div className="text-yellow-400 scale-150"><Image src="/images/headphones.svg" width={40} height={40} alt="dollar" ></Image> </div>
      <div>
        <div className="bold">24/7 Customer Care</div>
        <div className="text-sm text-gray-800">A more recently with desktop softy like aldus page maker.</div>
      </div>
    </div>
    <div className="inline-flex w-full sm:w-1/2 lg:w-1/4 sm:p-2 items-center gap-4 mx-auto self-center p-6 " >
      <div className="text-yellow-400 scale-150"><Image src="/images/home.svg" width={40} height={40} alt="dollar" ></Image> </div>
      <div>
        <div className="bold">Home Pickups</div>
        <div className="text-sm text-gray-800">A more recently with desktop softy like aldus page maker.</div>
      </div>
    </div>
    <div className="inline-flex w-full sm:w-1/2 lg:w-1/4 sm:p-2 items-center gap-4 mx-auto self-center p-6 " >
      <div className="text-yellow-400 scale-150"><Image src="/images/calendar.svg" width={40} height={40} alt="dollar" ></Image> </div>
      <div>
        <div className="bold">Easy Bookings</div>
        <div className="text-sm text-gray-800">A more recently with desktop softy like aldus page maker.</div>
      </div>
    </div>
  </div>
}
function FeedBack() {
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
            <div className="border p-4 rounded-full text-yellow-400 w-12 h-12 flex items-center justify-center"><RiEmotionHappyLine className="scale-150"></RiEmotionHappyLine></div>
          </div>
          <div className="flex flex-col gap-2" >
            <p>Happy Customers</p>
            <div className="w-12 h-1 bg-yellow-400 self-end" ></div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start md:justify-center gap-2 w-1/2 md:w-1/3 md:mt-0 mt-10"  >
          <div className="relative">
            <div className="absolute px-2 border -top-1/4 left-1/2 rounded-md bg-white">500</div>
            <div className="border p-4 rounded-full text-yellow-400 w-12 h-12 flex items-center justify-center"><RiEmotionHappyLine className="scale-150"></RiEmotionHappyLine></div>
          </div>
          <div className="flex flex-col gap-2" >
            <p>Happy Customers</p>
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