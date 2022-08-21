const noteValue = document.querySelector('.noteValue');
const submitButton = document.querySelector('.submit');
const notesSection = document.querySelector('.notes_section');

submitButton.addEventListener('click', () => {
	const child = document.createElement('section');
	let noteParent = document.createElement('p');
	let cancelBtn = document.createElement('button');
	cancelBtn.textContent = "X";
	cancelBtn.classList.add('cancelBtn');

	noteParent.textContent = noteValue.value;
	child.appendChild(noteParent);
	child.classList.add('note');
	child.appendChild(cancelBtn);
    notesSection.appendChild(child);
    noteValue.value = '';
	cancelBtn.addEventListener('click', () => {
		child.style.display = 'none';
	}) 
})