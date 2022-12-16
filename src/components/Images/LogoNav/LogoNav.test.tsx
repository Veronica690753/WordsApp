import { cleanup, render, screen } from "@testing-library/react";
import { describe, afterEach, test, expect } from "vitest";
import LogoNav from "./index";

describe('Logo NavBar', ()=>{
    afterEach(cleanup) 

    test('render correctly', () => {
		render(<LogoNav />)
	  })

    test('Cargar la imagen del logo NavBar', ()=> {
        render (<LogoNav/>)
        const LogoImage = screen.getByRole('img')
        expect (LogoImage).toBeInTheDocument()
    })
})