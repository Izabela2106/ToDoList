import React, { useState, useContext, useEffect,useReducer} from 'react'
import { useCallback } from 'react'
import reducer from './reducer'


const AppContext = React.createContext()








const AppProvider = ({ children }) => {
    
    let getState=()=>{
    if(localStorage.getItem('state')){
       return JSON.parse(localStorage.getItem('state'))

    }
        else{
    return { tasks:[],
    tasksNumber:0,
    doneTasksNumber:0,
    listName:'List',
    input:'',
    alert:false,
    alert_msg:'',
    width:0,
  theme:"light-theme"
    
    }
        }
   
}
    
    
    
        const [state,dispatch]=useReducer(reducer,getState());
    
    const changeListName=(e)=>{
        e.preventDefault();
        e.stopPropagation();
        
        let finalValue='';
        let h2=e.target;
        
        
        if(e.target.nodeName === 'H2'){
        e.target.innerHTML="<input type='text' class='inputTitle' ></input>"
        let input=document.querySelector('.inputTitle');
            input.focus();
        input.addEventListener('keypress',(e)=>{
            if(e.key==='Enter'){
            finalValue=e.target.value;
                if(e.target.value<=0){
                    dispatch({type:"ALERT",payload:"List title must be at least 1 character"})

        setTimeout(()=>{
                    dispatch({type:"ALERT_HIDE"})

        },3000)       
                }

                
            dispatch({type:"CHANGE_LIST_NAME",payload:finalValue})

            }
        })
    }
        
       
    }
    
    
    
    const addTask=(e)=>{
          e.preventDefault();
        if(state.input.length <3){
                
                    dispatch({type:"ALERT",payload:"Task name must be at least 3 character"})

        setTimeout(()=>{
                    dispatch({type:"ALERT_HIDE"})

        },3000)       
                
        }
        else{
        
        dispatch({type:"ADD_TASK"})
        dispatch({type:"ALERT",payload:"Task added"})

        setTimeout(()=>{
                    dispatch({type:"ALERT_HIDE"})

        },4000)
        dispatch({type:"SET_INPUT",payload:''})
        }

    }
    
    const setInput=(e)=>{
        e.preventDefault();
        dispatch({type:"SET_INPUT",payload:e.target.value})
    }
    
    const deleteTask=()=>{
     dispatch({type:"DELETE_TASK"})

    }
    
    
    const handleCheckbox=(id)=>{
     
        
        
        dispatch({type:"HANDLE_CHECKBOX",payload:id});
        
    }
    
     const removeTask=(id)=>{
        
        dispatch({type:"REMOVE_TASK",payload:id})
                 dispatch({type:"HANDLE_CHECKBOX",payload:id});

          dispatch({type:"ALERT",payload:"Task removed"})

        setTimeout(()=>{
                    dispatch({type:"ALERT_HIDE"})

        },4000)
      

    }
     
     const removeAll=()=>{
         dispatch({type:"REMOVE_ALL"})
     }
     
     
     const toggleTheme=()=>{
         dispatch({type:"TOGGLE_THEME"})
     }
     
     
     useEffect(()=>{
         getState();
     },[])
     
     
      useEffect(()=>{
                localStorage.setItem('state',JSON.stringify(state));
     },[state])
     
      
     
     
     
    
    
    

    
   
    
  return <AppContext.Provider value={{...state,changeListName,setInput,addTask,deleteTask,handleCheckbox,removeTask,removeAll,toggleTheme}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
