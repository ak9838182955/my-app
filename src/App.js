import React, { useState } from "react";



function App() {
  const [navOpen, setNavOpen] = useState(false);
  const navLinks = [
    { name: "Software Team", dropdown: true },
    { name: "Services" },
    { name: "Technologies" },
    { name: "Resources" },
    { name: "Company" }
  ];
  return (
    <div className="min-h-screen w-full flex flex-col">
      {/* Mobile Nav Drawer & Overlay */}
      {/* Overlay */}
      {navOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/30 backdrop-blur-sm transition-opacity duration-200 md:hidden"
          onClick={() => setNavOpen(false)}
        />
      )}
      {/* Drawer */}
      <div
        className={
          `fixed z-40 top-0 left-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 md:hidden ` +
          (navOpen ? "translate-x-0" : "-translate-x-full")
        }
      >
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center">
            <div className="rounded-full bg-emerald-500 w-8 h-8 flex items-center justify-center mr-2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="10" fill="white" />
                <path d="M5 10l4 4 6-8" stroke="#06b6d4" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-xl font-bold text-black">Logoipsum</span>
          </div>
          <button onClick={() => setNavOpen(false)} className="p-2 ml-2 rounded hover:bg-gray-100">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col gap-2 text-gray-700 font-medium text-lg mt-4 px-4">
          {navLinks.map((item) => (
            <li
              key={item.name}
              className="py-2 px-2 rounded hover:bg-emerald-50 cursor-pointer"
              onClick={() => setNavOpen(false)}
            >
              {item.name} {item.dropdown && <span className="ml-1">▼</span>}
            </li>
          ))}
        </ul>
      </div>
      {/* Header */}
      <header className="w-full flex flex-col md:flex-row items-center px-4 md:px-12 py-4 bg-white bg-opacity-80 backdrop-blur-lg shadow-sm gap-3 md:gap-0 relative z-10">
  {/* Logo */}
  <div className="flex items-center md:mr-10 mb-2 md:mb-0">
    <div className="rounded-full bg-emerald-500 w-8 h-8 flex items-center justify-center mr-2">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="10" fill="white" />
        <path d="M5 10l4 4 6-8" stroke="#06b6d4" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
    </div>
    <span className="text-xl font-bold text-black">Logoipsum</span>
  </div>
  
  {/* Empty flex-1 to push nav and button to the right */}
  <div className="flex-1"></div>
  
  {/* Hamburger for mobile */}
  <button
    className="md:hidden absolute right-4 top-4 p-2 rounded hover:bg-gray-100"
    aria-label="Open navigation menu"
    onClick={() => setNavOpen(v => !v)}
  >
    <svg width="26" height="26" fill="none" viewBox="0 0 26 26">
      <rect y="6" width="26" height="2" rx="1" fill="#14b8a6"/>
      <rect y="12" width="26" height="2" rx="1" fill="#14b8a6"/>
      <rect y="18" width="26" height="2" rx="1" fill="#14b8a6"/>
    </svg>
  </button>
  
  {/* Menus - Desktop Only - Now aligned to the right */}
  <nav className="w-full md:w-auto hidden md:flex">
    <ul className="flex flex-wrap md:flex-nowrap justify-center md:justify-start gap-3 md:gap-8 text-gray-700 font-medium text-base">
      {navLinks.map((item) => (
        <li key={item.name} className="relative group cursor-pointer">
          {item.name} {item.dropdown && <span className="ml-1">▼</span>}
        </li>
      ))}
    </ul>
  </nav>
  
  {/* Button */}
  <button className="border border-emerald-500 text-emerald-500 rounded px-4 py-2 md:px-5 md:py-2 md:ml-6 flex items-center gap-2 w-full md:w-auto justify-center hover:bg-emerald-50 transition mt-2 md:mt-0">
    Get In Touch
    <svg width="17" height="17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8.5h11M9.5 5l4 3.5-4 3.5" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
  </button>
</header>
      {/* Main Section */}
      <main className="flex flex-col md:flex-row flex-1 items-center justify-center px-2 sm:px-4 md:px-8 py-8 md:py-20 gap-6 w-full bg-[url('back.png')] bg-cover bg-center" >
        {/* Left Column */}
        <section className="flex-1 w-full max-w-2xl text-left mb-8 md:mb-0">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="text-2xl xs:text-3xl md:text-4xl text-emerald-400 font-semibold">HIRE DEDICATED</span>
            <div className="h-1 w-24 xs:w-32 rounded bg-emerald-200 mt-2 ml-2" />
          </div>
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-4 leading-tight">DEVELOPERS</h1>
          <div className="text-gray-600 text-base xs:text-lg mb-2 font-medium">Top 1% Pre-Vetted, In-House & Dedicated Software Programmers</div>
          <div className="text-gray-500 mb-6 md:mb-8 max-w-xl text-sm xs:text-base">Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled</div>
          <div className="flex flex-col xs:flex-row gap-3 xs:gap-4 w-full">
            <button className="bg-rose-400 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 shadow hover:bg-rose-500 transition w-full xs:w-auto justify-center">
              View More
              <svg width="17" height="17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8.5h11M9.5 5l4 3.5-4 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button className="border border-emerald-500 text-emerald-500 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-emerald-50 transition w-full xs:w-auto justify-center">
              Get In Touch
              <svg width="17" height="17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8.5h11M9.5 5l4 3.5-4 3.5" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </section>
        {/* Right Column - Form Card */}
        <section className="bg-white bg-opacity-90 rounded-xl shadow-lg p-4 xs:p-6 md:p-8 w-full xs:w-[370px] md:w-[420px] max-w-full flex flex-col gap-4">
          <h2 className="text-lg xs:text-xl font-bold mb-0 text-gray-900 text-center">Create Your Team</h2>
          <div className="text-gray-500 text-xs xs:text-sm mb-2 text-center">Lorem Ipsum is Simply Dummy Text of The Printing</div>
          <form className="flex flex-col gap-3">
            <div className="flex flex-col xs:flex-row gap-3">
              <input type="text" placeholder="Enter Your Name" className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-emerald-400" />
              <input type="email" placeholder="Enter You Email" className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-emerald-400" />
            </div>
            <div className="flex flex-col xs:flex-row gap-3">
              <input type="text" placeholder="Enter You Number" className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-emerald-400" />
              <input type="text" placeholder="Enter You Country" className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-emerald-400" />
            </div>
            <textarea placeholder="Enter You Project Brief" rows={3} className="border border-gray-300 rounded px-3 py-2 text-sm resize-none focus:outline-emerald-400" />
            <button type="submit" className="bg-rose-400 mt-3 text-white px-4 py-2 xs:px-6 xs:py-3 rounded-lg w-full font-semibold flex items-center justify-center gap-2 shadow hover:bg-rose-500 transition">
              Hire Software Developer
              <svg width="17" height="17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8.5h11M9.5 5l4 3.5-4 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
