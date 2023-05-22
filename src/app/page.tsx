import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Navigation from "@/components/atoms/navigation";
import Avatar from "@/components/atoms/avatar";

const inter = Inter({ subsets: ["latin"] });
// #00ccd5
export default function Home() {
  return (
    <main className="container px-4 mx-auto">
      <Navigation />
      <section className="bg-[#00ccd5] dark:bg-gray-900 max-h-94">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Hello
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"></p>
          </div>
          <div className="lg:mt-0 lg:col-span-5 lg:flex align-right h-96 overflow-hidden relative">
            <Image
              src={"/images/cool.jpg"}
              alt="avatar"
              fill
              unoptimized
              objectFit="contain"
              priority={true}
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
