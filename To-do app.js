var add = (event) => {
    if (event.keyCode == 13) {
        const main_element = document.createElement("div");
        main_element.className = "main_element";
        main_element.setAttribute("style", "display:flex;justify-content:space-around;background-color:rgb(248, 162, 162);margin:1%;color:rgb(38, 0, 255);")

        var task_value = document.getElementById('area').value;
        document.getElementById('area').value = "";

        var li = document.createElement("li");
        li.innerText = task_value;
        li.setAttribute("type", "none");
        li.setAttribute("style", "list-style:none;")

        var check = document.createElement("input");
        check.setAttribute("type", "checkbox");
        check.setAttribute("onclick", 'complete(this.parentNode)');

        var but = document.createElement("button");
        but.setAttribute("onclick", 'del(this.parentNode)');
        but.innerHTML = '&#10007;';

        main_element.append(li);
        main_element.append(check);
        main_element.append(but);
        document.getElementById("add1").append(main_element);
    }
}
var del = (element) => {
    element.remove();
}
var complete = (element) => {
    var sty = element.firstChild.style.textDecoration;
    if (sty === "line-through") {
        element.firstChild.style.textDecoration = "none";
    }
    else {
        element.firstChild.style.textDecoration = "line-through";
    }
}