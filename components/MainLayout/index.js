import A from "../A";
import Head from "next/head";

export default function MainLayout({children, keywords}) {
    return (
        <>
            <Head>
                <meta keywords={"nextjs, javascript" + keywords}/>
                <title>Main page</title>
            </Head>
            <div className="navbar">
                <A path='/' text="Main page"/>
                <A path='/users' text="Users"/>
            </div>
            <div>{children}</div>
            <style>
                {`
                    .navbar {
                        background-color: orange;
                        padding: 15px;
                    }
                    
                `}
            </style>
        </>
    )
}
