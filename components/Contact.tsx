"use client";

import { useState } from "react";
import { GithubIcon, LinkedinIcon, XIcon } from "./icons";

// TODO: replace with your real Formspree endpoint.
// 1. Go to https://formspree.io and sign up (free)
// 2. Create a new form, verify your email
// 3. Copy the endpoint it gives you (looks like https://formspree.io/f/xxxxabcd)
// 4. Paste it below
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="border-t border-line bg-card">
      <div className="mx-auto max-w-content px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">
              Contact
            </h2>
            <p className="mt-4 max-w-sm text-muted">
              I&apos;m open to frontend developer roles. The fastest way to
              reach me is email.
            </p>
            <a
              href="mailto:kingsleyosayande2@gmail.com"
              className="contact-email mt-6 inline-block font-medium text-accent hover:text-accent-dark"
            >
              kingsleyosayande2@gmail.com
            </a>
            <div className="mt-5 flex items-center gap-4">
              <a
                href="https://github.com/fusionlearninghub-blip"
                aria-label="GitHub"
                className="text-muted transition-colors hover:text-ink"
              >
                <GithubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/kingsley-osayande-ba722715a/"
                aria-label="LinkedIn"
                className="text-muted transition-colors hover:text-ink"
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://x.com/fusion76885"
                aria-label="X"
                className="text-muted transition-colors hover:text-ink"
              >
                <XIcon />
              </a>
            </div>
          </div>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="text-sm font-medium text-ink">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 w-full rounded border border-line bg-paper px-3 py-2 text-sm text-ink outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-ink">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded border border-line bg-paper px-3 py-2 text-sm text-ink outline-none"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium text-ink">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 w-full rounded border border-line bg-paper px-3 py-2 text-sm text-ink outline-none"
                placeholder="Let's talk about..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="self-start rounded-md bg-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-dark disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send message"}
            </button>

            {status === "success" && (
              <p className="text-sm text-emerald-600">
                Message sent — thank you, I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-600">
                Something went wrong. Please try emailing me directly instead.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
