const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      tasks: [],
      newTask: '',
    };
  },
  methods: {
    // Function for add new task
    addNewTask() {
      const data = { task: this.newTask };
      const config = { headers: { 'Content-Type': 'multipart/form-data' } };

      axios.post('http://localhost/php-todo-list-json/api/tasks/', data, config)
        .then(res => {
          this.tasks.push(res.data);
          this.newTask = '';
        });
    },
    // Function for toggle complete task
    toggleTask(taskId) {
      const data = { id: taskId };
      const config = { headers: { 'Content-Type': 'multipart/form-data' } };

      axios.post('http://localhost/php-todo-list-json/api/tasks/toggle/', data, config)
        .then(res => {
          this.tasks = res.data;
        });
    },
    // Function for delete task
    deleteTask(taskId) {
      const data = { id: taskId };
      const config = { headers: { 'Content-Type': 'multipart/form-data' } };

      axios.post('http://localhost/php-todo-list-json/api/tasks/delete/', data, config)
        .then(res => {
          this.tasks = res.data;
        });
    }
  },
  created() {
    axios.get('http://localhost/php-todo-list-json/api/tasks/').then((res) => {
      this.tasks = res.data;
    });
  },
});

app.mount('#app');