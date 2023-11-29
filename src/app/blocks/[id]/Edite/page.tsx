import { db } from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";

// import { redirect } from "next/dist/server/api-utils";
export default function EditPage() {
  async function Editdata(formData: FormData) {
    // Mark THIS FUNCTION AS A SERVER ACTION
    "use server";

    // get the form data
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    // Insert the data into the database using prisma
    const block = await db.block.create({ data: { title, code } });

    //Redirect the user back to the homepage
    redirect("/");
  }
  return (
    <div>This is Edie </div>
  );
}
