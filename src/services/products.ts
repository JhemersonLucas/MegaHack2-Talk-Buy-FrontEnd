import { removeAccent } from '../utils/string';
import { Item } from '../models/item';
import items from './items.json';

export const findByItemName = (name: string): void => {
  let item!: Item;
  const typedItems = Object.assign(items, item);
  typedItems.filter(
    itemMap =>
      removeAccent(itemMap.nome.toUpperCase()) ===
      removeAccent(name.toUpperCase()),
  );
};
