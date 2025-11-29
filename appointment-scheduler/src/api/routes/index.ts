import { Router } from 'express';
import AppointmentController from '../controllers/appointment.controller';
import ClientController from '../controllers/client.controller';
import { authenticate } from '../middleware/auth';

const router = Router();
const appointmentController = new AppointmentController();
const clientController = new ClientController();

router.post('/appointments', authenticate, appointmentController.createAppointment);
router.get('/appointments/:id', authenticate, appointmentController.getAppointment);
router.put('/appointments/:id', authenticate, appointmentController.updateAppointment);
router.delete('/appointments/:id', authenticate, appointmentController.deleteAppointment);

router.post('/clients', authenticate, clientController.createClient);
router.get('/clients/:id', authenticate, clientController.getClient);
router.put('/clients/:id', authenticate, clientController.updateClient);
router.delete('/clients/:id', authenticate, clientController.deleteClient);

export default router;