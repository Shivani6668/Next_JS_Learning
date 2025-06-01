import Link from "next/link";

export default function Service() {
  return (
   <>
   <h1>All service</h1>
   <p><Link href="/">App Development</Link></p>
   <p><Link href="/services/web-dev">Web Development</Link></p>
    <p><Link href="/services/seo">SEO</Link></p>
    <p><Link href="/">App/Web Design</Link></p>
    <p><Link href="/">App Development</Link></p>
  
       </>
  );
}
