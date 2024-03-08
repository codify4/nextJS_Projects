import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Separator } from "@/components/ui/separator";

import Image from "next/image";

type MenubarProps = {
    title: string;
    contents: {
      icons?: string[];
      headers: string[];
      description: string[];
    }
}

export const BigMenubar = ({ title, contents }: MenubarProps) => {
  return (
    <Menubar className="my-4 border-none">
    <MenubarMenu>
        <MenubarTrigger className="text-[18px]">{title}</MenubarTrigger>
        <MenubarContent className="inline-flex w-[450px]">
            <div className="w-[225px]">
              {contents.icons && contents.icons.map((icon, index) => (
                <MenubarItem>
                  {icon && (
                      <Image 
                        src={icon}
                        alt={`icon${index}`}
                        width={30}
                        height={30}
                        className="mr-[7px]"
                      />
                  )}
                  
                  <div>
                    <h3 className="text-base font-semibold">{contents.headers[index]}</h3>
                    <p>{contents.description[index]}</p>
                  </div>
                </MenubarItem>
              ))}
            </div>
            
            <Separator decorative orientation="vertical" className="w-1"/>

            <div>
              {contents.headers.slice(5).map((header, index) => (
                <MenubarItem key={index} className="flex-col">
                  <h3 className="text-base font-semibold">{header}</h3>
                  <p>{contents.description[index + 5]}</p>
                </MenubarItem>
              ))}
            </div>


        </MenubarContent>
    </MenubarMenu>
    </Menubar>
  )
}
