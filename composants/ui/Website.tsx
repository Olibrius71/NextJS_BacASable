import { WebsiteType } from "@/types/website";
import Image from "next/image";

export default function Website({
                                  website: { title, thumbnail },
                                }: {
  website: WebsiteType;
}) {
  console.log("URL IMAGE : "+ thumbnail)
  return (
    <article>
      <h3>{title}</h3>
      <Image
        src={"http://localhost:3001/websites/" + thumbnail}
        alt="azerty"
        width={200}
        height={200}
        loading="eager"
        unoptimized
      />
    </article>
  );
}
