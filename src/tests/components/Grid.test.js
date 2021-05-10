import { shallow } from 'enzyme';
import Grid from '../../components/Grid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import "@testing-library/jest-dom";
jest.mock('../../hooks/useFetchGifs');

describe("<Grid> Tests", () =>{

    const category = "spiderman";

    test("Grid component should show successfully", () => {

        useFetchGifs.mockReturnValue({
            loading: true,
            data:[]
        });

        const wrapper = shallow(<Grid category={ category }/>);
        expect(wrapper).toMatchSnapshot();

    })

    test("should show items when images are ready", () => {

        const data = [
            {id:"abc", url: "https://localhost/test", title: "title"}
        ];

        useFetchGifs.mockReturnValue({
            loading: false,
            data
        });

        const wrapper = shallow(<Grid category={ category }/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GridGifItem').length).toBe(data.length);

    })

})