const initialState = {
    newsList: []
}

function news (state= initialState, action){
    switch (action.type){
        case 'ADD_NEWS_LIST':
            console.log({...state, newsList: [...action.payload] })
            return {...state, newsList: [...action.payload] }
        default:
            return {...state}
    }
}
export default news;