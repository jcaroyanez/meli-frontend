export interface Author {
  name: string;
  lastname: string;
}

export interface Price {
  currency?: string;
  amount?: string;
  decimals?: number;
}

export interface Item {
  id?: string;
  title?: string;
  price?: Price;
  picture?: string;
  condition?: string;
  freeShipping?: boolean;
}

export interface ItemDetail extends Item {
	description?: string;
	soldquantity?: string;
}

export interface ResponseItems {
  author: Author;
  items: Item[];
  categories: string[];
}

export interface ResponseDetail {
	author: Author;
	item: ItemDetail;
}