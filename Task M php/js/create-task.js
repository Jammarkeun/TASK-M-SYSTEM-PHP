export class CreateTaskController {
    constructor() {
        this.taskService = new TaskService();
        this.initForm();
    }

    initForm() {
        const form = document.getElementById('createTaskForm');
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            await this.handleSubmit(e);
        });
    }

    async handleSubmit(e) {
        const formData = new FormData(e.target);
        const taskData = {
            title: formData.get('title'),
            description: formData.get('description'),
            due_date: formData.get('due_date'),
            priority: formData.get('priority'),
            category: formData.get('category')
        };

        try {
            await this.taskService.createTask(taskData);
            window.location.hash = '#/dashboard';
        } catch (error) {
            console.error('Error creating task:', error);
        }
    }
}
