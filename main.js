const { createApp } = Vue;

createApp({
	data() {
		return {
			newTaskTitle: "",
			todoList: [
				"Completare lo sviluppo",
				"Testare l'applicazione",
				"Rilasciare in QA",
			],
			validationClass: "",
			// todoList: [
			// 	{
			// 		title: "Completare lo sviluppo",
			// 		description: "Completare lo sviluppo: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, voluptate.",
			// 		completed: true
			// 	},
			// 	{
			// 		title: "Testare l'applicazione",
			// 		description: "Testare l'applicazione: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, voluptate.",
			// 		completed: false
			// 	},
			// 	{
			// 		title: "Rilasciare in QA",
			// 		description: "Rilasciare in QA: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, voluptate.",
			// 		completed: false
			// 	}
			// ]
		}
	},
	methods: {
		appInit() {
			console.log("Applicazione montata correttamente", this.todoList);
		},
		addTask() {
			//svuota
			this.todoList.push(this.newTaskTitle);
			this.newTaskTitle = "";
		},
		clearTasks() {
			this.todoList = [];
		},
		getValidation() {
			let className = "";

			if (this.newTaskTitle.trim().length < 3) {
				className = "newtask-input-error"
			} else {
				className = "newtask-input-success"
			}

			return className;
		}
	},
	mounted() {
		this.appInit();
	}
}).mount("#app")