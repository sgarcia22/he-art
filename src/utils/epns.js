import EpnsSDK from '@epnsproject/frontend-sdk';

const CHANNEL_PK='0x00000000000000000000000000000000000000000000fff';
const epnsSdk = new EpnsSDK(CHANNEL_PK);

export async function sendNotification(recipient, title, message) {
    const tx = await sdk.sendNotification(
        recipient,
        pushTitle,
        pushMessage,
        title,
        message,
        3,
        cta,
        null,
        null
    );
}