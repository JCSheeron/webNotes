import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import dotenvx from '@dotenvx/dotenvx'; // use to get access to .env. Use over dotenv so vars can be embedded in other vars

// use dotenvx so env vars can be embedded in other env vars
dotenvx.config();

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  // 5 req in 10s. Very restrictive for testing.
  limiter: Ratelimit.slidingWindow(5, '10 s'),
});

export default ratelimit;
