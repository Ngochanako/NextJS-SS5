import Image from "next/image";
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ui/ModeToggle";
import Bai1 from "./api/Bai1";
import Bai2 from "./api/Bai2";
import Bai3 from "./api/Bai3";
import Bai4 from "./api/Bai4";
import Bai5 from "./api/Bai5";
import Bai6 from "./api/Bai6";

export default function Home() {
  return (
    <div className="m-[50px]">
      <Bai1/>
      <Bai2/>
      <Bai3/>
      <Bai4/>
      <Bai5/>
      <Bai6/>
      <ModeToggle/>
    </div>
  );
}
