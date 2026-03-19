import Lenis from 'lenis';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Camera, Mail, ArrowUpRight, Instagram, Twitter, Linkedin, Menu, X } from 'lucide-react';
import { BlurReveal, ParallaxText, cn } from './components/ui/Animators';
import { ScrollWordReveal } from './components/ui/ScrollWordReveal';
import { useRef, useState, useEffect } from 'react';

// Image Assets
import heroImg from './assets/images/hero.png';
import bgImg from './assets/images/bg.avif';
import cloudImg from './assets/images/cloud.png';
import scatter1 from './assets/images/scatter1.jpg';
import scatter2 from './assets/images/scatter2.jpg';
import scatter3 from './assets/images/scatter3.jpg';
import scatter4 from './assets/images/scatter4.png';
import scatter5 from './assets/images/scatter5.png';
import bento1 from './assets/images/bento1.png';
import quoteImg from './assets/images/quote.png';

const Loader = ({ onComplete }) => {
  const images = [scatter1, scatter2, scatter3, scatter4, scatter5];

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-white flex items-center justify-center overflow-hidden"
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="relative w-screen h-screen">
        {images.map((src, i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2 w-48 h-60 bg-white border-[8px] border-white shadow-xl rounded-sm"
            initial={{
              x: "-50%",
              y: "-50%",
              opacity: 0,
              scale: 0.5,
              filter: "blur(10px)"
            }}
            animate={{
              x: `calc(-50% + ${(i - 2) * 250 + (Math.random() - 0.5) * 100}px)`,
              y: `calc(-50% + ${(Math.random() - 0.5) * 600}px)`,
              rotate: (Math.random() - 0.5) * 60,
              opacity: 1,
              scale: 1,
              filter: "blur(0px)"
            }}
            transition={{
              duration: 1.5,
              ease: [0.22, 1, 0.36, 1],
              delay: i * 0.1
            }}
          >
            <img src={src} alt="Polaroid" className="w-full h-full object-cover grayscale" />
          </motion.div>
        ))}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
        </motion.div>
      </div>
    </motion.div>
  );
};

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      const show = latest > window.innerHeight * 0.8;
      if (show !== isVisible) setIsVisible(show);
    });
  }, [scrollY, isVisible]);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.nav
          initial={{ y: 100, opacity: 0, x: "-50%" }}
          animate={{ y: 0, opacity: 1, x: "-50%" }}
          exit={{ y: 100, opacity: 0, x: "-50%" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-8 left-1/2 z-50 hidden md:flex"
        >
          <div className="bg-black/90 backdrop-blur-xl px-6 py-3 rounded-full border border-white/10 flex items-center gap-6 shadow-2xl shadow-black/20 text-sm font-medium text-white/90">
            <a href="#home" className="hover:text-gray-300 transition-colors">Home</a>

            <div className="h-4 w-px bg-white/20"></div>
            <a href="#about" className="hover:text-gray-300 transition-colors">About</a>
            <a href="#work" className="hover:text-gray-300 transition-colors">Work</a>
            <a href="#stack" className="hover:text-gray-300 transition-colors">Stack</a>
            <a href="#projects" className="hover:text-gray-300 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // Parallax Logic
  // BG & Clouds are "far away" -> Move very little or static
  // Hero is "near camera" -> Moves more (parallax foreground effect)
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const yCloud = useTransform(scrollYProgress, [0, 1], [0, 600]); // Minimal movement for distance
  const yText = useTransform(scrollYProgress, [0, 1], [0, 400]);

  return (
    <section id="home" ref={ref} className="relative z-20 h-dvh md:h-screen flex flex-col items-center justify-start pt-24 md:pt-32 overflow-hidden">
      {/* Layer 0: Background Image (Sky) */}
      <div className="absolute inset-0 z-0">
        <img src={bgImg} alt="Sky Background" className="w-full h-full object-cover" />
      </div>

      {/* Floating Header Text */}
      <motion.div
        style={{ y: yText }}
        className="absolute top-[35%] md:top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full z-10 pointer-events-none"
      ><BlurReveal delay={3} disabled={isMobile}>
          <ParallaxText baseVelocity={10} className="w-full">
            <h1 className="text-[15vw] md:text-[12vw] flex items-center justify-center font-garamond-serif font-bold tracking-wide text-lg text-white leading-none">
              KARTIKEY
            </h1>
          </ParallaxText>
        </BlurReveal>
      </motion.div>

      {/* Main Composition Wrapper */}
      <div className="relative z-20 w-full max-w-7xl mt-12 md:mt-25 h-[55vh] md:h-[65vh] flex flex-col items-center justify-end">

        {/* Layer 1: Clouds (Behind Hero, Top 40% region) */}
        {/* Positioned absolutely within the wrapper, shifted up to be behind head/shoulders */}
        <motion.div
          style={{ y: yCloud }}
          className="absolute top-[10%] md:top-[15%] left-1/2 -translate-x-1/2 w-[90%] md:w-[70%] z-10 opacity-100"
        >
          <img src={cloudImg} alt="Clouds" className="w-full h-auto object-contain" />
        </motion.div>

        {/* Layer 2: Hero Character (Foreground) */}
        <motion.div
          style={{ y: yHero }}
          className="relative z-50 md:z-20 h-[80%] md:h-full w-full flex justify-center items-end"
          initial={isMobile ? false : { scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 3, ease: [0.2, 0.65, 0.3, 0.9] }}
        >
          <img
            src={heroImg}
            alt="kartikey"
            className="h-full w-auto max-w-full object-contain object-bottom drop-shadow-2xl md:translate-y-0"
          />

          {/* Fog/Blend Effects */}
          {/* Strong White Fog Gradient to blur out bottom of character */}
          <div className="absolute bottom-[-1px] left-1/2 -translate-x-1/2 w-[120vw] h-[30vh] bg-linear-to-t from-white via-white/90 to-transparent z-30" />

          {/* Additional Blur Layer for "Cloud" effect */}
          <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 w-[120vw] h-[15vh] backdrop-blur-xl z-30 mask-image-gradient-up" />
        </motion.div>
      </div>

      {/* FIXED BOTTOM FOG - Anchored to screen bottom for seamless transition */}
      <div className="absolute bottom-0 left-0 w-full z-30 md:z-40 pointer-events-none">

        {/* Blue Glow/Lining at the edge of the white blur */}
        <div className="absolute top-0 left-0 w-full h-40 -translate-y-1/2 bg-linear-to-r from-transparent via-cyan-400/40 to-transparent blur-3xl mix-blend-overlay" />
        <div className="absolute top-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-cyan-500/50 to-transparent blur-sm" />

        {/* Gaussian Blur Transition Layer - Blurs the subject behind the fog */}
        <div
          className="absolute bottom-0 w-full h-[50vh] backdrop-blur-2xl z-10"
          style={{
            maskImage: 'linear-gradient(to top, black 20%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to top, black 20%, transparent 100%)'
          }}
        />

        {/* Strong White Gradient Floor - reduced height to 35vh as requested, but solid at bottom */}
        <div className="relative z-20 w-full h-[35vh] bg-linear-to-t from-white via-white/95 to-transparent" />

      </div>

      <div className="relative z-50 mt-0 md:-mt-16 flex flex-col items-center pb-8">
        <BlurReveal delay={4}>
          <img src={quoteImg} alt="Quote" className="w-[90%] max-w-sm md:w-auto md:max-w-2xl h-auto object-contain mx-auto mix-blend-multiply opacity-80 hover:opacity-100 transition-opacity" />
        </BlurReveal>
      </div>
    </section>
  );
};



const Philosophy = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax images movement
  const y1 = useTransform(scrollYProgress, [0, 1], [800, -800]);
  const y2 = useTransform(scrollYProgress, [0, 1], [1000, -1000]);
  const y3 = useTransform(scrollYProgress, [0, 1], [600, -600]);

  // Button reveal
  const buttonOpacity = useTransform(scrollYProgress, [0.8, 0.9], [0, 1]);
  const buttonY = useTransform(scrollYProgress, [0.8, 0.9], [20, 0]);

  return (
    <section id="about" ref={containerRef} className="relative z-0 h-[250vh] md:h-[300vh] bg-white">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="max-w-4xl px-6 text-center z-10 flex flex-col items-center mt-[-10vh] md:mt-0">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.9]">
            <ScrollWordReveal progress={scrollYProgress} range={[0, 0.2]}>
              Philosophy
            </ScrollWordReveal>
          </h2>
          <div className="text-xl text-gray-500 leading-relaxed font-light max-w-5xl mx-auto space-y-8">
            <p>
              <ScrollWordReveal progress={scrollYProgress} range={[0.1, 0.2]}>
                I believe in building systems that compound skills, code, capital, and audience.
              </ScrollWordReveal>
            </p>
            <p className="text-lg">
              <ScrollWordReveal progress={scrollYProgress} range={[0.2, 0.4]}>
                I don’t choose between technology and creativity. I use technology to scale creativity. I invest early in hard fundamentals, automate what’s repeatable, and reserve my time for decisions that create leverage.
              </ScrollWordReveal>
            </p>
            <p className="text-lg font-medium text-black">
              <ScrollWordReveal progress={scrollYProgress} range={[0.4, 0.6]}>
                Money is not the goal, independence is. Titles don’t matter, control does. I build so that even when I stop working, what I’ve created keeps working.
              </ScrollWordReveal>
            </p>
            <motion.div style={{ opacity: buttonOpacity, y: buttonY }}>
              <button className="bg-black text-white px-6 py-2 rounded-full text-base font-medium hover:bg-zinc-800 transition-colors mt-4">
                Let’s build something that ships.
              </button>
            </motion.div>
            ©Kartikey srivastava
          </div>
        </div>

        {/* Floating Parallax Images passing over */}
        <motion.div style={{ y: y1, rotate: -12 }} className="hidden md:block absolute left-[10%] top-[40%] w-64 h-80 z-20">
          <img src={scatter2} alt="" className="w-full h-full object-cover rounded-sm shadow-2xl border-4 border-white" />
        </motion.div>
        <motion.div style={{ y: y2, rotate: 6 }} className="hidden md:block absolute right-[15%] top-[60%] w-56 h-72 z-20">
          <img src={scatter3} alt="" className="w-full h-full object-cover rounded-sm shadow-2xl border-4 border-white" />
        </motion.div>
        <motion.div style={{ y: y3, rotate: -6 }} className="absolute left-[20%] top-[80%] w-48 h-64 z-0 opacity-50 blur-sm">
          <img src={scatter1} alt="" className="w-full h-full object-cover rounded-sm" />
        </motion.div>
      </div>
    </section>
  );
};

const BentoGrid = () => (
  <section id="work" className="relative z-30 py-32 px-6 max-w-7xl mx-auto bg-white mt-[-100vh]">
    <BlurReveal className="mb-16 text-center">
      <h3 className="text-5xl md:text-6xl font-bold tracking-tighter mt-6 mb-4">Projects</h3>
      <p className="text-gray-400 max-w-md mx-auto">Selected works demonstrating AI, Engineering, and Design.</p>
    </BlurReveal>

    <div id="projects" className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto md:auto-rows-[400px]">

      {/* Project 1: Agriculture AI */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="md:col-span-2 bg-gray-900 rounded-[2rem] p-8 min-h-[400px] relative overflow-hidden group flex flex-col justify-end"
      >
        <img src={scatter2} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" alt="Agriculture AI" />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent" />

        <div className="relative z-10">
          <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">Soil, Crop Health & Pest Prediction</h4>
          <p className="text-gray-300 mb-4 max-w-lg text-sm md:text-base">AI-driven crop health and pest detection using hyperspectral imaging for early risk prediction.</p>
          <div className="flex flex-wrap gap-2">
            {["Python", "NumPy", "Pandas", "Scikit-Learn", "PyTorch", "OpenCV", "HSI"].map(tag => (
              <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs text-white">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Project 2: RAG AI Agent */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="md:col-span-1 bg-black rounded-[2rem] p-8 min-h-[400px] relative overflow-hidden group flex flex-col justify-end"
      >
        <div className="absolute inset-0 bg-linear-to-br from-cream-900 to-brown-900" />
        <img src={bento1} className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay group-hover:rotate-3 transition-transform duration-700" alt="AI Agent" />

        <div className="relative z-10">
          <h4 className="text-xl md:text-2xl font-bold text-white mb-2">RAG-Based AI Agent</h4>
          <p className="text-gray-300 mb-4 text-sm">Retrieval-Augmented Generation agent for intelligent document querying and reasoning.</p>
          <div className="flex flex-wrap gap-2">
            {["LangChain", "Vector DB", "LLMs", "Transformers"].map(tag => (
              <span key={tag} className="px-2 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] text-white">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Project 3: Web Dev */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="md:col-span-3 bg-gray-50 rounded-[2rem] p-8 min-h-[300px] relative overflow-hidden group flex flex-col md:flex-row items-center md:justify-between gap-8"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-linear-to-r from-gray-50 via-gray-50/90 to-transparent z-10" />
          <img src={scatter4} className="absolute right-0 top-0 w-2/3 h-full object-cover opacity-20 grayscale group-hover:grayscale-0 transition-all duration-700" alt="Web Dev" />
        </div>

        <div className="relative z-20 max-w-2xl">
          <h4 className="text-3xl font-bold text-gray-900 mb-2">Web Development & Portfolio</h4>
          <p className="text-gray-600 mb-6 text-lg">Full-stack web portfolio with modern frontend and scalable backend.</p>
          <div className="flex flex-wrap gap-2">
            {["React", "Tailwind CSS", "Framer Motion", "Django", "REST APIs"].map(tag => (
              <span key={tag} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs text-gray-700 font-medium shadow-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-20 hidden md:block">
          <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center text-white">
            <a href="#home"><ArrowUpRight size={24} /></a>
          </div>
        </div>
      </motion.div>

    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-6 border-t border-gray-100 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 bg-white relative z-30">
    <div className="flex flex-col items-center md:items-start">
      <span className="font-bold tracking-tighter text-2xl">KARTIKEY SRIVASTAVA</span>
      <span className="text-sm text-gray-400 mt-1">© 2026 Portfolio. All rights reserved.</span>
    </div>

    <div className="flex gap-6">
      <a href="#" className="p-3 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors"><Instagram size={20} /></a>
      <a href="#" className="p-3 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors"><Twitter size={20} /></a>
      <a href="#" className="p-3 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors"><Linkedin size={20} /></a>
    </div>

    <div className="flex items-center gap-2 text-sm font-medium">
      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
      Available for new projects
    </div>
  </footer>
);

const Contact = () => (
  <section id="contact" className="py-32 px-6 max-w-5xl mx-auto text-center relative z-30 bg-white">
    <BlurReveal>
      <span className="px-3 py-1 rounded-full border border-gray-200 text-xs font-semibold uppercase tracking-wider text-gray-500">Get in Touch</span>
      <h2 className="text-5xl md:text-8xl font-black tracking-tighter mt-8 mb-8 wrap-break-word leading-[0.9]">
        LET'S WORK<br />TOGETHER
      </h2>
      <p className="text-xl text-gray-500 max-w-xl mx-auto mb-12">
        Have a project in mind? I'm always looking for new opportunities to create something unique.
      </p>
      <motion.a
        href="mailto:whykartikey@gmail.com"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-zinc-800 transition-colors"
      >
        <Mail size={20} />
        whykartikey@gmail.com
      </motion.a>
    </BlurReveal>
  </section>
);

import { Skills } from './components/Skills';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: true,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    // <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
    <div className="selection:bg-black selection:text-white bg-white">
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <main className="relative z-0">
        <Navbar />
        <Hero />
        <Philosophy />
        <BentoGrid />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
    // </ReactLenis>
  );
}

export default App;
