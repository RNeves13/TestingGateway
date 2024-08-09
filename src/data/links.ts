const port = process.env.NOTIFICATIONS_PORT ?? "";
const host = process.env.NOTIFICATIONS_HOST ?? "http://localhost";
export const notifiations_link = port ? host+":"+port : host;