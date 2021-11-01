import { useState, useEffect } from "react";
import { getMenu } from "./api/menuApi";

import styles from "./Home.module.scss";

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
};

export function Home() {
  const [menu, setMenu] = useState<MenuItem[]>([]);

  useEffect(() => {
    (async () => {
      setMenu(await getMenu());
    })();
  }, []);
  return (
    <>
      <h1>Menu</h1>
      {menu.map((item) => (
        <div key={item.id} className={styles.card}>
          <h2>Name: {item.name}</h2>
          {item.description} <p>Price: {item.price}</p>
        </div>
      ))}
    </>
  );
}
