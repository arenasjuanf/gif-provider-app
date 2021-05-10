import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";
import '@testing-library/jest-dom'

describe("AddCategory tests", () => {

    const setCategories = jest.fn();
    let wrapper;

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={ setCategories } />);
    })

    test("the component should display correctly", () => {
        expect(wrapper).toMatchSnapshot();
    })

    test("show change text input", () => {
        const input = wrapper.find("input");
        const value = "chanclas";
        input.simulate('change',{ target: {value} })
        expect( wrapper.find("p").text().trim() ).toBe(value);
    })

    test("it shouldn't do submit", () => {
        
        const submit = wrapper.find("form").simulate("submit", { preventDefault(){} });

        expect(setCategories).not.toHaveBeenCalled();
    })


    test("SetCategories and clear input", () => {
        
        const value = "chanclas";

        const input = wrapper.find("input");
        input.simulate('change',{ target: {value} })
        const form = wrapper.find("form").simulate('submit', { preventDefault(){}});
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect( input.prop('value')).toBe('');

    })

})