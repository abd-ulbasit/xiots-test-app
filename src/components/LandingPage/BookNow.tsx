import { BsArrowRightCircle } from "react-icons/bs";

export default function BookNow() {
    return (

        <div style={{ backgroundImage: `url("/images/booknow.png")` }} className="bg-cover relative bg-center" >

            <div className="absolute bg-slate-900 opacity-80 inset-0"></div>
            <div className="flex p-6 md:p-12 z-10 flex-col md:flex-row text-white justify-between items-center gap-6">
                <h3 className="text-center text-3xl  z-10">
                    Incredible Destinations at Incredible Deals
                </h3>
                <button className="bg-yellow-400 px-8 py-3 rounded-none text-black w-40 z-10 flex items-center gap-1"> BookNow
                    <BsArrowRightCircle className="inline"></BsArrowRightCircle></button>
            </div>
        </div>
    )

}