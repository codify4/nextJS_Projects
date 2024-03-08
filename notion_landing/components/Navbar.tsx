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
        sliceNum1={5}
        sliceNum2={13}
        contents={{
          icons: productContents.icons,
          headers: productContents.header,
          description: productContents.description
        }}
      />

      <MenubarComponent title="Download" contents={downloadContents}/>

      <BigMenubar 
        title="Product"
        sliceNum1={3}
        sliceNum2={7}
        contents={{
          icons: solutionsContents.icons,
          headers: solutionsContents.headers,
          description: solutionsContents.descriptions
        }}
      />

      <MenubarComponent title="Recources" contents={recourcesContents}/>
    </nav>
  )
}

export default Navbar