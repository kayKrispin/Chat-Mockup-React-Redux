import React,  { Component } from 'react';

const renderField = ({ input, type, label, meta: {touched,error,warning } }) =>(
<div>
      <input {...input} className='inp' placeholder={label} type="text" />

          <div className='span-error'>{touched && ((error && <span >{error}</span>)||(warning && <span>{warning}</span> ))}</div>
</div>
)


export default renderField;
