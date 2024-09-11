# hp_api.js
Web-API for [hp-api.onrender.com](https://hp-api.onrender.com/) A simple JSON-based API for getting information on Harry Potter characters, [Source](https://github.com/KostaSav/hp-api)

## Example
```JavaScript
async function main() {
	const { HarryPotterApi } = require("./hp_api.js")
	const harryPotterApi = new HarryPotterApi()
	const characters = await harryPotterApi.getAllCharacters()
	console.log(characters)
}

main()
```
