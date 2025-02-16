function displayCurrentTime() {
   const currentTime = new Date();
   let hours = currentTime.getHours();
   let minutes = currentTime.getMinutes();
   let seconds = currentTime.getSeconds();

   hours = hours < 10 ? '0' + hours : hours;
   minutes = minutes < 10 ? '0' + minutes : minutes;
   seconds = seconds < 10 ? '0' + seconds : seconds;

   return `${hours}:${minutes}:${seconds}`;
}

function updateTime() {
   const timeElement = document.getElementById('time');
   timeElement.textContent = displayCurrentTime();
}

setInterval(updateTime, 1000);

updateTime();
