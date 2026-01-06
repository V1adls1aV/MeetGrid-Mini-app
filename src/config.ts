import 'dotenv/config';

const BOT_TOKEN = process.env.BOT_TOKEN;
const BACKEND_URL = process.env.BACKEND_URL;
const FRONTEND_URL = process.env.FRONTEND_URL;
const BOT_USERNAME = process.env.BOT_USERNAME;

if (!BOT_TOKEN || !BACKEND_URL || !FRONTEND_URL || !BOT_USERNAME) {
  process.exit(1);
}

export const config = {
  BOT_TOKEN,
  BACKEND_URL,
  FRONTEND_URL,
  BOT_USERNAME,
} as const;
