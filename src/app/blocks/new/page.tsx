import {db} from "@/db";
import { redirect } from "next/navigation";

// import { redirect } from "next/dist/server/api-utils";
export default function BlockCreatePage(){
    async function createBlock(formData:FormData){
        // Mark THIS FUNCTION AS A SERVER ACTION
        "use server"
        
        
        // get the form data 
        const title = formData.get("title") as string;
        const code = formData.get("code") as string;

        // Insert the data into the database using prisma
       const block = await db.block.create({data:{title,code}});

        //Redirect the user back to the homepage
       redirect("/");
    }
    return (
      <form action={createBlock}>
        <h3 className="font-bold m-3">Create a Block</h3>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <lable className="w-12" htmlFor="title">Title</lable>
            <input
              name="title"
              id="title"
              className="border rounded p-2 w-full"
            />
          </div>

          <div className="flex flex-col gap-4">
            <lable className="w-12" htmlFor="code">Code</lable>
            <textarea 
              name="code"
              className="border rounded p-2 w-full"
              id="code"
            />
          </div>
          <button className="rounded p-2 bg-blue-600 hover:bg-blue-500 text-white" type="submit">Create</button>
        </div>
      </form>
    );
}