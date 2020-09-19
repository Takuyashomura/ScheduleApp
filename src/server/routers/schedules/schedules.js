const express = require('express');
const router = express.Router();
const controller = require('../../controllers/schedules/schedules');

router
    .route('/')
    .get(controller.getSchedules)
    .post(controller.postSchedule)

router
    .route('/:id')
    .delete(controller.deleteSchedule)
    
module.exports = router;