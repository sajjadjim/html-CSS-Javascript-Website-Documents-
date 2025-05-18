function updateDateTime() {
    let now = new Date();
    let date = now.toLocaleDateString();
    let time = now.toLocaleTimeString();
   date_time = document.getElementById("datetime")
   date_time.innerHTML = `
   <span class="date font-semibold text-xl text-emerald-500">${date}
   </span><span class="text-xl text-rose-500">${time}</span>
   `;
}
setInterval(updateDateTime, 1000);
updateDateTime();