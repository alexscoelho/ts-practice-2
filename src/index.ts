import { Phone } from "./models/Warehouse";

const detroitWarehouse: Phone[] = [
  { name: "iPhone SE", price: 399, fiveG: false },
];
const newYorkWarehouse: Phone[] = [
  { name: "iPhone XR", price: 499, fiveG: false },
];
const chicagoWarehouse: Phone[] = [
  { name: "iPhone 11", price: 599, fiveG: true },
];

/**
 * Add Phone to Warehouse
 *
 * @param array
 */
const addPhone = (array: Phone[]): void => {
  const newPhone: Phone = { name: "iPhone 12", price: 799, fiveG: true };

  array.push(newPhone);
};

addPhone(detroitWarehouse);
console.log(detroitWarehouse);

/**
 *
 * @param array
 * @param index
 */
const deletePhoneByIndex = (array: Phone[], index: number): void => {
  array.splice(index, 1);
};

deletePhoneByIndex(chicagoWarehouse, 0);
console.log(chicagoWarehouse);

/**
 *
 * @param array
 * @param name
 */
const deletePhoneByName = (array: Phone[], name: string): void => {
  const phoneIndex: number | undefined = array.findIndex(
    (phone) => phone.name === name
  );

  array.splice(phoneIndex, 1);
};

deletePhoneByName(detroitWarehouse, "iPhone SE");
console.log(detroitWarehouse);

/**
 *
 * @param array
 * @param is5G
 * @returns array
 */
const filter5G = (array: Phone[], is5G: boolean): Phone[] => {
  let result: Phone[] = [];
  if (is5G) {
    result = array.filter((phone) => phone.fiveG);
  }

  if (!is5G) {
    result = array.filter((phone) => !phone.fiveG);
  }

  return result;
};

console.log(filter5G(newYorkWarehouse, true));
