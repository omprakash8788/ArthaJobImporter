const Queue = require('bull');
const redis = require('../config/redis');

const jobQueue = new Queue('job-import-queue', {
  redis: { host: 'localhost', port: 6379 }
});

module.exports = jobQueue;
