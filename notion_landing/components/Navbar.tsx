import Image from "next/image";

import { MenubarComponent } from "./Menubars/Menubar";
import { BigMenubar } from "./Menubars/BigMenubar";

import { recourcesContents, downloadContents, productContents, solutionsContents } from "../lib/utils";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="inline-flex m-[10px]">
      <div className="inline-flex">
        <div className="inline-flex">
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
        </div>

        <div className="inline-flex ml-[950px] mt-[15px]">
          <Button variant="ghost" className="text-[16px]">Request a demo</Button>
          <Button variant="ghost" className="text-[16px]">Log in</Button>
          <Button className="text-[16px]">Get Notion free</Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar