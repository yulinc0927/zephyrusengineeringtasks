# Tasks Overview

This repository contains solutions for the following three tasks. Each task is designed to showcase best practices, modular architecture, and responsiveness.

---

## **Table of Contents**

1. [Tasks Overview](#tasks-overview)
2. [Libraries and Frameworks Used](#libraries-and-frameworks-used)
3. [Approach](#approach)
4. [Project Setup](#project-setup)
5. [Running the Project](#running-the-project)
---

## **Tasks Overview**

### **Task 1: Advanced HTML & CSS Layout**

Objective: Create a responsive, multi-section webpage that includes:

- A header, navigation bar, main content, and footer.
- At least three sections (e.g., About, Projects, Contact).
- Responsive design using **Tailwind CSS**.

---

### **Task 2: Dynamic Task Management Application**

Objective: Build a task management system with both front-end and back-end:

- **Front-End**: Built using React, TypeScript, and Tailwind CSS.
  - Includes a form for Task Title, Description, and Due Date.
  - Tasks are displayed with options to edit or delete.
  - Client-side validation for required fields.
- **Back-End**: RESTful API using Node.js, Express, and MongoDB.
  - CRUD endpoints: `GET /tasks`, `POST /tasks`, `PUT /tasks/:id`, `DELETE /tasks/:id`.
  - Data is persisted in a MongoDB database.

---

### **Task 3: Real-Time Data Fetching and Display**

Objective: Build a component in Vue 3 to:

- Fetch and display data from **JSONPlaceholder** API.
- Include a responsive UI (table for desktop, cards for mobile).
- Provide search and filter functionality with debounce for search.
- Handle errors and display appropriate messages for failed API calls.

---

## **Libraries and Frameworks Used**

### **Front-End**

- **Vue 3**: Front-end framework for building user interfaces.
- **TypeScript**: Ensures type safety and better code maintainability.
- **Pinia**: State management for shared and reactive data.
- **Tailwind CSS**: Utility-first CSS framework for responsive design.
- **Lodash**: Used for debounce functionality in search.

### **Back-End**

- **Node.js**: Server-side JavaScript runtime.
- **Express**: Lightweight framework for building RESTful APIs.
- **MongoDB**: Database to persist task data.
- **Mongoose**: ODM for MongoDB for schema modeling.

---

## **Approach**

### **Task 1**

- Designed the layout using **Tailwind CSS** for responsiveness and modern styling.
- Created a navigation bar with hamburger functionality for smaller screens.
- Utilized **CSS Grid** and **Flexbox** for layout structure.

### **Task 2**

- Developed the back-end API with CRUD functionality using Express and MongoDB.
- Used a modular architecture by splitting routes, controllers, and services.
- Built the front-end with a dynamic task form and list using React and TypeScript.
- Connected the front-end and back-end via Axios for API requests.

### **Task 3**

- Built reusable components (`DataDisplay`, `SearchFilter`) in Vue 3.
- Used the **Pinia** store for managing data and search/filter logic.
- Implemented a composable (`useFetchData`) for API fetching with error handling.
- Styled components with **Tailwind CSS**, making them responsive for both mobile and desktop.

---

## **Project Setup**

### **Requirements**

- Node.js (v16+ recommended)
- MongoDB (for Task 2)
- npm

### **Installation**

1. Clone the repository:

   ```bash
   git clone https://github.com/zephyrusengineeringtasks.git
   cd zephyrusengineeringtasks
   ```

## **Running the Project**

### **Task 1: HTML & CSS Layout**

1. Navigate to the task-1 folder:

   ```bash
   cd task-1
   ```

2. Open `1.html` in a browser or serve it using a static server.

### **Task 2: Task Management Application**

#### **Back-End Setup**

1. Navigate to the task-2/backend folder:

   ```bash
   cd task-2/backend
   ```

2. Start the server:

   ```bash
   npm install
   npm run dev
   ```

#### **Front-End Setup**

1. Navigate to the task-2/frontend folder:

   ```bash
   cd task-2/frontend
   ```

2. Start the React app:

   ```bash
   npm install
   npm run dev
   ```

### **Task 3: Real-Time Data Fetching**

1. Navigate to the task-3 folder:

   ```bash
   cd task-3
   ```

2. Start the development server:

   ```bash
   npm install
   npm run dev
   ```
