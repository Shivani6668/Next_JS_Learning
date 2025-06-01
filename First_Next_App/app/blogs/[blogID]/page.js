export default async function Blog1({params}) {
    console.log("params", await params);
    const {blogID} =await params;
  return (
   <>
   <h1>Blog {blogID}</h1>

    
       </>
  );
}
