import "./card.css"


interface CardProp {
  name: string;
  age: number;
}

export default function CardComponent(prop: CardProp) {
  return (
    <>
      <div className="card">
        <div>{prop.name}</div>
        <div>{prop.age}</div>
      </div>
    </>
  );
}
