export const initialState = {
    item:[]
};

export const reducer = (state,action) => {

    switch(action.type){
        case "ADD_TODO":{
            return{
            ...state,
            item: [...state.item, 
                {   
                    id: Date.now(), 
                    item: action.payload,
                    completed:false
                }]
            };
        }
        case "REMOVE_TODO":{
            
            
            
            return{
                ...state,

                item: [state.item.filter(item => !item.completed )]    
            }

        }
        
        default: {
            return state;
        };
    }

};