const initialState = {
    goalConfig: {
        title: "budget 50%",
        startDay: "09.09.2018",
        limitation: 4,
        daysArray: [
            {id: "09.09.2018", success: false, touched: false},
            {id: "10.09.2018", success: false, touched: true},
            {id: "11.09.2018", success: true, touched: true},
            {id: "12.09.2018", success: false, touched: false}
        ]
    }
}

const reducer = (state = initialState) => {
    return state;
}

export default reducer;