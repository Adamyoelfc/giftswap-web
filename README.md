# GiftSwap Web

The public web presence for GiftSwap, a social gifting product centered on events, wishlists, friends, and easier gift coordination.

This repository is the lightweight marketing site—not the primary application. The main product is a native React Native/Expo app for iOS and Android backed by a custom Express/PostgreSQL API.

## Stack

- Next.js 16 with the App Router
- React 19
- TypeScript
- Tailwind CSS 4

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Product architecture

GiftSwap is split into focused repositories:

- Native mobile client: React Native, Expo Router, TypeScript, NativeWind
- Backend API: Express, PostgreSQL, Sequelize, Socket.IO, JWT, Swagger/OpenAPI
- Public site: this Next.js application
