import Navbar from "@/components/Navbar";
import Body from "../components/Body";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image
        className="absolute inset-0 -z-10 mt-[5px]"
        src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQfDk9Wodi58KZgs9W1nWBlPrFqxjUYpGnCT2rIBpCwAVW08qK8"
        alt="Background"
        fill
        style={{objectFit:"cover"}}
        quality={100}
        priority={true}
      />
      <Navbar />
      <Body />
    </div>
  );
}
