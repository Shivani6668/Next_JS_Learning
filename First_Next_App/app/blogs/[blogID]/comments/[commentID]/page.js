export default async function
({params}) {
    console.log("params", await params);
    const paramObj =await params;
const {blogID,commentID} = paramObj;

  return (
   <>
   <p>comments nO {commentID} <b>{blogID}</b> Page</p>

    
       </>
  );
}
