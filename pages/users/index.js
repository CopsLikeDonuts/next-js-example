import Link from "next/link";
import MainLayout from "../../components/MainLayout";

export default function Users({users}) {
    return (
        <MainLayout keywords="Users page">
            <h1>Users list</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>
                            <a>{user.name}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </MainLayout>
    )
}

export async function getStaticProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    return {
        props: { users }, // will be passed to the page component as props
    }
}
