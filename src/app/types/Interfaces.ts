export interface IItem {
  name: string;
  price: number;
  quantity: number;
  _id: string;
  __v?: string;
  image: string;
  category: string;
}

export interface IItemProps extends IItem {
  onClick: (id: string) => void;
}
