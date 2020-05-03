import { removeAccent } from '../utils/string';
import { Item } from '../models/item';
import items from './items.json';

export const findByItemName = (name: string): void => {
  console.log(`Buscando item na lista: ${name}`);
  let item!: Item;
  const typedItems = Object.assign(items, item);
  const results = typedItems.filter(
    itemMap =>
      removeAccent(itemMap.nome.toUpperCase()) ===
      removeAccent(name.toUpperCase()),
  );
  console.log(`Itens encontrados: ${results}`);
};
