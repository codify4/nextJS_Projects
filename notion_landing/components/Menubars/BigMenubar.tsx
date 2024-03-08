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
    sliceNum1: number;
    sliceNum2?: number;
    contents: {
      icons?: string[];
      headers: string[];
      description: string[];
    }
}

export const BigMenubar = ({ title, contents, sliceNum1, sliceNum2 }: MenubarProps) => {
  return (
    <Menubar className="my-4 border-none">
    <MenubarMenu>
        <MenubarTrigger className="text-[18px]">{title}</MenubarTrigger>
        <MenubarContent className="inline-flex justify-center w-[455px]">
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
                    <h3 className="text-base font-medium">{contents.headers[index]}</h3>
                    <p>{contents.description[index]}</p>
                  </div>
                </MenubarItem>
              ))}
            </div>
            
            <Separator orientation="vertical"/>

            <div>
              {contents.headers.slice(sliceNum1, sliceNum2).map((header, index) => (
                <MenubarItem key={index}>
                  <div className="justify-start">
                    <h3 className="text-base font-medium">{header}</h3>
                    <p>{contents.description[index + sliceNum1]}</p>
                  </div>
                </MenubarItem>
              ))}
            </div>

            <div>
              {contents.headers.slice(sliceNum2).map((header, index) => (
                  <MenubarItem key={index}>
                    <div className="justify-start">
                      <h3 className="text-base font-medium">{header}</h3>
                      <p>{contents.description[index + sliceNum1]}</p>
                    </div>
                  </MenubarItem>
              ))}
              </div>
        </MenubarContent>
    </MenubarMenu>
    </Menubar>
  )
}
