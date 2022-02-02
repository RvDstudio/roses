import { Footer, Header } from "@/components/index";
import { CartProvider } from "@/hooks/use-shopping-cart";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          E-commerce store built with Next.js and Stripe checkout |
          RvDesignStudio
        </title>
        <meta
          name="description"
          content="E-commerce store built with Next.js and Stripe checkout by RvDesignStudio"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Rosarivo:ital@0;1&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      </CartProvider>
      <Toaster />
    </>
  );
}

export default MyApp;
