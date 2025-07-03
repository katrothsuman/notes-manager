# 📝 Notes Manager (Fullstack Web App)

A simple fullstack Notes Manager application that allows users to create, view, and delete notes. This project is built using React for the frontend and Node.js (Express) for the backend. Notes are stored in a local JSON file for simplicity.

---

## 🚀 Features

- ✅ Add new notes
- 📋 Display all notes
- ❌ Delete existing notes
- 🔄 Auto-updates after each action
- 💻 Responsive design for web

---

## 🛠️ Tech Stack

| Layer      | Technology                     |
|------------|--------------------------------|
| Frontend   | React, Axios, HTML, CSS        |
| Backend    | Node.js, Express, UUID, CORS   |
| Storage    | Local JSON file (`data.json`)  |

---

## 🧩 Project Structure

```
notes-manager/
├── backend/
│   ├── index.js
│   ├── package.json
│   └── data.json
└── frontend/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── App.js
    │   └── index.js
    └── package.json
```

---

## ⚙️ How to Run the Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/katrothsuman/notes-manager.git
cd notes-manager
```

### 2. Start Backend

```bash
cd backend
npm install
node index.js
```

> 🟢 Backend will start on `http://localhost:3000`

### 3. Start Frontend

Open a new terminal:

```bash
cd frontend
npm install
npm start
```

> 🌐 Frontend will run on `http://localhost:3001` (or next available port)

---

## 📸 Screenshots (Optional)



## 🤝 Contribution

Feel free to fork this repository and submit a pull request for suggestions or improvements.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🙋‍♂️ Author

- **Suman Charan**
- GitHub: [@katrothsuman](https://github.com/katrothsuman)
