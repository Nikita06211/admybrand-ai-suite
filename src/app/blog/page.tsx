"use client";
import Image from "next/image";
import { useState } from "react";
import { featuredArticles, latestArticles } from "../components/data/blogArticles";

const tags = ["All", "AI Trends", "Strategy", "Case Study", "Tutorial", "Psychology"];

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState("All");

  const filterArticles = (list: typeof featuredArticles) =>
    list.filter(
      (a) =>
        (activeTag === "All" || a.tag === activeTag) &&
        (!search || a.title.toLowerCase().includes(search.toLowerCase()))
    );

  return (
    <div className="bg-[#11131a] min-h-screen pt-20">
      {/* Header */}
      <section className="text-center py-12 mb-8">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#53d1fd] to-[#729cff] text-transparent bg-clip-text mb-2">
          AI Marketing Insights
        </h1>
        <div className="max-w-2xl mx-auto text-gray-300 text-lg mb-7">
          Stay ahead of the curve with expert insights, case studies, and practical tips for AI-powered marketing
        </div>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="bg-[#181c24] text-white px-6 py-3 rounded-xl w-full max-w-md outline-none border border-[#272838] focus:border-[#7ecbfe] transition"
          />
        </div>
      </section>

      {/* Tag Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {tags.map((tag, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTag(tag)}
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              activeTag === tag
                ? "bg-gradient-to-r from-[#7ce3ff] to-[#729cff] text-white shadow"
                : "bg-[#1d2030] text-blue-200 hover:bg-[#323a53]"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Featured Articles */}
      <section className="max-w-6xl mx-auto mb-10">
        <h2 className="text-2xl text-white font-semibold mb-6">Featured Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filterArticles(featuredArticles).map((a) => (
            <div key={a.id} className="rounded-2xl overflow-hidden bg-[#181c24] border border-[#232749] shadow-md flex flex-col relative group">
              <Image
                src={a.img}
                alt={a.title}
                width={600}
                height={260}
                className="h-48 w-full object-cover"
              />
              <div className="absolute left-4 top-4 px-3 py-1 rounded-lg bg-gradient-to-r from-[#a17fff] to-[#729cff] text-white text-xs font-bold shadow">
                Featured
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex gap-3 mb-2 text-gray-400 text-xs items-center">
                  <span>{a.date}</span>
                  <span>•</span>
                  <span>{a.time}</span>
                  <span>•</span>
                  <span className="capitalize">{a.tag}</span>
                </div>
                <div className="text-lg text-white font-bold mb-2">{a.title}</div>
                <div className="text-gray-300 mb-3 line-clamp-3">{a.summary}</div>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-sm text-gray-400">{a.author}</span>
                  <a href={a.url} className="text-sm text-[#ab7cff] bg-[#19163d] rounded-md px-3 py-1 font-bold hover:bg-[#2f223d]">Read More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Articles */}
      <section className="max-w-7xl mx-auto mb-10">
        <h2 className="text-2xl text-white font-semibold mb-6">Latest Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filterArticles(latestArticles).map((a) => (
            <div key={a.id} className="rounded-2xl overflow-hidden bg-[#181c24] border border-[#232749] shadow-md flex flex-col">
              <Image
                src={a.img}
                alt={a.title}
                width={400}
                height={160}
                className="h-36 w-full object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <div className="flex gap-3 mb-2 text-gray-400 text-xs items-center">
                  <span>{a.date}</span>
                  <span>•</span>
                  <span>{a.time}</span>
                  <span>•</span>
                  <span className="capitalize">{a.tag}</span>
                </div>
                <div className="text-lg text-white font-bold mb-2">{a.title}</div>
                <div className="text-gray-300 mb-3 line-clamp-3">{a.summary}</div>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-sm text-gray-400">{a.author}</span>
                  <a href={a.url} className="text-sm text-[#ab7cff] bg-[#19163d] rounded-md px-3 py-1 font-bold hover:bg-[#2f223d]">Read More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Subscribe / Stay Updated */}
      <section className="bg-gradient-to-r from-[#a17fff] to-[#53d1fd] py-12">
        <div className="max-w-xl mx-auto bg-[#161a2e]/70 rounded-2xl shadow-xl px-8 py-10 text-center">
          <h3 className="text-2xl text-white font-bold mb-2">Stay Updated</h3>
          <p className="text-gray-200 mb-6">Get the latest AI marketing insights delivered to your inbox weekly</p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-[#191b27] text-white px-5 py-3 rounded-lg outline-none border border-[#252445] focus:border-[#abbafa] transition"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#a17fff] to-[#729cff] text-white font-bold px-8 py-3 rounded-lg hover:from-[#729cff] hover:to-[#a17fff] transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
