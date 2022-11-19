import { WebClient } from '@slack/web-api';
import dotenv from 'dotenv';

dotenv.config();

export const handler = async () => {
  const client = new WebClient(process.env.SLACK_TOKEN);

  try {
    client.chat.postMessage({
      channel: process.env.SLACK_CHANNEL,
      text: 'Hello World',
    });
  } catch (error) {
    console.error(error);
  }
};
