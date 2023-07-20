const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      tasks: [],
      newTask: '',
    };
  },
  methods: {
    addNewTask() {
      const data = { task: this.newTask };
      const config = { headers: { 'Content-Type': 'multipart/form-data' } };

      axios.post('http://localhost/php-todo-list-json/api/tasks/', data, config)
        .then(res => {
          this.tasks.push(res.data);
          this.newTask = '';
        });
    },
    toggleTaskCompleted(task) {
      task.completed = !task.completed;
      const config = { headers: { 'Content-Type': 'application/json' } };
      axios.put(`http://localhost/php-todo-list-json/api/tasks/${task.id}`, task, config)
        .then(res => {
        })
        .catch(error => {
          console.error('Error while updating task:', error);
          task.completed = !task.completed;
        });
    },
  },
  created() {
    axios.get('http://localhost/php-todo-list-json/api/tasks/').then((res) => {
      this.tasks = res.data;
    });
  },
});

app.mount('#app');