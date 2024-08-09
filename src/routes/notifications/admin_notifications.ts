import express from 'express';
import { adminNotificationsHandler } from '../../controllers/notifications_controller';

export const router = express.Router();

router.get('/notifications-admin/', adminNotificationsHandler);
router.get('/notifications-admin/:id', adminNotificationsHandler);
router.post('/notifications-admin/', adminNotificationsHandler);
router.delete('/notifications-admin/:id', adminNotificationsHandler);
