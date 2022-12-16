import { cleanup, render, screen } from "@testing-library/react";
import { describe, afterEach, test, expect } from "vitest";
import BasicBtn from "./index";

describe('Bassic Button', ()=> {
    afterEach(cleanup)

    test('render correctly', () => {
		render(<BasicBtn />)
	  })

    test('Cargar el botón', ()=>{
        render(<BasicBtn/>)
        const ButtonBassic = screen.getByRole('button')
        expect(ButtonBassic).toBeInTheDocument()
    })
})