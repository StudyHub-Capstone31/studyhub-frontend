import React from "react";
import {
  BookOpenIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  MagnifyingGlassCircleIcon,
  MegaphoneIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

function Home() {
  return (
    <main>
      <div className="w-[600px] mx-auto mt-8">
        <header className="flex items-center justify-between mx-4 m-2">
          <p className="font-bold text-2xl">StudyHub</p>

          <div className="border w-2 h-2 p-4 rounded-full bg-red-200">.</div>
        </header>

        <section id="search">
          <div className="flex gap-4 border p-2 rounded-lg shadow shadow-md">
            <MagnifyingGlassIcon className="w-5 mx-2" />
            <p className="text-zinc-400">
              Search lecture notes, past questions...
            </p>
          </div>
        </section>

        <section id="hero" className="flex flex-col w-full mx-auto mt-16">
          <p className="mx-auto text-3xl font-bold">
            Welcome to <span className="text-blue-600">StudyHub</span>
          </p>
          <p className="mt-4">
            Your one-stop platform for academic resouces and collaboration
          </p>
        </section>

        <section className="flex flex-wrap text-sm underline width-[600px] mx-auto gap-y-2 gap-x-2 mt-8">
          <div className="mx-auto w-[290px] flex flex-col items-center px-16 py-6 rounded-lg border">
            <BookOpenIcon color="blue" className="w-8" />
            <Link to="/resources">Browse Resources</Link>
          </div>
          <div className="mx-auto w-[290px] flex flex-col items-center px-16 py-6 rounded-lg border">
            <ChatBubbleOvalLeftEllipsisIcon color="blue" className="w-8" />
            <Link to="/discussions">Join Discussions</Link>
          </div>
          <div className="mx-auto w-[290px] flex flex-col items-center px-16 py-6 rounded-lg border">
            <ArrowUpIcon color="blue" className="w-8" />
            <Link to="/uploadsdownloads">Upload Files</Link>
          </div>
          <div className="mx-auto w-[290px] flex flex-col items-center px-16 py-6 rounded-lg border">
            <MegaphoneIcon color="blue" className="w-8" />
            <Link to="/announcements">Latest Announcements</Link>
          </div>
        </section>

        <section id="users">t</section>
      </div>
    </main>
  );
}

export default Home;
