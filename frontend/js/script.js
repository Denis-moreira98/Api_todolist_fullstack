const fetchTasks = async () => {
   const response = await fetch("https://localhost:3333/tasks");
   const tasks = await response.json();
   return tasks;
};
