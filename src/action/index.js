const moveNum = (curNum) => ({
    type: "moveNum",
    curNum: curNum
})

const gameStart = (Nums) => ({
    type: "gameStart",
    Nums: Nums
})

const gameStop = () => ({
    type: "gameStop"
})

const setEmptySpaceNum = (emptyNum) => ({
    type: "setEmptySpaceNum",
    emptyNum: emptyNum
})

export { moveNum, gameStart, gameStop, setEmptySpaceNum };