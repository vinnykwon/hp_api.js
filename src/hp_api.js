class HarryPotterApi {
	constructor() {
		this.api = "https://hp-api.onrender.com/api"
		this.headers = {
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
		}
	}

	async getAllCharacters() {
		const response = await fetch(
			`${this.api}/characters`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getCharacter(characterId) {
		const response = await fetch(
			`${this.api}/character/${characterId}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getHogwartsStaff() {
		const response = await fetch(
			`${this.api}/characters/staff`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getHogwartsStudents() {
		const response = await fetch(
			`${this.api}/characters/students`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getHouseCharacters(house) {
		const response = await fetch(
			`${this.api}/characters/house/${house}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getAllSpells() {
		const response = await fetch(
			`${this.api}/spells`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {HarryPotterApi}
