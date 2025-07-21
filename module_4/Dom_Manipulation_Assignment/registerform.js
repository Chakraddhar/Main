document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("studentform");
    form.addEventListener("submit", addStudentDetails);

    // Load students from localStorage on page load
    loadStudentsFromStorage();

    // Add vertical scrollbar dynamically if needed
    addScrollbarIfNeeded();
});

function validateInputs(name, studentId, email, contact) {
    const nameRegex = /^[A-Za-z\s]+$/;
    const idRegex = /^[0-9]+$/;
    const contactRegex = /^[0-9]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(name)) {
        alert("Student Name should contain only letters and spaces.");
        return false;
    }
    if (!idRegex.test(studentId)) {
        alert("Student ID should contain only numbers.");
        return false;
    }
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    if (!contactRegex.test(contact)) {
        alert("Contact Number should contain only numbers.");
        return false;
    }
    return true;
}

function addStudentDetails(event) {
    event.preventDefault(); // Prevent form submission reload

    const name = document.getElementById("name").value.trim();
    const studentId = document.getElementById("studentId").value.trim();
    const email = document.getElementById("email").value.trim();
    const contact = document.getElementById("contact").value.trim();

    // Prevent adding empty fields
    if (!name || !studentId || !email || !contact) {
        alert("All fields are required.");
        return;
    }

    // Validate inputs
    if (!validateInputs(name, studentId, email, contact)) {
        return;
    }

    // Add new student to table and localStorage
    addStudentToTable({ name, studentId, email, contact });
    saveStudentToStorage({ name, studentId, email, contact });

    document.getElementById("studentform").reset();

    addScrollbarIfNeeded();
}

function addStudentToTable(student) {
    const tableBody = document.getElementById("tableBody");
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${student.name}</td>
        <td>${student.studentId}</td>
        <td>${student.email}</td>
        <td>${student.contact}</td>
        <td>
            <button onclick="editStudent(this)">Edit</button>
            <button onclick="deleteStudent(this)">Delete</button>
        </td>
    `;

    tableBody.appendChild(row);
}

function saveStudentToStorage(student) {
    let students = JSON.parse(localStorage.getItem("students")) || [];
    students.push(student);
    localStorage.setItem("students", JSON.stringify(students));
}

function loadStudentsFromStorage() {
    const students = JSON.parse(localStorage.getItem("students")) || [];
    students.forEach(student => addStudentToTable(student));
}

function deleteStudent(button) {
    const row = button.closest("tr");
    const studentId = row.cells[1].innerText;

    row.remove();
    removeStudentFromStorage(studentId);
    addScrollbarIfNeeded();
}

function removeStudentFromStorage(studentId) {
    let students = JSON.parse(localStorage.getItem("students")) || [];
    students = students.filter(student => student.studentId !== studentId);
    localStorage.setItem("students", JSON.stringify(students));
}

function editStudent(button) {
    const row = button.closest("tr");
    const cells = row.getElementsByTagName("td");

    // Fill form with selected student info
    document.getElementById("name").value = cells[0].innerText;
    document.getElementById("studentId").value = cells[1].innerText;
    document.getElementById("email").value = cells[2].innerText;
    document.getElementById("contact").value = cells[3].innerText;

    // Remove old row & update storage on save (addStudentDetails will re-add)
    removeStudentFromStorage(cells[1].innerText);
    row.remove();

    addScrollbarIfNeeded();
}

function addScrollbarIfNeeded() {
    const container = document.getElementById("studentList");
    const maxHeight = 300; // Set max height for student list container
    container.style.maxHeight = maxHeight + "px";
    container.style.overflowY = container.scrollHeight > maxHeight ? "auto" : "hidden";
}
