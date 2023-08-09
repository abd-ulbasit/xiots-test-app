import Image from "next/image"
export default function Services() {
    return (
        <div className="pt-10">
            {/* Services Headings*/}
            <div className="flex items-center flex-col p-4 gap-6 md:w-1/2 mx-auto w-full" >
                <h2 className="text-3xl " >Our Services</h2>

                <Image src="/images/badge.png" width={40} height={40} alt="dollar" className='md:block hidden self-center' ></Image>
                <p className="text-center">Lorem Ipsum passages, and more recently with desktop publishing software like aldus pageMaker including versions.</p>
            </div>
            {/** Services */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4 sm:px-10 md:px-6 md:w-11/12 mx-auto" >
                <div className=" m-2 flex flex-col border" >
                    <div className="w-full bg-zinc-100 p-3" >
                        <Image src="/images/cocktail.png" className=" mx-auto" width={50} height={50} alt="cocktail" />
                    </div>

                    <div className="flex flex-col items-center text-center p-10  gap-2">
                        <h3>
                            Resturants
                        </h3>
                        <p className="text-xs text-gray-500" >A more recently with desktop softy like aldus page maker.</p>
                    </div>

                </div>
                <div className=" m-2 flex flex-col border" >
                    <div className="w-full bg-zinc-100 p-3" >
                        <Image src="/images/plane.png" className=" mx-auto" width={50} height={50} alt="cocktail" />
                    </div>

                    <div className="flex flex-col items-center text-center p-10  gap-2">
                        <h3>
                            Airports
                        </h3>
                        <p className="text-xs text-gray-500" >A more recently with desktop softy like aldus page maker.</p>
                    </div>

                </div>
                <div className=" m-2 flex flex-col border" >
                    <div className="w-full bg-zinc-100 p-3" >
                        <Image src="/images/hospital.png" className=" mx-auto" width={50} height={50} alt="Hospitals" />
                    </div>

                    <div className="flex flex-col items-center text-center p-10  gap-2">
                        <h3>
                            Hospitals
                        </h3>
                        <p className="text-xs text-gray-500" >A more recently with desktop softy like aldus page maker.</p>
                    </div>

                </div>
                <div className=" m-2 flex flex-col border" >
                    <div className="w-full bg-zinc-100 p-3" >
                        <Image src="/images/trees.png" className=" mx-auto" width={50} height={50} alt="beaches" />
                    </div>

                    <div className="flex flex-col items-center text-center p-10  gap-2">
                        <h3>
                            Beaches
                        </h3>
                        <p className="text-xs text-gray-500" >A more recently with desktop softy like aldus page maker.</p>
                    </div>

                </div>
                <div className=" m-2 flex flex-col border" >
                    <div className="w-full bg-zinc-100 p-3" >
                        <Image src="/images/wallet.png" className=" mx-auto" width={50} height={50} alt="cocktail" />
                    </div>

                    <div className="flex flex-col items-center text-center p-10  gap-2">
                        <h3>
                            Shopping Malls
                        </h3>
                        <p className="text-xs text-gray-500" >A more recently with desktop softy like aldus page maker.</p>
                    </div>

                </div>
                <div className=" m-2 flex flex-col border" >
                    <div className="w-full bg-zinc-100 p-3" >
                        <Image src="/images/camera.png" className=" mx-auto" width={50} height={50} alt="cocktail" />
                    </div>

                    <div className="flex flex-col items-center text-center p-10  gap-2">
                        <h3>
                            Wedding Parties
                        </h3>
                        <p className="text-xs text-gray-500" >A more recently with desktop softy like aldus page maker.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}