import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import banner1 from "../public/banner1.png";
import banner2 from "../public/banner2.png";
import banner3 from "../public/banner3.webp";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div id="container">
          <div id="monitor">
            <div id="monitorscreen">
              <Carousel autoPlay={true}>
                <div>
                  <Image src={banner1} alt="Sample" />
                </div>
                <div>
                  <Image src={banner2} alt="Sample" />
                </div>
                <div>
                  <Image src={banner3} alt="Sample" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}