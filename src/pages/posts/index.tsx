import PostsTable from "@/components/PostsTable";
import React, { ReactNode } from "react";
import { NextPageWithLayout } from "../_app";
import PostsLayout from "@/components/PostsLayout";

const Index: NextPageWithLayout = () => {
    return (
        <PostsTable></PostsTable>
    );
}

Index.getLayout = function (page: ReactNode): ReactNode {

    return <div>
        <PostsLayout>
            {page}
        </PostsLayout>
    </div>
}



export default Index;
