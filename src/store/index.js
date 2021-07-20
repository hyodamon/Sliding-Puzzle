import { createStore } from 'redux';
import reducer from "../reducer/index"

const store = createStore(reducer);

export default store;

/*
    1. action 수정 O
    2. 각 기능 reducer에서 component로 옮기기 O
*/