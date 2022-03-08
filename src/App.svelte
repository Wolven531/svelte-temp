<script lang="ts" crossorigin="anonymous">
	export let name: string

	let lastSearched: string
	let pokePromise: Promise<Record<string, any>>

	const getPokemon = async (poke: string): Promise<Record<string, any>> => {
		const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
		const data = await res.json()

		if (res.ok) {
			return data
		}

		throw new Error(data)
	}

	const handleClick = (poke: string) => {
		if (lastSearched === poke) {
			return
		}

		lastSearched = poke
		pokePromise = getPokemon(poke)
	}

	// const getCountryData = async (): Promise<string> => {
	// 	const country = 'afghanistan'
	// 	const res = await fetch(
	// 		// `//www.cia.gov/the-world-factbook/countries/${country}`
	// 		// `http://www.morsecode-api.de/encode?string=${country}`,
	// 		`http://morsecodeapi.herokuapp.com/encode?string=${country}`,
	// 		{
	// 			// credentials: 'omit',
	// 			// headers: {
	// 			// 	crossorigin: 'anonymous',
	// 			// },
	// 			headers: {
	// 				'Content-Type': 'application/json; charset=utf-8',
	// 				// 'Content-Type': 'application/x-www-form-urlencoded'
	// 			},
	// 		}
	// 	)
	// 	const text = await res.text()

	// 	if (res.ok) {
	// 		return text
	// 	}

	// 	throw new Error(text)
	// }

	// let promise = getCountryData()

	// const handleClick = () => {
	// 	promise = getCountryData()
	// }
</script>

<main>
	<h1>Hello {name}!</h1>

	<button
		on:click={() => {
			handleClick('ditto')
		}}
		disabled={lastSearched === 'ditto'}
	>
		Get Ditto Data
	</button>
	<button
		on:click={() => {
			handleClick('bulbasaur')
		}}
		disabled={lastSearched === 'bulbasaur'}
	>
		Get Bulbasaur Data
	</button>
	<button
		on:click={() => {
			handleClick('mewtwo')
		}}
		disabled={lastSearched === 'mewtwo'}
	>
		Get MewTwo Data
	</button>

	{#if pokePromise}
		{#await pokePromise}
			<p>...waiting</p>
		{:then pokeData}
			<p>The poke data for {lastSearched}</p>
			<textarea cols="80" rows="25"
				>{JSON.stringify(pokeData, null, 4)}</textarea
			>
		{:catch error}
			<p class="err">{error.message}</p>
		{/await}
	{/if}
</main>

<style>
	h1 {
		color: #ff3e00;
		font-size: 4em;
		font-weight: 100;
		text-transform: uppercase;
	}

	main {
		margin: 0 auto;
		max-width: 240px;
		padding: 1em;
		text-align: center;
	}

	textarea {
		font-family: 'Courier New', Courier, monospace;
		white-space: pre;
		overflow-wrap: normal;
		overflow-x: scroll;
	}

	.err {
		color: #f00;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
