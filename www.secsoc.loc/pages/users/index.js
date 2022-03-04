export default function Index ({users}) {

    return (
        <ul>
            {users.map((user) =>
                <li key={user.id}>
                    {user.name}
                </li>
            )}
        </ul>
    );
}

export async function getStaticProps(context) {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    return {
        props: {users}
    }
}