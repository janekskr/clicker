export type VBucksCard = {
    quantity: Quantity;
    price: number
    id: number
}

export type PickaxesCard = {
    name: string
    price: 800 | 1200 | 1500 | 2000 | 0;
    id: number
}

export type Miner = {
    duration: number;
    benefit: number;
    level: number;
  }

export type Quantity = 1000 | 2800 | 5000 | 13500