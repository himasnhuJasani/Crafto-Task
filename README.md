# Crafto-Task

# Quote Management Application

## Overview

The Quote Management Application is a responsive frontend application designed to manage and display quotes. It includes user authentication, a paginated list of quotes, and functionality to create new quotes with text and image. The application is optimized for mobile devices and provides a seamless user experience.

## Features

1. **Login Page**:
   - **Username Input**: Field to enter the username.
   - **OTP Input**: Field to enter the One-Time Password (OTP).
   - **Submit Button**: Submits the login credentials for authentication.

2. **Quote List Page**:
   - **Paginated List of Quotes**: Displays a list of quotes retrieved from the API. Quotes are paginated to handle large sets of data efficiently.
   - **Floating Action Button**: Allows users to navigate to the quote creation page.
   - **Quote Display**:
     - **Image**: Displays the image associated with the quote, fetched from `mediaUrl`.
     - **Overlay Text**: Shows the quote text over the image with a semi-transparent background for readability.
     - **Username and Date**: Displays the username of the quote creator and the date when the quote was created.
   - **Pagination Handling**: Automatically stops pagination when no more quotes are available.

3. **Quote Creation Page**:
   - **Quote Text Input**: Field to enter the text for the new quote.
   - **Image Upload**: Allows users to upload an image. The image is then used to generate a URL for the quote.
   - **Submit Button**: Submits the quote text and the image URL to create a new quote.

## Technologies

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling and responsiveness.
- **React Router**: For handling navigation between pages.
- **Axios**: For making HTTP requests to the API.

## Setup and Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-repo/quote-management-app.git
   cd quote-management-app


To See the best verison of project, prefer to setup project in your local but for quick demo you can visit below link.

## Installation

To install the necessary dependencies, use Node.js v18.18.2 or later, and run:

```bash
npm install
```

## Usage

To start the development server, run:

```bash
npm run start
```

## Folder Structure

Here is an overview of the folder structure of the project:

```bash

src/
├── components/
│   └── Pagination/
│       ├── index.tsx
├── pages/
│   ├── LoginPage/
│   │   └── index.tsx
│   └── QuotesCreationPage/
│       ├── index.tsx
├── PrivateRoute/
│   │   └── index.tsx
├── App.tsx
├── index.css
├── index.tsx
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
├── tailwind.config.js
├── tsconfig.json
└── webpack.config.ts

```

## Contributing

We welcome contributions from the community! Here's how you can get involved:

--Fork the repository.
--Create a new branch (git checkout -b feature-branch).
--Make your changes.
--Commit your changes (git commit -m 'Add new feature').
--Push to the branch (git push origin feature-branch).
--Open a Pull Request.


```bash
git checkout -b feature-branch
git commit -m 'Add new feature'
git push origin feature-branch
```


