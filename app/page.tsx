import Menu from "@/app/components/menu";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="overscroll-none">
      <main>
        <Navbar />
        <div className="m-6 mt-0">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
          harum sint laborum iure ipsam quia esse amet delectus, suscipit sit
          magnam accusamus nisi, aut sapiente eos placeat itaque voluptas est
          voluptatibus similique eligendi saepe. Recusandae perspiciatis
          voluptates eligendi perferendis quisquam enim magni ipsum beatae
          provident suscipit, porro dolor iste unde mollitia! Ex corporis esse
          at totam error voluptates, perspiciatis, ipsa facilis laudantium atque
          maiores commodi temporibus animi delectus, fuga tempore! Non, neque
          accusantium? Commodi saepe ea magni nostrum ipsam corporis impedit
          ratione harum alias facilis atque ut id consequuntur, a hic doloribus
          quaerat dolorum? Eum sed aliquam obcaecati rerum omnis.
          <br></br>
          <br></br>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus id
          cumque aperiam adipisci ratione distinctio consequatur soluta hic
          necessitatibus fugit excepturi impedit veniam sequi quis fuga
          doloremque consectetur quaerat deleniti aspernatur, alias quas enim
          dolorem libero ipsum! Reprehenderit, hic tempora amet veniam aut nisi
          ducimus? Soluta obcaecati quo qui itaque sit at, beatae, aperiam
          libero perferendis a atque et animi, aliquam placeat alias odit. Vel,
          ea obcaecati! Animi aliquid, voluptates mollitia aperiam magnam iure a
          libero, sint eos, doloremque nulla? Dolorum, excepturi aut modi
          provident perferendis dolore doloribus officiis optio ratione cumque
          saepe, quod dolores asperiores fuga quis nihil fugit.
        </div>
      </main>
      <footer className="py-5 border-t border-gray-900 bg-black overflow-hidden">
        <div className="inline-grid grid-flow-col gap-5 px-5">
          <Link href="https://github.com/rachjn/lahacks2024">
            <Image
              src="./github.svg"
              width={20}
              height={20}
              alt="github"
              className="hover:opacity-50"
            />
          </Link>
        </div>
      </footer>
    </div>
  );
}
