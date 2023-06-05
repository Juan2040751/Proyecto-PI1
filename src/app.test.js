/**
 * @jest-environment jsdom
 */

import ReactThreeTestRenderer from '@react-three/test-renderer';
import '@testing-library/jest-dom';

import Featured from "./components/featured_event";
describe("pruebas HU Sprint 1", () => {

    test('PI1-11', async () => {
        const renderer = await ReactThreeTestRenderer.create(
            <Featured />
        )

        const component = renderer.scene.children[0]._fiber
        expect(component.position).toEqual({ x: 0, y: 0, z: 0 })
    })

})