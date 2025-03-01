import { useState } from "react";
const courses = [
  {
    id: 1,
    name: "html",
  },
  { id: 2, name: "css" },
  { id: 3, name: "react" },
];
function App() {
  const [check, setCheck] = useState();
  const handlerSubmit = () => {
    console.log(check);
  };
  return (
    <div className="App">
      {courses.map((value) => {
        return (
          <div key={value.id}>
            <input
              type="radio"
              checked={check === value.id}
              onChange={() => setCheck(value.id)}
            />
            {value.name}
          </div>
        );
      })}
      <button onClick={handlerSubmit}>register</button>
    </div>
  );
}

function Checkbox() {
  const [check, setCheck] = useState([]);

  const handlerCheck = (id) => {
    setCheck((pre) => {
      const isCheck = check.includes(id);
      if (isCheck) {
        return check.filter((item) => item !== id);
      } else {
        return [...pre, id];
      }
    });
  };
  const handlerSubmit = () => {
    console.log(check);
  };
  return (
    <div className="App">
      {courses.map((value) => {
        return (
          <div key={value.id}>
            <input
              type="checkbox"
              checked={check.includes(value.id)}
              onChange={() => handlerCheck(value.id)}
            />
            {value.name}
          </div>
        );
      })}
      <button onClick={handlerSubmit}>register</button>
    </div>
  );
}

export default App;
