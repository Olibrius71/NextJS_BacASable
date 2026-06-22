import Image from "next/image";
import {useRouter} from "next/router";

export async function getStaticProps({ params}) {

}

export default function Website() {
  const router = useRouter();
  const { { website: Website } } = router.query;

  return (
    <div>
      <h1>Site en question</h1>
      <div>
        <h3>{website.title}</h3>
        <Image alt="caca" src={website.thumbnail}></Image>
      </div>
    </div>
  );
}
