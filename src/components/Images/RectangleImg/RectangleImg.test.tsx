import { cleanup, render, screen } from "@testing-library/react";
import { describe, afterEach, test, expect } from "vitest";
import ImageRectangle from "./index";


describe('Prueba dem componenten <ImageRectangle />', () => {
	afterEach(cleanup)

	test('render correctly', () => {
		render(<ImageRectangle />)
	  })

	it('Renderizar la imagen de ImageRectangle', () => {
		render(<ImageRectangle />)
		const RectangleImg = screen.getByRole('banner')
		expect(RectangleImg).toBeInTheDocument()
	})
	it('Mostrar el Alt(Texto) del banner', () => {
		render(<ImageRectangle />)
		const RectangleImg2 = screen.getByAltText('BannerImage')
		expect(RectangleImg2).toBeInTheDocument()
	})
	it('Renderizar Avatar si no esta Resgistrado', () => {
		render(<ImageRectangle />)
		screen.debug()
		const AvatarLogin = screen.getByAltText('avatar')
		expect(AvatarLogin).toBeInTheDocument()
	})
})