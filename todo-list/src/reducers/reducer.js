export const initialState = [];

export const reducer = (state,action) => {

    switch(action.type){
        case "ADD_TODO":{
            return[
            ...state,
            {
                   
                    id: Date.now(), 
                    item: action.payload,
                    completed: false
            }
            ]}
        
            case "REMOVE_TODO":{
            return state.filter(item => !item.completed); 

        };
        case "TOGGLE_COMPLETE": {
            
            console.log(action.payload)
            if(!state[action.payload].completed){
                let temp = state;
                temp[action.payload].completed = true;
                return temp
                
              }else{
                let temp = state;
                temp[action.payload].completed = false;
                return  temp
                
                
              }

        };
        default: {
            return state;
        };
    }

};