const ages = [21, 20, 19, 22, 23];
const ages2 = [21, 22, 23];
const ages3 = [21, 20, 19, 22, 23];
const allAges = ages.concat(ages2).concat([9]).concat(ages3); //This is old way to output array
const allAges2 = [...ages, ...ages2, 14, ...ages3]
// console.log(allAges2);

const minister = 650;
const business = 450;
const shochib = 250;
// const maximum = Math.max(minister, business, shochib);
const amount = [650, 450, 250, 890, 980];
const maxAmount = Math.max(...amount)
console.log('Total:', maxAmount, 'Crore');