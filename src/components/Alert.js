import React from 'react'

function Alert(props) {
    const capitalized=(word)=>{
        const str=word.toLowerCase();
        return str.charAt(0).toUpperCase()+str.slice(1);
    }
    return (
        <div style={{height:'30px'}}>{
          props.alert && <div class={`alert alert-${props.alert.mes} alert-dismissible fade show`} role="alert">
  <strong>{capitalized(props.alert.mes)}</strong> : {props.alert.type} 
  
  </div>
}
</div>
        
    )
}

export default Alert
