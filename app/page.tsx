"use client";

import {
  useState,
  startTransition,
  unstable_ViewTransition as ViewTransition,
} from "react";

const LayoutAnimation = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <button
      data-is-on={isOn || undefined}
      className="flex w-24 justify-start rounded-full bg-emerald-700 p-2 data-[is-on]:justify-end"
      onClick={() => startTransition(() => setIsOn(!isOn))}
    >
      <ViewTransition>
        <div className="size-10 rounded-full bg-emerald-400" />
      </ViewTransition>
    </button>
  );
};

export default LayoutAnimation;
