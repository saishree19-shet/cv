"use client";

import React, { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, Linkedin, Twitter, Facebook, ExternalLink, 
  Code2, Palette, Smartphone, Globe, Mail, CheckCircle2, Menu, X 
} from 'lucide-react';
import Link from 'next/link';


// --- DATA CONFIGURATION ---
const SKILLS = [
  { name: "React / Next.js", level: "90%", icon: <Code2 size={16}/> },
  { name: "Tailwind CSS", level: "95%", icon: <Palette size={16}/> },
  { name: "JavaScript (ES6+)", level: "85%", icon: <Globe size={16}/> },
  { name: "UI/UX Design", level: "80%", icon: <Smartphone size={16}/> },
 
  { name: "HTML and CSS", level: "95%", icon: <Palette size={16}/> },
   { name:"Java",level:"85%",icon:<Code2 size={16}/> },
    { name:"DSA",level:"80%",icon:<Code2 size={16}/> },
];

const SOCIAL_LINKS = [
  { Icon: Facebook, href: "https://facebook.com/your-username" },
  { Icon: Twitter, href: "https://twitter.com/your-username" },
  { Icon: Github, href: "https://github.com/saishree19-shet" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/saishree-shet-222759365/" }, // Replace with your LinkedIn URL
];

const CERTIFICATES = [
  { id: 1, title: "Java Programming", provider: "Infosys SpringBoard", date: "2025", img: "https://media.licdn.com/dms/image/v2/D5622AQHmXI8Uah-I4w/feedshare-shrink_2048_1536/B56Ztvh8JNHkA0-/0/1767102728350?e=1770249600&v=beta&t=Ppnb_oPEVcKaurWvLU0skyCaTWRrWAaNeNLadBR9u5c" },
  { id: 2, title: "Cloud Computing", provider: "Microsoft Azure", date: "2025", img: "https://i.postimg.cc/PrG0gyfT/Screenshot-2025-10-08-132736.png" },
 
];

const PROJECTS = [
 
  { 
    id: "teammate", 
    title: "TeamMate", 
    category: "Full Stack / Firebase", 
    img: "https://i.postimg.cc/kGBv2QXt/Screenshot-2026-01-17-115728.png",
    desc: "A Tinder-style matching platform for students to orchestrate synergy through real-time skill matching and team building.",
    github: "https://github.com/saishree19-shet/TeamMate",
    vercel: "https://team-mate-alpha.vercel.app/"
  },
   { 
    id: "AURA-AI", 
    title: "AURA-AI", 
    category: "Health-Tech / AI", 
    img: "https://media.licdn.com/dms/image/v2/D4E22AQGmxgpWl9QfHA/feedshare-shrink_2048_1536/B4EZmOmKU8HcAw-/0/1759033995604?e=1770249600&v=beta&t=3DjQnXPF6YIsFVNe6MF8tnfdsx6RqdAqwulY-5n92MU",
    desc: "Personalized Health Guide with AI Chatbot integration. Built with React and Framer Motion.",
    github: "https://github.com/saishree19-shet/TeamMate",
    vercel: "https://team-mate-alpha.vercel.app/"
  },
  { 
    id: "study-vault", 
    title: "StudyVault", 
    category: "Ed-Tech / Sahyadri", 
    img: "https://media.licdn.com/dms/image/v2/D5622AQFVf-wg_7vqVA/feedshare-shrink_1280/B56Zuo5EZ7HMAs-/0/1768065097256?e=1770249600&v=beta&t=w5vBNo0KheAuM5JVZ9LYtEc9voofFIX5D9L6khBMBmM", // Using your study vault screenshot
    desc: "The ultimate academic resource hub for Sahyadri students to share notes, access syllabus, and ace exams using AI assistance.",
    github: "https://github.com/saishree19-shet/StudyVault",
    vercel: "https://study-vault-beige.vercel.app/"
  },
  { 
    id: "restan-bistro", 
    title: "restan-bistro", 
    category: "UI Clone / Milestone 1", 
    img: "https://media.licdn.com/dms/image/v2/D4E22AQH9MigTcx_dXQ/feedshare-shrink_2048_1536/B4EZqsLVP_HEAw-/0/1763825248984?e=1770249600&v=beta&t=u7_eBtWGH0VCaJ-yhYnfBFSL8qjRk3CK2FRFvw6Zb4g", 
    desc: "A high-fidelity restaurant website clone built with a design-first approach, featuring full responsiveness and dark theme compatibility.",
    github: "https://github.com/saishree19-shet/DineHub",
    vercel: "https://resturant-replica.vercel.app/"
  },
];

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-[#080b12] text-white min-h-screen font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 bg-[#080b12]/80 backdrop-blur-xl border-b border-white/5 h-20 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
          <motion.h1 initial={{opacity:0}} animate={{opacity:1}} className="text-2xl font-bold tracking-tight">Portfolio<span className="text-cyan-400">.</span></motion.h1>
          
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            {['Home', 'About', 'Skills', 'Portfolio', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-400 transition-colors uppercase tracking-widest">{item}</a>
            ))}
          </div>

          <button className="md:hidden text-cyan-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28}/> : <Menu size={28}/>}
          </button>
        </div>
      </nav>

      {/* --- MOBILE NAV --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{opacity:0, y:-20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-20}} className="fixed inset-0 z-40 bg-[#080b12] pt-24 px-6 md:hidden">
            {['Home', 'About', 'Skills', 'Portfolio', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="block py-4 text-2xl font-bold border-b border-white/5">{item}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HERO SECTION --- */}
      <section id="home" className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between min-h-screen">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="md:w-1/2 space-y-6 z-10">
          <h3 className="text-xl font-medium tracking-wide">Hi, Myself</h3>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white">Saishree <span className="text-cyan-400">Shet</span></h1>
          <h2 className="text-2xl md:text-3xl font-bold"> I&apos;m a <span className="text-cyan-400">Frontend Developer</span></h2>
          <p className="text-slate-400 max-w-md leading-relaxed text-lg">Designing and building high-performance, beautiful digital experiences with modern web technologies.</p>
          
          {/* --- UPDATED SOCIAL LINKS --- */}
          <div className="flex gap-4">
            {SOCIAL_LINKS.map(({ Icon, href }, i) => (
              <motion.a 
                key={i} 
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{scale:1.1, y:-5}} 
                className="p-3 rounded-full border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400 hover:text-[#080b12] transition-all cursor-pointer shadow-[0_0_15px_rgba(34,211,238,0.2)]"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>

        <a 
  href="/Saishree_Shet_Resume.pdf" 
  download="Saishree_Shet_Resume.pdf"
  target="_blank" 
  rel="noopener noreferrer"
>
  <button className="bg-cyan-500 hover:bg-cyan-400 text-[#080b12] font-extrabold px-10 py-4 rounded-full transition-all shadow-[0_0_30px_rgba(34,211,238,0.3)] uppercase tracking-widest text-sm">
    Download CV
  </button>
</a>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="relative mt-20 md:mt-0">
          <div className="w-72 h-72 md:w-[480px] md:h-[480px] bg-cyan-500 rounded-full overflow-hidden shadow-[0_0_80px_rgba(34,211,238,0.15)] border-[12px] border-white/5">
            <img src="https://media.licdn.com/dms/image/v2/D4D03AQG6hzEiXuJ-nw/profile-displayphoto-shrink_400_400/B4DZjSRUXpHsAo-/0/1755874413880?e=1770249600&v=beta&t=vq_hiI_S5GQo7pPdMsbslZdy_DdEDGl19-J92W5k7OI" alt="Profile" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
          <div className="absolute -inset-4 bg-cyan-400/20 blur-[120px] rounded-full -z-10 animate-pulse"></div>
        </motion.div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-24 px-6 bg-[#0f1624]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="md:w-1/2 flex justify-center">
            <div className="relative p-5 border-4 border-cyan-400 rounded-[2.5rem]">
              <img src="https://media.licdn.com/dms/image/v2/D4D03AQG6hzEiXuJ-nw/profile-displayphoto-shrink_800_800/B4DZjSRUXpHsAk-/0/1755874413885?e=1770249600&v=beta&t=wM7BBPVNhVtm6bYA0ni5esA1WYcY0FUkcXo_zkvgssw" className="w-80 h-[450px] object-cover rounded-[1.8rem] shadow-2xl" alt="About" />
            </div>
          </motion.div>

          <div className="md:w-1/2 space-y-8">
            <h2 className="text-5xl font-extrabold">About <span className="text-cyan-400">Me</span></h2>
            <h3 className="text-2xl font-bold text-white/90 underline decoration-cyan-400 decoration-4 underline-offset-8 font-sans">Frontend Developer!</h3>
            <p className="text-slate-400 text-lg leading-relaxed">I specialize in creating pixel-perfect, responsive websites. My goal is to combine technical efficiency with creative design to provide the best user experience possible.</p>
            
            <Link href="/aboutmore">
              <button className="bg-cyan-500 text-[#080b12] font-black px-12 py-4 rounded-full hover:bg-cyan-400 transition-all shadow-lg uppercase tracking-tighter">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* --- SKILLS & EXTRA CURRICULAR --- */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-12">Technical <span className="text-cyan-400">Skills</span></h2>
            <div className="space-y-8">
              {SKILLS.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between mb-3">
                    <span className="font-bold flex items-center gap-2 group-hover:text-cyan-400 transition-colors">{skill.icon} {skill.name}</span>
                    <span className="text-cyan-400 font-mono">{skill.level}</span>
                  </div>
                  <div className="h-3 bg-white/5 rounded-full overflow-hidden border border-white/10 p-[2px]">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: skill.level }} transition={{ duration: 1.5, ease: "easeOut" }} className="h-full bg-cyan-400 rounded-full shadow-[0_0_15px_#22d3ee]"/>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem] self-start">
            <h3 className="text-2xl font-bold mb-8 text-cyan-400 uppercase tracking-widest">Milestones & Impact</h3>
            <ul className="space-y-6">
              {["Participated in SIH Hackathon 2025", "Member of SOSC(Sahyadri Open Source Community)", "Member of ISDC","Selected for Elite Super 60 MERN Stack Program", "Open Source Contributor"].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-slate-300 group cursor-default">
                  <CheckCircle2 className="text-cyan-400 mt-1 shrink-0" size={20}/>
                  <span className="group-hover:text-white transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* --- CERTIFICATES --- */}
      <section id="certifications" className="py-24 px-6 bg-[#0f1624]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 uppercase tracking-tighter">Certifications</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {CERTIFICATES.map((cert) => (
              <motion.div key={cert.id} whileHover={{ y: -10 }} className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden group">
                <div className="h-52 overflow-hidden relative">
                  <img src={cert.img} alt={cert.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1624] to-transparent opacity-80" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{cert.title}</h3>
                  <p className="text-cyan-400 text-sm font-bold tracking-widest uppercase mb-4 font-sans">{cert.provider} • {cert.date}</p>
                 
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PORTFOLIO (PROJECTS) --- */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-16 italic">Latest <span className="text-cyan-400 underline decoration-white">Projects</span></h2>
          <div className="grid md:grid-cols-2 gap-10">
            {PROJECTS.map((project) => (
              <Link href={`/projects/${project.id}`} key={project.id} className="block">
                <motion.div whileHover={{ scale: 1.02 }} className="relative group overflow-hidden rounded-[2.5rem] bg-slate-800 aspect-video cursor-pointer">
                  <img src={project.img} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1" alt={project.title} />
                  <div className="absolute inset-0 bg-cyan-500/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm p-10 text-center">
                    <h4 className="text-3xl font-black text-[#080b12] mb-2 uppercase">{project.title}</h4>
                    <p className="text-[#080b12] font-bold mb-6 italic">{project.desc}</p>
                    <div className="flex gap-4">
                      <div className="p-4 bg-[#080b12] text-white rounded-full shadow-xl">
                        <ExternalLink size={24}/>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-24 px-6 bg-[#0f1624]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-6xl font-black mb-16 uppercase tracking-tighter">Contact <span className="text-cyan-400">Me</span></h2>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 outline-none focus:border-cyan-400 transition-all backdrop-blur-md placeholder:text-slate-500 font-medium font-sans" />
              <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 outline-none focus:border-cyan-400 transition-all backdrop-blur-md placeholder:text-slate-500 font-medium font-sans" />
            </div>
            <textarea rows="6" placeholder="Your Message..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 outline-none focus:border-cyan-400 transition-all backdrop-blur-md placeholder:text-slate-500 font-medium font-sans"></textarea>
            <div className="text-center">
              <button className="bg-cyan-500 hover:bg-cyan-400 text-[#080b12] font-black px-16 py-5 rounded-full transition-all shadow-[0_10px_40px_rgba(34,211,238,0.3)] uppercase tracking-widest text-sm">Send Message</button>
            </div>
          </form>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-10 text-center border-t border-white/5 text-slate-500 text-sm font-sans">
        <p>© 2026 Saishree Shet Portfolio. All Rights Reserved.</p>
      </footer>
    </div>
  );
}