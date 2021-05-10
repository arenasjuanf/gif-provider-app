import { useFetchGifs } from '../../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe("UseFetchGifs tests", () => {
    
    test("it should return initial state", async () => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs("spiderman"))
        const  { data, loading } = result.current;
        await waitForNextUpdate()


        expect( data ).toEqual([]);
        expect( loading ).toBeTruthy();
    })

    test("it should return imgs array and loading in false", async () => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs("spiderman"));
        await waitForNextUpdate()
        const  { data, loading } = result.current;

        expect( data.length ).toBe(15);
        expect( loading ).toBeFalsy();
    })

})