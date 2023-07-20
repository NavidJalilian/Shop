import Login from "@/components/login";
import Navbar from "@/components/navbar";
import Image from "next/image";
import SignUp from "../pages/signUp";

export default function Home() {
  return (
    <main className=''>
      <Navbar />
      <SignUp />
    </main>
  );
}
