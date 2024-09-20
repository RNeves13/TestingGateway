const notifications_port = process.env.NOTIFICATIONS_PORT ?? "7001";
const notifications_host = process.env.NOTIFICATIONS_HOST ?? "http://localhost";
export const notifiations_link = notifications_port ? notifications_host+":"+ notifications_port : notifications_host;

const products_port = process.env.NOTIFICATIONS_PORT ?? "7005";
const products_host = process.env.NOTIFICATIONS_HOST ?? "http://localhost";
export const products_link = products_port ? products_host+":"+ products_port : products_host;

const users_port = process.env.NOTIFICATIONS_PORT ?? "7003";
const users_host = process.env.NOTIFICATIONS_HOST ?? "http://localhost";
export const users_link = users_port ? users_host+":"+ users_port : users_host;