function updateCalendar() {
    const currentDate = new Date();
    document.getElementById("currentDate").innerText = currentDate.toDateString();
    document.getElementById("currentDate").style.fontSize = "24px"
    document.getElementById("currentDate").style.fontWeight = '600'

    const calendar = document.getElementById("calendar");
    calendar.innerHTML = "";
    
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    daysOfWeek.forEach(day => {
        const dayElement = document.createElement("div");
        dayElement.classList.add("day", "header");
        dayElement.innerText = day;
        calendar.appendChild(dayElement);
    });
    
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const today = currentDate.getDate();
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();
    
    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement("div");
        calendar.appendChild(emptyCell);
    }
    
    for (let day = 1; day <= lastDate; day++) {
        const dayElement = document.createElement("div");
        dayElement.classList.add("day");
        dayElement.innerText = day;
        if (day === today) {
            dayElement.classList.add("today");
        }
        calendar.appendChild(dayElement);
    }
}

function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById("currentTime").innerText = timeString;
    document.getElementById("currentTime").style.fontSize = '20px'
}

updateCalendar();
updateTime();
setInterval(updateTime, 1000);