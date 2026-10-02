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
        <title>Inspire Digital Studio | Ahmad Mehmood</title>
        <meta
          name="description"
          content="Websites, web applications, and mobile app development by Ahmad Mehmood at Inspire Digital Studio. View projects and discuss your next build."
        />
        <meta name="author" content="Ahmad Mehmood" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#f13024" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Inspire Digital Studio | Ahmad Mehmood" />
        <meta
          property="og:description"
          content="Websites, web applications, and mobile app development by Ahmad Mehmood at Inspire Digital Studio. View projects and discuss your next build."
        />
        <meta property="og:url" content="https://modern-portfolio-main-tau.vercel.app/" />
        <meta property="og:site_name" content="Inspire Digital Studio" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Inspire Digital Studio | Ahmad Mehmood" />
        <meta
          name="twitter:description"
          content="Websites, web applications, and mobile app development by Ahmad Mehmood at Inspire Digital Studio. View projects and discuss your next build."
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
