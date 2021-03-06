const express = require('express');

const router = express.Router();

const fileRoutes = require('./files.route');
const feedRoutes = require('./feedback.route');

router.get('/health-check', (req, res) => {
    res.send('Up and Running!');
});

router.use('/files', fileRoutes);
router.use('/feedback', feedRoutes);

module.exports = router;