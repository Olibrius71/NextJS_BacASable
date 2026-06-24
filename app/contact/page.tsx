"use client";
import { getMetadata } from "@/libs/metadata";
import createUser from "@/actions/userActions";
/*
export async function generateStaticParams() {
  return getMetadata("contact");
}
*/
export default function ContactPage() {
  return (
    <div>
      <div>ContactPage</div>
      <form onSubmit={e => e.preventDefault() } action={createUser}>
        <span className="text-xl">NOM</span>
        <input name="name" className="bg-blue-300 w-[500px] h-[300px]" />
      </form>
    </div>
  );
}
