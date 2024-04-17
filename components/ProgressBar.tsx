"use client"

import { useClicker } from "@/lib/ClickerContext";

const ProgressBar = () => {
  const { clicks, level } = useClicker();

  const progress = clicks % 100

  return (
    <div className="w-full flex gap-4 items-center">
      <div className="flex-1 h-6">
        <div
          className="bg-fn-yellow h-full rounded-3xl"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="text-4xl text-fn-yellow">poz. {level}</p>
    </div>
  );
};

export default ProgressBar;
