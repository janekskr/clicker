"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Miner } from "./types";
import { Pickaxes, Vbucks } from "./constants";
import { calculateCost } from "./utils";

interface ClickerContextType {
  vbucks: number;
  setVbucks: React.Dispatch<React.SetStateAction<number>>;
  clicks: number;
  setPickaxe: React.Dispatch<React.SetStateAction<number>>;
  pickaxe: number;
  setClicks: React.Dispatch<React.SetStateAction<number>>;
  level: number;
  setLevel: React.Dispatch<React.SetStateAction<number>>;
  buyVbucks: (quantity: number) => void;
  buyPickaxe: (id: number) => void;
  ownedPickaxes: number[];
  buyAutoMiner: () => void
  miner: Miner
}

const ClickerContext = createContext({} as ClickerContextType);

export const useClicker = (): ClickerContextType => {
  return useContext(ClickerContext);
};

export const ClickerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [vbucks, setVbucks] = useState<number>(0);
  const [clicks, setClicks] = useState<number>(0);
  const [level, setLevel] = useState<number>(1);
  const [pickaxe, setPickaxe] = useState<number>(1);
  const [ownedPickaxes, setOwnedPickaxes] = useState<number[]>([1]);
  const [miner, setMiner] = useState<Miner>({
    duration: 2000,
    benefit: 0,
    level: 0,
  })

  const reset = () => {
    setClicks(0);
    setClicks(0);
    setLevel(1);
  };

  const buyAutoMiner = () => {
    const cost = calculateCost(miner.level)

    if (vbucks >= cost) {
      const newLevel = miner.level + 1;
      const newBenefit = miner.benefit + 25
      setMiner({ ...miner, level: newLevel, benefit: newBenefit });
      setVbucks((prev) => prev - cost);
    } else {
      alert("Masz za mało V-bucksów");
    }
  };


  const buyPickaxe = (id: number) => {
    const pickaxe = Pickaxes[id - 1];
    if (ownedPickaxes.includes(id)) {
      alert("Już posiadasz ten kilof");
      return;
    }
    if (vbucks >= pickaxe.price) {
      setOwnedPickaxes((prev) => [...prev, id]);
      setVbucks((prev) => prev - pickaxe.price);
    } else {
      alert("Masz za mało V-bucksów");
    }
  };

  const buyVbucks = (id: number) => {
    const vbuck = Vbucks[id - 1];

    if (clicks >= vbuck.price) {
      setClicks((prev) => prev - vbuck.price);
      setVbucks((prev) => prev + vbuck.quantity);
    } else {
      alert("Masz za mało kliknięć");
    }
  };

  const contextValue: ClickerContextType = {
    vbucks,
    setVbucks,
    clicks,
    setClicks,
    level,
    setLevel,
    buyVbucks,
    pickaxe,
    setPickaxe,
    buyPickaxe,
    ownedPickaxes,
    buyAutoMiner,
    miner
  };

  useEffect(() => {
    let miningInterval: NodeJS.Timeout;

    if (miner.level > 0) {
      miningInterval = setInterval(() => {
        setClicks((prev) => prev + miner.benefit);
      }, miner.duration);
    }
  }, [miner]);

  useEffect(() => {
    if (clicks >= 100 && clicks >= level * 100) {
      setLevel((prev) => prev + 1);
    }
  }, [clicks]);

  return (
    <ClickerContext.Provider value={contextValue}>
      {children}
    </ClickerContext.Provider>
  );
};
