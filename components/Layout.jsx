import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      {/* metadata */}
      <Head>
        <title>Ahmad Mehmood | Full-Stack Developer</title>
        <meta
          name="description"
          content="Ahmad Mehmood is a Full-Stack Developer from Pakistan specializing in modern web and mobile applications with React, Next.js, React Native, Node.js, MongoDB, Firebase, and modern frontend technologies."
        />
        <meta
          name="keywords"
          content="Ahmad Mehmood, Full-Stack Developer, Web Developer, React, Next.js, React Native, Node.js, Express, MongoDB, Firebase, Tailwind CSS, Framer Motion, Pakistan"
        />
        <meta name="author" content="Ahmad Mehmood" />
        <meta name="theme-color" content="#f13024" />
        <meta property="og:title" content="Ahmad Mehmood | Full-Stack Developer" />
        <meta
          property="og:description"
          content="Full-Stack Developer from Pakistan focused on building modern, scalable, and user-friendly web and mobile applications."
        />
        <meta property="og:type" content="website" />
      </Head>

      <TopLeftImg />
      <Nav />
      <Header />

      {/* main content */}
      {children}
    </main>
  );
};

export default Layout;
