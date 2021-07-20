import { useSelector, useDispatch } from 'react-redux'
import { setEmptySpaceNum, moveNum } from '../action/index';
import styled, { keyframes, css } from 'styled-components';

const gameClear = keyframes`
  0% {
    color : rgba(255, 255, 255, 1);
  }
  100% {
    color : rgba(255, 255, 255, 0);
  }
`;

const SPACE = styled.div`
background-color: rgb(255, 255, 255);
  border-radius: 0.5rem;
  width: 6.5rem;
  height: 6.5rem;
  margin: 0 auto;
  text-align: center;
  line-height: 6.5rem;
  font-size: 1.5rem;
  font-weight: 1000;
  color : #1E3269;
  ${props => {
        if (props.blank) {
            if (JSON.stringify(props.position) === JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0])) {
                return css`
                background: #41295a; 
                    background: -webkit-linear-gradient(to top, #2F0743, #41295a); 
                    background: linear-gradient(to top, #2F0743, #41295a);
                    animation: ${gameClear}  1s linear forwards;
                `
            }
            else {
                return css`
                    background: #41295a; 
                    background: -webkit-linear-gradient(to top, #2F0743, #41295a); 
                    background: linear-gradient(to top, #2F0743, #41295a);
                    color : rgba(255, 255, 255, 1);
                `
            }
        }
    }}
`;
const Space = (props) => {
    const dispatch = useDispatch();

    const spaceNum = parseInt(props.id);
    const innerNum = useSelector(state => state.spaceNums[spaceNum]);
    const emptyNum = useSelector(state => state.emptySpaceNum);
    const spaceNums = useSelector(state => state.spaceNums);
    const startCnt = useSelector(state => state.startCnt);

    if (innerNum === 0) {
        dispatch(setEmptySpaceNum(spaceNum));
    }

    let possibleSpaceNum = [emptyNum + 1, emptyNum - 1, emptyNum + 4, emptyNum - 4];

    if ((emptyNum + 1) % 4 == 1) {
        possibleSpaceNum.splice(possibleSpaceNum.indexOf(emptyNum - 1), 1)
    }
    else if ((props.emptySpaceNum + 1) % 4 == 0) {
        possibleSpaceNum.splice(possibleSpaceNum.indexOf(emptyNum + 1), 1)
    }
    if (props.emptySpaceNum < 4) {
        possibleSpaceNum.splice(possibleSpaceNum.indexOf(emptyNum - 4), 1)
    }
    else if (props.emptySpaceNum > 11) {
        possibleSpaceNum.splice(possibleSpaceNum.indexOf(emptyNum + 4), 1)
    }


    const move = () => {
        possibleSpaceNum.map((value) => {
            if (spaceNum === value) {
                dispatch(moveNum(spaceNum));
            }
        })
    }

    if (JSON.stringify(spaceNums) === JSON.stringify([])) {
        return <SPACE id={spaceNum} onClick={move}></SPACE>;
    }
    else {
        if (innerNum) {
            return <SPACE id={spaceNum} onClick={move}>{innerNum}</SPACE>;
        }
        else {
            return <SPACE id={spaceNum} blank="true" position={spaceNums}><i class="fas fa-pastafarianism"></i></SPACE>
        }
    }
}

export default Space;