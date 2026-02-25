const { createApp } = Vue;

createApp({
	data() {
		return {
			name: null,
			surname: null,
			// oggetto: {}
			titleColor: "blue",
			isFormVisible: true,
			todoList: [
				"finire lezione",
				"salutarsi",
				"mangiare"
			],
			qualcosa: ""
		}
	},
	methods: {
		appInit() {
			console.log("Applicazione montata correttamente", this.name);
			// this.name = "Mario"
		},
		onButtonClicked() {
			console.log("Bottone cliccato");

			this.titleColor = (this.titleColor.target === "red") ? "blue" : "red";
		},
		onShowHideClicked() {
			this.isFormVisible = !this.isFormVisible;
		}
	},
	mounted() {
		this.appInit();
	}
}).mount("#app")