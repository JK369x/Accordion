import "./App.css";
import data from "./data";
import { useState } from "react";
import { SingleContent } from "./components/SingleContent";

function App() {
  const [content, setContent] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>Tools Developer 2022 </h3>
        <section>{content.map((data) => {
          return <SingleContent key={data.id} {...data}/>
        })}</section>
      </div>
    </main>
  );
}

export default App;
