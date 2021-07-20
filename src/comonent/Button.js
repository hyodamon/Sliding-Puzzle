import { useSelector, useDispatch } from 'react-redux'
import { gameStart, gameStop } from '../action/index';
import styled, { css } from 'styled-components';

const BTNS = styled.div`
    margin: 2rem 2rem;
    display: flex;
    justify-content: space-around;
`;

const BTN = styled.button`
    background: linear-gradient(to bottom, #F46001, #E14802);
    color : white;
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
    font-size: 1.5rem;
    line-height: 4rem;
    text-align: center;
    border: none;
    cursor: pointer;
    box-shadow: 0 0 1rem rgba(255, 255, 255, .2);
    transition: transform .1s cubic-bezier(.5, 0, .5, 1), box-shadow .2s;
    
    &:hover {
        box-shadow: 0 0 2em rgba(255, 255, 255, .3);
    }

    outline: none;

    &:active {
        transform: scale(0.9);
    transition-timing-function: cubic-bezier(.5, 0, .5, 1);
    }

    ${props => {
        const StartCnt = useSelector(state => state.startCnt);
        if ((StartCnt && props.id === "startBtn") || (StartCnt === 0 && props.id === "stopBtn")) {
            return css` 
            background: rgb(180, 180, 180);

            &:active {
                transform:none;
            }
            `;
        }
    }}
    
    
`;

const Button = (state) => {

    const dispatch = useDispatch();
    const startCnt = useSelector(state => state.startCnt);

    const shuffle = (arr) => { // 무질서도
        let cnt = 0;
        for (let i = 0; i <= arr.length; i++) {
            for (let j = 0; j <= arr.length; j++) {
                if (arr[i] > arr[j]) {
                    cnt++;
                }
            }
        }
        if ((cnt % 2) === 0) {
            return arr.sort(() => Math.random() - 0.5);
        }
        else {
            return shuffle(arr.sort(() => Math.random() - 0.5));
        }
    }

    const assignNums = () => {
        if (startCnt === 0) {
            let puzzleNumList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
            puzzleNumList = shuffle(puzzleNumList.sort(() => Math.random() - 0.5));
            dispatch(gameStart(puzzleNumList));
        }
    };

    const _gameStop = () => {
        if (startCnt === 1) {
            dispatch(gameStop())
        }
    }
    return (
        <BTNS>
            <BTN className="btn" id="startBtn" onClick={assignNums}>
                <i className="fas fa-play"></i>
            </BTN>
            <BTN className="btn" id="stopBtn" onClick={_gameStop}>
                <i className="fas fa-stop"></i>
            </BTN>
        </BTNS>
    )
}

export default Button;