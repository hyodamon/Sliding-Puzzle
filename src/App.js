import './App.css';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import Space from './comonent/Space';
import Button from './comonent/Button';
import styled, { keyframes, css } from 'styled-components';

const CONTAINER = styled.div`
    margin: 0 auto;
  width: fit-content;
  position: absolute;
  left: 50%;
  top: 55%;
  transform: translate(-50%, -50%);
`;

const MAIN = styled.div`
    background-color: rgba(240, 240, 240, 0.7);
  width: 30rem;
  height: 30rem;
  border-radius: 0.5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  align-items: center;
  padding: 0.25rem 0.25rem;
`;

const gameClear = keyframes`
  0% {
    background-color : rgba(255, 255, 255, 0);
    color : rgba(255, 99, 71, 0);
    box-shadow: 0px 0px 32px 1px rgba(0,0,0,0);
  }
  100% {
    background-color : rgba(255, 255, 255, 1);
    color : rgba(255, 99, 71, 1);
    box-shadow: 0px 0px 32px 1px rgba(0,0,0,0.6);
  }
`;

const GOOD = styled.div`
    display: block;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  width: 16rem;
  height: 9rem;
  background-color : rgba(255, 255, 255, 0);
    color : rgba(255, 99, 71, 0);
  border-radius: 0.5rem;
  text-align: center;
  font-size: 1.75rem;
  font-weight: 800;
  line-height: 9rem;
  opacity: 0.95;

  ${props => {
        console.log(JSON.stringify(props.spaceNums) === JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0]))
        if (JSON.stringify(props.spaceNums) === JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0])) {
            return css`
                    display: block;
                    animation: ${gameClear}  1s linear forwards;
                    animation-delay: 1s;
                `
        }
        else {
            return css`
                    display: none;
                `
        }
    }}
`;

function App(state) {

    const spaceNums = useSelector(state => state.spaceNums);
    console.log(spaceNums);

    const createSpaces = () => {
        let result = [];
        for (let i = 0; i <= 15; i++) {
            result.push(
                <Space
                    id={i}
                />);
        }
        return result;
    }

    return (
        <CONTAINER>
            <MAIN>
                {createSpaces()}
            </MAIN>
            <GOOD spaceNums={spaceNums}>
                Game Clear!
            </GOOD>
            <Button />
        </CONTAINER>
    );
}

export default App;
