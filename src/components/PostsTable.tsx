import { usePostsStore } from '@/store/posts';
import { usePagination } from '@mantine/hooks';

const NO_OF_RECORDS_PER_PAGE = 5;

export default function PostsTable() {
    const posts = usePostsStore(({ posts }) => posts)
    const pagination = usePagination({
        initialPage: 1,
        total: posts.length / NO_OF_RECORDS_PER_PAGE,
    });
    //use pagination to show 10 records per page
    // and render the buttons on the bottom that show current page and total pages and when clicked should change the page no. and records on page
    return (
        <div>
            <table className="table-auto">
                <thead>
                    <tr>
                        <th className="px-4 py-2">ID</th>
                        <th className="px-4 py-2">Title</th>
                        <th className="px-4 py-2">Body</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.slice((pagination.active - 1) * (NO_OF_RECORDS_PER_PAGE), (pagination.active) * (NO_OF_RECORDS_PER_PAGE)).map((post) => (
                        <tr key={post.id}>
                            <td className="border px-4 py-2">{post.id}</td>
                            <td className="border px-4 py-2">{post.title}</td>
                            <td className="border px-4 py-2 line-clamp-1 ">{post.body}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-center">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={pagination.previous}
                >
                    Previous
                </button>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={pagination.next}
                >
                    Next
                </button>
            </div>
        </div>
    );



}