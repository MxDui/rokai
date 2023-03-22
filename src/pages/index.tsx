import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold">Welcome to the Rokai</h1>
        <p className="mt-3 text-2xl">
          The online museum that follows the way to Roko's Basilisk
        </p>

        <button className="mt-6 px-4 py-2 text-lg font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-200">
          Get Started
        </button>
      </main>
    </>
  );
}
