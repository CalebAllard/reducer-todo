export const initialState = {
    item:[]
};

export const reducer = (state,action) => {

    switch(action.type){
        case "ADD_TODO":{
            return{
            ...state,
            item: [...state.item, action.payload]
            };
        }
        
        
        default: {
            return state;
        };
    }

};