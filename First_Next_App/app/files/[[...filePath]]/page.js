export const metadata = {
  title: {
    absolute: "Files"
  }
};
export default async function File({params}) {
 const {filePath} = params;
  return (  
   <>
   <h1>File <i>/{filePath?.join("/")}</i></h1>

    
       </>
  );
}
