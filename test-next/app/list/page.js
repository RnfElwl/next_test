import Image from "next/image";
import food from "/public/food0.jpg";

export default function List() {
  let products = ["Tomatoes", "Pasta", "Coconut"];
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {products.map((name, i) => {
        return (
          <div className="food" key={i}>
            {/* <Image src={food} width={} height={}/> */}
            <img src={`/food${i}.jpg`} />
            <h4>{name} $33</h4>
          </div>
        );
      })}
    </div>
  );
}
