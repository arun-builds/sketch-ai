import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GOOGLE_API_KEY;

if (!apiKey) {
  throw new Error("GOOGLE_API_KEY is not set");
}

const genai = new GoogleGenAI({
  apiKey: apiKey,
});

const prompt = `You are a highly skilled **Senior Web Developer** specializing in modern, responsive, and semantic web design.

**Goal:**
Generate production-ready **HTML and CSS code** from the provided Base64 image sketch.

**Requirements for the Output:**
1.  **Structure & Semantics:** The HTML must be **semantic**, utilizing appropriate elements for structure (e.g., (<header>, <nav>, <main>, <section>, <footer>, <button>, <h1>-<h6>)).
2.  **Modern Layout:** The CSS must use **Flexbox or CSS Grid** for defining the main page layout, navigation, and component placement, ensuring a clean, modern aesthetic.
3.  **Responsiveness:** The layout must be **fully responsive**. Use media queries to adapt the design for mobile screens (e.g., transforming a horizontal navigation bar into a stacked or collapsed menu).
4.  **Prediction:** Based on common web patterns, intelligently **predict and implement** standard components where the sketch is ambiguous, such as:
    * A functional **navigation bar** (<nav>) with predicted links (e.g., Home, About, Services, Contact).
    * A prominent **Hero Section** with a primary call-to-action (CTA) button.
    * Content sections using clear <div> or <section> containers.
5.  **Aesthetics:** The generated website should look like a **modern, aesthetically pleasing, and easy-to-navigate** website, not a wireframe. Use a basic color palette (e.g., a primary color, a background color) for visual appeal.
6.  **Formatting (CRITICAL CHANGE):** **Combine all CSS code inside a <style> block within the HTML's <head> section.** Do not use a separate <link rel="stylesheet"> tag. **Do not include any text outside of the final single code block.**

**Constraint:**
Only return the complete, valid **HTML code block** containing the embedded CSS.`;

export async function POST(req: Request) {
    try {
        const { base64Image } = await req.json();
        // console.log("Base64 Image from API:", base64Image);d

        const response = await genai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: [
                {
                    inlineData: {
                        mimeType: "image/png",
                        data: base64Image,
                    }
                },
                {text: prompt}
            ],
            
            
        });
        console.log("Response:", response);
        
        if (!response.text) {
            return NextResponse.json({ error: "Failed to generate website" }, { status: 500 });
        }
        const singleBlockRegex = /```html\s*([\s\S]*?)\s*```/; 

// 2. Execute the Regex
const match = response.text.match(singleBlockRegex);

let cleanHtmlWithCss;

if (match && match[1]) {
    // The captured content is in the first capturing group (match[1])
    cleanHtmlWithCss = match[1].trim(); 
} else {
    // Fallback: If the regex fails, just try removing the standard fences
    // This is less reliable but protects against complete failure
    cleanHtmlWithCss = response.text.replace(/```html|```/g, "").trim();
}
        return NextResponse.json({ code: cleanHtmlWithCss }, { status: 200 });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Failed to generate website" }, { status: 500 });
    }
}