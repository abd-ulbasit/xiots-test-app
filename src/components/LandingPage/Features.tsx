
import Image from "next/image"
export default function Features() {
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