/* eslint-disable testing-library/no-node-access */
/**
 * @jest-environment jsdom
 */

import ReactThreeTestRenderer from '@react-three/test-renderer';
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import Gastronomy from './components/Gastronomy';
import EventOne from './components/events/event_one';
import Featured from "./components/featured_event";
import Museum from './components/museum';
import Login from './login';
import Register from './registro';

describe("Pruebas HU Sprint 1", () => {

    test('PI1-11', async () => {
        const renderer = await ReactThreeTestRenderer.create(
            <Featured />
        )

        const component = renderer.scene.children[0]._fiber
        expect(component.position).toEqual({ x: 0, y: 0, z: 0 })
    })
    test('PI1-13', async () => {
        render(<EventOne />)
        expect(screen.getByText("Ciudades Sumerias")).toBeInTheDocument();
    })
    test('PI1-19', async () => {
        render(<BrowserRouter><Register /></BrowserRouter>)
        expect(screen.getByText("Registro de Usuario")).toBeInTheDocument();
    })
    test('PI1-20', async () => {
        render(<BrowserRouter><Login /></BrowserRouter>)
        expect(screen.getByText("Hey, bienvenido 👋")).toBeInTheDocument();
    })


})
describe("Pruebas HU Sprint 2", () => {
    test('PI1-8', async () => {
        const renderer = await ReactThreeTestRenderer.create(
            <Museum />
        )
        expect(renderer.scene._fiber.receiveShadow).toBeFalsy();
    })
    test('PI1-9', async () => {
        render(<EventOne />)
        expect(screen.getByText("Ciudades Sumerias")).toBeInTheDocument();
    })

    test('PI1-12', async () => {
        const renderer = await ReactThreeTestRenderer.create(
            <Gastronomy />
        )
        expect(renderer.getInstance().visible).toBeTruthy();
    })
    test('PI1-14', async () => {
        const renderer = await ReactThreeTestRenderer.create(
            <Museum />
        )
        console.log(renderer.getInstance().type)
        expect(renderer.getInstance().type).toBe('Group')
    })
})
