import Link from "next/link";
import React from "react";

const Blog = ({ users }) => {
    return (
        <div>
            <h1>User Saya</h1>
            <p>--------------------------------------------</p>
            {users.map((user) => (
                <div key={user.id}>
                    <p>User ke {user.id}</p>                
                    <p>{user.name}</p>                
                    <p>{user.email}</p>
                    <Link href={`/user/${user.id}`}>Detail user (click here)</Link>
                    <p>---------------------------------------------</p>
                </div>
            ))}
        </div>
    );
};

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    return {
        props: {
            users,
        },
    };
}

export default Blog;