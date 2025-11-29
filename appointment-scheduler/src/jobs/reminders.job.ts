import { schedule } from 'node-cron';
import { AppointmentRepository } from '../repositories/appointment.repository';
import { sendEmailReminder } from '../notifications/email';
import { sendSmsReminder } from '../notifications/sms';

const appointmentRepository = new AppointmentRepository();

const scheduleReminders = () => {
    schedule('0 9 * * *', async () => { // Every day at 9 AM
        const upcomingAppointments = await appointmentRepository.getUpcomingAppointments();
        
        upcomingAppointments.forEach(appointment => {
            const { clientId, date, time } = appointment;
            sendEmailReminder(clientId, date, time);
            sendSmsReminder(clientId, date, time);
        });
    });
};

export { scheduleReminders };