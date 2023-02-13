import Link from 'next/link';

export default function FirstPost() {
    return (
        <>
        <img src="/images/profile.jpg" alt="Your Name" />
        <h1>First Post</h1>
        <h2>
            <Link href="/">Voltar Home</Link>
        </h2>
        </>
    )
}