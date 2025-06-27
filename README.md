# Student Manager App

A full-stack web application built with **React**, **Spring Boot**, and **MongoDB** to manage students learning French.

---

## ✨ Features

- Add students with name, age, and level
- View student list in real time
- Delete students from MongoDB
- Full communication between React and Spring Boot via REST API

---

## ⚙️ Tech Stack

- **Frontend**: React, Axios, HTML/CSS
- **Backend**: Java, Spring Boot, Spring Data MongoDB
- **Database**: MongoDB
- **Tools**: Docker, Git, Visual Studio Code

---

## 📁 Project Structure

/student-client --> React frontend (port 3000)
/demo --> Spring Boot backend (port 8080)

yaml
Copiar
Editar

---

## 🚀 How to Run the Project Locally

### 1. Start MongoDB (with Docker)

Make sure Docker is installed and run:

```bash
docker run --name mongo-springboot -d -p 27017:27017 mongo
2. Run the Backend (Spring Boot)
bash
Copiar
Editar
cd demo
./mvnw spring-boot:run
This will start the API at http://localhost:8080

3. Run the Frontend (React)
In another terminal:

bash
Copiar
Editar
cd student-client
npm install
npm start
This will open the app in your browser at http://localhost:3000

🧠 What I Learned
Connecting frontend and backend using REST

Solving CORS issues with @CrossOrigin

Using Docker for local MongoDB

Basic CRUD operations with MongoDB
