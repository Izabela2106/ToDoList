

const reducer = (state,action) => {

    if(action.type==="CHANGE_LIST_NAME"){
        let oldInput=state.listName;
    
        if(action.payload.length>0){
           
        return {...state,listName:action.payload}
        }
        return {...state};
        
        
    }
    
     if(action.type==="SET_INPUT"){
        return {...state,input:action.payload}
    }
     if(action.type==="ADD_TASK"){
         
         let newTasks=[...state.tasks];
         let id=new Date;
         let Task=state.tasksNumber;
         if(state.input.length>=3){
         let newTask={id:(Date.parse(new Date)+state.input),name:state.input,done:false};
             Task=state.tasksNumber+1;
        
         newTasks.push(newTask);
         
             
         }
         let newWidth=((state.doneTasksNumber/Task)*100).toFixed(0);
         
         
         
        return {...state,tasks:newTasks,tasksNumber:Task,width:newWidth};
    }
    
    if(action.type==="HANDLE_CHECKBOX"){
        let newTasks=[...state.tasks];
        let newDoneTasksNumber=state.doneTasksNumber;
        
        newTasks=newTasks.map(item=>{
            if(item.id===action.payload){
            
            if(item.done===false){
               newDoneTasksNumber=state.doneTasksNumber+1;

                
               return {...item,done:true}
            }
            else{
                               newDoneTasksNumber=state.doneTasksNumber-1;

              return {...item,done:false}
                

            }
            
            }
            return {...item}
        })
        

                let newWidth=((newDoneTasksNumber/state.tasksNumber)*100).toFixed(0);

        return {...state,tasks:newTasks, doneTasksNumber:newDoneTasksNumber,width:newWidth};

    }
    
    
    if(action.type==="REMOVE_TASK"){
         let newTasks=[...state.tasks];
        let newDoneTasksNumber=state.doneTasksNumber;
        
         newTasks=newTasks.map((item)=>{
          
        if(item.id === action.payload){
            if(item.done===true){
                newDoneTasksNumber--;
                 
            }
        }
            return item;
        })
                            
                               
        
        
        newTasks=newTasks.filter((item)=>{
          
        return item.id !== action.payload
        }
                                );
        
        
     
        
        
        let Task=state.tasksNumber-1;
        let newWidth=((newDoneTasksNumber/Task)*100).toFixed(0);
        return {...state,tasks:newTasks,tasksNumber:Task,width:newWidth,doneTasksNumber:newDoneTasksNumber}
    }
    
    
    if(action.type==="ALERT_HIDE"){
        let newAlert=state.alert;
        if(state.alert===true){
            newAlert=false;
        }
        
        return {...state,alert:newAlert};
    }
    
    
    if(action.type==="ALERT"){
        return {...state,alert:true,alert_msg:action.payload}
    }
    
    
    if(action.type ==="REMOVE_ALL"){
        return {...state,tasks:[],tasksNumber:0,doneTasksNumber:0,width:0}
    }
    if(action.type==="TOGGLE_THEME"){
        let newTheme=state.theme;
        if(state.theme==='light-theme'){
            newTheme='dark-theme'
        }
        else{
            newTheme='light-theme'
        }
        return {...state,theme:newTheme}
    }
    
    
  //return state;

//default:
  
//throw new Error(`no matching "${action.type}" action`)
}
    

export default reducer 



