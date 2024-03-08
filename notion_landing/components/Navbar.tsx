import Image from "next/image";

import { MenubarComponent } from "./Menubars/Menubar";
import { BigMenubar } from "./Menubars/BigMenubar";
import Button from "./Button";

import { recourcesContents, downloadContents, productContents, solutionsContents } from "../lib/utils";



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

      <div>
        <Button title="Request a demo" variant="ghost"/>
        <Button title="Log in" variant="ghost"/>
        <Button title="Get Notion free"/>
      </div>
    </nav>
  )
}

export default Navbar