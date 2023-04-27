import Line from "./Line";
import List from "../assets/List.json";
import { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");

  return (
    <main>
      <h1>😎 Emoji Search 😎</h1>
      <input
        type="text"
        placeholder="What emoji are you looking for ?"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      {List.filter((elem) => elem.keywords.includes(search))
        .slice(0, 20)
        .map((item) => {
          return <Line key={item.title} item={item} />;
        })}
    </main>
  );
}
