import Image from "next/image";
import { MenubarComponent } from "./Menubars/Menubar";
import { recourcesContents, downloadContents } from "../lib/utils";


const Navbar = () => {
  return (
    <nav className="inline-flex">
      <Image 
        src="/Notion.svg"
        alt="logo"
        width={130}
        height={32}
        className="ml-6"
      />

      <MenubarComponent title="Download" contents={downloadContents}/>
      <MenubarComponent title="Recources" contents={recourcesContents}/>
    </nav>
  )
}

export default Navbar