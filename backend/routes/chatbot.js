const express = require('express');
const router = express.Router();
const axios = require('axios');

let state = {
  messages: [{
    role: 'system',
    content: "You are a specialized chatbot for an Ayurveda site. Your primary role is to provide information and guidance related to Ayurveda. You should offer insights on Ayurvedic principles, herbal remedies, dietary recommendations, and holistic health practices. When users inquire about diseases or health conditions, respond with information from an Ayurvedic perspective, including potential remedies or treatments according to Ayurveda. For any queries unrelated to Ayurveda or beyond your expertise, clearly state that you specialize exclusively in Ayurvedic topics and suggest seeking information from other experts for those inquiries."
  }]
};

router.post('/chatbot', async (req, res) => {
  const userMessage = req.body.message;

  // Append the user message to the state
  state.messages.push({ role: 'user', content: userMessage });

  try {
    // Make a request to the Groq API
    const response = await axios.post('https://api.groq.dev/chat/completions', {
      messages: state.messages,
      model: 'llama3-8b-8192'
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`
      }
    });

    const botMessage = response.data.choices[0].message.content;

    // Append the bot message to the state
    state.messages.push({ role: 'assistant', content: botMessage });

    res.json({ reply: botMessage });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ reply: "Sorry, something went wrong on the server." });
  }
});

module.exports = router;
