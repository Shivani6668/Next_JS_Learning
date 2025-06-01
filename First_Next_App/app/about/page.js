import Link from "next/link";

export default function About() {
  return (
   <>
   <h1>Welcome to my about page</h1>
   <Link href="/">Home</Link>
   <Link href="/services">Services</Link>
   </>
  );
}
