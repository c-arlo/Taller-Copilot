export interface Appointment {
    id: string;
    clientId: string;
    date: Date;
    time: string;
    description: string;
    status: 'scheduled' | 'completed' | 'canceled';
}

export interface Client {
    id: string;
    name: string;
    email: string;
    phone: string;
    createdAt: Date;
    updatedAt: Date;
}