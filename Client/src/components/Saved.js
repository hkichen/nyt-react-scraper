import React from "react";

const Saved = props =>
  <div className="content">
    <li className="list-group-item">
      <h4>
        <span>
          <strong>{props.title}</strong>
        </span>
        <span className="btn-group pull-right">
          <a href={props.url} target="_blank">
            <button className="btn btn-outline-info ">View Article</button>
          </a>
          <button className="btn btn-outline-info" onClick={() => props.deleteBtn(props._id)}>Delete</button>
        </span>
      </h4>
      <p>Date Published: {props.date}</p>
    </li>
  </div>

export default Saved;