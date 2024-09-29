function date() {
    let today = new Date();   
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();
    let day_num = today.getDay();
    let day_strs = ['일', '월', '화', '수', '목', '금', '토'];
    let day = day_strs[day_num];
    document.getElementById('dateDisplay').innerHTML = '오늘 날짜 : ' + year + '년 ' + month + '월 ' + date + '일 ' + day + '요일';
}

window.onload = function() {
    date();
    createToDoList();
};

function createToDoList() {
    const todoContainer = document.getElementById('todoContainer');

    const newBox = document.createElement('div');
    newBox.classList.add('box3', 'todo-list');

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Enter 키로 할 일을 추가하세요';
    input.classList.add('taskInput');

    const taskList = document.createElement('ul');
    taskList.classList.add('taskList');

    newBox.appendChild(input);
    newBox.appendChild(taskList);

    todoContainer.appendChild(newBox);

    input.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addTask(input, taskList);
        }
    });
}

function addTask(input, taskList) {
    const taskText = input.value;

    if (taskText.trim() === "") {
        alert("할 일을 입력해주세요");
    }

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");
    checkbox.addEventListener("change", function () {
        li.classList.toggle("completed");
    });

    li.textContent = taskText;
    li.prepend(checkbox);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function () {
        taskList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    input.value = "";
}