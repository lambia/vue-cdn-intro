const { createApp } = Vue;

createApp({
	data() {
		return {
			payload: "testo salvato in data"
		}
	},
	methods: {
		appInit() {
			console.log("Applicazione montata correttamente");
		}
	},
	mounted() {
		this.appInit();
	}
}).mount("#app")