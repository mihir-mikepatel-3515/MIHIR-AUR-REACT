import { useEffect } from "react";

const Counter = ({ count, data }) => {
  useEffect(() => {
    console.log("mounting phase only");
  }, []);

  useEffect(() => {
    console.log("update phase only");
  }, [count]);

  useEffect(() => {
    return () => {
      console.log("unmounting phase only");}});
  return (
    <div>
      <h1>Counter Value {count}</h1>
      <h1>Data Value {data}</h1>
    </div>
  );
};

export default Counter;