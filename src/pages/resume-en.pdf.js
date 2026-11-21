import { generateResumePdf } from "../lib/build-resume-pdf.js";

export const prerender = true;

export async function GET() {
  const pdf = await generateResumePdf("en");
  return new Response(new Uint8Array(pdf), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="yogi-ardiansyah-resume-en.pdf"',
    },
  });
}
