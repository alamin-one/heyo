# Heyo — Real-time Chat App

A real-time chat application built with React and Firebase.

## Live Demo

[heyo-chat.vercel.app](#)

---

## Features

- Real-time messaging with Firebase Firestore
- User authentication (Register / Login / Logout)
- Image sharing via Cloudinary
- Emoji picker support
- User search with debounce
- Mobile responsive with back navigation
- Dark / Light mode
- PWA support
- Profile update with avatar

---

## Tech Stack

| Frontend        | Backend            |
| --------------- | ------------------ |
| React 19        | Firebase Firestore |
| React Router    | Firebase Auth      |
| Tailwind CSS    | Cloudinary         |
| React Hot Toast |                    |
| Emoji Picker    |                    |

---

## Project Structure

```
src/
├── assets/         # icons, images
├── components/     # shared UI components
│   ├── context/    # auth context
│   ├── chat/       # chat components
│   └── sidebar/    # sidebar components
├── lib/            # utility functions
├── pages/          # all pages
└── firebase.js     # firebase config
```

---

## Getting Started

```bash
# install dependencies
npm install

# start dev server
npm run dev
```

---

## Environment Variables

Create a `.env.local` file:

```
VITE_API_KEY=
VITE_AUTH_DOMAIN=
VITE_PROJECT_ID=
VITE_STORAGE_BUCKET=
VITE_MESSAGING_SENDER_ID=
VITE_APP_ID=
```

---

## Repository

[github.com/alamin-one/heyo](https://github.com/alamin-one/heyo)

---

## Developed by

**Al-Amin** — [github.com/alamin-one](https://github.com/alamin-one)

---

## License

MIT
