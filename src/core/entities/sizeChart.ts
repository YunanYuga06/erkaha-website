export interface SizeEntry {
  size: string;
  chest: number;
  length: number;
  sleeve: number;
}

export interface SizeChart {
  _id: string;
  category: string;
  sizes: SizeEntry[];
}
