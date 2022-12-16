import { cleanup, render, screen } from "@testing-library/react";
import { describe, vitest } from "vitest";
import { CircleIcon } from "./CircleIconButton";
import user from '@testing-library/user-event'

describe('Prueba en el componente CircleIcon', ()=>{
    afterEach(cleanup)

it('render correctly', () => {
    render(<CircleIcon  iconName={'Phone'}/>)
  })

it('Renderiza el boton de CircleIconButton', () => {
    render(<CircleIcon iconName={'Phone'}/>)
    
    const CircleBtn = screen.getByRole('button')
    expect(CircleBtn).toBeInTheDocument()
})

it('Funciona correctamente el método onClick del botón', async () => {
    const onClick = vitest.fn()
    render(<CircleIcon onClick={onClick} iconName={'Phone'}/>)

    const buttonIcon = screen.getByRole('button')
    await user.click(buttonIcon)

    expect(onClick).toBeCalled()
  })
})