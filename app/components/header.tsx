import Link from "next/link";
import Menu from "./menu";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <div className="font-bold flex justify-center">
        <Image src="./title.svg" width={280} height={200} alt="Juncture" />
      </div>
      <Link href="/profile" className="h-16 bg-gray-400 w-12 m-7" />
    </>
  );
}
