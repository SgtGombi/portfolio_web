"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const experience = [
	{
		role: "Full Stack Software Engineer",
		company: "P.A.M. Generátor Kft. / ASL Labs",
		period: "2025.07 - Present",
		description:
			"Designing, building, and testing complete digital solutions in agile workflows. Developed internal ERP, web and mobile SaaS products, SQL databases, and APIs. Implemented AI solutions, automation, partner communication, and reporting.",
	},
	{
		role: "Logistics and Warehouse Associate",
		company: "Tolnagro Kft.",
		period: "2021.02 - 2025.07",
		description:
			"Handled goods intake and dispatch, inventory operations, quality checks, transportation planning, delivery, and administration across a multi-domain role.",
	},
	{
		role: "Police Sergeant",
		company: "ORFK - Budaors, Nyiregyhaza",
		period: "2016.09 - 2021.02",
		description:
			"Worked in high-pressure environments with strong responsibility, stress tolerance, effective communication, and teamwork.",
	},
];

const projects = [
	{
		title: "AI Cloud Gallery",
		summary:
			"Laravel-based web platform for photographers and businesses with end-to-end image data management.",
		details:
			"S3 upload pipeline, Lambda processing, callback APIs, and AWS Rekognition face matching. Users can find photos from a selfie in seconds. Scales with S3, Lambda, and CloudFront CDN.",
	},
	{
		title: "National Sports Gala IT Platform",
		summary: "Complete event IT architecture and operations.",
		details:
			"Built participant access web app, host mobile app with real-time API communication, and network infrastructure to ensure uninterrupted operation.",
	},
	{
		title: "GPS Hazard-Zone Transport Monitoring",
		summary:
			"Built for an international company to monitor transport activity in high-risk areas using real-time GPS tracking.",
		details:
			"Implemented geofencing and automated triggers for hazardous-zone entry/exit events, with instant SMS alerting for operators and stakeholders. The system improved reaction time, route visibility, and operational safety across distributed fleets.",
	},
	{
		title: "ERP Development, Operations, Marketing & SEO",
		summary:
			"Designed, developed, and operated a custom ERP ecosystem while supporting business growth through marketing and SEO.",
		details:
			"Covered full ERP lifecycle: requirements, architecture, implementation, deployment, and maintenance. Extended scope with content/technical SEO improvements, analytics-driven optimization, and marketing workflow integration to align operations with measurable business outcomes.",
	},
];

const skillGroups = [
	{
		title: "Core Development",
		items: ["PHP/Laravel", "Python", "Node.js", "React", "Next.js", "HTML/CSS","Tailwind CSS","REST APIs"],
	},
	{
		title: "Cloud, Data, Mobile",
		items: ["AWS (S3, Lambda, EC2, Rekognition)", "CDN", "MySQL", "PostgreSQL", "Flutter", "Data scraping & cleaning"],
	},
	{
		title: "Delivery, Workflow, Tools",
		items: ["Git", "Docker", "CI/CD", "PowerShell", "Bash", "Trello", "Microsoft 365", "AI tools and agents", "Photoshop", "Figma"],
	},
];

export default function Home() {
	const [showScrollTop, setShowScrollTop] = useState(false);

	useEffect(() => {
		const revealTargets = document.querySelectorAll<HTMLElement>("[data-reveal]");
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("is-visible");
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
		);

		revealTargets.forEach((target) => observer.observe(target));
		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		const onScroll = () => setShowScrollTop(window.scrollY > 220);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<main className="w-full pb-28 md:pb-36">
			<div className="min-h-screen flex flex-col ">
				<section className="w-full border-b border-slate-300" aria-label="Section navigation">
					<div className="mx-auto w-full max-w-6xl px-6">
						<nav className="flex flex-wrap gap-x-8 gap-y-3 py-4 text-sm font-medium text-slate-900 md:py-5">
							<a href="#profile" className="transition-colors hover:text-slate-600">
								Profile
							</a>
							<a href="#experience" className="transition-colors hover:text-slate-600">
								Experience
							</a>
							<a href="#projects" className="transition-colors hover:text-slate-600">
								Projects
							</a>
                            <a href="#skills" className="transition-colors hover:text-slate-600">
								Skills
							</a>
							<a href="#education" className="transition-colors hover:text-slate-600">
								Education
							</a>
							<a href="#contact" className="transition-colors hover:text-slate-600">
								Contact
							</a>
						</nav>
					</div>
				</section>


				{/* LANDING RÉSZ */}
				<div className="border-b border-slate-300 mx-auto flex w-full max-w-6xl flex-1 items-center px-6 py-4 md:py-4 lg:py-8">
					<section className="w-full" id="top">
						<div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8 lg:gap-12">
							<div className="md:flex md:flex-col md:justify-center">
								<p className="m-0 text-[1.4rem] font-bold tracking-[0.16em] text-slate-600 xl:pb-3">Hi, my name is Istvan</p>
								<h1 className="xl:pb-8 mb-6 mt-3 text-[clamp(2.4rem,5.6vw,5rem)] font-bold leading-[1.03] tracking-[-0.02em] text-slate-900 md:mb-5">
									Full Stack Software Engineer
								</h1>
								<p className="m-0 max-w-[68ch] text-[clamp(1.02rem,1.3vw,1.2rem)] text-slate-700">Scroll down to get to know me, or use the buttons to get in touch or view my CV.</p>
								<div className="mt-8 xl:mt-20 flex flex-wrap gap-3 md:mt-7">
									<a
										href="#contact"
										className="w-[15rem] rounded-full bg-slate-900 px-7 py-4 text-center text-[0.95rem] font-semibold text-white no-underline transition-colors duration-150 hover:bg-slate-700"
									>
										Contact Me
									</a>
									<a
										href="/CV.pdf"
										target="_blank"
										rel="noreferrer"
										className="w-[15rem] rounded-full border border-slate-600 bg-white px-7 py-4 text-center text-[0.95rem] font-semibold text-slate-900 no-underline transition-colors duration-150 hover:bg-slate-100"
									>
										Get My CV
									</a>
								</div>
							</div>
							<div className="flex justify-center md:items-center">
								<Image
									src="/me.jpg"
									alt="Profile picture of Istvan"
									className="h-[300px] w-[300px] rounded-full border border-slate-300 object-cover md:h-[330px] md:w-[330px] lg:h-[390px] lg:w-[390px]"
									width={1000}
									height={1000}
									sizes="(min-width: 1024px) 390px, (min-width: 768px) 330px, 300px"
									quality={100}
									priority
									style={{ objectPosition: "100% 20%", filter: "brightness(1.2)" }}
								/>
							</div>
						</div>
					</section>
				</div>
			</div>

			{/* PROFIL RÉSZ */}
			<div className="mt-6 md:mt-12 xl:mt-16 mx-auto w-full max-w-6xl space-y-24 px-6 md:space-y-36">
				<section
					id="profile"
					data-reveal
					className="scroll-mt-24 opacity-0 translate-y-8 transition-all duration-700 ease-out [&.is-visible]:translate-y-0 [&.is-visible]:opacity-100"
				>
					<h2 className="mb-8 text-[clamp(1.7rem,2.8vw,2.3rem)] font-semibold tracking-[-0.02em] text-slate-900">Profile</h2>
					<p className="max-w-4xl text-[1.05rem] leading-10 text-slate-700 [text-align:justify]">
						Full Stack Software Engineer focused on scalable web systems and SaaS products. I cover the full lifecycle from architecture to deployment with a backend-oriented,
						data-driven mindset. I use AI and automation to improve delivery speed and quality while keeping communication clear and reliable.
					</p>
					<p className="mt-6 max-w-4xl text-[1.02rem] leading-9 text-slate-700 [text-align:justify]">
						I am also a family father who stays focused on the future. My strongest skill is self-education: for me, continuous learning is not a task, but a genuine hobby.
					</p>
				</section>


				{/* TAPASZTALAT RÉSZ */}
				<section
					data-reveal
					className="scroll-mt-24 relative isolate py-16 md:py-24 border-b border-slate-300 opacity-0 translate-y-8 transition-all duration-700 ease-out [&.is-visible]:translate-y-0 [&.is-visible]:opacity-100"
				>
					<div id="experience" className="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 bg-[linear-gradient(135deg,#0f172a_0%,#1f2a44_100%)]" />
					<h2 className="mb-12 text-[clamp(1.7rem,2.8vw,2.3rem)] font-semibold tracking-[-0.02em] text-white">Experience</h2>
					<div className="relative">
						<div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/35 md:block" />
						<div className="space-y-8 md:space-y-4">
							{experience.map((item, index) => (
								<div key={`${item.role}-${item.period}`} className="relative md:grid md:grid-cols-2 md:gap-12 md:py-8">
									<div className={`${index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"}`}>
										<article className="rounded-2xl border border-white/20 bg-white/95 p-8 shadow-[0_14px_30px_-24px_rgba(15,23,42,0.5)]">
											<p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{item.period}</p>
											<h3 className="mt-2 text-[1.22rem] font-bold text-slate-900">{item.role}</h3>
											<p className="text-sm font-medium text-slate-600">{item.company}</p>
											<p className="mt-4 leading-8 text-slate-700 [text-align:justify]">{item.description}</p>
										</article>
									</div>
									<div className="absolute left-1/2 top-9 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-white bg-white/70 md:block" />
								</div>
							))}
						</div>
					</div>
				</section>
				


				{/* PROJEKTEK RÉSZ */}
				<section
					id="projects"
					data-reveal
					className="scroll-mt-24 opacity-0 translate-y-8 transition-all duration-700 ease-out [&.is-visible]:translate-y-0 [&.is-visible]:opacity-100"
				>
					<h2 className="mb-10 text-[clamp(1.7rem,2.8vw,2.3rem)] font-semibold tracking-[-0.02em] text-slate-900">Projects</h2>
					<div className="grid gap-8 md:grid-cols-2 md:gap-10">
						{projects.map((project, index) => (
							<article key={project.title} className="rounded-2xl border border-slate-300 bg-white p-8 shadow-[0_14px_30px_-24px_rgba(15,23,42,0.45)]">
								<p className="mb-3 inline-flex rounded-full border border-slate-300 bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-600">
									Project 0{index + 1}
								</p>
								<h3 className="text-[1.28rem] font-bold text-slate-900">{project.title}</h3>
								<p className="mt-3 leading-8 text-slate-700 [text-align:justify]">{project.summary}</p>
								<p className="mt-5 text-sm leading-8 text-slate-600 [text-align:justify]">{project.details}</p>
							</article>
						))}
					</div>
				</section>


				{/* SKILL RÉSZ */}
				<section
					id="skills"
					data-reveal
					className="scroll-mt-24 opacity-0 translate-y-8 transition-all duration-700 ease-out [&.is-visible]:translate-y-0 [&.is-visible]:opacity-100"
				>
					<h2 className="mb-10 text-[clamp(1.7rem,2.8vw,2.3rem)] font-semibold tracking-[-0.02em] text-slate-900">Skills</h2>
					<div className="grid gap-8 md:grid-cols-3 md:gap-10">
						{skillGroups.map((group) => (
							<article key={group.title} className="shadow-[0_14px_30px_-24px_rgba(15,23,42,0.45)] rounded-2xl border border-slate-300 bg-white p-7">
								<h3 className="mb-5 text-[1.1rem] font-bold text-slate-900">{group.title}</h3>
								<div className="flex flex-wrap gap-2">
									{group.items.map((item) => (
										<span key={item} className="rounded-full border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-700">
											{item}
										</span>
									))}
								</div>
							</article>
						))}
					</div>
				</section>


				{/* TANULMÁNY RÉSZ */}
				<section
					id="education"
					data-reveal
					className="scroll-mt-24 opacity-0 translate-y-8 transition-all duration-700 ease-out [&.is-visible]:translate-y-0 [&.is-visible]:opacity-100"
				>
					<h2 className="mb-10 text-[clamp(1.7rem,2.8vw,2.3rem)] font-semibold tracking-[-0.02em] text-slate-900">Education</h2>
					<div className="grid gap-8 md:grid-cols-2 md:gap-10">
						<article className="rounded-2xl border border-slate-300 bg-white p-8 shadow-[0_10px_26px_-22px_rgba(15,23,42,0.55)]">
							<p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">2024 - Present</p>
							<h3 className="mt-2 text-[1.22rem] font-bold text-slate-900">Programmer Analyst BSc - Nyiregyhazi University</h3>
							<p className="mt-4 leading-8 text-slate-700 [text-align:justify]">Correspondence program completed alongside full-time work, with the last academic year finished at an outstanding level (GPA: 4.8), demonstrating strong time management, consistency, and the ability to sustain high performance under parallel commitments.</p>
						</article>
						<article className="rounded-2xl border border-slate-300 bg-white p-8 shadow-[0_10px_26px_-22px_rgba(15,23,42,0.55)]">
							<p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">2024</p>
							<h3 className="mt-2 text-[1.22rem] font-bold text-slate-900">C1 Complex Advanced Language Exam</h3>
							<p className="mt-4 leading-8 text-slate-700 [text-align:justify]">Achieved a stated approved certificatethrough fully self-directed learning, built on daily consistency, practical usage, and disciplined long-term focus.</p>
						</article>
					</div>
				</section>



				{/* KONTAKT RÉSZ */}
				<section
					id="contact"
					data-reveal
					className="scroll-mt-24 pb-14 md:pb-20 opacity-0 translate-y-8 transition-all duration-700 ease-out [&.is-visible]:translate-y-0 [&.is-visible]:opacity-100"
				>
					<div className="rounded-3xl border border-slate-300 bg-[linear-gradient(135deg,#0f172a_0%,#1f2a44_100%)] p-8 md:p-12 text-white">
						<h2 className="text-[clamp(1.7rem,2.8vw,2.4rem)] font-semibold tracking-[-0.02em]">Let's Build Something Great Together</h2>
						<p className="mt-5 max-w-2xl leading-8 text-slate-200">
							Choose your preferred channel and let's talk.
						</p>
						<div className="mt-8 flex flex-wrap gap-4">
							<a href="mailto:gomboczif@gmail.com" className="rounded-full border border-white/20 bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
								Email: gomboczif@gmail.com
							</a>
							<a href="https://linkedin.com/in/istvan-gombocz/" target="_blank" rel="noreferrer" className="rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
								LinkedIn
							</a>
							<a href="https://github.com/SgtGombi" target="_blank" rel="noreferrer" className="rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
								GitHub
							</a>
							<a href="https://www.facebook.com/gombiii" target="_blank" rel="noreferrer" className="rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
								Facebook
							</a>
						</div>
					</div>
				</section>
			</div>

			<button
				type="button"
				onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
				aria-label="Back to top"
				className={`fixed xl:w-16 xl:h-16 md:w-12 md:h-12 w-10 h-10 bottom-12 right-12 z-50 rounded-full border border-slate-600 bg-white/95 p-3 text-slate-900 shadow-[0_10px_24px_-12px_rgba(15,23,42,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white ${
					showScrollTop ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
				}`}
			>
				<span className="block text-xl leading-none">↑</span>
			</button>
		</main>
	);
}
