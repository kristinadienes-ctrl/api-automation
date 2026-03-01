const RESPONSE_TIME_LIMIT = parseInt(process.env.RESPONSE_LIMIT, 10) || 1000;

module.exports = { RESPONSE_TIME_LIMIT };
