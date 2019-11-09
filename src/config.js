const { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION } = process.env;

export const config = {
    aws: {
        accessKeyId: AWS_ACCESS_KEY_ID,
        apiVersion: '2012-08-10',
        secretAccessKey: AWS_SECRET_ACCESS_KEY,
        region: AWS_REGION,
    },
};
