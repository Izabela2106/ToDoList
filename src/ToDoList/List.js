import React from 'react'
import styled from 'styled-components'
import Checkbox from './Checkbox'
import {useGlobalContext} from "./context"
  import {
      AiFillPlusCircle,AiFillDelete
  } from 'react-icons/ai'


const List = () => {
    
    const {changeListName,listName,input,setInput,addTask,tasks,handleCheckbox,removeTask,tasksNumber,doneTasksNumber,width,alert,alert_msg,removeAll,theme,toggleTheme}=useGlobalContext();
    let newWidth=`${width}%`;
    
    
 
    
  return <Wrapper className={`${theme}`}>
      <div className={`${theme}`}>
      <div className="Togglebutton" onChange={toggleTheme}>
          <label className="switch">
              <input type="checkbox" >
                  </input>
                <span className="slider"></span>

              </label>
          </div>
                <div className="alertBoxContainer">
      {alert && <div className="alertBox">{alert_msg}</div>}
                </div>
      <div className="list-container">
      <header className="header">
          
          <h2 className='title' onClick={(e)=>changeListName(e)}>{listName}</h2>
          <hr/>
          <div className="done">
              <div className="progress">
                  <p className="progressTitle">{listName}</p>
                  <p className="progressNumbers">{doneTasksNumber+"/"+tasksNumber}</p>
                  </div>
              <div className="progressBar">
                  
                  <div className="inside" ></div>
                  <div className="outside" style={{width:`${width}%`}}></div>
                  </div>
              </div>

        

          <form className="form" onSubmit={(e)=>addTask(e)}>
              <input type='text' value={input} onChange={(e)=>setInput(e)} className='input'></input>
                  <button type="submit" className="addButton"><AiFillPlusCircle/></button>
              </form>
          </header>
<div className="removeAllBtn" onClick={removeAll}>REMOVE ALL </div>
      <div className="list-center">
          <ul className='list'>
              {tasks.map((item,index)=>{
               
               return <div className="task" key={index}>
               <li><Checkbox className="checkbox" onClick={e=>handleCheckbox(item.id)} / > {item.name}</li>
          <button className="delteButton" onClick={()=>removeTask(item.id)}>
              <AiFillDelete/>
              </button>
               </div>
              })}
              
              </ul>
          </div>
              
              </div>
</div>
      </Wrapper>
}

const Wrapper = styled.section`


    width:100vw;
    height:100vh;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    background-color: var(--background);
    min-width:400px;

  
.list-container{
    background-color: var(--Listbackground);
height:80vh;
width:50vw;
display:flex;
    justify-content:flex-start;
align-items:center;
flex-direction:column;
    

}

input.inputTitle{
border:none;
font-size:2rem;

}

input.inputTitle:focus{
outline: none;
text-align:center;

}

.input{
width:90%;
height:35px;
width:40vw;
border:2px solid var(--progressBox);
    background:var( --taskHover);

&active{
border:var(--progressBox);
}


}




.done{
background:var(--progressBox);
border-radius:var(--radius);
margin-top:0.5rem;
padding:5px;

}

.progress{
display:flex;
flex-direction:row;
color:var(--progressBarFont);
justify-content:space-between;

.progressBar{

    margin:10px;
}

}
.inside{
position:relative;

height:10px;
width:100%;
background:var(--progressBarInside);
border-radius:var(--radius);
top:0px;


}
.outside{
position:relative;

height:10px;
background:var(--progressBarOutside);
border-radius:var(--radius);
top:-10px;

}

.progressTitle, .progressNumbers{
margin:10px;
}


.addButton{
border:none;
background:transparent;
font-size:1.4rem;
cursor:pointer;
}

.checked{
text-decoration:line-through;
}

.form{
display:flex;
justify-content:center;
align-items:center;
flex-direction:row;
margin-top:1rem;

}

.addButton{
display:flex;
justify-content:center;
align-items:center;
svg{color:var(--progressBox);}
font-size:2rem;
margin-left:1rem;
}
.title{
text-align:center;
margin-top:1rem;
font-size:2rem;
margin-bottom:0.5rem;
    color:var(--title);
}
    
hr{
    color:var(--hr);
}

.task{
display:flex;
justify-content:space-between;
align-items:center;
font-size:1.3rem;
margin: 0.5rem 0;
    

}
.task:hover{
background:var(--taskHover);
border-radius:var(--radius);
}

.list{
margin-top:2rem;
width:40vw;
}

ul{
list-style-type: none;
}

li{
word-break: break-all

}

.delteButton{
border:none;
background:transparent;
cursor:pointer;
margin-left:10px;
}
    .checkbox{
      background:var(--progressBox)  
    }
       
       
.removeAllBtn{
    background:var(--progressBox);
    color:white;
        border-radius:var(--radius);
    margin: 0.5rem 0;
    padding:0.5rem;
    cursor:pointer;

}
    
.alertBox{
 
    background:var(--progressBox);
    border-radius:var(--radius);
    color:var(--taskHover);
    margin:10px;
    padding:5px;
    color:white;
}
    
    
    .alertBoxContainer{
        display:flex;
        justify-content:center;
        align-items:center;
        width:50vw;
        height:8vh;
         

        
    }
       
.Togglebutton{
    position:absolute;
    top:20px;
    right:10px;
}
       
.switch{
    position:relative;
    display:inline-block;
    width:50px;
    height:28px;
    margin:0 10px
}
       .slider{
           position:absolute;
           cursor:pointer;
           top:0;
           left:0;
           right:0;
           bottom:0;
           background-color:var(--progressBox);
           transition:.4s;
           border-radius:50px;
           
       }
       
.switch input {display:none}
       
.slider:before{
     position:absolute;
           position:absolute;
            content:'';
            height:20px;
            width:20px;
           left:4px;
           bottom:4px;
           background-color:white;
           transition: 0.4s;
           border-radius:50px;
}


input:checked + .slider{
    background-color:#dddddd;
}
       
       input:checked + .slider:before{
           transform:translateX(100%);
}
                                
                                
                                


`

export default List
