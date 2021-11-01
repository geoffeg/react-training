import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Input } from "./shared/Input";
import { About } from "./About";
import { addMenuItem } from "./api/menuApi";

type NewMenuItem = {
  name: string;
  description: string;
  price: number | null;
};

const initialNewMenuItem: NewMenuItem = {
  name: "",
  description: "",
  price: null,
};

export function Admin() {
  const history = useHistory();
  const [newMenuItem, setNewMenuItem] = useState(initialNewMenuItem);

  function onChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setNewMenuItem({
      ...newMenuItem,
      [event.target.id]: event.target.value,
    });
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    addMenuItem(newMenuItem);
    history.push("/");
  }

  return (
    <>
      <h1>Entree Admin</h1>

      <h2>Add Menu Item</h2>
      <form onSubmit={onSubmit}>
        <Input
          id="name"
          type="text"
          label="Name"
          value={newMenuItem.name}
          onChange={onChange}
        />
        <Input
          id="description"
          type="text"
          label="Description"
          value={newMenuItem.description}
          onChange={onChange}
        />
        <Input
          id="price"
          type="text"
          label="Price"
          value={newMenuItem.price?.toString() ?? ""}
          onChange={onChange}
        />
        <input type="submit" value="Save Menu Item" />
      </form>
    </>
  );
}
