const tasks = [
	'Task 1',
	'Task 2',
	'Task 3',
	'Task 4',
	'Task 5',
	'Task 6',
	'Task 7',
	'Task 8',
	'Task 9',
	'Task 10',
	'Task 11',
	'Task 12',
	'Task 13',
	'Task 14',
	'Task 15',
	'Task 16',
	'Task 17',
	'Task 18',
	'Task 19',
	'Task 20',
	'Task 21',
	'Task 22',
	'Task 23',
	'Task 24'
]

function addDays() {
	for (const [i, task] of tasks.entries()) document.getElementById('calendar').innerHTML += `
		<div id="day${i}" class="day" onclick="reveal(${i})">
			<p id="task${i}">${i + 1}</p>
		</div>
	`
}

function reveal(day) {
	const year = 2020
	if (new Date() < new Date(year, 11, day + 1)) return
	document.getElementById(`day${day}`).style.background = 'green'
	document.getElementById(`task${day}`).innerHTML = tasks[day]
}
