var tasks = [];

function addItem() {
    var input = document.getElementById('todoInput');
    var task = input.value;

    if (task.length) {
        //tasks.unshift(task);
        tasks.push(task);
        updateDisplay();
    }

    input.value = '';
}

function updateDisplay() {
    var ul = document.getElementById('todos');
    var htmlList = [];
    var i, li;

    for (i = 0; i < tasks.length; i++) {
        li = '<li class="list-group-item"> <span class="badge">13.03.2017</span>' + tasks[i] + '</li>';
        htmlList.push(li);
    }

    var joined = htmlList.join('\r\n');

    ul.innerHTML = joined;
}
