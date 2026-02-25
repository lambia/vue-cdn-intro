const { createApp } = Vue;

createApp({
	data() {
		return {
			modalCfg: {
				isOpen: false,
				title: "",
				description: ""
			},
			newTaskTitle: "",
			validationClass: "",
			dynamicTagName: "p",
			todoList: [
				{
					id: 1,
					title: "Completare lo sviluppo",
					description: "Completare lo sviluppo: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, voluptate.",
					completed: true
				},
				{
					id: 2,
					title: "Testare l'applicazione",
					description: "Testare l'applicazione: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, voluptate.",
					completed: false
				},
				{
					id: 3,
					title: "Rilasciare in QA",
					description: "Rilasciare in QA: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, voluptate.",
					completed: false
				}
			]
		}
	},
	methods: {
		appInit() {
			console.log("Applicazione montata correttamente", this.todoList);
		},
		addTask() {
			const newTodoObj = {
				title: this.newTaskTitle,
				description: "...",
				completed: false
			};

			this.todoList.push(newTodoObj);
			this.newTaskTitle = "";
		},
		clearTasks() {
			this.todoList = [];
		},
		toggleTask(id) {
			// console.log(`event.toggleTask id: ${id}, indice: ${index}`);
			// this.todoList[index].completed = !this.todoList[index].completed;

			const item = this.todoList.find(elemento => elemento.id == id);
			item.completed = !item.completed;

			this.openModal("Attenzione", "Stai per cambiare lo stato");
		},
		clearTask(event, id, index) {
			console.log(`event.clearTask id: ${id}, indice: ${index}`);

			// this.todoList.splice(index, 1);

			this.todoList = this.todoList.filter(elemento => elemento.id != id);

			this.openModal("Attenzione", "Il dato verrà eliminato");

		},
		getValidation() {
			let className = "";

			if (this.newTaskTitle.trim().length < 3) {
				className = "newtask-input-error"
			} else {
				className = "newtask-input-success"
			}

			return className;
		},
		changeDynamicTag() {
			this.dynamicTagName = this.dynamicTagName == "p" ? "div" : "p";
		},
		closeModal() {
			this.modalCfg.isOpen = false;
		},
		openModal(title, desc) {
			this.modalCfg.isOpen = true;
			this.modalCfg.title = title;
			this.modalCfg.description = desc;
		},
	},
	mounted() {
		this.appInit();
	}
}).mount("#app")