import Link from "next/link";
import { useRouter } from "next/router";

const UserList =({user, error})=>{
    useRouter();

    if (error) {
        return <h1 style={{ color: 'red' }}>User tidak ditemukan!</h1>;
    }

    return (
    <div>
        <h2><strong>Detail User</strong></h2>        
        <p>Nama: {user.name}</p>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <br />
        <h2><strong>Alamat</strong></h2>
        <p>Jalan: {user.address.street}, {user.address.suite}</p>
        <p>Kota: {user.address.city}</p>
        <p>Kode Pos: {user.address.zipcode}</p>
        <br />
        <h2><strong>Informasi Perusahaan</strong></h2>
        <p>Nama: {user.company.name}</p>
        <p>Motto: {user.company.catchPhrase}</p>
        <br />
        <h2><strong>Kontak</strong></h2>
        <p>Telepon: {user.phone}</p>
        <p>Website: <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>

        <p>-------------------------------</p>
        <Link href="/user">Kembali</Link>
    </div>
    )
}

export async function getServerSideProps(context) {
    const { slug } = context.params;

    // Contoh validasi slug, misalnya hanya angka diperbolehkan
    if (!/^\d+$/.test(slug)) {
        return {
            props: { error: "User tidak ditemukan" }, 
        };
    }

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${slug}`);
    const user = await res.json();

     // Jika user tidak ditemukan
     if (!res.ok) {
        return {
            props: { error: "User tidak ditemukan" },
        };
    }
    

    return {
        props: {
            user,
        },
    };
}

export default UserList;