# Mini WhatsApp Chat App

A small Express and MongoDB app for creating, viewing, editing, and deleting chat messages.

## Features

- View all saved chats
- Create a new chat
- Edit an existing message
- Delete a chat with confirmation
- Seed the database with sample chats

## Tech Stack

- Node.js
- Express
- EJS
- MongoDB
- Mongoose
- method-override

## Project Structure

```text
mongo3/
+-- index.js          # Main Express server
+-- init.js           # Sample data seed script
+-- models/
|   +-- chat.js       # Mongoose chat schema
+-- public/
|   +-- script.js     # Browser JavaScript
|   +-- style.css     # App styles
+-- views/
    +-- index.ejs     # Chat list page
    +-- new.ejs       # Create chat page
    +-- edit.ejs      # Edit chat page
```

## Setup

Install dependencies:

```bash
npm install
```

Make sure MongoDB is running locally, then start the app:

```bash
node index.js
```

Open the app:

```text
http://localhost:8080/chats
```

## Seed Sample Data

Run this once if you want example chats in the database:

```bash
node init.js
```

## Main Routes

- `GET /chats` shows all chats
- `GET /chats/new` shows the create form
- `POST /chats` creates a chat
- `GET /chats/:id/edit` shows the edit form
- `PUT /chats/:id` updates a chat message
- `DELETE /chats/:id` deletes a chat

## Notes

- The app expects MongoDB at `mongodb://127.0.0.1:27017/whatsapp`.
- Message text currently follows the schema limit of 50 characters.
- The seed script adds sample data each time it runs, so repeated runs can create duplicate chats.
