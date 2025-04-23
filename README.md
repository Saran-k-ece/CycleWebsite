# 🚴‍♂️ Cycle Website

A full-featured **Cycle Website** built with the **MERN Stack** (MongoDB, Express.js, React, Node.js). This application supports **user authentication** and **cart management**, providing a smooth and secure e-commerce experience.

## 🌐 Live Demo

🔗 _[Add your deployed link here if available]_

## 🔑 Key Features

- 🧾 User Registration & Login (Authentication)
- 🛒 Add to Cart & View Cart Items
- 🚴 Display of available cycles with details
- 🔐 Secure storage of user data and cart items in MongoDB
- 📦 RESTful API integration for backend communication
- 💻 Responsive frontend with React

## 🧰 Tech Stack

- **Frontend**: React, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **API Testing**: Postman (optional)
- **Deployment**: Vercel (Frontend), Render/Heroku (Backend) or any hosting of choice

## 🏁 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-cycle-website.git
2. Navigate to the project folder
cd your-cycle-website
3. Install frontend dependencies
cd client
npm install
4. Install backend dependencies
cd ../server
npm install
5. Set up environment variables
Create a .env file in the server directory with the following:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
6. Run the backend server
Edit
npm run dev
7. Run the frontend
In a separate terminal:
cd client
npm start
📂 Folder Structure
cpp
Copy
Edit
├── client/ (React frontend)
│   ├── src/
│   ├── public/
│   └── ...
├── server/ (Express backend)
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── ...
