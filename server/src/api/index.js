import express from 'express';
import { Router } from 'express';
import AIService from '../services/AIService';

const router = Router();
const aiService = new AIService();

// Endpoint to send a message to the AI chatbot
router.post('/chat', async (req, res) => {
    try {
        const { message } = req.body;
        const response = await aiService.processMessage(message);
        res.json({ response });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while processing the message.' });
    }
});

// Additional endpoints can be defined here

export default router;