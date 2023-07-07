/* eslint-disable testing-library/no-node-access */
/**
 * @jest-environment jsdom
 */

import ReactThreeTestRenderer from '@react-three/test-renderer';
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import Arqitectura from './components/Arqitectura';
import Gastronomy from './components/Gastronomy';
import Test from './components/evaluacion';
import EventOne from './components/events/event_one';
import EventSix from './components/events/event_six';
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
        expect(screen.getByText("Como se vivía en las ciudades sumerias")).toBeInTheDocument();
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
        expect(screen.getByText("Situación de las principales ciudades sumerias y alcance de esta cultura durante el período dinástico arcaico.")).toBeInTheDocument();
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
        expect(renderer.getInstance().type).toBe('Group')
    })
})

describe("Pruebas HU Sprint 3", () => {
    test('PI1-25 is scene', async () => {
        const renderer = await ReactThreeTestRenderer.create(
            <Arqitectura />
        )
        expect(renderer.scene._fiber.type).toBe('Scene')
    })
    test('PI1-25 receive shadow', async () => {
        const renderer = await ReactThreeTestRenderer.create(
            <Arqitectura />
        )
        expect(renderer.scene._fiber.receiveShadow).toBeFalsy()
    })
    test('PI1-25 scale', async () => {
        const renderer = await ReactThreeTestRenderer.create(
            <Arqitectura />
        )
        expect(renderer.getInstance().scale).toEqual({ x: 1, y: 1, z: 1 })
    })
    test('PI1-26', async () => {
        render(<EventSix />)
        expect(screen.getByText("La literara sumeria, la más antigua del mundo.")).toBeInTheDocument();
    })
})

describe("Pruebas HU Sprint 4", () => {
    test('PI1-28 scene object type', async () => {
        const renderer = await ReactThreeTestRenderer.create(
            <Test />
        )
        expect(renderer.getInstance().type).toBe("Group")
    })
    test('PI1-28 scene up ', async () => {
        const renderer = await ReactThreeTestRenderer.create(
            <Test />
        )
        expect(renderer.getInstance().up).toEqual({ x: 0, y: 1, z: 0 })
    })
    test('PI1-28 scene child ', async () => {
        const renderer = await ReactThreeTestRenderer.create(
            <Test />
        )
        expect(renderer.scene._fiber.children.length).toBe(1)
    })
    test('PI1-28 scene without parent ', async () => {
        const renderer = await ReactThreeTestRenderer.create(
            <Test />
        )
        expect(renderer.scene.parent).toBe(null)
    })
})