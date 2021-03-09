import React, { Component } from 'react'

import {shallow, mount, render} from 'enzyme';
import CounterBtn from './CounterBtn';

it('expect to render CounterBtn component', () => {
    const mockColor = 'red'
    expect(shallow(<CounterBtn color={mockColor}/>)).toMatchSnapshot();
    
})

it('correctly increments the counter', () => {
    const mockColor = 'red'
    const wrapper = shallow(<CounterBtn color={mockColor} />);

    wrapper.find('[id="counter"]').simulate('click')
    wrapper.find('[id="counter"]').simulate('click')
    expect(wrapper.state()).toEqual({count: 2});
    expect(wrapper.props().color).toEqual('red');
})