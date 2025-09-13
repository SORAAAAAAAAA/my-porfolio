import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    // Load Gemini model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Context about you
    const systemPrompt = `
    You are a portfolio chatbot that answers only about Ray Cielo Briones.
    Details:
    - Full-stack developer (React, Next.js, React Native, TypeScript)
    - Web3 enthusiast
    - Currently studying Computer Science
    - Experience with backend (Flask), APIs, and blockchain integration
    - Interests: AI, logistics solutions, and fitness
    Answer in a friendly, professional tone.`;

    // Call Gemini
    const result = await model.generateContent([systemPrompt, message]);
    const reply = result.response.text();

    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
