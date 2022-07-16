import styles from '../../styles/user.module.scss'
import MainLayout from "../../components/MainLayout";

export default function User({user}) {

    return (
        <MainLayout keywords={user.name}>
            <div className={styles.user}>
                <h1>
                    User id {user.id}
                </h1>
                <div>{user.name}</div>
            </div>
        </MainLayout>
    )
}

export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()
    return {
        props: { user }, // will be passed to the page component as props
    }
}
