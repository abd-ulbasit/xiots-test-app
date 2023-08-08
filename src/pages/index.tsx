import Image from "next/image"
import { FaDollarSign } from "react-icons/fa"
export default function Home() {
  return (
    <main
    >
      <HeroSection></HeroSection>
      <Features></Features>
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