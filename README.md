# 🔥 Alexander Heating Tracker

Real-time tracker calculating Alexander's heating costs per second with a live-updating graph.

## 🌍 Live Demo
- [Live Tracker (GitHub Pages)](https://demirozg.github.io/Alexander-Tracker/)
- [Backend API (Render)](https://demirozg.onrender.com/api/start-time)

## 🛠️ Features
- Real-time cost calculation based on a fixed price
- Visually appealing and responsive UI
- Dark mode support
- Persistent backend with Node.js & Express
- Automatic backend wake-up via scheduled cron job

## 📊 How It Works
The tracker calculates heating costs from a set start date, displaying:
- Current total cost
- Cost per second/minute/hour/day
- Interactive graph showing cost progression over time

## 🚀 Tech Stack
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Hosting:** GitHub Pages (frontend), Render (backend)

## 📌 Setup Instructions
1. Clone the repository:
   ```sh
   git clone https://github.com/demirozg/Alexander-Tracker.git
   ```
2. Install backend dependencies:
   ```sh
   npm install
   ```
3. Run backend locally:
   ```sh
   node backend_server.js
   ```
4. Update the API URL in `index.html` if needed

## ⚙️ Configuration
You can customize the heating cost calculation by modifying the rate variables in the frontend JavaScript code.

## 🤝 Contributing
Pull requests are always welcome! Feel free to suggest improvements or report issues.

## 📜 License
This project is available under the MIT License.

## 📅 Last Updated
2025-03-07