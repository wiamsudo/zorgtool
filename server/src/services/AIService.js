// filepath: c:\Users\mateo\OneDrive - Onderwijsgroep Tilburg\Documenten\School\LEEERJAAR3\challenge week\project\server\src\services\AIService.js
import axios from 'axios';

class AIService {
    constructor(apiUrl) {
        this.apiUrl = apiUrl; // Base URL for your AI service
    }

    async sendMessage(messageContent) {
        try {
            // Example: POST request to your AI's chat endpoint
            const response = await axios.post(`${this.apiUrl}/chat`, { message: messageContent });
            return response.data.reply; // Assuming the AI returns { "reply": "..." }
        } catch (error) {
            console.error('Error sending message to AI service:', error.message);
            throw new Error('Failed to communicate with AI service');
        }
    }

    async getPatientData(patientId) {
        try {
            const response = await axios.get(`${this.apiUrl}/patients/${patientId}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching patient data:', error.message);
            throw new Error('Failed to fetch patient data');
        }
    }

    async updatePatientData(patientId, data) {
        try {
            await axios.put(`${this.apiUrl}/patients/${patientId}`, data);
            // No explicit return, or return a success message/status
        } catch (error) {
            console.error('Error updating patient data:', error.message);
            throw new Error('Failed to update patient data');
        }
    }
}

export default AIService;