import './index.css';
import numeral from 'numeral';

const coffeeValue = numeral(1000).format('$0,0.00');
console.log(`I would pay ${coffeeValue} for coffee!`); //eslint-disable-line no-console