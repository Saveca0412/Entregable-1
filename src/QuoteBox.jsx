import './App.css';
import quotes from "./quotes.json"
import { useState } from "react";

const colors = [
  "#845EC2",
  "#D65DB1",
  "#FF6F91",
  "#FF9671",
  "#FFC75F",
  "#F9F871"
];

function QuoteBox() {
  const random = Math.floor(Math.random() * quotes.length);
  const [index, setIndex] = useState(random);

  const changequote = () => {
    const random = Math.floor(Math.random() * quotes.length);
    setIndex(random);
  };

  const randomColorIndex = Math.floor(Math.random() * colors.length);
  const color = colors[randomColorIndex];
  
  document.body.style = `background: ${color}`;

  return (
    <div className="QuoteBox">
      <div className="card" style={{ color: color }}>
        <div className='text'>
          <p className='quotation' >ʻʻ</p>
          <p>
            {quotes[index].quote}
          </p>
        </div>
        <ul>
          <li>
            <i className="author"></i>{" "}
            {quotes[index].author},
          </li>
        </ul>
        <ul>
          <button onClick={changequote} style={{ background: color }}>
            <i className="imgbutton" style={{ color: 'white' }}>></i>
          </button>
        </ul>
      </div>
    </div>
  );
}

export default QuoteBox;
