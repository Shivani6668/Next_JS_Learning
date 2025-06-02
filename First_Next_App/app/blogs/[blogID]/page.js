export async function generateMetadata({params}) {
    const {blogID} = params;
    return {
        title: `Blog ${blogID}`,
        description: `This is a blog with ID ${blogID}`
    }
}

export default async function Blog1({params}) {
    console.log("params", await params);
    const {blogID} =await params;
  return (
   <>
   <h1>Blog {blogID}</h1>

    
       </>
  );
}
