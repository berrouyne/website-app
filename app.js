const statusEl = document.getElementById("status");
const updatedAtEl = document.getElementById("updatedAt");

statusEl.innerText = "✅ Application is running";
updatedAtEl.innerText = new Date().toLocaleString();
