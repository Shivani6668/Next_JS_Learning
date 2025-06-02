import Link from "next/link";
export const metadata = {
  title: "About",
  description: "This is the about page of the Next.js app",
};
export default function About() {
  return (
   <>
   <h1>Welcome to my about page</h1>
   <Link href="/">Home</Link>
   <Link href="/services">Services</Link>
   </>
  );
}
