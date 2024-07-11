import React from 'react'
import {render,fireEvent, getByText} from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './button';
test('render button with Label',()=>{
    const {getByText}=render(<Button label="ClickMe"/>)
    const buttonElement=getByText('ClickMe');
    expect(buttonElement).toBeInTheDocument();
});

test('ClassName btn present',()=>{
    const {container}=render(
        <Button label="ClickMe"/>

    )
    const buttonElement=container.querySelector('button');
    expect(buttonElement).toHaveClass('btn');
})

// const mockFun=jest.fn();
// test('fun',()=>{
//     mockFun();
//     mockFun();
//     expect(mockFun).toHaveBeencalledTimes(2);
// })

test('Button is clicked',()=>{
    const onClickMock=jest.fn();
    const button=render(<Button label="click me" onClick={onClickMock}></Button>)
    const buttonElement=buttom.getByTest('Click me');
    fireEvent.click(buttonElement)
    expect(onClickMock).toHaveBeenCalledTimes(2);
})