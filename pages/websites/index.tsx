import Website from "@/composants/ui/Website";
import { WebsiteType } from "@/types/website";
import Link from "next/link";
import {AccessAlarm} from "@mui/icons-material";

export async function getStaticProps() {
  const websites = await fetch("http://localhost:3001/websites.json").then(
    (res) => res.json(),
  );

  return {
    props: { websites },
  };
}

type WebsitesPageType = {
  websites: WebsiteType[];
};

export default function WebsitesPage({ websites }: WebsitesPageType) {
  console.log("websites: ", websites);
  return (
    <div>
      <h1>WebsitesPage</h1>
      <AccessAlarm style={{ width: 30, height: 30 }} />
      {websites &&
        websites.map((w, i) => (
          <Link key={`website-${i}`} href={`/websites/${w.slug}`}>
            <h2>234543</h2>
            <Website website={w} />
          </Link>
        ))}
    </div>
  );
}
