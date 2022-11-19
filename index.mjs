import { WebClient } from '@slack/web-api';
import dotenv from 'dotenv';

dotenv.config();

export const handler = async () => {
  const client = new WebClient(process.env.SLACK_TOKEN);

  try {
    client.chat.postMessage({
      channel: process.env.SLACK_CHANNEL,
      text: 'ProjectMAD스크럼\n\n1.어제한일\n\n2.오늘할일',
    });
  } catch (error) {
    console.error(error);
  }
};
