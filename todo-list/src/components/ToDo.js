import React,{useState,useReducer} from 'react';
import {reducer,initialState} from '../reducers/reducer';

const ToDo = () => {

    const [itemState, dispatch] = useReducer(reducer,initialState);
    const [inputTxt, setInputTxt] = useState([]);
    const handleChange = (e) => {
        setInputTxt(e.target.value);
    };
    const handleComplete = (e) => {
        if(!e.target.classList.contains('complete')){
            e.target.classList.add('complete');
        }else{
            e.target.classList.remove('complete');
        }
    };
    return(<>
    
    <form>
        <input type='text' name='item' id='item' onChange={handleChange} value={inputTxt}></input>
        <button onClick={(e) => { e.preventDefault(); dispatch({type:"ADD_TODO", payload:[inputTxt]})}}>Add</button>
    </form>
    <div>
        {itemState.item.map(item =>
           
           <h2 onClick={handleComplete}> {item}</h2>
            
        )}
    </div>
    
    
    </>);
}

export default ToDo