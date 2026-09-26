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
        <title>Ahmad Mehmood | Full-Stack &amp; Mobile Developer</title>
        <meta
          name="description"
          content="Portfolio of Ahmad Mehmood, a Full-Stack and Mobile Developer building modern web applications, React Native experiences and AI-powered tools."
        />
        <meta name="author" content="Ahmad Mehmood" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#f13024" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ahmad Mehmood | Full-Stack &amp; Mobile Developer" />
        <meta
          property="og:description"
          content="Portfolio of Ahmad Mehmood, a Full-Stack and Mobile Developer building modern web applications, React Native experiences and AI-powered tools."
        />
        <meta property="og:url" content="https://github.com/ahmedmahmood3839-star" />
        <meta property="og:site_name" content="Ahmad Mehmood Portfolio" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ahmad Mehmood | Full-Stack &amp; Mobile Developer" />
        <meta
          name="twitter:description"
          content="Portfolio of Ahmad Mehmood, a Full-Stack and Mobile Developer building modern web applications, React Native experiences and AI-powered tools."
        />

        <link rel="icon" href="/favicon.ico" />
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
