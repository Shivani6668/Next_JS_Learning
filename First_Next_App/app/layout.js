export const metadata = {
  title:{
    default: "Next.js App",
    template: "%s | Next.js App",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
    <header style={{background:"teal"}}>Header</header>
     {children}
      <footer style={{background:"brown"}}>Footer</footer>
      </body>
    </html>
  );
}
