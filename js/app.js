var data = JSON.parse(localStorage.getItem("dailyTracker") || '{"tasks":[]}');
var editingIndex = -1;

function save() {
    localStorage.setItem("dailyTracker", JSON.stringify(data));
}
function addTask() {
    var title = document.getElementById("title").value.trim();
    if (!title) {
        return;
    }
    var task = {
        title: title,
        category: document.getElementById("category").value,
        start: document.getElementById("start").value,
        end: document.getElementById("end").value,
        comment: document.getElementById("comment").value,
        completed: false,
    };

    if (editingIndex >= 0) {
        task.completed = data.tasks[editingIndex].completed;
        data.tasks[editingIndex] = task;
        editingIndex = -1;
        document.getElementById("cancelBtn").style.display = "none";
        document.getElementById("addBtn").textContent = "Add Task";
    } else {
        data.tasks.push(task);
    }

    // Clear form
    document.getElementById("title").value = "";
    document.getElementById("category").selectedIndex = 0;
    document.getElementById("start").value = "";
    document.getElementById("end").value = "";
    document.getElementById("comment").value = "";

    render();
}
function deleteTask(i) {
    data.tasks.splice(i, 1);
    render();
}
function toggleTask(i) {
    data.tasks[i].completed = !data.tasks[i].completed;
    render();
}
function editTask(i) {

    var t = data.tasks[i];

    document.getElementById("title").value = t.title;
    document.getElementById("category").value = t.category;
    document.getElementById("start").value = t.start;
    document.getElementById("end").value = t.end;
    document.getElementById("comment").value = t.comment;

    editingIndex = i;
    document.getElementById("addBtn").textContent = "Save Task";
    document.getElementById("cancelBtn").style.display = "inline-block";

    document.getElementById("taskForm").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

function cancelEdit() {

    editingIndex = -1;

    document.getElementById("title").value = "";
    document.getElementById("category").selectedIndex = 0;
    document.getElementById("start").value = "";
    document.getElementById("end").value = "";
    document.getElementById("comment").value = "";

    document.getElementById("addBtn").textContent = "Add Task";
    document.getElementById("cancelBtn").style.display = "none";
}

function render() {
    var q = document.getElementById("search").value.toLowerCase();
    var el = document.getElementById("tasks");
    el.innerHTML = "";
    var completed = 0;
    for (var i = 0; i < data.tasks.length; i++) {
        var t = data.tasks[i];
        if (JSON.stringify(t).toLowerCase().indexOf(q) === -1) {
            continue;
        }
        if (t.completed) {
            completed++;
        }
        var d = document.createElement("div");
        d.className = "task" + (t.completed ? " done" : "");
        d.innerHTML =
            "<strong>" +
            t.title +
            "</strong><br>" +
            '<span class="category-badge">' +
            t.category +
            "</span><br>" +
            (t.comment || "") +
            '<br><br>' +
            '<button class="blue" onclick="editTask(' +
            i +
            ')">Edit</button> ' +

            '<button class="green" onclick="toggleTask(' +
            i +
            ')">' +
            (t.completed ? "Completed" : "Mark Complete") +
            '</button> ' +

            '<button class="red" onclick="deleteTask(' +
            i +
            ')">Delete</button>';
        el.appendChild(d);
    }
    document.getElementById("total").textContent = data.tasks.length;
    document.getElementById("completed").textContent = completed;
    save();
}
function exportJson() {
    var a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: "application/json" }));
    a.download = "daily-work-log.json";
    a.click();
}
function importJson(file) {
    var r = new FileReader();
    r.onload = function () {
        data = JSON.parse(r.result);
        render();
    };
    r.readAsText(file);
}
function generateSummary() {
    var lines = [];
    for (var i = 0; i < data.tasks.length; i++) {
        lines.push("- " + data.tasks[i].title + " [" + data.tasks[i].category + "] " + (data.tasks[i].comment || ""));
    }
    document.getElementById("summary").value = lines.join("\n");
}

document.getElementById("addBtn").addEventListener("click", addTask);
document.getElementById("exportBtn").addEventListener("click", exportJson);
document.getElementById("importBtn").addEventListener("click", function () {
    document.getElementById("fileInput").click();
});
document.getElementById("fileInput").addEventListener("change", function (e) {
    if (e.target.files[0]) {
        importJson(e.target.files[0]);
    }
});
document.getElementById("summaryBtn").addEventListener("click", generateSummary);
document.getElementById("search").addEventListener("input", render);
document.getElementById("cancelBtn").addEventListener("click", cancelEdit);

render();