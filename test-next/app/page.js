import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  let num = 25;
  return (
    <div>
      <h4 className="title">타이틀 이당</h4>
      <h5 className="title-sub">서브 타이틀이당{num}</h5>
    </div>
  );
}
