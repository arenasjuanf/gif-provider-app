import { shallow } from 'enzyme';
import {GifProviderApp} from '../GifProviderApp';
describe("<GifProviderApp/> tests", () => {

    test("<GifProviderApp/> component should show successfully", () => {

        const wrapper = shallow(<GifProviderApp />);
        expect(wrapper).toMatchSnapshot();

    })

    test("it should to show catergories list", () => {

        const categories = ["spiderman", "naruto"];

        const wrapper = shallow(<GifProviderApp defaultCategories={ categories } />);
        expect(wrapper.find('Grid').length).toBe(categories.length);

    })


})