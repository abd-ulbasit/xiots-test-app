export default function PostsSideNav() {
    return <div className="rounded-lg p-4  h-80  shadow-md flex flex-col gap-2" >
        <div>
            <p className="text-center" >David John</p>
            <p className="text-center text-sm text-gray-500">john@example.com</p>
        </div>
        <hr className="mt-2" />
        <div className="w-full bg-yellow-400 rounded-md px-4 py-2 " >Posts</div>
    </div>
}