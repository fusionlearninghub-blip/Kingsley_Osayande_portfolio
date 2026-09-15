# Kingsley Osayande — Portfolio

A frontend developer portfolio built with Next.js (App Router), React, and
Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Things to update before you deploy

Search the codebase for `TODO` comments — they mark every placeholder:

- `components/Contact.tsx` — set up Formspree (see below) so the contact
  form actually sends you email

## Setting up the contact form (Formspree)

The "Send message" button posts to [Formspree](https://formspree.io), a free
service that emails you form submissions with no backend of your own.

1. Go to https://formspree.io and create a free account
2. Create a new form and verify your email
3. Copy the endpoint it gives you — looks like `https://formspree.io/f/xxxxabcd`
4. Open `components/Contact.tsx` and replace `FORMSPREE_ENDPOINT` with your
   real endpoint
5. Submissions will arrive in the inbox you signed up with

The free tier covers 50 submissions/month, which is plenty for a portfolio.

## Deploying

The easiest option is [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

Or push this repo to GitHub and import it directly in the Vercel dashboard —
it will auto-detect Next.js and deploy on every push.

## Dark mode

Handled by `components/Navbar.tsx`, toggling a `.dark-theme` class on `<html>`
and persisting the choice to `localStorage`. Theme overrides live at the
bottom of `app/globals.css`.
