import React, { useState, useEffect } from 'react';
import {
  Home,
  User,
  Zap,
  Code,
  Folder,
  Linkedin,
  Github,
  Mail,
  Download,
  Terminal,
  Database,
  Feather,
  GitBranch,
  FileText,
  MousePointer,
  Monitor,
  Heart,
  Briefcase,
  BookOpen,
  Award,
  Send,
  Shell,
  BarChart3,
  
} from 'lucide-react';




// Utility for smooth scrolling
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// --- Data Definitions ---

const navLinks = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'about', icon: User, label: 'About' },
  { id: 'skills', icon: Zap, label: 'Skills' },
  { id: 'projects', icon: Folder, label: 'Projects' },
  { id: 'resume', icon: FileText, label: 'Resume' },

];

const professionalSkills = [
  'Python', 'Machine Learning','Gemini API', 'Flask',
  'SQL'
];

const tools = [
  { name: 'VS Code', icon: Terminal },
  { name: 'Anaconda', icon: Shell },
  { name: 'Streamlit', icon: GitBranch },
  
  { name: 'Git/Github', icon: Github },
 
];

const projects = [
  {
    title: "Sign Language Recognition System",
    description: "A system to detect human signs for communication develop by using YOLO model.",
    tech: ["Python", "ML"],
    github: "https://github.com/knehaprajapati/sign_language_recognition",
    // demo: "https://drive.google.com/file/d/10rdp8SFnivzZU0mTk_Vf28-evsXI7pvo/view",
    image: "/sign_language.jpg"
  },
  {
    title: "Weather App",
    description: "A weather forecasting app using Python.",
    tech: ["Python", "API"],
    github: "https://github.com/knehaprajapati/weather_app",
    demo: "https://weather-app-km.onrender.com",
    image: "/weather.jpg"
  },
  {
    title: "Agriyield",
    description: "An AI Yield Prediction System for Agriculture Crops.",
    tech: [ "Python", "Machine Learning", "Flask"],
    github: "https://github.com/knehaprajapati/ai_yield_prediction",
    demo: "https://ai-yield-prediction.onrender.com/",
    image: "/agriyield_prediction_home.jpg"
  },
  {
    title: "Number Guessing Game",
    description: "A fun number guessing project built using Python.",
    tech: ["Python", "Streamlit"],
    github: "https://github.com/knehaprajapati/game",
    demo: "https://m7jexwjeyv3h2mvdgbjxhf.streamlit.app/",
    image: "/guessnum.png"
  },
  {
    title: "A Real-Time Gamified Coding Platform",
    description: "A platform for beginners through which they can Level-Up their problem solving skill.",
    tech: ["Python", "HTML","CSS","React","Gemini","Mongo DB"],
    // github: "",
    // demo: "",
    image: "/level_up.jpg"
  },
  {
    title: "Agrileaf",
    description: "An AI Leaf Diseases Detection System and treatement suggestion + Prevention System.",
    tech: ["Python","TensorFlow","Streamlit","Hugging Face"],
    github: "https://github.com/knehaprajapati/Agrileaf.git",
    demo: "https://agrileaf-1.onrender.com/",
    image: "/crops.jpeg"
  }
];


const socialLinks = [
  { href: 'https://github.com/knehaprajapati', icon: Github, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/neha-prajapati-66498b252/', icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:nehaprajapatil40@gmail.com', icon: Mail, label: 'Email' }
  
];

// --- Components ---



const Typewriter = ({ texts, typingSpeed = 120, deleteSpeed = 70, pauseTime = 1200 }) => {
  const [index, setIndex] = useState(0); 
  const [subIndex, setSubIndex] = useState(0); 
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !deleting) {
      // Pause before deleting
      setTimeout(() => setDeleting(true), pauseTime);
      return;
    }

    if (subIndex === 0 && deleting) {
      // Move to next word
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? deleteSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, texts, typingSpeed, deleteSpeed, pauseTime]);

  return <span className="text-violet-400 font-bold">{texts[index].substring(0, subIndex)}</span>;
};



const NavBar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-black/30 backdrop-blur-xl border-b border-white/10 shadow-lg">
      <div className="container mx-auto flex items-start justify-between px-5 py-3">
        {/* Brand/Logo */}
        <a href="#home" className="text-2xl font-bold text-violet-400 hover:text-violet-300 transition duration-300" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
          NP
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-10 text-lg font-semibold">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-lg font-semibold transition duration-300 ${
                  isActive ? 'text-violet-400 drop-shadow-[0_0_8px_rgba(139,92,246,0.8)]'
  : 'text-gray-300 hover:text-violet-400'
                }`}
              >
                <link.icon size={16} />
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <Code size={24} /> : <Home size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
{isOpen && (
  <nav className="
    md:hidden 
    flex flex-col items-center 
    pb-4 space-y-2 
    bg-black/30 backdrop-blur-xl
    border-t border-white/10
  ">
    {navLinks.map((link) => (
      <a
        key={link.id}
        href={`#${link.id}`}
        onClick={(e) => {
          e.preventDefault();
          scrollToSection(link.id);
          setIsOpen(false);
        }}
        className={`
          w-full text-center py-3 px-4
          text-gray-300
          hover:text-violet-400
          transition duration-300
          ${activeSection === link.id ? 'text-violet-400 font-semibold' : ''}
        `}
      >
        {link.label}
      </a>
    ))}
  </nav>
)}

    </header>
  );
};

const SectionTitle = ({ children, id, Icon }) => (
  <h2
    id={id}
    className="text-4xl sm:text-5xl font-extrabold text-white mb-12 flex items-center justify-center space-x-3 pt-20"
  >
    <Icon className="text-violet-400 " size={32} />
    <span>{children}</span>
  </h2>
);



const CursorGoldTrail = () => {
  useEffect(() => {

    const createParticle = (x, y, type) => {
      const particle = document.createElement("div");
      particle.className = type === 1 ? "gold-star" : "gold-dust";

      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;

      document.body.appendChild(particle);

      setTimeout(() => particle.remove(), 900);
    };

    const handleMove = (e) => {
      // 1st trail → big shiny gold star
      createParticle(e.clientX, e.clientY, 1);

      // 2nd trail → tiny gold dust
      createParticle(e.clientX + Math.random() * 20 - 10, e.clientY + Math.random() * 20 - 10, 2);
    };

    window.addEventListener("mousemove", handleMove);

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return null;
};





const HomeSection = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-start justify-center overflow-hidden pt-20"
  >
    {/* 🔥 PARALLAX BACKGROUND IMAGE */}
    <div
      className="
        absolute inset-0 
        bg-[url('/home-bg.jpg')] 
        bg-cover bg-center 
        bg-no-repeat
        scale-110
        will-change-transform
      "
      style={{
        transform: "translateY(var(--scrollY))",
      }}
    ></div>

    {/* DARK OVERLAY */}
    <div className="absolute inset-0 bg-black/60"></div>

    {/* CONTENT */}
    <div className="relative z-10 container mx-auto p-6 flex flex-col md:flex-row items-center justify-between gap-12 ">
      
      {/* TEXT */}
      <div className="md:w-1/2 text-center md:text-left">
        <p className="text-2xl text-white font-semibold mb-3">
          Hi There! <span className="ml-2 text-4xl inline-block animate-wave">👋🏻</span>
        </p>

        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          This is <span className="text-violet-400">Neha Prajapati</span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-300 mb-8 h-8">
          <Typewriter texts={['AIML Developer...', 'Canva Designer...']} />
        </p>

        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("projects");
          }}
          className="
            inline-block px-6 py-3 bg-violet-600 text-white font-semibold rounded-lg
            transition hover:scale-105 hover:shadow-[0_0_20px_rgba(139,92,246,0.7)]
          "
        >
          See Projects
        </a>
      </div>

      {/* IMAGE */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="/girl.gif"
          alt="Neha"
          className="w-full max-w-md"
        />
      </div>
    </div>
  </section>
);


const AboutSection = () => (
  <section id="about" className="py-15 bg-transparent" >
    <div className="container mx-auto" >

      <SectionTitle id="about" Icon={User}>
        Know Who I'M
      </SectionTitle>

      <div className="flex flex-col items-center gap-10">

        {/* 🎥 BIG Video Section */}
        <div className="w-full flex justify-center">
          <video
  className="w-full max-w-4xl rounded-xl shadow-2xl border-2 border-violet-500"
  src="/myyy.mp4"
  controls
  preload="metadata"
  playsInline
></video>

        </div>

        {/* ✨ QUOTE */}
        <blockquote className="border-l-4 border-violet-400 pl-4 py-3 italic text-gray-200 text-xl max-w-3xl text-center">
          "Turning Imagination Into Innovation"
        </blockquote>

        {/* Signature */}
        <p className="text-violet-400 font-bold text-xl text-right w-full max-w-3xl">
          — Neha Prajapati
        </p>

      </div>

    </div>
  </section>
);

const SkillsSection = () => (
  <section
    id="skills"
    className="
      relative py-20
      bg-[url('/home-bg.jpg')]
      bg-fixed bg-center bg-cover bg-no-repeat
    "
  >
    {/* Dark overlay for readability */}
    <div className="absolute inset-0 bg-black/70"></div>

    <div className="relative container mx-auto p-6">

      {/* MAIN TITLE */}
      <SectionTitle id="skills" Icon={Zap}>
        Professional Skillset
      </SectionTitle>

      <div className="space-y-20">

        {/* ⭐ PROFESSIONAL SKILLSET */}
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-10">
            {professionalSkills.map((skill) => (
              <div
                key={skill}
                className="
                  w-48 h-32 flex items-center justify-center
                  rounded-xl border border-purple-500
                  bg-transparent
                  shadow-[0_0_15px_rgba(168,85,247,0.5)]
                  hover:shadow-[0_0_30px_rgba(168,85,247,0.9)]
                  transition-all duration-300 hover:scale-110
                "
              >
                <span className="text-white text-xl font-semibold">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ⭐ TOOLS */}
        <div className="text-center">
          <h3 className="text-4xl font-extrabold text-white mb-10">
            Tools I Use
          </h3>

          <div className="flex flex-wrap justify-center gap-10">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="
                  w-48 h-32 flex flex-col items-center justify-center
                  rounded-xl border border-purple-500
                  bg-transparent
                  shadow-[0_0_15px_rgba(168,85,247,0.5)]
                  hover:shadow-[0_0_30px_rgba(168,85,247,0.9)]
                  transition-all duration-300 hover:scale-110
                "
              >
                <tool.icon size={45} className="text-purple-300 mb-2" />
                <span className="text-gray-200 font-medium">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  </section>
);



const ProjectCard = ({ title, description, tech, github, demo, image }) => (
  <div className="
    bg-transparent rounded-xl overflow-hidden 
    border border-violet-700/40 
    hover:border-violet-500 
    transition duration-500 
    hover:shadow-[0_0_20px_4px_rgba(168,85,247,0.5)]
    shadow-xl 
    flex flex-col
  ">
    
    {/* Image Box */}
    <div className="w-full h-40 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover hover:scale-110 transition duration-500"
      />
    </div>

    {/* Card Content */}
    <div className="p-6 flex flex-col flex-grow">
      <h4 className="text-2xl font-bold text-violet-400 mb-3">{title}</h4>
      <p className="text-gray-300 mb-4 flex-grow">{description}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tech.map((t) => (
          <span 
            key={t} 
            className="text-xs bg-violet-900/50 text-violet-300 px-2 py-1 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex space-x-4 mt-auto">
        {github && (
 <a
    href={github}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-2 px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-violet-600 transition duration-300"
  >
    <Github size={18} />
    <span>GitHub</span>
  </a>
)}

        {demo && (
  <a
    href={demo}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-2 px-4 py-2 bg-violet-600 text-white rounded-md hover:bg-violet-700 transition duration-300"
  >
    <Code size={18} />
    <span>Demo</span>
  </a>
)}
      </div>
    </div>

  </div>
);

const ProjectsSection = () => (
  <section id="projects" className="py-16 bg-transparent">
    <div className="container mx-auto p-6">
      
      <SectionTitle id="projects" Icon={Folder}>
        My Recent Works
      </SectionTitle>

      <p className="text-center text-gray-400 mb-10 text-xl">
        Here are a few projects I've worked on recently.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

    </div>
  </section>
);

const ResumeSection = () => (
  <section
    id="resume"
    className="
      relative flex flex-col items-center justify-center
      min-h-screen p-6 overflow-hidden
      bg-[url('/home-bg.jpg')]
      bg-fixed bg-cover bg-center bg-no-repeat
    "
  >
    {/* DARK OVERLAY */}
    <div className="absolute inset-0 bg-black/60"></div>

    {/* 👇 TUMHARA ORIGINAL CONTENT (UNCHANGED) */}
    <div className="relative z-10 flex flex-col items-center">
      {/* Resume Image */}
      <img
        src="/hello.jpg"  // ⚠️ Put your resume image in public folder
        alt="Resume"
        className="w-[80%] max-w-4xl h-auto rounded-lg shadow-2xl object-contain mb-6"
      />

      {/* Resume Button */}
      <a
        href="/np_resume (1).pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="
          px-6 py-3 bg-violet-600 text-white font-semibold rounded-lg 
          shadow-lg transition duration-300 transform 
          hover:scale-105 hover:shadow-[0_0_18px_4px_rgba(139,92,246,0.7)]
        "
      >
        DOWNLOAD 🔻
      </a>
    </div>
  </section>
);





const CSSection = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: new FormData(form),
    })
      .then((res) => res.json())
      .then(() => {
        setShowPopup(true);
        form.reset();

        setTimeout(() => {
          setShowPopup(false);
        }, 3000);
      });
  };

  return (
    <section id="cs-section" className="py-16 bg-transparent">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* CONTACT CARD */}
        <div className="max-w-md w-full backdrop-blur-lg bg-white/5 border border-white/20 rounded-xl p-8 shadow-xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Contact Me</h2>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-5">

            <input
            type="hidden"
            name="access_key"
            value={import.meta.env.VITE_WEB3FORMS_KEY}
            />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 mt-2 rounded-lg bg-violet-600 hover:bg-violet-700 text-white font-semibold transition-transform hover:scale-105"
            >
              Send
            </button>
          </form>
        </div>

        {/* RIGHT IMAGE */}

        <div className="flex justify-center">
          <img
            src="/my_pic.jpg"
            alt="Contact Visual"
            className="w-60 h-96 rounded-full shadow-lg object-cover  transition-all duration-300 hover:shadow-[0_0_35px_8px_rgba(139,92,246,0.8)] animate-float"
          />
        </div>
      </div>
      

      {/* SOCIAL SECTION */}
      <div className="text-center mt-16">
        <h2 className="text-3xl font-bold text-white mb-6">Find Me On⚡</h2>

        <div className="flex justify-center gap-10 text-4xl">

          <a
            href="https://github.com/knehaprajapati"
            target="_blank"
            className="text-gray-300 hover:text-violet-400 transition transform hover:scale-110"
          >
            <i className="fab fa-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/neha-prajapati-66498b252"
            target="_blank"
            className="text-gray-300 hover:text-violet-400 transition transform hover:scale-110"
          >
            <i className="fab fa-linkedin"></i>
          </a>

          <a
            href="https://instagram.com/_official.nehaprajapati"
            target="_blank"
            className="text-gray-300 hover:text-violet-400 transition transform hover:scale-110"
          >
            <i className="fab fa-instagram"></i>
          </a>

          <a
            href="https://www.youtube.com/channel/UCq2RVyHUcsD5cM4MX4AeFvw"
            target="_blank"
            className="text-gray-300 hover:text-violet-400 transition transform hover:scale-110"
          >
            <i className="fab fa-youtube"></i>
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=100084730960331"
            target="_blank"
            className="text-gray-300 hover:text-violet-400 transition transform hover:scale-110"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </div>
        

          

      {/* SUCCESS POPUP */}
      {showPopup && (
        <div className="fixed bottom-6 right-6 bg-violet-400 text-black px-6 py-3 rounded-xl shadow-xl animate-bounce">
          ✅ Message Sent Successfully!
        </div>
      )}
    </section>
  );
};







const FooterSection = () => (
  <footer className="bg-transparent py-5 border-t border-gray-700">
    <div className="container mx-auto px-6">

      <div className="flex items-center justify-between text-gray-400 text-sm">

        {/* LEFT SIDE */}
        <p className="flex items-center gap-2">
          Designed and Developed by 
          <span className="text-violet-400 font-semibold">Neha Prajapati</span> with

          {/* Heartbeat emoji */}
          <span 
            className="text-red-500 animate-pulse"
            style={{ fontSize: "16px" }}
          >
            ❤️
          </span>
...
        
        </p>

        {/* RIGHT SIDE */}
        <p className="text-gray-500">
          Copyright © 2025
        </p>

      </div>

    </div>
  </footer>
);

const useScrollGradient = () => {
  const [gradient, setGradient] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      const percent = Math.min(scrollY / height, 1);
      setGradient(percent * 100);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return gradient;
};


// --- Main App Component ---

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const gradient = useScrollGradient();

  // ✅ PARALLAX SCROLL EFFECT — YAHI SAHI JAGAH HAI
  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.style.setProperty(
        "--scrollY",
        `${window.scrollY * 0.3}px`
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = { threshold: 0.5 };


    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, observerOptions);

    navLinks.forEach(link => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="min-h-screen font-sans transition-colors duration-700"
      style={{
        background: `linear-gradient(180deg,
          rgb(10,10,25) 0%,
          rgb(20,10,40) ${gradient}%,
          rgb(5,5,15) 100%)`
      }}
    >
      <NavBar activeSection={activeSection} />

      <main className="pt-20 relative z-10">
        <CursorGoldTrail />
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ResumeSection />
        <CSSection />
      </main>

      <FooterSection />
    </div>
  );
};






export default App;