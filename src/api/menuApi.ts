import { NewMenuItem } from "../types/menuTypes";

export async function getMenu() {
  const resp = await fetch("http://localhost:3001/menu");
  if (!resp.ok) throw resp;
  return await resp.json();
}

export async function addMenuItem(item: NewMenuItem) {
  const resp = await fetch("http://localhost:3001/menu", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
  if (!resp.ok) throw resp;
  return await resp.json();
}
