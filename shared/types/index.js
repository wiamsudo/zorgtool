export interface Patient {
    id: string;
    name: string;
    age: number;
    email: string;
    phone: string;
    medicalHistory: string[];
}

export interface Therapist {
    id: string;
    name: string;
    specialization: string;
    email: string;
    phone: string;
}

export interface ChatMessage {
    sender: 'patient' | 'therapist' | 'bot';
    content: string;
    timestamp: Date;
}

export interface Reminder {
    id: string;
    patientId: string;
    message: string;
    date: Date;
}

export interface StoplightStatus {
    color: 'green' | 'orange' | 'red';
    message: string;
    timestamp: Date;
}