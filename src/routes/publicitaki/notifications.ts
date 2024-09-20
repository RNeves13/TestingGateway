import express from 'express';
import { resquestHandler } from '../../controllers/notifications_controller';

export const router = express.Router();

router.get('/notifications-admin/', resquestHandler);
router.get('/notifications-admin/:id', resquestHandler);
router.post('/notifications-admin/', resquestHandler);
router.delete('/notifications-admin/:id', resquestHandler);

router.get('/notifications/', resquestHandler);
router.get('/notifications/:id', resquestHandler);
router.post('/notifications/', resquestHandler);
router.delete('/notifications/:id', resquestHandler);

router.get("/followers/:id", resquestHandler);

router.get("/images/:file", resquestHandler);

router.get("/opinions", resquestHandler);
router.get("/opinions/:id", resquestHandler);
router.get("/opinions/products/:product-id/customer/:customer-id", resquestHandler);
router.get("/opinions/products/:id", resquestHandler);
router.get("/opinions/customers/:id", resquestHandler);
router.post("/opinions/products/:product-id/customer/:customer-id", resquestHandler);
router.delete("/opinions/:id", resquestHandler);

router.get("/prices", resquestHandler);
router.get("/prices/:id", resquestHandler);
router.get("/prices/products/:id", resquestHandler);
router.delete("/prices/:id", resquestHandler);

router.get("/stores", resquestHandler);
router.get("/stores/:id/products", resquestHandler);
router.get("/stores/:id/products-without-price", resquestHandler);
router.get("/stores/:store-id/prices", resquestHandler);
router.post("/stores/:store-id/product/:product-id/price", resquestHandler);
router.delete("/stores/:store-id/prices", resquestHandler);

router.get("/products", resquestHandler);
router.get("/products/:id", resquestHandler);
router.get("/products/home-appliances", resquestHandler);
router.get("/products/videogames", resquestHandler);
router.get("/products/all-products", resquestHandler);
router.get("/products/:id/prices", resquestHandler);
router.get("/products/:id/followers", resquestHandler);
router.get("/products/name/:name", resquestHandler);
router.get("/products/brand/:brand", resquestHandler);
router.get("/products/computers", resquestHandler);
router.post("/products", resquestHandler);
router.post("/products/home-appliances", resquestHandler);
router.post("/products/computers", resquestHandler);
router.post("/products/videogames", resquestHandler);
router.post("/products/:product-id/followers/:follower-id", resquestHandler);
router.put("/products/:id", resquestHandler);
router.delete("/products/:id", resquestHandler);
router.delete("/products/:product-id/followers/:follower-id", resquestHandler);