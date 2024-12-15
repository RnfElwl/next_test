import { age, Hello } from "./data.js";

// js 기능은 서버 컴포넌트에서 만들수 없음
// 단 클리이언트 컴포넌트는 렌더링이 느림 그래서 부분만 클라이언트로
export default function Cart() {
  return (
    <div>
      <Hello></Hello>
      <h4>Cart {age}</h4>
      <Product></Product>
      <Product></Product>
    </div>
  );
}
function Product() {
  return (
    <div className="cart-item">
      <p>상품명</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}
