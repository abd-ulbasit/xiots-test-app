import { AiOutlineDoubleRight } from "react-icons/ai";

export default function PostHero() {
    return (
        <div style={{ backgroundImage: `url("/images/postsbanner.png")` }} className="bg-cover relative bg-center text-white" >

            <div className="absolute bg-slate-900 opacity-80 inset-0"></div>
            <div className="flex  z-10 flex-col items-center justify-center p-32 gap-2">
                <h1 className="uppercase text-5xl font-bold z-10" >Posts</h1>
                <p className="z-10 text-lg">Home <AiOutlineDoubleRight className="inline"></AiOutlineDoubleRight> Post</p>
            </div>
        </div>
    )
}