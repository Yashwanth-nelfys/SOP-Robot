# Premier Robotics — Interactive SOP Library

Next.js + Tailwind CSS portal built from the uploaded PDFs.

## Included documents
- **ALD Lead Micro FANUC Robot Homing** — 15 pages, Robot Homing.
- **FANUC Robot Language Setting — JSG ALD** — 4 pages, Controller Setup.
- **EFORT Robot Operation Procedure** — 8 pages, Robot Operation.
- **JSG FANUC Robot Homing** — 16 pages, Robot Homing.

## Features
- Animated homepage with responsive SOP grid.
- Live search across title, description, category and keywords.
- Category filter and distinct color palette for each SOP.
- Separate detail page with rendered source-page previews and original PDF download.
- OpenAI-powered assistant with extracted text from all supplied documents.
- Assistant is instructed not to invent unsupported or safety-critical details.

## Run locally
1. Install Node.js 20+.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` and add `OPENAI_API_KEY=your_actual_key`.
4. Run `npm run dev`.
5. Open http://localhost:3000.

Keep the API key server-side. Before public deployment, add authentication, rate limiting and usage monitoring. Validate operational instructions with authorized personnel.


## Interactive SOP pages
Each SOP detail route includes a guided checklist, step navigation, completion progress, step search, source reference previews, direct links to the source PDF, and a safety note. Steps are organized from the supplied SOPs; verify against the complete PDF and authorized site procedures.
