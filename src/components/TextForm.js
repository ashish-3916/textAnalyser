import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.alert("Converted to Uppercase!!", "success");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.alert("Converted to Lowercase!!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const countWord = () => {
    var words = 0;
    var characters = 0;

    for (var i = 0; i < text.length; i++) {
      var cnt = 0;
      while (i < text.length && text[i] !== " ") {
        i++;
        cnt += 1;
      }
      if (cnt !== 0) {
        words += 1;
        characters += cnt;
      }
    }
    return words;
  };
  const countLetter = () => {
    var words = 0;
    var characters = 0;

    for (var i = 0; i < text.length; i++) {
      var cnt = 0;
      while (i < text.length && text[i] !== " ") {
        i++;
        cnt += 1;
      }
      if (cnt !== 0) {
        words += 1;
        characters += cnt;
      }
    }
    return characters;
  };

  const handleBelugaClick = () => {
    let newText = "";
    if (text.length) {
      let flag = 1;
      let words = text.split(" ");
      for (let i = 0; i < words.length; i++) {
        let word = "";
        for (let j = 0; j < words[i].length; j++) {
          let x;
          if (flag) x = words[i][j].toUpperCase();
          else x = words[i][j].toLowerCase();
          flag ^= 1;
          word += x;
        }
        newText += word + " ";
      }
    }
    setText(newText);
    props.alert("Magic Done!!", "success");
  };
  const handleCopyClick = () => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.alert("Copied to clipboard!!", "success");
  };

  const handleResetClick = (event) => {
    setText("");
    props.alert("Text Area cleared!!", "success");
  };

  return (
    <>
      <div className="container">
        <h2 style={{ color: props.mode === "light" ? "black" : "white" }}>{props.heading}</h2>
        <div className="mb-3">
          <textarea className="form-control my-3" style={{ backgroundColor: props.mode === "light" ? "white" : "#07233f", color: props.mode === "light" ? "black" : "white" }} id="mybox" rows="10" name="mybox" placeholder="Enter The Text" value={text} onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>
          Uppercase
        </button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleLowClick}>
          LowerCase
        </button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleBelugaClick}>
          BeLuGa
        </button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleResetClick}>
          Reset
        </button>
      </div>
      <div className="container my-3" style={{ color: props.mode === "light" ? "black" : "white" }}>
        <h3>Text Summary</h3>
        <p>Reading Time : {0.01 * countWord()} min</p>
        <p>
          {countWord()} words and {countLetter()} characters
        </p>
      </div>
    </>
  );
}
