import { Injectable } from '@angular/core';
import { GoogleGenerativeAI } from '@google/generative-ai';

@Injectable({
  providedIn: 'root'
})
export class GeminiService {
  private genAI: GoogleGenerativeAI;

  constructor() {
    // Replace 'YOUR_API_KEY' with your actual Gemini API key
    this.genAI = new GoogleGenerativeAI('YOUR_API_KEY');
  }

  async analyzeDocument(fileContent: string): Promise<any> {
    const model = this.genAI.getGenerativeModel({ model: 'gemini-pro' });

    const prompt = `
      Analyze the following insurance policy document and extract these details:
      1. Policy Type
      2. Insurer Name
      3. Policy Number
      4. Coverage Amount
      5. Premium Amount
      6. Start Date
      7. End Date

      Document content:
      ${fileContent}

      Please return the extracted information in a JSON format.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    try {
      return JSON.parse(text);
    } catch (error) {
      console.error('Error parsing Gemini API response:', error);
      return null;
    }
  }
}