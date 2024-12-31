# Job Portal Application

FRONTEND LIVE: (https://job-portal-frontend-ecru.vercel.app/)

BACKEND LIVE:

USER_API_END_POINT="https://job-portal-backend-5utw.onrender.com/api/v1/user";
JOB_API_END_POINT="https://job-portal-backend-5utw.onrender.com/api/v1/job";
APPLICATION_API_END_POINT="https://job-portal-backend-5utw.onrender.com/api/v1/application";
COMPANY_API_END_POINT="https://job-portal-backend-5utw.onrender.com/api/v1/company";

## Overview

**Job Portal** is a web application built using React for the frontend and Node.js for the backend. This application serves as a platform for job seekers and employers to connect, enabling users to search for job opportunities, post job openings, and manage their applications efficiently.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)
- [Packages](#packages)
- [Contributing](#contributing)

## Features

- **User Authentication**: Secure login and registration for job seekers and employers.
- **Job Listings**: Browse and search for job openings.
- **Job Applications**: Apply for jobs directly through the platform.
- **Employer Dashboard**: Post new job openings and manage applications.
- **User Profiles**: Create and edit user profiles to showcase skills and experiences.

## Technologies Used

- **Frontend**: React, React Router, Axios, Tailwind
- **Backend**: Node.js, Express.js, MongoDB, Cloudinary
- **Deployment**: Vercel

## Installation

To get a local copy up and running, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/SunkaraboinaPraveenKumar/Job_Portal_App.git
   cd Job_Portal_App

Install the frontend dependencies:

cd frontend

1. Install dependencies for the frontend:
   ```bash
   npm install

cd backend

1. Install dependencies for the backend:
   ```bash
   npm install

Configure environment variables for the backend:

Create a .env file in the backend directory and add your Firebase and Hugging Face API credentials.
Usage
To start the development servers:

For the frontend:

1.
   ```bash
   cd frontend
   npm run dev

For the backend:

1.
   ```bash
   cd backend
   npm start

Usage:

Access the application in your browser at http://localhost:5173 (frontend) and the backend API at http://localhost:3000/api/v1/user.

## API EndPoints:

-- /api/v1/user: Manages user-related actions such as registration, login, profile management, and authentication.

-- /api/v1/company: Handles operations for companies, including adding, updating, and managing company profiles and job postings.

-- /api/v1/job: Responsible for job-related functionalities like creating, viewing, updating, and searching for job listings.

-- /api/v1/application: Manages job applications, allowing users to apply for jobs and employers to view and manage applications.

## Folder Structure:

1. ```bash
    Job_Portal_App/
    ├── backend/
    │   ├── models/            # Mongoose models
    │   ├── routes/            # Express routes
    │   ├── controllers/       # Business logic
    │   └── config/            # Configuration files
    └── frontend/
        ├── src/
        │   ├── components/     # React components
        │   ├── pages/          # Page components
        │   └── App.js          # Main application file
        └── public/             # Public assets

## Packages:

### Frontend Packages:

- react: A JavaScript library for building user interfaces.
- react-dom: Provides DOM-specific methods for React.
- react-router-dom: Declarative routing for React applications.
- axios: Promise-based HTTP client for making requests.
- bootstrap: CSS framework for responsive design.
- react-bootstrap: Bootstrap components built with React.

### Backend Packages:

- express: Fast, unopinionated, minimalist web framework for Node.js.
- mongoose: MongoDB object modeling tool.
- dotenv: Module to load environment variables from a .env file.
- cors: Package to enable Cross-Origin Resource Sharing.
- bcryptjs: Library to hash passwords.

## Contributing

Contributions are welcome! Please follow these steps:

