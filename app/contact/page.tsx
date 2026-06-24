import { getMetadata } from "@/libs/metadata";

export async function generateStaticParams() {
  return getMetadata("contact");
}

export default function ContactPage() {
  return (
    <div>ContactPage</div>
  );
}
