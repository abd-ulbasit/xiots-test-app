import Image from "next/image"
export default function Home() {
  return (
    <main
    >
      <HeroSection></HeroSection>

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