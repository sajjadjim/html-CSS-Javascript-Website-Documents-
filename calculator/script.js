function appendValue(value) {
    document.getElementById('display').value += value;
}
function clearDisplay() {
    document.getElementById('display').value = '';
}
function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch {
        document.getElementById('display').value = 'Error';
    }
}
function updateDateTime() {
    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();
    document.getElementById('datetime').innerHTML = `<span class="font-semibold text-gray-500">${formattedDate}</span> - ${formattedTime}`;
}
setInterval(updateDateTime, 1000);
updateDateTime();