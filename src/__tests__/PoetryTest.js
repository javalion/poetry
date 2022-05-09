import {render, screen, within} from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

describe('Poetry tests', () => {
    test('Page Load', async () => {
        render(<App />)
        expect(screen.getByRole('heading', {  name: /poetry/i})).toBeInTheDocument()
        const authorList = await screen.findByRole('list', {name: /authors/i})
        expect(within(authorList).getByText(/alexander pope/i)).toBeInTheDocument()
    })

    test( 'Author Works', async() => {
        render(<App />)
        const authorList = await screen.findByRole('list', {name: /authors/i});
        await userEvent.click(within(authorList).getByText(/alexander pope/i))
        const worksList = await screen.findByRole('list', {name: /works/i})
        expect(within(worksList).getByText(/The Baby's Dance/i)).toBeInTheDocument()
    })
})
