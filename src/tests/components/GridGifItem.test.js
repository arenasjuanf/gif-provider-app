import { shallow } from 'enzyme'
import GridGifItem from '../../components/gridGifItem';


describe("<GridGifItem /> tests", () => {

    const [ title, url ] = ['a title', 'https://localhost/some.php'];
    const wrapper = shallow(<GridGifItem title={ title } url={ url } />);

    test("it should to show successfully the component", () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test("it should had a title", () => {
        const p = wrapper.find("p");
        expect( p.text().trim() ).toBe(title);
    })

    test("img in props equal to 'url'", () => {
        const img = wrapper.find("img");
        expect( img.prop('src') ).toBe(url);
    })

    test("has classname 'animate__bounceIn'", () => {
        const div = wrapper.find("div");

        expect( div.hasClass('animate__bounceIn') ).toBe(true);
    })
})