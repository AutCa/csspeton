import "./app.css";
import CardComponent from "./component/card/card";
import WeatherApp from "./component/weather/weather";
import Hooks from "./hooks/hooks";

interface IuserList {
  name: string;
  age: number;
}

function App() {
  const userlist: IuserList[] = [
    { name: "autta", age: 30 },
    { name: "autta2", age: 32 },
    { name: "autta3", age: 34 },
    { name: "autta4", age: 36 },
  ];

  return (
    <>
      <div className="content">

        {/* {userlist.map((value) => {
          return <CardComponent name={value.name} age={value.age} />;
        })}
      <Hooks /> */}
        
          <WeatherApp />

      </div>
    </>
  );
}

export default App;
