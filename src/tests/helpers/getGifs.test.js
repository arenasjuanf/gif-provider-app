import { getGifs } from "../../helpers/getGifs";

describe("getGifs fecth test", () => {

    test("it should to get 15 elements" , async() => {
        const gifs = await getGifs('spiderman');
        expect( gifs.length ).toBe(15)
    })

});