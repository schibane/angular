export interface Product {
  id?: number;
  title?: string;
  price?: number;
  description?: string;
  category?: string;
  image?: string;
  rating?: RatingProps;
  name?: string;
  inventoryStatus?: InventoryStatus;
  quantity?: number;
}

interface RatingProps {
  rate: number;
  count: number;
}

export interface Product2 {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  image?: string;
  rating?: number;
  buttonType?: string;
}
interface InventoryStatus {
  label: string;
  value: string;
}
