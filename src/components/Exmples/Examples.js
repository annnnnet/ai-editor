import uniqid from "uniqid";
import { examples } from "../../portfolio";
import ExampleContainer from "../ExampleContainer/ExampleContainer";

import "./Examples.css";

const Examples = () => {
  if (!examples.length) return null;

  return (
    <section id="examples" className="section examples">
      <h2 className="section__title">Examples</h2>
    
      <div className="examples__grid">
        {examples.map((example) => (
          <ExampleContainer key={uniqid()} example={example} />
        ))}
      </div>
    </section>
  );
};

export default Examples;
