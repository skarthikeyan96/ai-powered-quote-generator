import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");

  const geminiAPIKey = process.env.GEMINIAPIKEY as string;
  const genAI = new GoogleGenerativeAI(geminiAPIKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `Generate a ${query} quote. The quote should be concise, impactful and suitable for sharing on social media.`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);

  return new NextResponse(JSON.stringify({ response: text }), {
    status: 200,
  });
}
