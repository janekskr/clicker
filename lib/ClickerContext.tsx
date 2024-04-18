"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Quantity } from "./types";
import { Pickaxes } from "./constants";

// Define types for context values
interface ClickerContextType {
  vbucks: number;
  setVbucks: React.Dispatch<React.SetStateAction<number>>;
  clicks: number;
  setPickaxe: React.Dispatch<React.SetStateAction<number>>;
  pickaxe: number;
  setClicks: React.Dispatch<React.SetStateAction<number>>;
  level: number;
  setLevel: React.Dispatch<React.SetStateAction<number>>;
  buyVbucks: (quantity: Quantity) => void;
}

// Create context
const ClickerContext = createContext({} as ClickerContextType);

// Custom hook to access context values
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

  const ownedPickaxes = [1]

  const reset = () => {
    setClicks(0);
    setClicks(0);
    setLevel(1);
  };

  const buyPickaxe = (id: number) => {
    const pickaxe = Pickaxes[id - 1]
    if(vbucks >= pickaxe.price) {
        ownedPickaxes.push(id)
    } else {
      alert("Brak vbucks")
    }
  }

  const buyVbucks = (quantity: Quantity) => {
    let requiredClicks = 0;
    let vbucksToAdd = 0;

    switch (quantity) {
      case 1000:
        requiredClicks = 64;
        vbucksToAdd = 1000;
        break;
      case 2800:
        requiredClicks = 160;
        vbucksToAdd = 2800;
        break;
      case 5000:
        requiredClicks = 254;
        vbucksToAdd = 5000;
        break;
      case 13500:
        requiredClicks = 640;
        vbucksToAdd = 13500;
        break;
      default:
        alert("Nieprawidłowa ilość V-bucks");
        return;
    }

    if (clicks >= requiredClicks) {
      setClicks((prev) => prev - requiredClicks);
      setVbucks((prev) => prev + vbucksToAdd);
    } else {
      alert("Masz za mało kliknięć");
    }
  }

  const contextValue: ClickerContextType = {
    vbucks,
    setVbucks,
    clicks,
    setClicks,
    level,
    setLevel,
    buyVbucks,
    pickaxe,
    setPickaxe
  };
  

  useEffect(() => {
    if(clicks >= 100 && clicks >= level * 100) {
        setLevel(prev => prev +1)
    }
  }, [clicks])

  return (
    <ClickerContext.Provider value={contextValue}>
      {children}
    </ClickerContext.Provider>
  );
};
