import { Telegraf, Context } from 'telegraf';
import type { InlineKeyboardMarkup } from 'telegraf/types';
import { config } from './config.js';
import { createTopic } from './services/backend.js';
import { escapeMarkdown } from './utils/markdown.js';

const bot = new Telegraf(config.BOT_TOKEN);

bot.command('poll', async (ctx: Context) => {
  try {
    const chatTitle = ctx.chat?.type === 'private'
      ? `Meeting with ${ctx.from?.first_name}`
      : (ctx.chat && 'title' in ctx.chat ? ctx.chat.title : 'New Meeting');

    const processingMsg = await ctx.reply('Creating a new MeetGrid topic...');

    const topicData = await createTopic(chatTitle);
    
    // Direct link to open Mini App with start parameter
    const miniAppLink = `https://t.me/${config.BOT_USERNAME}/topic?startapp=${topicData.topic.topic_id}`;

    const cleanTopicName = escapeMarkdown(topicData.topic.topic_name);

    const keyboard = {
      inline_keyboard: [[{ text: 'Open Calendar', url: miniAppLink }]],
    } satisfies InlineKeyboardMarkup;

    await ctx.reply(
      `📅 *${cleanTopicName}*\n\nClick the button below to vote for the best time\\!`,
      { 
        parse_mode: 'MarkdownV2',
        reply_markup: keyboard
      }
    );

    await ctx.deleteMessage(processingMsg.message_id).catch(() => {});
  } catch (error) {
    await ctx.reply('Sorry, something went wrong while creating the poll. Please try again later.');
  }
});

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
