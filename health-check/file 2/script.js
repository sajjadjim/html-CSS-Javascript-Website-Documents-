function calculateAge() {
    const birthDate = document.getElementById("birthDate").value;
    
    if (!birthDate) {
        document.getElementById("result").innerText = "Please enter a valid date.";
        return;
    }

    const birthDateObj = new Date(birthDate);
    const now = new Date();

    if (birthDateObj > now) {
        document.getElementById("result").innerText = "Birth date cannot be in the future!";
        return;
    }

    let years = now.getFullYear() - birthDateObj.getFullYear();
    let months = now.getMonth() - birthDateObj.getMonth();
    let days = now.getDate() - birthDateObj.getDate();
    let hours = now.getHours() - birthDateObj.getHours();
    let minutes = now.getMinutes() - birthDateObj.getMinutes();
    let seconds = now.getSeconds() - birthDateObj.getSeconds();

    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    if (hours < 0) {
        hours += 24;
        days--;
    }
    if (days < 0) {
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += lastMonth.getDate();
        months--;
    }
    if (months < 0) {
        months += 12;
        years--;
    }

    document.getElementById("result").innerHTML = 
        `You are <strong>${years}</strong> years, <strong>${months}</strong> months, 
        <strong>${days}</strong> days, <strong>${hours}</strong> hours, 
        <strong>${minutes}</strong> minutes, and <strong>${seconds}</strong> seconds old.`;
}
