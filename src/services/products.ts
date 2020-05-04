import { removeAccent } from '../utils/string';
import { Item } from '../models/item';
import items from './items.json';

export const findByItemName = (name: string): Item[] => {
  console.log(`Buscando item na lista: ${name}`);
  const normalizedName = removeAccent(name);
  let item!: Item;
  const typedItems = Object.assign(items, item);
  const resultsName = typedItems.filter(
    itemMap =>
      removeAccent(itemMap.title.toUpperCase()).indexOf(
        normalizedName.toUpperCase(),
      ) > -1,
  );
  const resultsCaracteristicas = typedItems.filter(itemMap =>
    itemMap.features.some(
      caracteristica =>
        removeAccent(caracteristica).toUpperCase() ===
        normalizedName.toUpperCase(),
    ),
  );
  const resultsBrand = typedItems.filter(
    itemMap =>
      removeAccent(itemMap.marca.toUpperCase()) ===
      removeAccent(normalizedName.toUpperCase()),
  );
  const resultsModel = typedItems.filter(
    itemMap =>
      removeAccent(itemMap.model.toUpperCase()) ===
      removeAccent(normalizedName.toUpperCase()),
  );
  const results = [
    ...resultsName,
    ...resultsCaracteristicas,
    ...resultsBrand,
    ...resultsModel,
  ];

  console.log(`Itens encontrados na busca: ${results}`);
  return results;
};
