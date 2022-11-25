import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    currentNumber: 1,
    currentQuestions: 1,
    forSpeed: true,
    hurd: true,
    taskBattons: {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
    },
    timer: -1,
    currentAnswer: '',
    answers: {
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '',
        8: '',
        9: '',
        10: '',
        11: '',
        12: '',
        13: '',
        14: '',
        15: '',
    },
    firstMultiplier: {
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '',
        8: '',
        9: '',
        10: '',
        11: '',
        12: '',
        13: '',
        14: '',
        15: '',
    },
    secondMultiplier: {
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '',
        8: '',
        9: '',
        10: '',
        11: '',
        12: '',
        13: '',
        14: '',
        15: '',
    }
  };


  const logikaSlice = createSlice({
    name: 'logika',
    initialState,
    reducers: {
        setCurrentNumber: (state, action) => {
            state.currentNumber = action.payload;
        },
        setHurd: (state, action) => {
            state.hurd = action.payload;
        },
        setForSpeed: (state, action) => {
            state.forSpeed = action.payload;
        },
        setTasckBattons: (state,action) => {
            state.taskBattons = action.payload;
        },
        setTimer: (state,action) => {
            state.timer= action.payload;
        },
        setCurrentQuestions:  (state,action) => {
            state.currentQuestions= action.payload;
        },
        setCurrentAnswer:(state,action) => {
            state.currentAnswer= action.payload;
        },
        setAnswers:(state,action) => {
            state.answers= action.payload;
        },
        setFirstMultiplier:(state,action) => {
            state.firstMultiplier= action.payload;
        },
        setSecondMultiplier:(state,action) => {
            state.secondMultiplier= action.payload;
        },
    }
})

export const {setCurrentNumber,setTimer, setHurd,setTasckBattons, setForSpeed, setCurrentQuestions, setCurrentAnswer, setAnswers,setSecondMultiplier,setFirstMultiplier} = logikaSlice.actions;

export default logikaSlice.reducer;