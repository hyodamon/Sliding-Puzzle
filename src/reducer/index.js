
const initState = {
    startCnt: 0,
    spaceNums: [],
    emptySpaceNum: null
};

const reducer = (state = initState, action) => {

    const changeArray = (arr, cur, empty) => { // spaceNum의 상태 배열에서 현재 누른 칸과 빈 칸의 숫자를 바꿔주는 함수
        let a = arr;
        if (cur != null) {
            [a[cur], a[empty]] = [a[empty], a[cur]]
        }
        return a;
    }

    if (JSON.stringify(state.spaceNums) === JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0])) {
        state.startCnt = 0;
    }
    switch (action.type) {
        case "gameStart":
            return { ...state, spaceNums: action.Nums, startCnt: 1 }
        case "gameStop":
            return { ...state, spaceNums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 0, 15], startCnt: 0 }
        case "setEmptySpaceNum":
            return { ...state, emptySpaceNum: action.emptyNum }
        case "moveNum":
            return { ...state, spaceNums: changeArray(state.spaceNums, action.curNum, state.emptySpaceNum), emptySpaceNum: action.spaceNum };
        default:
            return state;
    }
}

export default reducer;