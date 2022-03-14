import axios from "axios";
import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPost(res.data));
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button
        onClick={() => {
          if (count > 1) {
            setCount(count - 1);
          }
        }}
      >
        decrement
      </button>
      <ul>
        {post.map((person) => {
          return <li>{person.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default Counter;
