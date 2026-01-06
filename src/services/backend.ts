import axios from 'axios';
import { config } from '../config.js';
import type { CreatedTopicResponse, TopicCreatePayload } from '../types.js';

async function createTopic(title: string): Promise<CreatedTopicResponse> {
  const adminName = 'telegram-bot';
  const payload: TopicCreatePayload = {
    topic_name: title,
    constraints: [],
    description: undefined,
  };

  const response = await axios.post<CreatedTopicResponse>(
    config.BACKEND_URL,
    payload,
    {
      params: { username: adminName },
    }
  );

  return response.data;
}

export { createTopic };
