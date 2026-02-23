import OpenAI from "openai";

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const LINKEDIN_PARSE_PROMPT = `You are an expert resume parser. Given the raw text extracted from a LinkedIn profile PDF, extract all information into a structured JSON format.

Return ONLY valid JSON matching this exact schema:
{
  "basics": {
    "name": "Full Name",
    "headline": "Professional headline/title",
    "email": "email if found, otherwise empty string",
    "phone": "phone if found, otherwise empty string",
    "location": "City, State/Country",
    "linkedin": "LinkedIn URL if found",
    "website": "Personal website if found",
    "summary": "Professional summary/about section"
  },
  "experience": [
    {
      "id": "unique-id-1",
      "company": "Company Name",
      "position": "Job Title",
      "startDate": "Mon YYYY",
      "endDate": "Mon YYYY or Present",
      "location": "City, State",
      "highlights": ["Achievement or responsibility 1", "Achievement 2"]
    }
  ],
  "education": [
    {
      "id": "unique-id-1",
      "institution": "University Name",
      "degree": "Degree Type (e.g., Bachelor of Science)",
      "field": "Field of Study",
      "startDate": "YYYY",
      "endDate": "YYYY",
      "gpa": "GPA if mentioned"
    }
  ],
  "skills": [
    {
      "category": "Category Name (e.g., Programming Languages, Tools, Soft Skills)",
      "items": ["Skill 1", "Skill 2"]
    }
  ],
  "certifications": [
    {
      "name": "Certification Name",
      "issuer": "Issuing Organization",
      "date": "Date obtained"
    }
  ],
  "languages": [
    {
      "language": "Language Name",
      "proficiency": "Proficiency Level"
    }
  ],
  "projects": [
    {
      "id": "unique-id-1",
      "name": "Project Name",
      "description": "Brief description",
      "highlights": ["Key detail 1", "Key detail 2"]
    }
  ]
}

Important rules:
- Generate unique IDs for each experience, education, and project entry (use format like "exp-1", "edu-1", "proj-1")
- Group skills into logical categories
- If a section has no data, use an empty array []
- Convert bullet points and descriptions into concise, impactful highlights
- Clean up any formatting artifacts from PDF extraction
- If the summary is empty, generate a brief professional summary from the available information
- Return ONLY the JSON, no additional text or markdown`;

export const ENHANCE_PROMPT = `You are an expert resume writer. Improve the following resume content to be more impactful, professional, and ATS-friendly.

Rules:
- Use strong action verbs
- Quantify achievements where possible
- Keep it concise and professional
- Maintain truthfulness - don't fabricate information
- Return ONLY the improved text, no explanations`;
