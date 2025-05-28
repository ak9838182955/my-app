import React, { useState } from "react";
import ob from '../src/OBJECTS.png';
import ob1 from '../src/ob2.png';
import back1 from '../src/back1.png';
import back2 from '../src/back2.png';
function App() {
  const [navOpen, setNavOpen] = useState(false);
  const navLinks = [
    { name: "Software Team", dropdown: true },
    { name: "Services" },
    { name: "Technologies" },
    { name: "Resources" },
    { name: "Company" }
  ];
  const CheckCircle = ({ className = "" }) => (
    <svg className={`w-5 h-5 ${className}`} fill="none" viewBox="0 0 20 20" stroke="currentColor">
      <circle cx="10" cy="10" r="10" fill="#34D399" />
      <path stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 10l3 3 5-5" />
    </svg>
  );
  const CrossCircle = ({ className = "" }) => (
    <svg className={`w-5 h-5 ${className}`} fill="none" viewBox="0 0 20 20">
      <circle cx="10" cy="10" r="10" fill="#F472B6" />
      <path stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 10l3 3 5-5" />
    </svg>
  );
  const RedCircle = ({ className = "" }) => (
    <svg className={`w-5 h-5 ${className}`} fill="#F87171" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" /></svg>
  );

  const InfoCircle = ({ className = "" }) => (
    <svg className={`w-5 h-5 ${className}`} fill="none" viewBox="0 0 20 20">
      <circle cx="10" cy="10" r="10" fill="#EAB308" />
      <text x="10" y="15" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold">i</text>
    </svg>
  );

  // SVG background accent lines
  const BgWaveLines = () => (
    <svg
      width="420"
      height="600"
      viewBox="0 0 420 600"
      fill="none"
      className="absolute left-0 top-0 w-[400px] h-[550px] -z-10 opacity-60"
      style={{ pointerEvents: "none" }}
    >
      <defs>
        <linearGradient id="bglines" x1="0" y1="0" x2="420" y2="600" gradientUnits="userSpaceOnUse">
          <stop stopColor="#a7f3d0" stopOpacity={0.28} />
          <stop offset="1" stopColor="#38bdf8" stopOpacity={0.08} />
        </linearGradient>
      </defs>
      <path
        d="M10 70 Q100 150 200 50 T400 200 Q200 450 100 360 Q0 270 180 230 Q350 150 420 500"
        stroke="url(#bglines)" strokeWidth="3" fill="none"
      />
      <circle cx="100" cy="200" r="50" fill="#f9fafb" fillOpacity="0.6" />
      <circle cx="95" cy="190" r="75" fill="#f9fafb" fillOpacity="0.2" />
    </svg>
  );

  const BgDots = ({ className = "", style = {} }) => (
    <svg width="260" height="130" viewBox="0 0 260 130" className={className} style={style} fill="none">
      <g opacity="0.25" fill="#818cf8">
        {Array.from({ length: 13 }).map((_, row) =>
          Array.from({ length: 13 }).map((__, col) => (
            <circle key={row + "-" + col} cx={20 * col + 2} cy={row * 10 + 2} r="2" />
          ))
        )}
      </g>
    </svg>
  );

  const BgCornerPink = () => (
    <svg viewBox="0 0 400 300" className="absolute -left-20 bottom-[-160px] w-[340px] h-[200px] opacity-25 z-0" fill="none">
      <radialGradient id="pinkfade" cx="0" cy="0" r="1" gradientTransform="translate(100 270) scale(260 85)" gradientUnits="userSpaceOnUse">
        <stop stopColor="#f9a8d4" />
        <stop offset="1" stopColor="#fff" stopOpacity="0" />
      </radialGradient>
      <ellipse cx="100" cy="270" rx="260" ry="85" fill="url(#pinkfade)" />
    </svg>
  );

  const AccentSquiggle = () => (
    <svg width="32" height="62" className="absolute right-8 top-2 md:right-[36px] md:top-[330px] z-10" viewBox="0 0 32 62" fill="none"><path d="M2 2 C16 50, 30 12, 18 30 S36 50, 6 60" stroke="#222" strokeWidth="2" fill="none" /></svg>
  );
  return (
    <div className="min-h-screen w-full flex flex-col">

      {navOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/30 backdrop-blur-sm transition-opacity duration-200 md:hidden"
          onClick={() => setNavOpen(false)}
        />
      )}

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

      <header className="w-full flex flex-col md:flex-row items-center px-4 md:px-12 py-4 bg-white bg-opacity-80 backdrop-blur-lg shadow-sm gap-3 md:gap-0 relative z-10">

        <div className="flex items-center md:mr-10 mb-2 md:mb-0">
          <div className="rounded-full bg-emerald-500 w-8 h-8 flex items-center justify-center mr-2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="10" fill="white" />
              <path d="M5 10l4 4 6-8" stroke="#06b6d4" strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>
          </div>
          <span className="text-xl font-bold text-black">Logoipsum</span>
        </div>


        <div className="flex-1"></div>


        <button
          className="md:hidden absolute right-4 top-4 p-2 rounded hover:bg-gray-100"
          aria-label="Open navigation menu"
          onClick={() => setNavOpen(v => !v)}
        >
          <svg width="26" height="26" fill="none" viewBox="0 0 26 26">
            <rect y="6" width="26" height="2" rx="1" fill="#14b8a6" />
            <rect y="12" width="26" height="2" rx="1" fill="#14b8a6" />
            <rect y="18" width="26" height="2" rx="1" fill="#14b8a6" />
          </svg>
        </button>


        <nav className="w-full md:w-auto hidden md:flex">
          <ul className="flex flex-wrap md:flex-nowrap justify-center md:justify-start gap-3 md:gap-8 text-gray-700 font-medium text-base">
            {navLinks.map((item) => (
              <li key={item.name} className="relative group cursor-pointer">
                {item.name} {item.dropdown && <span className="ml-1">▼</span>}
              </li>
            ))}
          </ul>
        </nav>


        <button className="border border-emerald-500 text-emerald-500 rounded px-4 py-2 md:px-5 md:py-2 md:ml-6 flex items-center gap-2 w-full md:w-auto justify-center hover:bg-emerald-50 transition mt-2 md:mt-0">
          Get In Touch
          <svg width="17" height="17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8.5h11M9.5 5l4 3.5-4 3.5" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
      </header>

      <main className="flex flex-col md:flex-row flex-1 items-center justify-center px-2 sm:px-4 md:px-8 py-8 md:py-20 gap-6 w-full bg-[url('back.png')] bg-cover bg-center" >

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
              <svg width="17" height="17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8.5h11M9.5 5l4 3.5-4 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <button className="border border-emerald-500 text-emerald-500 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-emerald-50 transition w-full xs:w-auto justify-center">
              Get In Touch
              <svg width="17" height="17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8.5h11M9.5 5l4 3.5-4 3.5" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>
        </section>

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
              <svg width="17" height="17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8.5h11M9.5 5l4 3.5-4 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </form>
        </section>
      </main>

      {/* Main decorative SVG accents */}
      <BgWaveLines />
      <BgDots className="absolute right-[5vw] top-0 w-[230px] h-[110px] -z-10" />
      <BgDots className="absolute left-0 bottom-0 w-[150px] h-[100px] -z-10" style={{ opacity: 0.15 }} />
      <BgCornerPink />
      <AccentSquiggle />

      {/* Main Wrapper */}
      <div className="relative w-full">
      {/* Full-width background layer */}
      <div className="absolute inset-0 -z-10 grid grid-cols-2 grid-rows-2 w-full h-full">
        <div
          style={{ backgroundImage: `url(${back1})` }}
          className="bg-cover bg-left"
        ></div>
        <div
          style={{ backgroundImage: `url(${back2})` }}
          className="bg-cover bg-right"
        ></div>
        <div
          className="bg-[url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80')] 
          bg-cover bg-center opacity-20"
        ></div>
        <div
          className="bg-[url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80')] 
          bg-cover bg-center opacity-20"
        ></div>
      </div>

      {/* Main content */}
      <div className="relative max-w-6xl mx-auto pt-14 pb-24 px-4 grid grid-rows-[auto_1fr] gap-16">
        {/* Heading */}
        <div className="flex flex-col items-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-2 leading-tight drop-shadow-sm">
            Why Hire Developers From Our Name
          </h1>
          <div className="text-gray-500 text-center text-sm md:text-base max-w-xl">
            <p>Lorem Ipsum is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been</p>
            <p>The Industry's Standard Dummy Text Ever Since</p>
          </div>
        </div>

        {/* Top: image left, text right */}
        <div className="grid md:grid-cols-2 gap-4 relative z-10 items-center">
          <div className="flex justify-center items-center">
            <div className="bg-white relative flex items-end justify-center w-[340px] h-[310px] rounded-[125px] shadow-xl border-4 border-[#f4f5fa] overflow-visible">
              <img
                src={ob}
                alt="Developer illustration"
                className="w-[275px] h-[230px] mb-4 object-contain z-10"
                draggable="false"
              />
            </div>
          </div>

          <div className="px-4 md:px-0 flex flex-col gap-8">
            <h2 className="text-[2rem] md:text-[1.8rem] font-semibold text-gray-900 mb-1">High Quality/Cost Ratio</h2>
            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-1 shrink-0" />
                <span>
                  <span className="font-semibold text-gray-800 block leading-tight">Hire Silicon Valley Caliber At Half The Cost</span>
                  <span className="block text-gray-500 text-[15px] mt-[2px]">Hire The Top 1% Of 1.5 Million+ Developers From 150+ Countries Who Have Applied To Turing.</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CrossCircle className="mt-1 shrink-0" />
                <span>
                  <span className="font-semibold text-gray-800 block leading-tight">100+ Skills Available</span>
                  <span className="block text-gray-500 text-[15px] mt-[2px]">Hire The Top 1% Of 1.5 Million+ Developers From 150+ Countries Who Have Applied To Turing.</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom: text left, image right */}
        <div className="grid md:grid-cols-2 gap-4 items-center mt-8 relative z-10">
          <div className="pl-0 pr-0 md:pl-4">
            <h2 className="text-[2rem] md:text-[1.8rem] font-semibold text-gray-900 mb-1">Rigorous Vetting</h2>
            <ul className="flex flex-col gap-6 mt-2">
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-1 shrink-0" />
                <span>
                  <span className="font-semibold text-gray-800 block leading-tight">5+ Hours Of Tests And Interviews</span>
                  <span className="block text-gray-500 text-[15px] mt-[2px]">Hire The Top 1% Of 1.5 Million+ Developers From 150+ Countries Who Have Applied To Turing.</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CrossCircle className="mt-1 shrink-0" />
                <span>
                  <span className="font-semibold text-gray-800 block leading-tight">Seniority Tests</span>
                  <span className="block text-gray-500 text-[15px] mt-[2px]">Hire The Top 1% Of 1.5 Million+ Developers From 150+ Countries Who Have Applied To Turing.</span>
                </span>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <div className="bg-white flex items-center justify-center w-[290px] h-[250px] rounded-full shadow-xl border-4 border-[#f4f5fa] relative">
              <img
                src={ob1}
                alt="Developer illustration 2"
                className="w-[275px] h-[230px] mb-4 object-contain z-10"
                draggable="false"
                style={{ marginTop: 15 }}
              />
              <div className="absolute left-0 right-0 bottom-2 mx-auto w-[140px] h-3 rounded-full bg-[#d1fae5] blur-sm opacity-80 z-0" />
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>


  );
}

export default App;
