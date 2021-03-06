export const initialState = {

    topList: [
    //     {
    //     title: "test",
    //     rank: 21
    // }
    ],

    wordList: [],

    animeList: [],

    search: "yugioh",

    savedWords: []
}

export default function reducer(state = initialState, action ) {

    //type of action

    switch(action.type) {

        case 'ADD_ITEM_TOP' :
            // some logic
             return {
                 ...state, // make a copy of the inital state
                 // then only update this specific object in state
                topList: action.payload.arr
             }
        case 'ADD_Anime_List':

             return {
                 ...state,
                 animeList: action.payload.arr 
             }
        case 'ADD_WORD':

             return {
                 ...state,
                 wordList: action.payload.arr
             }
        case 'SAVE_WORD':
            return {
                ...state,
                savedWords: action.payload.word
            }
        case 'REMOVE_SAVED':
            return {
                ...state,
                savedWords: action.payload.arr
            }

        default : return state
    }
}