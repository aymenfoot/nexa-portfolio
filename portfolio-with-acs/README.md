# NEXA Portfolio + ACS (Website B)

Personal portfolio for **Aymen Jr.**, an AI Engineer, extended with the full Agentic Commerce System (ACS) commercial presentation.

Includes everything in Website A plus the ACS flagship section and a contact experience.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

## Environment variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_CONTACT_EMAIL` | Optional. Enables direct email submission from the contact form. |

## Contact configuration

Copy `.env.example` to `.env.local`. Without `NEXT_PUBLIC_CONTACT_EMAIL`, the form shows an honest fallback message and a GitHub link (no fake success).
