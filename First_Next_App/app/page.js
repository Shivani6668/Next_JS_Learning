import Link from "next/link";

export default function Home(props) {
  return (
   <>
   {/* <h1>Welcome to my home</h1>
   <Link href="/about">about</Link>
   <Link href="/services"></Link> */}
   
   
   {/* Blog dynamic route */}
   <h1>Technical agency</h1>
   <p> <Link href="/blogs">Blogs</Link></p>
   <p> <Link href="/about">About</Link></p>
   <p> <Link href="/services">Services</Link></p>
   <p> <Link href="/files/">Files</Link></p>
   </>
  );
}
