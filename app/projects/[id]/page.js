"use client";
import { useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, Globe, ArrowLeft, HeartPulse, ShieldCheck, 
  CheckCircle2, Sparkles, Activity, X, Users, Zap 
} from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function ProjectDetail() {
  const { id } = useParams();
  const [selectedImg, setSelectedImg] = useState(null);

  const allProjects = {
    "AURA-AI": {
      title: "Aura.ai",
      targetLabel: "Govt. of Odisha (SIH)",
      techLabel: "n8n & Gemini AI",
      fullDesc: "Developed for the Smart India Hackathon (SIH) for the Government of Odisha, Aura-ai is an AI-powered health awareness platform designed to bridge information gaps and counter medical misinformation.",
      tech: ["n8n", "Node.js", "React", "Google Gemini", "WhatsApp API"],
      github: "https://github.com/saishree19-shet/aura-ai",
      vercel: "https://team-mate-alpha.vercel.app/",
      features: [
        "Verified, easy-to-understand health information",
        "Early detection support through interactive Q&A",
        "Counter-misinformation engine with reliable facts",
        "Location-based alerts for outbreaks & vaccinations",
        "Regional medical knowledge tailored to Odisha",
        "Multi-language support for regional inclusivity",
        "Personalized preventive health tips",
        "Direct connection to verified healthcare facilities"
      ],
      mainImg: "https://i.postimg.cc/jS5J6HVb/Screenshot-2025-09-25-213200.png",
      gallery: [
        { title: "Mobile UI Flow", url: "https://media.licdn.com/dms/image/v2/D4E22AQEpf5hUWzGfWQ/feedshare-shrink_1280/B4EZmOmKVgIoAs-/0/1759033995636?e=1770249600&v=beta&t=jYtdG4WjO2i2pCOmAQrQ3Ps7nIVMv0OWY7QUuplJ5yE" },
        { title: "AI Agent Workflow", url: "https://media.licdn.com/dms/image/v2/D4E22AQExH-lTlyQS1Q/feedshare-shrink_2048_1536/B4EZmOmKVQKsA0-/0/1759033995248?e=1770249600&v=beta&t=3yrtngriIaqYN6AgfH2O0rD8skYoavF8yOPVtjOVvrE" },
        { title: "WhatsApp Interface", url: "https://media.licdn.com/dms/image/v2/D4E22AQHykt2pSUZ39Q/feedshare-shrink_1280/B4EZmOmKVKIoAs-/0/1759033998650?e=1770249600&v=beta&t=6_O9hDYCeMep7nw2u1A9B8UFPDOJzz549xnuwOxrD-Y" }
      ]
    },
    "teammate": {
      title: "TeamMate",
      targetLabel: "College Students",
      techLabel: "React & Firebase",
      fullDesc: "A Tinder-style matching platform for college students to find project collaborators. Built specifically for Sahyadri College, it uses mutual-interest swiping and real-time chat to orchestrate student synergy.",
      tech: ["React 18", "Node.js", "Firebase Firestore", "Express", "Framer Motion"],
      github: "https://github.com/saishree19-shet/TeamMate",
      vercel: "https://team-mate-ofc9nj4r3-saishreeshet-1847s-projects.vercel.app/",
      features: [
        "Smart Swipe Interface: Tinder-style card swiping",
        "Mutual Matching: Notifications on mutual interest",
        "Real-time Chat: Powered by Firestore listeners",
        "Skill Compatibility: Showcase interests and ideas",
        "Secure Architecture: JWT & Firestore rules",
        "Scalable NoSQL Model: Optimized for performance",
        "DDoS Protection: Express rate limiting",
        "Multi-College Support: Cross-campus connections"
      ],
      mainImg: "https://i.postimg.cc/kGBv2QXt/Screenshot-2026-01-17-115728.png",
      gallery: [
        { title: "Matching Dashboard", url: "https://i.postimg.cc/2jZGhfQL/Screenshot-2026-01-17-115047.png" },
        { title: "Real-time Messaging", url: "https://i.postimg.cc/YCwshCTv/Screenshot-2026-01-17-115959.png" },
        { title: "Swipe Logic", url: "https://i.postimg.cc/T1fXGPdx/Screenshot-2026-01-17-115036.png" }
      ]
    },
    "study-vault": {
      title: "StudyVault",
      fullDesc: "Exclusively for Sahyadri Students, StudyVault is a centralized academic repository. It allows peers to upload high-quality notes, discover module-wise resources, and utilize an AI assistant for instant topic finding.",
      tech: ["Next.js", "Firebase Auth", "Firestore", "Cloudinary", "Google Gemini"],
      github: "https://github.com/saishree19-shet/StudyVault",
      vercel: "https://study-vault-beige.vercel.app/",
      targetLabel: "Sahyadri Students",
      techLabel: "Next.js & Cloudinary",
      features: [
        "Secure Peer-to-Peer Note Sharing",
        "Module-wise Syllabus & Material Access",
        "AI-Powered Topic Discovery Assistant",
        "Exclusively Verified Student Login",
        "Image-to-PDF Resource Conversion",
        "Real-time Resource Pending/Approval System"
      ],
      mainImg: "https://media.licdn.com/dms/image/v2/D5622AQFVf-wg_7vqVA/feedshare-shrink_1280/B56Zuo5EZ7HMAs-/0/1768065097256?e=1770249600&v=beta&t=w5vBNo0KheAuM5JVZ9LYtEc9voofFIX5D9L6khBMBmM",
      gallery: [
        { title: "Dashboard View", url: "https://media.licdn.com/dms/image/v2/D5622AQGSm6F2eHrM4A/feedshare-shrink_2048_1536/B56Zuo5EfDJAAw-/0/1768065097431?e=1770249600&v=beta&t=PFzVhFAJ80CW59_Q46A1Xby9P1TIAeWXXDWX_Q6LzSk" },
        { title: "Upload System", url: "https://i.postimg.cc/nL922b8J/Screenshot-2026-01-10-185512.png" },
        { title: "Environment Config", url: "https://i.postimg.cc/7hZTB0C5/Screenshot-2026-01-10-184033.png" }
      ]
    },
    // Add this entry to your allProjects object inside ProjectDetail component
"restan-bistro": {
  title: "restan-bistro",
  targetLabel: "Super 60 Skill Lab",
  techLabel: "Next.js & Tailwind",
  fullDesc: "Milestone 1 project for Skill Lab. A comprehensive restaurant website clone built with a design-first mindset. Focused on replicating complex layouts, achieving 100% responsiveness, and implementing a seamless dark mode experience.",
  tech: ["Next.js 14", "Tailwind CSS", "Framer Motion", "Component Architecture"],
  github: "https://github.com/saishree19-shet/DineHub",
  vercel: "#",
  features: [
    "Design-First Workflow: Planning spacing and structure before coding",
    "Component-Driven UI: Structured as highly reusable building blocks",
    "Desktop-First Scaling: Robust layouts that scale down perfectly to mobile",
    "Hydration Management: Handled Next.js SafeHydrate issues effectively",
    "Full Dark Theme Support: Seamless switching and high-contrast UI",
    "Refined Navigation: Optimized mobile menu and smooth page flows"
  ],
  mainImg: "https://media.licdn.com/dms/image/v2/D4E22AQH9MigTcx_dXQ/feedshare-shrink_2048_1536/B4EZqsLVP_HEAw-/0/1763825248984?e=1770249600&v=beta&t=u7_eBtWGH0VCaJ-yhYnfBFSL8qjRk3CK2FRFvw6Zb4g",
  gallery: [
    { title: "Hero Layout", url: "https://media.licdn.com/dms/image/v2/D4E22AQEQQgESf1yd1A/feedshare-shrink_2048_1536/B4EZqsLVZXJgAw-/0/1763825251631?e=1770249600&v=beta&t=WakjjR3dxH_nHPMv0aTyflwEPisNRZL_e81eRSpualY" },
    { title: "Responsive Grid", url: "https://media.licdn.com/dms/image/v2/D4E22AQGh23ZEnVt-Tg/feedshare-shrink_2048_1536/B4EZqsLVYGIwAw-/0/1763825252467?e=1770249600&v=beta&t=iEAn1-ePLdaEfrFm8ieWzMOlLIzH-SwedCZMgvpQsNw" },
    { title: "Dark Mode UI", url: "https://media.licdn.com/dms/image/v2/D4E22AQGtsi32A23kSg/feedshare-shrink_2048_1536/B4EZqsLVbeKMAw-/0/1763825251146?e=1770249600&v=beta&t=Y0NUdTABXt2G2k4lcbAPcl-WVAB-a1Ucv2Ttzd2_zOU" }
  ]
}
  };

  const project = allProjects[id] || allProjects["AURA-AI"];

  return (
    <div className="min-h-screen bg-[#080b12] text-white pt-32 pb-20 px-6 font-sans">
      
      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button className="absolute top-10 right-10 text-white hover:text-cyan-400"><X size={40} /></button>
            <motion.img 
              initial={{ scale: 0.8 }} animate={{ scale: 1 }}
              src={selectedImg} className="max-w-full max-h-[85vh] rounded-xl shadow-2xl border border-white/10"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto">
        <Link href="/#portfolio" className="inline-flex items-center gap-2 text-cyan-400 mb-12 hover:gap-4 transition-all font-bold group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform"/> BACK TO PORTFOLIO
        </Link>

        {/* --- MAIN SECTION --- */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group cursor-zoom-in" onClick={() => setSelectedImg(project.mainImg)}>
               <img src={project.mainImg} alt={project.title} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-md">
                {/* Dynamic Icon based on ID */}
                {id === 'teammate' ? <Users className="text-cyan-400 mb-3" size={24} /> : <HeartPulse className="text-cyan-400 mb-3" size={24} />}
                <h4 className="font-bold text-sm uppercase text-slate-300">Target</h4>
                <p className="text-cyan-400 text-xs mt-1 font-bold">{project.targetLabel}</p>
              </div>
              <div className="bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-md">
                {id === 'teammate' ? <Zap className="text-cyan-400 mb-3" size={24} /> : <ShieldCheck className="text-cyan-400 mb-3" size={24} />}
                <h4 className="font-bold text-sm uppercase text-slate-300">Tech Stack</h4>
                <p className="text-cyan-400 text-xs mt-1 font-bold">{project.techLabel}</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="space-y-10">
            <div className="space-y-4">
              <h1 className="text-7xl font-black tracking-tighter leading-none text-white">
                {/* DYNAMIC TITLE SPLIT FOR DESIGN */}
                {project.title.includes('.') ? (
                  <>
                    {project.title.split('.')[0]}<span className="text-cyan-400">.{project.title.split('.')[1]}</span>
                  </>
                ) : (
                  <>
                    {project.title}<span className="text-cyan-400">.</span>
                  </>
                )}
              </h1>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map(t => (
                  <span key={t} className="px-4 py-1.5 bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-[10px] font-bold uppercase rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-slate-300 text-xl leading-relaxed italic border-l-4 border-cyan-500 pl-6 border-opacity-50">
              &quot;{project.fullDesc}&quot;
            </p>

            <div className="space-y-6 bg-white/5 p-8 rounded-[2rem] border border-white/10">
              <h3 className="text-xl font-bold uppercase tracking-widest text-cyan-400 flex items-center gap-2">
                <Sparkles size={20}/> Key Features
              </h3>
              <ul className="grid gap-4">
                {project.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 group">
                    <CheckCircle2 className="text-cyan-400 mt-1 shrink-0" size={18} />
                    <span className="group-hover:text-white transition-colors">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 px-8 py-5 rounded-2xl transition-all font-bold">
                <Github /> GITHUB REPO
              </a>
              <a href={project.vercel} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-cyan-500 text-[#080b12] px-8 py-5 rounded-2xl font-black hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all">
                <Globe /> LIVE PREVIEW
              </a>
            </div>
          </motion.div>
        </div>

        {/* --- GALLERY SECTION --- */}
        <div className="space-y-12">
          <div className="flex items-center gap-4">
            <Activity className="text-cyan-400" size={32} />
            <h2 className="text-4xl font-black uppercase tracking-tighter italic">Platform <span className="text-cyan-400">Sneak Peek</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {project.gallery.map((item, index) => (
              <motion.div 
                key={index} whileHover={{ y: -10 }}
                onClick={() => setSelectedImg(item.url)}
                className="group relative rounded-[2rem] overflow-hidden border border-white/5 shadow-xl cursor-zoom-in"
              >
                <img 
                  src={item.url} alt={item.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 aspect-video md:aspect-square" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080b12] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <h3 className="text-xl font-bold text-cyan-400">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}