export const calculateCost = (level: number) => {
    const baseCost = 200
    const costMultiplier = 1.2

    return Math.floor(baseCost * Math.pow(costMultiplier, level - 1));
  };