const express = require('express');
const router = express.Router()

const { getAllJobs,
        getJob,
        createJob,
        updateJob,
        deleteJob,
        showStats
    } = require('../controllers/jobs')

router.route('/').get(getAllJobs).post(createJob)
router.route('/:id').get(getJob).patch(updateJob).delete(deleteJob)
router.route('/stats').get(showStats);

module.exports = router