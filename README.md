# MeetGrid Telegram Bot

This is a Telegram bot for MeetGrid that allows users to create meet polls directly in group chats.

## Prerequisites

- Node.js >= 18
- A Telegram Bot Token (from [@BotFather](https://t.me/BotFather))
- Running MeetGrid Backend & Frontend

## Setup

1. **Install Dependencies**
   ```bash
   cd MiniApp
   npm install
   ```

2. **Configuration**
   Copy `.env.example` to `.env` and fill in the values:
   ```bash
   cp .env.example .env
   ```

   - `BOT_TOKEN`: Your Telegram Bot Token.
   - `BACKEND_API_URL`: URL to your MeetGrid backend API (e.g., `http://localhost:8000/api/v1/topic` or production URL).
   - `MINIAPP_URL`: Your Vercel frontend URL (e.g., `https://meetgrid-frontend-deploy.vercel.app`).
   - `BOT_USERNAME`: Your bot's username (without @).

## Running the Bot

### Quickstart
```bash
cp .env.example .env
docker-compose up -d
```

### Development
```bash
cp .env.example .env
npm install
npm run dev
```

## Usage

1. Add the bot to a Telegram group.
2. Send `/poll` in the group.
3. The bot will create a topic and reply with a button "Open Calendar".
4. Clicking the button will launch the MeetGrid Mini App with the new topic.
