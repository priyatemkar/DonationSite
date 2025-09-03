// const express = require('express');
// const router = express.Router();

// const authRoutes = require('./authRoutes');
// const donationRoutes = require('./donationRoutes');

// router.use('/auth', authRoutes);
// router.use('/donations', donationRoutes);

// module.exports = router;// routes/index.js

const express = require("express");
const router = express.Router();

const ngoRoutes = require("./ngoRoutes");
const restaurantRoutes = require("./restaurantRoutes");

router.use("/ngo", ngoRoutes);
router.use("/restaurant", restaurantRoutes);

module.exports = router;
