import Image from "next/image";
import type { Metadata } from "next";
import charlotte from "../public/charlotte.png";
import PageTitle from "./components/page-title";

export const metadata: Metadata = {
  title: "Homepage: Spin a yarn, a spider's tale",
  description: "Generated by create next app",
};

export default function Home() {
  return (
      <main className="block">
        <PageTitle text="Spin a yarn" />
        <Image
          src={charlotte}
          alt="Charlotte and Wilbur in the barn as an oil pastel drawing generated by Dalle"
        />
        <p className="mt-10 mb-2">
          Hello dear friend, you&apos;ve happened upon my little corner of the
          internet. Here, on this virtual canvas, I&apos;ll weave stories about
          the many miraculous beings I&apos;ve had the pleasure of meeting.
        </p>
        <p className="mb-2">
          Our world is full of wonders, full of unique individuals who teach us
          compassion, understanding, and the true meaning of friendship. One
          such soul is my dearest friend, Wilbur, whose spirit continues to
          inspire me every day.
        </p>
        <p className="mb-2">
          Take a stroll down this web, explore the stories, and immerse yourself
          in the magic of these unassuming heroes. They might be more familiar
          than you think!
        </p>
      </main>
  );
}
