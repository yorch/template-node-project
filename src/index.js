import createLogger from 'logging';
import { createTables } from './dynamo-db';
import { getNews } from './get-news';
import { getRecipients } from './get-recipients';
import { processNewsItems } from './process-news-items';
import { runCronTask } from './run-cron-task';
import { sendSms } from './send-sms';

const logger = createLogger('Main');

export const run = async () => {
    logger.info('Started');

    await createTables();

    runCronTask(async () => {
        const items = await getNews();
        const { content } = await processNewsItems(items);
        await sendSms({
            body: content,
            recipients: await getRecipients(),
        });
    });
};

run();
