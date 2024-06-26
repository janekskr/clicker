export const calculateCost = (level: number) => {
    const baseCost = 1000
    const costMultiplier = 1.5

    return Math.floor(baseCost * Math.pow(costMultiplier, level));
  };