import React from 'react';
import Results from './Results.css';

const Results = props => (
  <div className='eachArticle'>
    <div className='imgHolder col-md-3'>{props.image}</div>
    <div className='infoText col-md-9'>
      <h1>{props.title}</h1>
      <h3>{props.author}, written on {props.date} || {props.url}</h3>
      <button className='saveToDB'><span className="glyphicon glyphicon-heart" /></button>
    </div>
  </div>
)

export default Results; 