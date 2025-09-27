# Clickall - Digital Marketplace

A modern, secure, and intuitive web interface for Clickall, a marketplace for digital products like PDFs, audios, videos, and more, with a streamlined creator and affiliate experience.

This project is a frontend prototype built with React and TypeScript, designed to run directly in the browser without any build steps, thanks to an in-browser transpiler (Babel Standalone).

## ✨ Features

-   Browse and filter digital products.
-   View product details in a modal window.
-   Simulated checkout process using Transfermóvil.
-   Modal for uploading new products.
-   Dashboard for sellers to view their products and stats.
-   Responsive design for desktop and mobile devices.

## 🚀 Tech Stack

-   **React 19**: For building the user interface.
-   **TypeScript**: For static typing and improved code quality.
-   **Tailwind CSS**: For styling, included via CDN.
-   **Babel Standalone**: For in-browser TypeScript and JSX transpilation.
-   **No Build Step**: Uses modern browser features like `importmap` and an in-browser transpiler to run React and TypeScript code directly.

## 📂 Project Structure

```
.
├── components/         # React components
│   ├── modals/         # Modal components
│   └── ui/             # Generic UI components (Button, Icon, etc.)
├── App.tsx             # Main application component
├── constants.ts        # Mock data for products
├── index.html          # Entry point of the application
├── index.tsx           # React root renderer
├── metadata.json       # Project metadata
├── types.ts            # TypeScript type definitions
└── README.md           # You are here!
```

## 🏃‍♂️ Getting Started

This project is designed to be extremely simple to run. **No installation is required.**

### Instructions

1.  **Download or Clone the Repository**
    If you downloaded the code as a ZIP file, unzip it.

2.  **Open the HTML File**
    Simply open the `index.html` file in your favorite web browser (like Chrome, Firefox, or Edge).

That's it! The application will run directly.

### How This Works

This project uses **Babel Standalone**, a version of the popular JavaScript compiler that runs directly in the browser. When you open `index.html`:
1.  The browser loads Babel.
2.  Babel finds the script tag `<script type="text/babel">`.
3.  It fetches your `.tsx` files, converts the TypeScript and JSX code into standard JavaScript in memory.
4.  The browser then executes the converted code, and the React application starts.

This setup is perfect for prototypes and demos, as it completely removes the need for Node.js, npm, or any build tools.