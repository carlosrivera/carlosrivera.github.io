import Head from "next/head";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Carlos Rivera - Product Builder",
    description: "",
};

const ExternalLink = ({ href, children }) => (
    <span className="group">
        <a className="text-fx text-lime-400 font-bold transition-all" href={href} target="_blank" rel="noreferrer">
            <span className="underline underline-offset-4 decoration-1">{children}</span>
        </a>
    </span>
);

export default function Home() {
    return (
        <div className="main relative dark bg-[#101113] bg-opacity-30 overflow-hidden min-h-screen">
            <div className="mx-auto">
                <div className="absolute inset-0 bg-bottom bg-no-repeat bg-[#101113] bg-opacity-60 backdrop">
                    <div className="absolute inset-0 bg-bottom main-mask"></div>
                </div>
                <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
                    <Head>
                        <link rel="icon" href="/favicon.ico" />
                        <style>
                            @import url({'"'}https://fonts.googleapis.com/css2?family=Barlow:wght@400;700;800{'"'});
                        </style>
                    </Head>

                    <main className="mt-10 z-20 mx-auto px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-24 lg:px-32 xl:mt-28">
                        <div className="text-left">
                            <h1
                                className="text-4xl tracking-tight font-extrabold
                                          text-transparent sm:text-5xl md:text-6xl"
                            >
                                <span className="inline outline-title-600">I&apos;m</span>{" "}
                                <span className="inline bg-clip-text bg-gradient-to-tr from-lime-500 to-lime-300">
                                    Carlos Rivera
                                </span>
                                <span className="inline outline-title-400">, an</span> <br />
                                <span className="inline outline-title-b-400">Entrepreneur &amp; </span>{" "}
                                <span className="inline bg-clip-text bg-gradient-to-tr from-blue-400 via-blue-500 to-indigo-500">
                                    Product Builder.
                                </span>
                            </h1>
                            <p className="lg:max-w-3xl my-6 text-base text-zinc-400 sm:my-8 sm:text-lg md:my-10 md:text-xl lg:mx-0">
                                Machine Learning &amp; Infrastructure Developer -- Cofunded{" "}
                                <ExternalLink href="https://figuro.la">Figuro</ExternalLink> &amp;{" "}
                                <ExternalLink href="https://synx.ai">Synx.ai</ExternalLink>
                                -- Quant &amp; FinTech Enthusiast -- Previously at HP-Labs, Hydra-Technologies &amp; Microsoft.
                            </p>
                        </div>

                        <div className="flex flex-wrap md:flex-nowrap justify-center my-8 md:inline-flex md:items-center md:mb-0">
                            <img
                                src="/profile-sq.jpg"
                                className="profile w-8/12 sm:w-6/12 md:w-full md:max-w-lg h-auto rounded-full shadow-xl hover:rotate-3 hover:scale-110 transition-all duration-1000"
                                alt="..."
                            />
                            <p className="align-middle text-zinc-400 sm:text-md md:text-lg md:pl-16 md:mt-0 mt-10">
                                I&apos;m the tech-obsessed co-founder and CTO of <label className="text-zinc-100">Figuro</label>
                                . My journey in tech started when I was just 14, diving headfirst into coding and exploring
                                everything from the high-flying world of <label className="text-lime-400">aerospace</label> to
                                the cutting-edge of <label className="text-lime-400">deep tech</label> like{" "}
                                <label className="text-zinc-100">Machine Learning</label>,{" "}
                                <label className="text-zinc-100">3D Programming</label>, and{" "}
                                <label className="text-zinc-100">Blockchain</label>. Over at{" "}
                                <label className="text-zinc-100">Synx</label>, I poured my heart into creating an{" "}
                                <label className="text-zinc-100">end-to-end machine learning infrastructure</label> that served
                                world-class enterprises, streamlining their AI journey from conception to deployment.
                                <br />
                                <br />
                                When I&apos;m not geeking out at work, you can catch me soaking up{" "}
                                <label className="text-zinc-100">sci-fi</label>, hitting the trails, swimming, doing some
                                woodworking, or just chilling on a <label className="text-zinc-100">pub crawl</label> with my
                                dogs.
                                <br />
                                <br />
                                I&apos;m on a constant quest for the best <label className="text-zinc-100">
                                    tacos
                                </label> and <label className="text-zinc-100">craft beer</label>, and I&apos;m always down for a
                                chat or a new collaboration. Feel free to drop me a line if you&apos;re up for some good eats,
                                drinks, or brainstorming on exciting projects!
                            </p>
                        </div>

                        <div className="text-left my-16">
                            <p className="py-4 w-full flex flex-col md:flex-row items-center justify-between md:justify-start">
                                <a
                                    className="w-10/12 my-2 text-center md:w-2/12 md:pr-4"
                                    href="https://github.com/carlosrivera"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button className="w-full text-center text-zinc-300 ring-zinc-400 hover:text-white hover:scale-105 transition-all duration-300 hover:ring-zinc-200 hover:bg-zinc-200 hover:bg-opacity-20 rounded-md ring-2 p-2 px-4 md:mr-4 inline-flex justify-between items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                        </svg>
                                        <span className="grow px-2 font-semibold">GitHub</span>
                                    </button>
                                </a>

                                <a
                                    className="w-10/12 my-2 md:w-2/12 md:pr-4"
                                    href="https://www.linkedin.com/in/jcarlosrivera/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button className="w-full text-center text-zinc-300 ring-zinc-400 hover:text-white hover:scale-105 transition-all duration-300 hover:ring-[#0077B5] hover:bg-[#0077B5] hover:bg-opacity-20 rounded-md ring-2 p-2 px-4 md:mr-4 inline-flex justify-between items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                        </svg>
                                        <span className="grow px-2 font-semibold">LinkedIn</span>
                                    </button>
                                </a>

                                <a
                                    className="w-10/12 my-2 md:w-2/12"
                                    href="https://x.com/carlos_gif"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button className="w-full text-center text-zinc-300 ring-zinc-400 hover:text-white hover:scale-105 transition-all duration-300 hover:ring-slate-800 hover:bg-slate-800 hover:bg-opacity-20 rounded-md ring-2 p-2 px-4 inline-flex justify-between items-center">
                                        <svg
                                            width="14"
                                            height="14"
                                            fill="currentColor"
                                            viewBox="0 0 300 300"
                                            version="1.1"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66" />
                                        </svg>
                                        <span className="grow px-2 font-semibold">Twitter</span>
                                    </button>
                                </a>
                            </p>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
