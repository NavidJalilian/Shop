import Login from "@/components/login";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className=''>
      <Navbar />
      <Login></Login>
    </main>
  );
}
