import { useQuery } from "react-query";
import { getMenu } from "./api/menuApi";

import styles from "./Home.module.scss";

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
};

export function Home() {
  const menuQuery = useQuery<MenuItem[]>("menu", getMenu);

  return (
    <>
      <h1>Menu</h1>
      {menuQuery.isLoading ? (
        "Loading..."
      ) : (
        <p>{menuQuery.data?.length} items found</p>
      )}
      {menuQuery.data?.map((item) => (
        <div key={item.id} className={styles.card}>
          <h2>Name: {item.name}</h2>
          {item.description} <p>Price: {item.price}</p>
        </div>
      ))}
    </>
  );
}
