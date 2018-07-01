import React from "react";

const Results = props =>
  <div className="content">
    <li className="resultsList">
      <h3>
        <span>
          <p><strong>{props.title}</strong></p>
        </span>
        <span className="btn-group pull-right">
          <a href={props.url} target="_blank">
            <button className="btn btn-default ">View Article</button>
          </a>
          <button className="btn btn-success" onClick={() => props.saveBtn(props._id)}>Save</button>
        </span>
      </h3>
      <p>Date Published: {props.date}</p>
    </li>
  </div>

export default Results; 