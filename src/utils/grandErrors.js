import _ from 'lodash';

export const grandPointsErrors = (data) => {
  switch (data.type) {
    case 'DAY_LIMIT':
      alert(`Ooops! Your daily limit ${_.round(data.maxCurrencyAmount, 2)}points, but you're going to grand ${data.currencyAmount}points.`);
      break;
    case 'TRANSACTION_LIMIT':
      alert(`Ooops! You're going to grand ${data.currencyAmount}points. You can grand ${_.round(data.maxCurrencyAmount)}points per 1 transaction!`);
      break;
    default: 
      alert('Ooops! Something went wrong. Try again.');
  }
};
