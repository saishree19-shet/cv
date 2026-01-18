"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Music, Code2, ArrowLeft, Sparkles, Zap, GraduationCap, Mic2, Heart, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function AboutMore() {
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };
  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

  return (
    <div className="min-h-screen bg-[#080b12] text-white pt-32 pb-20 px-6 font-sans selection:bg-cyan-500/30">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-4xl mx-auto space-y-20">
        
        <motion.div variants={itemVariants} className="space-y-6">
          <Link href="/#about" className="group inline-flex items-center gap-2 text-cyan-400 font-bold uppercase tracking-widest text-sm transition-all hover:gap-4">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Link>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-tight">Saishree <span className="text-cyan-400 text-shadow-glow">Shet.</span></h1>
          <p className="text-slate-400 text-xl md:text-2xl border-l-4 border-cyan-400 pl-6">"Balancing a 9.85 SGPA in Information Science with 8 years of classical music—logic meets artistic discipline."</p>
        </motion.div>

        <motion.section variants={itemVariants} className="space-y-8">
          <div className="flex items-center gap-4 text-cyan-400"><GraduationCap size={32} /><h2 className="text-3xl font-bold uppercase tracking-tighter italic">Academic Excellence</h2></div>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 transition-all hover:border-cyan-400/50">
              <h3 className="text-4xl font-black text-cyan-400 mb-2">9.85</h3><p className="font-bold">Current SGPA</p><p className="text-slate-400 text-xs mt-2 uppercase">Sahyadri College</p>
            </div>
            <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 transition-all hover:border-cyan-400/50">
              <h3 className="text-2xl font-black">State Rank #3</h3><p className="font-bold text-cyan-400">99.68% (SSLC)</p><p className="text-slate-400 text-xs mt-2 uppercase">623/625 District Topper</p>
            </div>
            <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 transition-all hover:border-cyan-400/50">
              <h3 className="text-2xl font-black">State Rank #8</h3><p className="font-bold text-cyan-400">98.5% (PUC)</p><p className="text-slate-400 text-xs mt-2 uppercase">Govt. PU Karwar Topper</p>
            </div>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="relative group bg-[#0f1624] p-10 md:p-16 rounded-[3rem] border border-white/5 overflow-hidden">
          <Music className="absolute -right-10 -top-10 text-cyan-400/5 w-64 h-64 rotate-12" />
          <div className="flex items-center gap-4 text-cyan-400 mb-8"><Mic2 size={32} /><h2 className="text-3xl font-bold uppercase italic">8 Years of Patience</h2></div>
          <p className="text-slate-300 text-lg leading-relaxed mb-6 italic">"Hindustani Shastriya Sangeet is my master of patience."</p>
          <p className="text-slate-300 text-lg leading-relaxed">Mastering a single Raga is a journey of thousands of repetitions. This rhythmic discipline gives me a meditative focus and unwavering endurance for debugging complex full-stack systems.</p>
        </motion.section>

        <motion.section variants={itemVariants} className="space-y-8">
          <div className="flex items-center gap-4 text-cyan-400"><BookOpen size={32} /><h2 className="text-3xl font-bold uppercase tracking-tighter italic">Beyond the Code</h2></div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-8 rounded-[3rem] border border-white/10 hover:border-cyan-400/30 transition-all relative overflow-hidden group">
              <Heart className="absolute -right-4 -bottom-4 text-cyan-400/5 w-32 h-32" />
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><Sparkles className="text-cyan-400" size={20} /> The Art of Expression</h3>
              <p className="text-slate-400 leading-relaxed">I refine my communication daily through technical bootcamps and immersive reading, ensuring complex ideas are articulated with clarity.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-[3rem] border border-white/10 hover:border-cyan-400/30 transition-all relative overflow-hidden group">
              <Zap className="absolute -right-4 -bottom-4 text-cyan-400/5 w-32 h-32" />
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><Code2 className="text-cyan-400" size={20} /> Selection for Super 60</h3>
              <p className="text-slate-400 leading-relaxed">Being selected for the Super 60 MERN program marks my evolution from frontend foundations to architecting high-performance scalable systems.</p>
            </div>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="text-center pt-10 border-t border-white/5 flex flex-col items-center gap-4">
          <p className="text-slate-400 text-xl italic font-serif">"Elected member of SOSC • Lifelong student of craft • Building with synergy."</p>
          <div className="flex gap-2 text-cyan-400/40"><Code2 size={20} /><Heart size={20} /><Music size={20} /></div>
        </motion.section>
      </motion.div>
    </div>
  );
}