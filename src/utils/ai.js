import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

export const sendMessageToGroq = async (message) => {
  try {
    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [{ role: "user", content: message }],
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("Groq API error:", error);
    return "Error: Unable to get a response";
  }
};
