import { useRef } from "react";

export const useCountRenders = ({ component }: { component: string }) => {
  const renders = useRef(0);
  console.log(`Renders ${component}`, renders.current++);
}
