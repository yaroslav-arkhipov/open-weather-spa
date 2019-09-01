import React from 'react';

function Input (props){
 return(
     <div className="mdc-textfield">
         <input className="mdc-textfield__input" type={props.type} name={props.name} placeholder={props.placeholder}/>
     </div>
        
 );
}

export default Input;