import { Button } from "@/components/ui/button";

type ButtonProps = {
    title: string;
    variant: string;
}

const ButtonComponent = ({ title, variant }: ButtonProps) => {
  return (
    <Button variant={variant}>{title}</Button>
  )
}

export default Button