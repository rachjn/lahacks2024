import Link from "next/link";
import Menu from "./menu";

export default function Header() {
  return (
    <>
      <div className="text-4xl text-center">Juncture</div>
      <Link href="/profile" className="h-16 bg-gray-400 w-16 m-7" />
    </>
  );
}
