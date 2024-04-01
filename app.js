        // Step 1: Add Task
        const todoList = document.getElementById('todoList');
        const taskInput = document.getElementById('taskInput');
        const addBtn = document.getElementById('addBtn');

        addBtn.addEventListener('click', function() {
            const task = taskInput.value;

            if (task.trim() !== '') {
                const todoItem = createTodoItem(task);
                todoList.appendChild(todoItem);
                taskInput.value = '';
            }
        });

        function createTodoItem(task) {
            const todoItem = document.createElement('div');
            todoItem.classList.add('todo-item');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.addEventListener('change', function() {
                if (this.checked) {
                    todoItem.classList.add('completed');
                } else {
                    todoItem.classList.remove('completed');
                }
            });

            const taskText = document.createElement('span');
            taskText.textContent = task;

            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('delete-btn');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', function() {
                todoItem.remove();
            });

            todoItem.appendChild(checkbox);
            todoItem.appendChild(taskText);
            todoItem.appendChild(deleteBtn);

            return todoItem;
        }