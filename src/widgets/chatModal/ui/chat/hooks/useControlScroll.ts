import { useLayoutEffect, useRef } from "react";

type ControlScrollProps = {
  data: { message: string; type: string }[];
};

export const useControlScroll = ({ data }: ControlScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    container.scrollTop = container.scrollHeight;
  }, [data]);

  return { containerRef };
};
