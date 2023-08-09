import Image from 'next/image';
export default function Deals() {
    return <div style={{ backgroundImage: `url("/images/dealsbg.png")` }} className="bg-cover relative bg-center" >

        <div className="absolute bg-slate-900 opacity-80 inset-0"></div>
        <div className="flex p-8 z-10 flex-col">
            {/** Deals Header */}
            <div className="flex flex-col gap-4 items-center content-center mx-auto mt-12 justify-center text-white z-10 w-full md:w-1/2 ">
                <h2 className='font-bold text-2xl' >
                    Deals on Booking
                </h2>
                <Image src="/images/badge.png" width={40} height={40} alt="dollar" className='md:block hidden' ></Image>
                <p className='text-sm text-gray-300 text-center' >
                    Lorem Ipsum passages, and more recently with desktop publishing software and applications like aldus pageMaker which has different variations.
                </p>

            </div>
            {/** Deals List */}
            <div className='flex flex-wrap  items-center content-center justify-center    p-16 gap-12 md:gap-4 md:justify-between md:content-between  '>
                {/** Deal 1 */}
                <div className='relative'>
                    <div className='relative flex items-center justify-center' >
                        <div className='w-60 bg-cover   h-60' >
                            <Image src="/images/london.png" width={450} height={450} alt="london"  ></Image>
                        </div>
                        <div className='rounded-full w-32 h-32 bg-black absolute top-14 right-14 opacity-50  self-center' >
                        </div>
                    </div>
                    {/*Price and Location*/}
                    <div className='absolute bg-gray-800 text-white flex flex-col gap-1 items-center justify-center bottom-0 -right-10 p-3 -rotate-6 bg-opacity-90 px-4' >
                        <p className='text-lg'>London</p>
                        <p className='text-sm text-gray-300' >Start from <span className='text-base font-bold text-white' >$190/day</span></p>
                    </div>
                </div>
                <div className='relative'>
                    <div className='relative flex items-center justify-center' >
                        <div className='w-60 bg-cover   h-60' >
                            <Image src="/images/marcin.png" width={450} height={450} alt="london"  ></Image>
                        </div>
                        <div className='rounded-full w-32 h-32 bg-black absolute top-14 right-14 opacity-50  self-center' >
                        </div>
                    </div>
                    {/*Price and Location*/}
                    <div className='absolute bg-gray-800 text-white flex flex-col gap-1 items-center justify-center bottom-0 -right-10 p-3 -rotate-6 bg-opacity-90 px-4' >
                        <p className='text-lg'>Marcin Nowak</p>
                        <p className='text-sm text-gray-300' >Start from <span className='text-base font-bold text-white' >$260/day</span></p>
                    </div>
                </div>
                <div className='relative'>
                    <div className='relative flex items-center justify-center' >
                        <div className='w-60 bg-cover   h-60' >
                            <Image src="/images/toronto.png" width={450} height={450} alt="london"  ></Image>
                        </div>
                        <div className='rounded-full w-32 h-32 bg-black absolute top-14 right-14 opacity-50  self-center' >
                        </div>
                    </div>
                    {/*Price and Location*/}
                    <div className='absolute bg-gray-800 text-white flex flex-col gap-1 items-center justify-center bottom-0 -right-10 p-3 -rotate-6 bg-opacity-90 px-4' >
                        <p className='text-lg'>Toronto</p>
                        <p className='text-sm text-gray-300' >Start from <span className='text-base font-bold text-white' >$350/day</span></p>
                    </div>
                </div>

            </div>

        </div>

    </div>
}