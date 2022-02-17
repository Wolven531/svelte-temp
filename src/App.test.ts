import App from './App.svelte'
import { render, type RenderResult } from '@testing-library/svelte'

describe('App', () => {
	let comp: RenderResult

	beforeEach(() => {
		comp = render(App, { name: 'wOrLd' })
	})

	// Note: when using `fireEvent`, must be async test
	// Using await when firing events is unique to the svelte testing library because
	// we have to wait for the next `tick` so that Svelte flushes all pending state changes.
	it('renders greeting', () => {
		expect(comp.getByText(/Hello wOrLd!/)).toBeInTheDocument()
	})
})
