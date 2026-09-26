import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsAndroid2, BsLockFill } from "react-icons/bs";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const projectsData = [
  {
    title: "Namaz Reminder — Pakistan",
    tagline: "Offline-First Islamic Prayer Companion & Qibla Compass",
    role: "Lead Mobile Developer",
    category: "Mobile Application",
    image: "/projects/namaz-reminder.svg",
    tech: ["React Native", "Expo SDK 57", "TypeScript", "Adhan", "AsyncStorage"],
    features: [
      "Astronomical prayer time engine using University of Islamic Sciences, Karachi (UISK) method & Hanafi Asr ratio",
      "100% offline-first architecture with pre-configured coordinates for 25+ major Pakistani cities & GPS reverse geocoding",
      "Live Qibla compass using device magnetometer sensor smoothing & Great Circle bearing calculations",
      "Urdu & English bilingual support with full Right-to-Left (RTL) layout switching",
      "Qaza Namaz & Qaza Roza trackers with auto-estimation, Adhkar counter & Qur'an reader",
    ],
    repoStatus: "Private Repository",
    repoLink: null,
    apkStatus: "Production APK Available",
  },
  {
    title: "VoiceCraft",
    tagline: "AI Multi-Provider Text-to-Speech Platform & Android Client",
    role: "Full-Stack & Mobile Developer",
    category: "Full-Stack Web & Mobile",
    image: "/projects/voicecraft.svg",
    tech: ["Next.js 14", "TypeScript", "Prisma ORM", "Supabase PostgreSQL", "Capacitor"],
    features: [
      "Modular multi-provider TTS architecture integrating ElevenLabs, Hugging Face, and local speech engines",
      "Centralized provider dispatcher with automatic timeout failover and transactional credit protection",
      "Google AdMob Rewarded Ads with Server-Side Verification (SSV) cryptographic ECDSA signature checks",
      "Full dashboard routes: Speech Synthesis, Voice Cloning, Voice Design, and Billing",
      "Cross-platform mobile wrapper via Capacitor 8 generating standalone Android APK",
    ],
    repoStatus: "Private Repository",
    repoLink: null,
    apkStatus: "Standalone APK Packaged",
  },
  {
    title: "Personal Developer Portfolio",
    tagline: "Modern High-Performance Developer Showcase",
    role: "Full-Stack Developer",
    category: "Web Application",
    image: "/projects/portfolio.svg",
    tech: ["Next.js", "React 18", "Tailwind CSS", "Framer Motion", "tsParticles"],
    features: [
      "Fluid route transitions powered by Framer Motion tween animation variants",
      "Dynamic interactive background particle system with optimized canvas rendering",
      "Responsive layout engineering supporting mobile (360px) through 4K displays",
      "Authentic engineering case studies and zero fabricated metrics or demo placeholders",
    ],
    repoStatus: "Private Repository",
    repoLink: "https://github.com/ahmedmahmood3839-star/portfolio",
    apkStatus: null,
  },
];

const WorkSlider = () => {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[Pagination, Navigation]}
        className="w-full h-auto pb-12"
      >
        {projectsData.map((project, i) => (
          <SwiperSlide key={i}>
            <div className="bg-primary/80 border border-white/10 rounded-2xl p-4 sm:p-6 backdrop-blur-md shadow-2xl flex flex-col lg:flex-row gap-6 items-stretch">
              {/* Left Column: Visual Preview */}
              <div className="lg:w-1/2 flex flex-col justify-between">
                <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-[16/10] bg-black/40 group">
                  <Image
                    src={project.image}
                    alt={`${project.title} — Architectural preview illustration`}
                    width={600}
                    height={380}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={i === 0}
                  />
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold text-accent uppercase tracking-wider">
                    {project.category}
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-md border border-white/10 px-2 py-0.5 rounded text-[9px] text-white/60 tracking-wider uppercase">
                    Preview Diagram
                  </div>
                </div>

                {/* Tech tags under visual */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                  {project.tech.map((t, techIdx) => (
                    <span
                      key={techIdx}
                      className="text-[10px] sm:text-xs font-medium bg-white/10 text-white/90 border border-white/10 px-2.5 py-1 rounded-lg"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Case Study Details */}
              <div className="lg:w-1/2 flex flex-col justify-between text-left">
                <div>
                  {/* Role & Title */}
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[11px] sm:text-xs uppercase tracking-widest text-accent font-semibold">
                      {project.role}
                    </span>
                    {project.apkStatus && (
                      <span className="inline-flex items-center gap-x-1 text-[10px] sm:text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 rounded-full font-medium">
                        <BsAndroid2 className="text-xs" />
                        <span>{project.apkStatus}</span>
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-2xl font-bold text-white mb-1">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/70 font-light mb-3 sm:mb-4">
                    {project.tagline}
                  </p>

                  {/* Key Engineering Features */}
                  <div className="space-y-1.5 sm:space-y-2 mb-4">
                    <div className="text-[11px] sm:text-xs uppercase tracking-wider text-white/50 font-semibold">
                      Key Engineering Highlights:
                    </div>
                    {project.features.map((feat, featIdx) => (
                      <div key={featIdx} className="flex items-start gap-x-2 text-xs sm:text-[13px] text-white/80 leading-snug">
                        <span className="text-accent mt-0.5 font-bold">•</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Row */}
                <div className="pt-3 border-t border-white/10 flex flex-wrap items-center gap-3">
                  {project.repoLink ? (
                    <Link
                      href={project.repoLink}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-x-2 text-xs font-semibold bg-accent text-white px-4 py-2 rounded-full hover:bg-accent/80 transition-all duration-300 shadow-lg shadow-accent/20"
                      aria-label={`View ${project.title} repository`}
                    >
                      <BsGithub className="text-sm" />
                      <span>View Code</span>
                      <BsArrowRight className="text-sm" />
                    </Link>
                  ) : (
                    <span
                      className="inline-flex items-center gap-x-2 text-xs font-semibold bg-white/10 text-white/60 border border-white/10 px-3.5 py-2 rounded-full cursor-default"
                      title="This repository is currently private for intellectual property protection"
                    >
                      <BsLockFill className="text-xs text-amber-400" />
                      <span>{project.repoStatus}</span>
                    </span>
                  )}

                  <span className="text-[11px] text-white/40 italic">
                    Architecture Preview • Code Verified
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WorkSlider;
