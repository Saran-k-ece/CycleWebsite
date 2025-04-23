# 🚴‍♂️ Cycle Website

A full-featured **Cycle Website** built with the **MERN Stack** (MongoDB, Express.js, React, Node.js). This app supports **user authentication** and **cart management**, allowing users to browse cycles, login, and save their cart items securely.

## 🌐 Live Demo

🔗 [View Live App](https://cycle-website-1.vercel.app/HomePage)

## 🔑 Key Features

- 🧾 User Registration & Login (Authentication)
- 🛒 Add to Cart & View Cart Items
- 🚴 Browse and view cycle listings
- 🔐 Secure backend with MongoDB and JWT
- 📦 RESTful APIs for frontend-backend integration
- 💻 Responsive design for desktop and mobile

## 🧰 Tech Stack

- **Frontend**: React, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Deployment**: 
  - Frontend: Vercel  
  - Backend
## 🏁 Getting Started

Follow the steps below to run this project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-cycle-website.git

2. Navigate into the project directory
cd your-cycle-website

3. Install frontend dependencies
cd client
npm install

4. Install backend dependencies
cd ../server
npm install

5. Set up environment variables
Create a .env file in the server directory and add the following:
env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

6. Run the backend server
npm run dev

7. Run the frontend app
In a separate terminal:
cd client
npm run dev

Then go to: http://localhost:3000

📂 Folder Structure
plaintext
Copy
Edit
├── client/           # React frontend
│   ├── src/
│   └── public/
├── server/           # Express backend
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── middleware/
├── README.md
