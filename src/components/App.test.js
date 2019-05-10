import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme , {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import locales from '../localization';
Enzyme.configure({ adapter: new Adapter() });


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('<App />', () => {
  it('application-title should be set', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.application-title').text()).toEqual('ULTIMATE ROMAN NUMERAL CONVERTER');
  });

  it('should render application title in italian', () => {
    const wrapper = shallow(<App />);
    wrapper.find('#locales').simulate('change', {currentTarget: {value: 'it'}});
    expect(wrapper.find('.application-title').text()).toEqual('CONVERTITORE NUMERICO ROMANO ULTIMATO');
  });

  it('should validate and show message if not valid number', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({errorMessage: 'Please enter a valid number between 1 and 3,999'});
    wrapper.find('.search').simulate('keyup', {currentTarget: {value: 'it', validity: {}}});
    expect(wrapper.state('errorMessage')).toEqual('Please enter a valid number between 1 and 3,999');
    expect(wrapper.state('valid')).toEqual(false);
  });

  it('should validate and show message if not valid number in another language', () => {
    const wrapper = shallow(<App />);
    locales.setLanguage('it');
    wrapper.find('.search').simulate('keyup', {currentTarget: {value: 'it', validity: {}}});
    expect(wrapper.state('errorMessage')).toEqual('Si prega di inserire un numero valido tra 1 e 3.999');
    expect(wrapper.state('valid')).toEqual(false);
  });

  it('should validate and set valid to true on state', () => {
    const wrapper = shallow(<App />);
    wrapper.find('.search').simulate('keyup', {currentTarget: {value: 'it', validity: {valid: true}, title: 'Please enter a valid number between 1 and 3,999'}});
    expect(wrapper.state('valid')).toEqual(true);
  });
});
