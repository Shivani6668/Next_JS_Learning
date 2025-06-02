export default async function Comments
({params}) {
    console.log("params", await params);
    const paramObj =await params;
const {blogID} = paramObj;
console.log("Comments params", blogID);

  return (
   <>
   <p>All comments on <b>{blogID}</b> Page</p>

    
       </>
  );
}
