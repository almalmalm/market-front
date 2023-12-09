export interface IItem {
  name: string;
  price: number;
  quantity: number;
  _id: string;
  __v?: string;
  image: string;
  category: string;
  isInCart: boolean;
}

export interface IItemProps extends IItem {
  deleteItem: (id: string) => void;
  addToCart: (id: string) => void;
}
