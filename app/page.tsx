import Image from "next/image";
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ui/ModeToggle";

export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
      <ModeToggle/>
    </div>
  );
}
