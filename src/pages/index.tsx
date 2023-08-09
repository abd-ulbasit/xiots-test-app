import Image from "next/image"
import { SlBadge } from "react-icons/sl"
import { FaDollarSign, FaPlay } from "react-icons/fa"
import { RiEmotionHappyLine } from "react-icons/ri"
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
    <div className="w-3/5" >
      <p>Like always. Like never before.</p>
      <span className="block bg-yellow-400 w-8 h-1" ></span>
      <h3 className="text-2xl">Bespoke Software & Digital Transformation.</h3>
      <p>By automating processes and tasks, businesses can reduce costs and improve productivity.
        Additionally, custom software tailored to the specific needs of a business can give them a
        significant advantage over their competitors.</p>
      <p>Our software development agency has a team of experienced and skilled professionalswho can
        create custom software solutions for your business. We understand the unique requirements
        of each business and create tailor-made solutions that can help them achieve their goals.</p>
      <button className="bg-yellow-400 px-10 py-2 rounded-none text-white" >Get Quote</button>
      {/* Numbers */}
      <div className="flex" >
        <div className="flex"  >
          <div className="relative">
            <div className="absolute px-2 border ">500</div>
            <div className="border p-4 rounded-full text-yellow-400"><RiEmotionHappyLine></RiEmotionHappyLine></div>

          </div>
          <div></div>

        </div>
      </div>
    </div>
    {/* Div For Images */}
    <div className="w-2/5">
      <div className="relative">
        <Image src="/images/about-style-fimg.jpg" alt="numbes" className="rounded-full" width={400} height={400}>
        </Image>
        <div className="absolute w-12 h-12 rounded-full bg-white text-yellow-400 top-1/2 right-1/2 flex
         items-center justify-center "><span className="scale-125"><FaPlay></FaPlay></span></div>
        <div className="absolute w-40 h-40 rounded-full bg-yellow-400 -bottom-16 right-1/4 border-4 text-white">
          <div><SlBadge></SlBadge></div>
          <p>Won Award In Year 2023</p>
        </div>
      </div>
    </div>

  </div>
}