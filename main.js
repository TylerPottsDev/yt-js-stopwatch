// Global variables
const time_el = document.querySelector('.watch .time')
const start_btn = document.getElementById('start')
const stop_btn = document.getElementById('stop')
const reset_btn = document.getElementById('reset')

let seconds = 0;
let interval = null;

// Event listeners
start_btn.addEventListener('click', start);
stop_btn.addEventListener('click', stop);
reset_btn.addEventListener('click', reset);

// Update the timer
function timer () {
	seconds++; // Increase seconds by 1

	// Get the hours, minutes and seconds
	let secs = seconds % 60;
	let mins = Math.floor(seconds / 60);
	let hrs = Math.floor(seconds / 3600);

	// Format the time
	if (secs < 10) secs = '0' + secs;
	if (mins < 10) mins = '0' + mins;
	if (hrs < 10) hrs = '0' + hrs;

	// Display the time
	time_el.innerHTML = `${hrs}:${mins}:${secs}`;
}

// Start the timer
function start () {
	if (interval) {
		return;
	}

	interval = setInterval(timer, 1000);
}

// Stop the timer
function stop () {
	clearInterval(interval);
	interval = null;
}

// Reset the timer
function reset () {
	stop();
	seconds = 0;
	time_el.innerHTML = '00:00:00';
}