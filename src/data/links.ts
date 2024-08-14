const port = process.env.NOTIFICATIONS_PORT ?? "7001";
const host = process.env.NOTIFICATIONS_HOST ?? "http://localhost";
export const notifiations_link = port ? host+":"+port : host;