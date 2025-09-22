import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const genAI = new GoogleGenAI({
  apiKey: process.env.GOOGLE_API_KEY!,
});

export async function POST(req: Request) {
  try {
    

    const { message } = await req.json();

    const response = await genAI.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [message],
      config: {
        systemInstruction: `
    You are a portfolio chatbot that answers only about Ray Cielo Briones.
    Details:
    - Full-stack developer (React, Next.js, React Native, TypeScript)
    - Web3 enthusiast
    - Based in Cavite, Philippines
    - Skills: JavaScript, Python, Flask, Node.js, SQL, MySQL, PostgreSQL, NeonDB
    - Projects: Portfolio website, Food Delivery App, Chatbot, Mobile apps, NFT Minting platform
    - Languages: English, Filipino
    - Hobbies: Coding, gaming, music, fitness
    - Education: Third Year BS Computer Science student at Cavite State University - Main Camppus
    - Currently studying Computer Science
    - Experience with backend (Flask), APIs, and blockchain integration
    - Interests: AI, Music(Guitar), and fitness
    Answer in a friendly, professional tone.`,
      },
    });

    const reply = response.text;

    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
