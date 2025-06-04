// filepath: c:\Users\mateo\OneDrive - Onderwijsgroep Tilburg\Documenten\School\LEEERJAAR3\challenge week\project\server\src\server.js
import express from 'express';
import cors from 'cors';
import AIService from './services/AIService.js'; // Note the .js extension

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize AI Service (replace with your actual API URL if needed)
const aiService = new AIService('http://localhost:5000/api'); // Example URL

// Routes
app.get('/', (req, res) => {
  res.send('Patient Support Portal Server is running!');
});

// Example Chat Endpoint
app.post('/api/chat', async (req, res) => {
  const { message, patientId } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    // Here you would integrate with AIService
    // For now, just echoing back or sending a placeholder
    // const aiReply = await aiService.sendMessage(message);
    // res.json({ reply: aiReply });

    console.log(`Received message: "${message}" from patientId: ${patientId || 'N/A'}`);
    res.json({ reply: `Server received: "${message}". AI response placeholder.` });
  } catch (error) {
    console.error('Error in /api/chat:', error);
    res.status(500).json({ error: 'Failed to process chat message' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});