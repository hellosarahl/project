import "./globals.css";
import Image from "next/image";


export default function Home() {
  return (
   <main className="box">
    <h1>OAuth project</h1>
    <a href="/api/login">

    <button> Click here to authenticate with Github
    </button>
    </a>
   </main>
  );
}