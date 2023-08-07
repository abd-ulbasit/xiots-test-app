import { usePostsStore } from '@/store/posts';
import { usePagination } from '@mantine/hooks';

const NO_OF_RECORDS_PER_PAGE = 5;

export default function PostsTable() {
    const [posts, deletePost, setPosts] = usePostsStore((state) => [state.posts, state.deletePost, state.setPosts])
    const no_of_pages = Math.ceil(posts.length / NO_OF_RECORDS_PER_PAGE)
    const pagination = usePagination({
        initialPage: 1,
        total: no_of_pages,
    });
    //use pagination to show 10 records per page
    // and render the buttons on the bottom that show current page and total pages and when clicked should change the page no. and records on page
    const handleDeletePost = (id: number) => {
        deletePost(id)
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
        }).then((res) => {
            if (res.ok) {
                //! Should I update the posts on client before the server says Ok or should I wait for the server
                console.log({ res });
                //make a fetch request to get new data
                //BTW this server does not delete the post so refetching is causing it to again appear in the post list. 
                //! SO for now, discarding this fetch
                // fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json().then((data: PostType[]) => setPosts(data))).catch((err) => {
                //     console.log({ err });

                // });
            }

        }).catch((err) => console.log(err)
        )
    }
    return (
        <div>
            <table className="table-auto w-4/5">
                <thead>
                    <tr className='text-start'>
                        <th className="text-start">ID</th>
                        <th className="text-start">Title</th>
                        <th className="text-start">Body</th>
                        <th className='text-start'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {posts
                        .slice((pagination.active - 1) * (NO_OF_RECORDS_PER_PAGE), (pagination.active) * (NO_OF_RECORDS_PER_PAGE))
                        .map((post) => {
                            // console.log(pagination.active)
                            return (

                                <tr key={post.id} className='border'>
                                    <td className="">{post.id}</td>
                                    <td className="overflow-hidden">
                                        <p className='line-clamp-1'>
                                            {post.title}
                                        </p>
                                    </td>
                                    <td className="overflow-hidden">
                                        <p className='line-clamp-1'>
                                            {post.body}
                                        </p>
                                    </td>
                                    <td className="flex">
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                            Edit
                                        </button>
                                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleDeletePost(post.id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>

                            )
                        })}
                </tbody>
            </table>
            <div className="flex justify-center">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={pagination.previous}
                    disabled={pagination.active == 1}
                >
                    Previous
                </button>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={pagination.next}
                    disabled={pagination.active == no_of_pages}
                >
                    Next
                </button>
            </div>
        </div>
    );



}