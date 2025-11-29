export class AppointmentRepository {
    private appointments: any[] = [];

    public async save(appointment: any): Promise<void> {
        this.appointments.push(appointment);
    }

    public async findById(id: string): Promise<any | null> {
        return this.appointments.find(appointment => appointment.id === id) || null;
    }

    public async findAll(): Promise<any[]> {
        return this.appointments;
    }

    public async update(id: string, updatedAppointment: any): Promise<void> {
        const index = this.appointments.findIndex(appointment => appointment.id === id);
        if (index !== -1) {
            this.appointments[index] = { ...this.appointments[index], ...updatedAppointment };
        }
    }

    public async delete(id: string): Promise<void> {
        this.appointments = this.appointments.filter(appointment => appointment.id !== id);
    }
}