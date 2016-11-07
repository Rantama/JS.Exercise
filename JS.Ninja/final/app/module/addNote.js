define([''] function add_button() {
    var title_val = document.getElementById('title_val').value;

    var todo = get_todo();
    todo.push(title_val);
    localStorage.setItem('todo', JSON.stringify(todo));

    show();

    return false;
}

})
