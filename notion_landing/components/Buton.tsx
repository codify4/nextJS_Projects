import { Button } from "./ui/button";

type ButonProps = {
    title: string;
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
}

const Buton = ({ title, variant }: ButonProps) => {
  return (
    <Button 
        variant={variant}
        className="text-[16px]"
    >{title}</Button>
  )
}

export default Buton