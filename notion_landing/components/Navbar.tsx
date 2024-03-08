import Image from "next/image";
import { MenubarComponent } from "./Menubars/Menubar";
import { recourcesContents, downloadContents, productContents, solutionsContents } from "../lib/utils";
import { BigMenubar } from "./Menubars/BigMenubar";

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

      <BigMenubar 
        title="Product" 
        contents={{
          icons: productContents.icons,
          headers: productContents.header,
          description: productContents.description
        }}
      />
      <MenubarComponent title="Download" contents={downloadContents}/>
      <MenubarComponent title="Recources" contents={recourcesContents}/>

      
    </nav>
  )
}

export default Navbar