import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"

type MenubarProps = {
    title: string;
    contents: string[];
}

export const MenubarComponent = ({ title, contents }: MenubarProps) => {
  return (
    <Menubar className="my-4 border-none">
    <MenubarMenu>
        <MenubarTrigger className="text-[18px]">{title}</MenubarTrigger>
        <MenubarContent>
            {contents.map((content) => (
                <MenubarItem className="text-[15px]">{content}</MenubarItem>
            ))}
        </MenubarContent>
    </MenubarMenu>
    </Menubar>
  )
}
