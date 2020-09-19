const express = require('express');
const router = express.Router();
const controller = require('../../controllers/nameList/nameList');

router
    .route('/')
    .get(controller.getNames)
    .post(controller.postName)

router
    .route('/:id')
    .delete(controller.deleteName)


module.exports = router;