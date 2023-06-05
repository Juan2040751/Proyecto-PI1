/* eslint-disable testing-library/no-node-access */
/**
 * @jest-environment jsdom
 */

import ReactThreeTestRenderer from '@react-three/test-renderer';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from "@testing-library/react";
import Featured from "./components/featured_event";
import EventOne from './components/events/event_one';
import { Html } from '@react-three/drei';
import Landing from './components/landing';
import Register from './registro';
import { BrowserRouter } from 'react-router-dom';
import Login from './login';
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
        const renderer = await ReactThreeTestRenderer.create(
            <BrowserRouter><Register /></BrowserRouter>

        )
        const component = renderer.scene.children[0]._fiber
        expect(component.visible).toBeTruthy()

    })
    test('PI1-20', async () => {
        const renderer = await ReactThreeTestRenderer.create(
            <BrowserRouter><Login /></BrowserRouter>

        )
        const component = renderer.scene.children[0]._fiber
        expect(component.scale).toEqual({x:1, y:1, z:1})

    })
})

//describe("Pruebas HU Sprint 2", () => {})