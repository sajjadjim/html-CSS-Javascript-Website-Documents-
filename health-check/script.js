function goToOptions() {
    let name = document.getElementById("username").value;
    if (name.trim() === "") {
        alert("Please enter your name");
        return;
    }
    document.getElementById("welcome-page").classList.add("hidden");
    document.getElementById("options-page").classList.remove("hidden");
    document.getElementById("greeting").textContent = `Hello, ${name}! Choose an option:`;
}

function showSection(section) {
    document.getElementById("options-page").classList.add("hidden");
    document.getElementById(section + "-section").classList.remove("hidden");
}

function goBack() {
    document.querySelectorAll(".container").forEach(el => el.classList.add("hidden"));
    document.getElementById("options-page").classList.remove("hidden");
}

function calculateBMI() {
    let weight = parseFloat(document.getElementById("weight").value);
    let feet = parseFloat(document.getElementById("height-feet").value);
    let inches = parseFloat(document.getElementById("height-inches").value);
    if (!weight || !feet) {
        alert("Please enter valid weight and height");
        return;
    }
    let heightMeters = ((feet * 12) + inches) * 0.0254;
    let bmi = (weight / (heightMeters * heightMeters)).toFixed(2);
    document.getElementById("bmi-result").textContent = `Your BMI is: ${bmi}`;
    
    let suggestion = "";
    if (bmi < 18.5) {
        suggestion = "You are underweight. Consider a balanced diet with more proteins and healthy fats.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        suggestion = "Your weight is normal. Maintain a healthy diet and regular exercise.";
    } else if (bmi >= 25 && bmi < 29.9) {
        suggestion = `You are overweight. You may need to lose ${((bmi - 24.9) * heightMeters * heightMeters).toFixed(1)} kg for a healthy weight.`;
    } else {
        suggestion = `You are obese. You may need to lose ${((bmi - 24.9) * heightMeters * heightMeters).toFixed(1)} kg to reach a normal BMI.`;
    }
    document.getElementById("health-suggestion").textContent = suggestion;
}

function calculateAge() {
    let dob = document.getElementById("dob").value;
    if (!dob) {
        alert("Please select your date of birth");
        return;
    }
    let birthDate = new Date(dob);
    let today = new Date();
    
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
    
    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }
    
    document.getElementById("age-result").textContent = `Your age is: ${years} years, ${months} months, and ${days} days.`;
}