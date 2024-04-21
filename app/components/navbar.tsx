// "use client";
import Menu from "./menu";

export default function Navbar() {
  //   const [isOpen, setIsOpen] = useState(false); //set state to false at first
  return (
    <div className="flex items-center justify-between">
      <Menu />
    </div>
  );
}
