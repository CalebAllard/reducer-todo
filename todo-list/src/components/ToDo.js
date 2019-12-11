import React,{useState,useReducer} from 'react';
import {reducer,initialState} from '../reducers/reducer';

const ToDo = () => {

    const [itemState, dispatch] = useReducer(reducer,initialState);
    const [inputTxt, setInputTxt] = useState([]);
    const handleChange = (e) => {
        setInputTxt(e.target.value);
    };
    
    
    return(<>
    
    <form>
        <input type='text' name='item' id='item' onChange={handleChange} value={inputTxt}></input>
        <button onClick={(e) => { e.preventDefault(); dispatch({type:"ADD_TODO", payload:inputTxt}); setInputTxt(''); }}>Add</button>
        <button onClick={(e) => {e.preventDefault(); dispatch({type:"REMOVE_TODO"})}}>remove completed</button>
    </form>
    <div>
        {itemState.map((item,index) =>
           
           <h2  className={`${item.completed === true ? ' completed' : ''}`} onClick={() =>  dispatch({type:"TOGGLE_COMPLETE", payload:index})} key={item.id}> {item.item}</h2>
            
        )}
    </div>
    
    
    </>);
}

export default ToDo