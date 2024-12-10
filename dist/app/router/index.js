"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_router_1 = require("../module/Auth/auth.router");
const router = (0, express_1.Router)();
const modulesRoutes = [
    {
        path: '/auth',
        pathRoute: auth_router_1.authRouter,
    },
];
modulesRoutes.forEach(route => router.use(route === null || route === void 0 ? void 0 : route.path, route === null || route === void 0 ? void 0 : route.pathRoute));
exports.default = router;
