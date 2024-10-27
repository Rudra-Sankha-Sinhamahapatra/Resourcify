

---

# **Resourcify**

**Resourcify** is a full-stack web application that allows users to explore, request, and manage resources. It includes secure authentication, role-based access control, and a modern UI for ease of use. The app is built using **React**, **Node.js**, **MongoDB**, and is deployed using **Vercel** (frontend) and **Render** (backend).

---

## **Why We Are Building Resourcify**

### **Aim:**
The aim of Resourcify is to provide a platform where users can request resources, and admins can easily manage and approve these requests. It streamlines the resource management process, making it more efficient and secure for both users and administrators.

### **Problem:**
Organizations often struggle with inefficient resource management, leading to delays and confusion. Manual handling of requests and approvals can be error-prone and lacks proper tracking. Resourcify solves this problem by providing a user-friendly interface and backend to automate these processes.

### **Key Features:**
- **User Authentication**: JWT-based login and sign-up flow.
- **Resource Requesting & Management**: Users can submit resource requests, and admins can review and manage these requests.
- **Role-Based Access Control (RBAC)**: Different privileges for users and admins to maintain security.
- **Modern UI/UX**: Built with React and Tailwind CSS for a responsive and smooth user experience.
- **REST API Backend**: Backend APIs are designed to handle resource requests and user management.
  
### **Future Scope:**
- **Notifications System**: Push notifications for request status updates.
- **Analytics Dashboard**: Admins can view statistics on resources usage.
- **Multi-language Support**: Extending the app to support multiple languages.
- **Integrating Payments**: A system to request paid resources.

---

## **Features**

- **User Authentication**: JWT-based authentication for login and sign-up.
- **Resource Management**: Users can request resources, and admins can approve or deny requests.
- **Role-Based Access Control**: Different roles for users and admins.
- **Modern UI/UX**: Responsive interface built with React and Tailwind CSS.
- **REST API**: Backend powered by Express.js, with structured API endpoints.
- **CI/CD**: GitHub Actions for continuous integration and Docker support for local development.

---

## **Tech Stack**

### **Frontend:**
- **React**
- **Vite**
- **Tailwind CSS**

### **Backend:**
- **Node.js**
- **Express.js**
- **MongoDB** (Mongoose)

### **Deployment:**
- **Frontend**: Vercel
- **Backend**: Render
- **Database**: MongoDB Atlas

### **DevOps:**
- **Docker**: For containerized development and deployment

---

## **Installation**

### **Backend:**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Rudra-Sankha-Sinhamahapatra/Resourcify
   cd Resourcify
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env` file in the `backend` folder:**
   ```
   MONGODB_URL=mongodb://mongo:27017/my_database
   ADMIN_SECRET=secret
   JWT_SECRET=secret
   ADMIN_PASSWORD=secret
   FRONTEND_URL=http://localhost:5173
   NODE_ENV=development
   ```

4. **Run the application:**
   ```bash
   tsc -b
   node dist/index.js
   ```

---

### **Frontend:**

1. Open a new terminal, navigate to the frontend folder, and install dependencies:
   ```bash
   cd frontend
   npm install
   ```

2. **Create a `.env` file in the `frontend` folder:**
   ```
   VITE_BACKEND=http://localhost:3000
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Or you can build the project and then start it locally for a production-like environment:
   ```bash
   npm run build
   npm run start
   ```

---

## **Docker Setup**

You can run the entire application (frontend and backend) locally using Docker.

### **Build and Run Docker Image:**
- on a special note if you are using docker for local setup then remove the .env and node_modules from your local device otherwise docker run may fail 

1. **Navigate to the project root directory:**
   ```bash
   cd Resourcify
   ```

2. **Build the Docker image & run it locally:**
   ```bash
   docker compose up --build
   ```

This will start both the backend (on port 3000) and frontend (on port 5173) within the same container.

---

## **How to Use**

- **Frontend**: Deployed on Vercel 
- **Backend**: Deployed on Render 

---

## **Contributing**

Feel free to fork this repository and contribute by submitting a pull request. All contributions are welcome!

---

## **License**

This project is licensed under the MIT License.

---
