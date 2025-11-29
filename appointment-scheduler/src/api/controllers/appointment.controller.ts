export class AppointmentController {
    constructor(private appointmentService: AppointmentService) {}

    async createAppointment(req, res) {
        try {
            const appointmentData = req.body;
            const appointment = await this.appointmentService.createAppointment(appointmentData);
            res.status(201).json(appointment);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getAppointment(req, res) {
        try {
            const appointmentId = req.params.id;
            const appointment = await this.appointmentService.getAppointment(appointmentId);
            if (!appointment) {
                return res.status(404).json({ message: 'Appointment not found' });
            }
            res.status(200).json(appointment);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateAppointment(req, res) {
        try {
            const appointmentId = req.params.id;
            const appointmentData = req.body;
            const updatedAppointment = await this.appointmentService.updateAppointment(appointmentId, appointmentData);
            if (!updatedAppointment) {
                return res.status(404).json({ message: 'Appointment not found' });
            }
            res.status(200).json(updatedAppointment);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async deleteAppointment(req, res) {
        try {
            const appointmentId = req.params.id;
            const result = await this.appointmentService.deleteAppointment(appointmentId);
            if (!result) {
                return res.status(404).json({ message: 'Appointment not found' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}