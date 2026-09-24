import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, ArrowUpRight, Flame, Menu, X } from "lucide-react";
import { useState } from "react";

import heroImage from "@/assets/team-klaas-hero.jpg";
import jumpImage from "@/assets/monster-truck-jump.jpg";
import fireImage from "@/assets/monster-truck-fire.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Team Klaas | Monster Truck Stunt Show" },
      {
        name: "description",
        content:
          "Experience Team Klaas: monster trucks, drifting, burnouts, motorcycle artistry and two-wheel driving.",
      },
      { property: "og:title", content: "Team Klaas | Monster Truck Stunt Show" },
      {
        property: "og:description",
        content:
          "Monster trucks, fire, drifting and precision stunt driving from Team Klaas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const acts = [
  ["01", "Monster trucks", "Big wheels. Heavy impacts. Raw arena energy."],
  ["02", "Drift & burnout", "Smoke, speed and control pushed to the edge."],
  ["03", "Moto artistry", "Precision motorcycle stunts built for the crowd."],
  ["04", "Two-wheel driving", "Cars balanced where four wheels become two."],
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50  bg-background ">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
          <a href="#top" className="font-display text-xl uppercase leading-none" aria-label="Team Klaas home">
            <span className="text-primary">Team</span> Klaas
   
          </a>

          <nav className="hidden items-center gap-8 text-[11px] font-bold uppercase tracking-[0.16em] md:flex" aria-label="Main navigation">
            <a className="nav-link" href="#">The show</a>
            <a className="nav-link" href="#">Pictures</a>
            <a className="nav-link" href="#">About Us</a>
            <a className="nav-link" href="#">Price</a>
          </nav>

          <a href="#contact" className="hidden bg-primary px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground md:inline-flex">
            Contact
          </a>
          <button className="icon-button md:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-foreground/10 bg-background px-5 py-6 md:hidden" aria-label="Mobile navigation">
            <div className="flex flex-col gap-5 font-display text-2xl uppercase">
              <a href="#show" onClick={closeMenu}>The show</a>
              <a href="#pictures" onClick={closeMenu}>Pictures</a>
              <a href="#tour" onClick={closeMenu}>Price / tour</a>
              <a className="text-primary" href="#contact" onClick={closeMenu}>Contact</a>
            </div>
          </nav>
        )}
      </header>

      <section id="top" className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pt-16">
        <img src={"https://www.team-klaas.com/pluginAppObj/pluginAppObj_3_03/033_sb.jpg"} alt="Monster truck launching over crushed cars through fire" width={1920} height={1088} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-[58%_center]" />
        <div className="hero-shade absolute inset-0" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-10 pt-40 md:px-8 md:pb-14">
          <div className="mb-5 flex items-center gap-3 text-[24px] font-bold uppercase tracking-[0.24em] text-accent">
      Monster Truck Stunt Show
          </div>
          <h1 className="hero-title font-display uppercase">
            Live <span className="text-primary">Fast.</span>
          </h1>
          <div className="mt-7 grid items-end gap-8 md:grid-cols-[1fr_auto]">
            <p className="max-w-lg text-lg leading-relaxed text-foreground/80 md:text-xl">
              Monster trucks, fire and precision driving. Team Klaas brings controlled chaos to the arena.
            </p>
            <a href="#show" className="group flex w-fit items-center gap-4 border-b-2 border-accent pb-2 font-bold uppercase tracking-[0.12em] text-accent">
              Enter the show <ArrowDownRight className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" size={20} />
            </a>
          </div>
        </div>
        <div className="hazard-strip relative z-10 h-2 w-full" />
      </section>

      <section id="show" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-12 border-t border-foreground/15 pt-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="section-kicker">The show</p>
            <h2 className="mt-6 font-display text-5xl uppercase leading-[0.92] md:text-7xl">Made for<br />the arena</h2>
            <p className="mt-7 max-w-sm text-lg leading-relaxed text-muted-foreground">
              A full-force programme of monster trucks, drifting, burnouts and precision stunt driving.
            </p>
            <div className="mt-12 divide-y divide-foreground/10 border-y border-foreground/10">
              {acts.map(([number, title]) => (
                <div key={number} className="flex items-center justify-between py-4 text-sm font-bold uppercase">
                  <span className="text-muted-foreground">{number}</span>
                  <span>{title}</span>
                </div>
              ))}
            </div>
          </div>

          <div id="pictures" className="grid grid-cols-2 gap-3 lg:col-span-8 md:gap-5">
            <figure className="group relative aspect-[3/4] overflow-hidden">
              <img src={"https://www.team-klaas.com/pluginAppObj/pluginAppObj_3_03/022_sb.jpg"} alt="Monster truck jumping above crushed cars" width={800} height={1008} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <figcaption className="absolute bottom-0 left-0 bg-primary px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-primary-foreground">Airborne</figcaption>
            </figure>
            <figure className="group relative mt-12 aspect-[3/4] overflow-hidden md:mt-20">
              <img src={"https://www.team-klaas.com/pluginAppObj/pluginAppObj_3_03/032_sb.jpg"} alt="Monster truck surrounded by a ring of fire" width={800} height={1008} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <figcaption className="absolute right-0 top-0 bg-accent px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-accent-foreground">Fire & smoke</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="bg-foreground px-5 py-24 text-background md:px-8 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[0.85fr_1.4fr] md:gap-20">
          <h2 className="font-display text-6xl uppercase leading-[0.84] md:text-8xl">
            More<br />than<br /><span className="text-primary">smoke.</span>
          </h2>
          <div className="grid gap-px bg-background/15 sm:grid-cols-2">
            {acts.map(([number, title, text]) => (
              <article key={number} className="bg-foreground p-6 md:p-8">
                <span className="font-display text-sm text-primary">{number}</span>
                <h3 className="mt-10 font-display text-2xl uppercase">{title}</h3>
                <p className="mt-3 leading-relaxed text-background/65">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="tour" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid items-end gap-12 md:grid-cols-2">
          <div>
            <p className="section-kicker">Price / tour</p>
            <h2 className="mt-6 max-w-xl font-display text-5xl uppercase leading-[0.94] md:text-7xl">Bring the noise to your city.</h2>
          </div>
          <div className="md:pb-2">
            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">Planning a venue, festival or special event? Ask Team Klaas about availability, show requirements and pricing.</p>
            <a href="#contact" className="mt-8 inline-flex items-center gap-3 border-b-2 border-primary pb-2 font-display text-lg uppercase text-primary">
              Start an enquiry <ArrowUpRight size={21} />
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-foreground/10 bg-surface px-5 py-20 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="section-kicker">Info to TEAM KLAAS</p>
            <h2 className="mt-5 font-display text-xl  ">A quick concept made for Team Klaas by Ivan at <a href="https://www.webhjerte.dk/" target="_blank" rel="noreferrer" >WebHjerte</a>. Not the official site, and the real one would use your own photos and video. I would gladly build the full version.</h2>
          </div>
        
        </div>
      </section>

      <footer className="border-t border-foreground/10 px-5 py-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>Team Klaas Monster Truck Stunt Show</span>
          <span>Fire · Steel · Action</span>
        </div>
      </footer>
    </main>
  );
}