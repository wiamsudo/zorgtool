export interface Patient {
    id: string;
    name: string;
    age: number;
    email: string;
    phone: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Therapist {
    id: string;
    name: string;
    email: string;
    phone: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface ChatMessage {
    id: string;
    sender: 'patient' | 'therapist' | 'bot';
    content: string;
    timestamp: Date;
}

export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
}

export interface Reminder {
    id: string;
    patientId: string;
    message: string;
    scheduledTime: Date;
}

export interface StoplightStatus {
    color: 'green' | 'orange' | 'red';
    message: string;
    timestamp: Date;
}