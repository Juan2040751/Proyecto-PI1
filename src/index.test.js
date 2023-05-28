/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';

import { render, screen } from "@testing-library/react";
import App from "./app";
import Featured from "./components/featured_event";
import EventOne from './components/events/event_one';
import Landing from './components/landing';
import Register from './registro';
import Login from './login';
describe("pruebas HU Sprint 1", () => {
    test("PI1-11", () => {
        render(<App>
            <Featured />
        </App>);
        expect(screen.getByText("EVENTOS HISTORICOS")).toBeInTheDocument();
    })
    test("PI1-13", () => {
        render(<App>
            <EventOne />
        </App>)
        expect(screen.getByText("Ciudades Sumerias")).toBeInTheDocument();
    })
    test("PI1-16", () => {
        render(<App>
            <Landing />
        </App>)
        expect(screen.getByText("La primera")).toBeInTheDocument();
    })
    test("PI1-19", () => {
        render(<App>
            <Register />
        </App>)
        expect(screen.getByText("Registro de Usuario")).toBeInTheDocument();
    })
    test("PI1-20", () => {
        render(<App>
            <Login />
        </App>)
        expect(screen.getByText("Hey, bienvenido")).toBeInTheDocument();
    })
})
