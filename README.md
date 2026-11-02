# NEXA Portfolio — Two Websites

This repository contains two independent NEXA portfolio websites.

## Folders

- `personal-portfolio/` — Website A: personal portfolio (Aymen Jr. + 3 projects). No ACS, no contact form.
- `portfolio-with-acs/` — Website B: same as A, plus the full ACS commercial presentation and contact.

## When to use which

- Send **Website A** to clients who already spoke with you and want to see who you are and what you built.
- Send **Website B** to prospects who need to understand your background and the service you offer (ACS).

## Run independently

```bash
cd personal-portfolio && npm install && npm run dev
# or
cd portfolio-with-acs && npm install && npm run dev
```

## Build independently

```bash
cd personal-portfolio && npm run build
cd portfolio-with-acs && npm run build
```

## Deploy

Each folder is an independent Next.js app. Deploy separately (e.g., Vercel). Set `NEXT_PUBLIC_CONTACT_EMAIL` for Website B if desired.
