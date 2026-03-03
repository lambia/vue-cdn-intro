const { createApp } = Vue;

createApp({
	data() {
		return {
			newTask: {
				title: "",
				description: "",
				completed: false,
			},
			validationClass: "",
			todoList: [
				// {
				// 	id: 1,
				// 	title: "Completare lo sviluppo",
				// 	description: "Completare lo sviluppo: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, voluptate.",
				// 	completed: true
				// }
			],
			apiUrl: "https://jsonplaceholder.typicode.com/todos"
		}
	},
	methods: {
		appInit() {
			console.log("Applicazione montata correttamente", this.todoList);
		},
		addTask() {

			axios.post(this.apiUrl, newTask).then(response => {

				// this.todoList = response.data;
				console.log("dati");

			}).catch(error => {

				alert(`Ops... qualcosa è andato storto\n${error.message}`);
			});

			this.todoList.push();
		},
		clearTasks() {
			this.todoList = [];
		},
		toggleTask(id) {
			// console.log(`event.toggleTask id: ${id}, indice: ${index}`);
			// this.todoList[index].completed = !this.todoList[index].completed;

			const item = this.todoList.find(elemento => elemento.id == id);
			item.completed = !item.completed;

			const patchToSend = {
				completed: item.completed
			};

			axios.patch(`${apiUrl}/${id}`, patchToSend).then(response => {

				// this.todoList = response.data;
				console.log("dati");

			}).catch(error => {

				alert(`Ops... qualcosa è andato storto\n${error.message}`);
			});
		},
		clearTask(event, id, index) {
			console.log(`event.clearTask id: ${id}, indice: ${index}`);

			// this.todoList.splice(index, 1);

			// this.todoList = this.todoList.filter(elemento => elemento.id != id);

			axios.delete(`${apiUrl}/${id}`).then(response => {

				// this.todoList = response.data;
				console.log("dati");

			}).catch(error => {

				alert(`Ops... qualcosa è andato storto\n${error.message}`);
			});

		},
		getValidation() {
			let className = "";

			if (this.newTask.title.trim().length < 3) {
				className = "newtask-input-error"
			} else {
				className = "newtask-input-success"
			}

			return className;
		},
	},
	mounted() {
		this.appInit();

		axios.get(this.apiUrl).then(response => {

			this.todoList = response.data;
			console.log("dati");

		}).catch(error => {

			alert(`Ops... qualcosa è andato storto\n${error.message}`);
		});
	}
}).mount("#app")