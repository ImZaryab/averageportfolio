import HighlightCard from "@/components/HighlightCard";
import LinkBadge from "@/components/LinkBadge";
import TextBadge from "@/components/TextBadge";
import { Spotlight } from "@/components/ui/spotlight-new";
import Image from "next/image";

const socials = [
  {
    title: "linkedIn",
    url: "https://www.linkedin.com/in/zaryab-husain-ghori-30113359/",
  },
  {
    title: "github",
    url: "https://github.com/imzaryab",
  },
  {
    title: "codepen",
    url: "https://codepen.io/ImZaryab",
  },
];

const projects = [
  {
    title: "Anime Reel Builder",
    description:
      "Auto generate ready to publish anime reel for a given voiceover",
    isSideProject: true,
    hasDemo: true,
    hasCode: true,
    demoUrl: "https://anime-reel-builder.vercel.app/",
    codeUrl: "https://github.com/ImZaryab/anime-reel-builder",
  },
  {
    title: "Wallhaven",
    description:
      "A website to download a selection of wallpapers by adding them to a cart.",
    isSideProject: true,
    hasDemo: true,
    hasCode: true,
    demoUrl: "https://wallhaven-rose.vercel.app/",
    codeUrl: "https://github.com/ImZaryab/WallHaven-Server",
  },
  {
    title: "Blogsignal",
    description: "A sample landing page with some fancy✨ animations.",
    isSideProject: true,
    hasDemo: true,
    hasCode: true,
    demoUrl: "https://blogsignal.vercel.app/",
    codeUrl: "https://github.com/ImZaryab/blogsignal",
  },
  {
    title: "AdHost",
    description: "A sample website for a digital marketing agency.",
    isSideProject: true,
    hasDemo: true,
    hasCode: true,
    demoUrl: "https://imzaryab.github.io/adhost/",
    codeUrl: "https://github.com/ImZaryab/adhost",
  },
  {
    title: "AverageBlog",
    description:
      "An example blog site built using Astro and Tailwind, utilizing the power of SSG.",
    isSideProject: true,
    hasDemo: true,
    hasCode: false,
    demoUrl: "https://averageblogastro.vercel.app/",
    codeUrl: "",
  },
  {
    title: "Planzy",
    description:
      "An app that allows participants to create and vote for plans. Built using NextJs, Pocketbase and Tailwind.",
    isSideProject: true,
    hasDemo: true,
    hasCode: true,
    demoUrl: "https://planzy-web.vercel.app/",
    codeUrl: "https://github.com/ImZaryab/planzy-web",
  },
];

export default function Home() {
  return (
    <main className="bg-[#151515] sm:bg-backdrop min-h-dvh w-full flex flex-col gap-10 items-center sm:p-12 selection:bg-slate-700 lowercase overflow-hidden">
      {/* HERO SECTION FOR MD-LG SCREENS */}
      <section className="hidden w-full sm:w-[80%] lg:w-[60%] xl:max-w-[40%] sm:flex justify-center relative">
        <Spotlight />
        <HighlightCard>
          <div className="w-full flex flex-col gap-10">
            <div className="flex items-center gap-4">
              <Image
                src={"/me.jpeg"}
                height={86}
                width={86}
                alt=""
                className="rounded-full"
              />
              <div>
                <h1 className="text-xl text-foreground">Zaryab Husain Ghori</h1>
                <h2 className="text-zinc-400">Designer & Developer</h2>
              </div>
            </div>

            <div className="text-zinc-400">
              <p>
                Deep expertise in building data-intensive web applications and
                end-to-end product ownership from ideation and engineering
                through testing, deployment, and monitoring. Proven ability to
                take products from zero to production in fast-paced startup
                environments.
              </p>
            </div>

            <div className="text-zinc-400">
              <ul className="flex flex-col gap-2">
                <li>Technical Consultant @ Akkar (Jan, 2026 - Mar, 2026)</li>
                <li>Full Stack Engineer @ AIO (Jan, 2024 - Jan, 2026)</li>
                <li>Head of Operations @ Virtury (Jun, 2023 - Dec, 2023)</li>
                <li>Software Engineer @ Virtury (Jan, 2023 - Jun, 2023)</li>
                <li>Full Stack Intern @ Zaytrics (Jul, 2021 - Sep 2021)</li>
                <li>SEO Intern @ E-strats (Jul, 2019 - Sep 2019)</li>
              </ul>
            </div>

            <div className="text-zinc-400 w-full flex justify-end">
              <a
                download={""}
                href="./resume-zaryab.pdf"
                className="py-2 px-6 rounded-full flex items-center gap-1 border border-slate-700 hover:cursor-pointer hover:bg-slate-700 hover:text-white transition duration-300"
              >
                <span>résume</span>
                <Image
                  src={"/download.svg"}
                  height={24}
                  width={24}
                  alt="Download résume button"
                />
              </a>
            </div>
          </div>
        </HighlightCard>
      </section>

      {/* HERO SECTION FOR SMALL SCREENS */}
      <section className="p-4 flex sm:hidden">
        <div className="text-sm">
          <div className="w-full flex flex-col gap-10">
            <div className="flex items-center gap-4">
              <Image
                src={"/scream.webp"}
                height={86}
                width={86}
                alt=""
                className="rounded-full"
              />
              <div>
                <h1 className="text-lg">Zaryab Husain Ghori</h1>
                <h2 className="text-zinc-400">Designer & Developer</h2>
              </div>
            </div>

            <div className="text-zinc-400">
              <p>
                A challenge-driven full stack developer experienced in building
                complex web applications, thriving in fast-paced environments,
                and taking on leadership roles.
              </p>
            </div>

            <div className="text-zinc-400">
              <ul className="flex flex-col gap-2">
                <li>
                  Full Stack Engineer @ AIO <br /> (Jan, 2024 - Present)
                </li>
                <li>
                  Head of Operations @ Virtury <br /> (Jun, 2023 - Dec, 2023)
                </li>
                <li>
                  Software Engineer @ Virtury <br /> (Jan, 2023 - Jun, 2023)
                </li>
                <li>
                  Full Stack Intern @ Zaytrics <br /> (Jul, 2021 - Sep 2021)
                </li>
                <li>
                  SEO Intern @ E-strats <br /> (Jul, 2019 - Sep 2019)
                </li>
              </ul>
            </div>

            <div className="text-zinc-400 w-full flex justify-end">
              <button className="py-2 px-6 rounded-full flex items-center gap-1 border border-slate-700 hover:bg-slate-700 hover:text-white transition duration-300">
                <span>résume</span>
                <Image
                  src={"/download.svg"}
                  height={24}
                  width={24}
                  alt="Download résume button"
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIALS */}
      <section className="w-full sm:w-[80%] lg:w-[60%] xl:max-w-[40%]">
        <div className="flex flex-col gap-2 px-4 sm:px-0">
          <h1 className="text-lg sm:text-xl">Socials</h1>
          <ul className="flex gap-2">
            {socials.map((social, index) => (
              <li key={index}>
                <LinkBadge title={social.title} href={social.url ?? ""} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PROJECTS SECTION FOR MD-LG SCREEN */}
      <section className="hidden sm:block w-full sm:w-[80%] lg:w-[60%] xl:max-w-[40%]">
        <div className="flex flex-col gap-2">
          <h1 className="text-lg sm:text-xl">Projects</h1>
          <ul className="flex flex-col gap-6">
            {projects.map((project, index) => (
              <li key={index} className="relative">
                <HighlightCard>
                  <div className="text-zinc-400 flex flex-col gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h1>{project.title}</h1>
                        <TextBadge isSideProject={project.isSideProject} />
                      </div>
                      <p className="mt-2 text-sm">{project.description}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <LinkBadge
                        border={false}
                        title="demo"
                        href={project.demoUrl ?? "#"}
                        disabled={!project.hasDemo}
                      />
                      <LinkBadge
                        border={false}
                        title="code"
                        href={project.codeUrl ?? "#"}
                        disabled={!project.hasCode}
                      />
                    </div>
                  </div>
                </HighlightCard>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PROJECTS SECTION FOR SMALL SCREENS */}
      <section className="sm:hidden w-full p-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-lg sm:text-xl">Projects</h1>
          <ul className="flex flex-col gap-8">
            {projects.map((project, index) => (
              <li
                key={index}
                className="border border-slate-700 p-4 rounded-xl"
              >
                <div className="text-zinc-400 flex flex-col gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="h-[20px] w-[20px] bg-violet-800 rounded-full"></div>
                      <h1>{project.title}</h1>
                      <TextBadge isSideProject={project.isSideProject} />
                    </div>
                    <p className="mt-2 text-sm">{project.description}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <LinkBadge
                      border={false}
                      title="Demo"
                      href={project.demoUrl ?? "#"}
                      disabled={!project.hasDemo}
                    />
                    <LinkBadge
                      border={false}
                      title="Code"
                      href={project.codeUrl ?? "#"}
                      disabled={!project.hasCode}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
