import Link from "next/link";

export default function Home(props) {
  return (
   <>
   {/* <h1>Welcome to my home</h1>
   <Link href="/about">about</Link>
   <Link href="/services"></Link> */}
   
   
   {/* Blog dynamic route */}
   <h1>Blog</h1>
    <Link href="/blogs">Blogs</Link>
   <Link href="/about">About</Link>
  <Link href="/services">Services</Link>
  <Link href="/files/">Files</Link>
   </>
  );
}
