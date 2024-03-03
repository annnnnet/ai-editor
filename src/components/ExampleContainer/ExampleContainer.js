import uniqid from "uniqid";
import "./ExampleContainer.css";
import ReactCompareImage from "react-compare-image";
import React from "react";

const ExampleContainer = ({ example }) => (
  <div className="example">
    <h3>{example.name}</h3>

    <ReactCompareImage
      leftImage={example.before}
      rightImage={example.after}
    />

    <p className="example__description">{example.description}</p>
    {example.stack && (
      <ul className="example__stack">
        {example.stack.map((item) => (
          <li key={uniqid()} className="example__stack-item">
            {item}
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default ExampleContainer;
