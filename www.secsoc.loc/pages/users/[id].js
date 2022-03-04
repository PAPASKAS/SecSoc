import { useRouter } from 'next/router';
import { useSession, signIn, signOut } from "next-auth/react";
import styles from "../../styles/scss/users.show.module.scss";

const Show = () => {
    const router = useRouter();
    const {id} = router.query;
    const { data:session } = useSession();

    if (session) {
        return "auth"
    }

    return (
        <div className={styles.asd}>
            {id}
            <br/>
            <button onClick={() => signIn()}>Sign in</button>
        </div>
    )
}

export default Show;