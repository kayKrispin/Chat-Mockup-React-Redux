import React,  { Component } from 'react';

class  RenderField extends Component{
  render(){
    let inputClass = ['input-group-text inp-test'];
    let inputMain = ['input-field'];
    const { icon,input, type, label, meta: {touched,error,warning }} = this.props;
    if(touched && error) {
        inputClass.push('error');
        inputMain.push('error');
        console.log(inputMain)
    }
    return(
      <div className="input-group">
       <div className="input-group-prepend">
         <span className={inputClass.join(' ')} >
            <i className={icon}></i>
            <span className="icon icon-at"></span>
         </span>
       </div>
          <input {...input}  className={inputMain.join(' ')} placeholder={label} type="text" />
          <div className='span-error'>{touched && ((error  && <span className='spanErr'><span className='sign'><i class="fas fa-exclamation"></i></span>{error}</span>)||(warning && <span>{warning}</span> ))}</div>
      </div>
    )
  }
}
export default RenderField;
