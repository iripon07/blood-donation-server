import donorController from '../controllers/donorController';

const express = require('express');

const router = express.Router()


router.post('/create-donor', donorController.createDonor)


export default donorRoutes = router;