import ratelimit from '../config/upstash.js';

const rateLimiter = async (req, res, next) => {
  try {
    // If using authentication, typically the key would be something like a ip address or user name.
    // WIth this generic key, if anyone hits the limit, the whole site is blocked.
    const { success } = await ratelimit.limit('my-limit-key');

    if (!success) {
      return res.status(429).json({
        message: 'Too many requests. Please try again in a few minutes.',
      });
    }

    // passed rate limiter test
    next(); // continue
  } catch (error) {
    console.log('Rate limit error', error);
    next(error);
  }
};

export default rateLimiter;
