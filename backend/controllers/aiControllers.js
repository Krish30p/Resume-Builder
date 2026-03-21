import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.Api_Key,
  baseURL: 'https://integrate.api.nvidia.com/v1',
});

export const generateSummary = async (req, res) => {
  try {
    const { summary, designation, fullName } = req.body;

    if (!summary || !summary.trim()) {
      return res.status(400).json({ message: 'Summary text is required' });
    }

    const prompt = `You are a professional resume writer. Rewrite the following rough summary into a polished, professional resume summary in 2-3 concise sentences. Write in first person. Do not include any labels, headings, or extra formatting — just return the improved summary text.

Person: ${fullName || 'a professional'}
Role: ${designation || 'professional'}
Original summary: ${summary}`;

    const completion = await openai.chat.completions.create({
      model: "openai/gpt-oss-20b",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
      top_p: 1,
      max_tokens: 300,
      stream: true,
    });

    let result = '';
    for await (const chunk of completion) {
      const content = chunk.choices[0]?.delta?.content || '';
      result += content;
    }

    res.json({ summary: result.trim() });
  } catch (error) {
    console.error('AI Summary Error:', error);
    res.status(500).json({ message: 'Failed to generate AI summary', error: error.message });
  }
};

export const enhanceExperience = async (req, res) => {
  try {
    const { description, role, company } = req.body;

    if (!description || !description.trim()) {
      return res.status(400).json({ message: 'Description text is required' });
    }

    const prompt = `You are a professional resume writer. Rewrite the following rough work experience description into a polished, professional description in 2-3 concise sentences. Write in first person. Highlight achievements and responsibilities effectively. Do not include any labels, headings, or extra formatting — just return the improved description text.

Role: ${role || 'professional'}
Company: ${company || 'company'}
Original description: ${description}`;

    const completion = await openai.chat.completions.create({
      model: "openai/gpt-oss-20b",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
      top_p: 1,
      max_tokens: 300,
      stream: true,
    });

    let result = '';
    for await (const chunk of completion) {
      const content = chunk.choices[0]?.delta?.content || '';
      result += content;
    }

    res.json({ description: result.trim() });
  } catch (error) {
    console.error('AI Experience Enhance Error:', error);
    res.status(500).json({ message: 'Failed to enhance work experience description', error: error.message });
  }
};

export const enhanceProject = async (req, res) => {
  try {
    const { description, title } = req.body;

    if (!description || !description.trim()) {
      return res.status(400).json({ message: 'Description text is required' });
    }

    const prompt = `You are a professional resume writer. Rewrite the following rough project description into a polished, professional description in 2-3 concise sentences. Write in first person. Highlight key features, technologies, and achievements effectively. Do not include any labels, headings, or extra formatting — just return the improved description text.

Project Title: ${title || 'project'}
Original description: ${description}`;

    const completion = await openai.chat.completions.create({
      model: "openai/gpt-oss-20b",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
      top_p: 1,
      max_tokens: 300,
      stream: true,
    });

    let result = '';
    for await (const chunk of completion) {
      const content = chunk.choices[0]?.delta?.content || '';
      result += content;
    }

    res.json({ description: result.trim() });
  } catch (error) {
    console.error('AI Project Enhance Error:', error);
    res.status(500).json({ message: 'Failed to enhance project description', error: error.message });
  }
};
