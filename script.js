/*function addNote() {
    const noteContent = document.getElementById('new-note-content').value;
    if (noteContent.trim() === "") {
        alert("A nota não pode estar vazia!");
        return;
    }

    const notesContainer = document.getElementById('notes');
    const noteElement = document.createElement('div');
    noteElement.classList.add('note');

    const noteTextarea = document.createElement('textarea');
    noteTextarea.value = noteContent;
    noteElement.appendChild(noteTextarea);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.innerHTML = '&times;';
    deleteButton.onclick = () => {
        notesContainer.removeChild(noteElement);
    };
    noteElement.appendChild(deleteButton);

    notesContainer.appendChild(noteElement);
    document.getElementById('new-note-content').value = "";
}*/



function addNote() {
    const noteContent = document.getElementById('new-note-content').value;
    if (noteContent.trim() === "") {
        alert("A nota não pode estar vazia!");
        return;
    }

    const notesContainer = document.getElementById('notes');
    const noteElement = document.createElement('div');
    noteElement.classList.add('note');

    const noteParagraph = document.createElement('p');
    noteParagraph.textContent = noteContent;
    noteElement.appendChild(noteParagraph);

    const noteTextarea = document.createElement('textarea');
    noteTextarea.value = noteContent;
    noteTextarea.style.display = 'none';
    noteElement.appendChild(noteTextarea);

    const editButton = document.createElement('button');
    editButton.classList.add('edit-button');
    editButton.textContent = '✏️';
    editButton.onclick = () => {
        noteParagraph.style.display = 'none';
        noteTextarea.style.display = 'block';
        saveButton.style.display = 'inline';
        editButton.style.display = 'none';
    };
    noteElement.appendChild(editButton);

    const saveButton = document.createElement('button');
    saveButton.classList.add('save-button');
    saveButton.textContent = '💾';
    saveButton.style.display = 'none';
    saveButton.onclick = () => {
        noteParagraph.textContent = noteTextarea.value;
        noteParagraph.style.display = 'block';
        noteTextarea.style.display = 'none';
        saveButton.style.display = 'none';
        editButton.style.display = 'inline';
    };
    noteElement.appendChild(saveButton);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.innerHTML = '&times;';
    deleteButton.onclick = () => {
        notesContainer.removeChild(noteElement);
    };
    noteElement.appendChild(deleteButton);

    notesContainer.appendChild(noteElement);
    document.getElementById('new-note-content').value = "";
}
