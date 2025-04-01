import initMercadoPago from './mercadoPago/initMercadoPago';

import CardPayment, { useCardPaymentBrick } from './bricks/cardPayment';
import Payment, { usePaymentBrick } from './bricks/payment';
import StatusScreen from './bricks/statusScreen';
import Wallet from './bricks/wallet';
import Brand from './bricks/brand';

import getIdentificationTypes from './coreMethods/getIdentificationTypes';
import getPaymentMethods from './coreMethods/getPaymentMethods';
import getInstallments from './coreMethods/getInstallments';
import getIssuers from './coreMethods/getIssuers';
import createCardToken from './secureFields/createCardToken';
import updateCardToken from './secureFields/updateCardToken';

import CardNumber from './secureFields/cardNumber';
import SecurityCode from './secureFields/securityCode';
import ExpirationDate from './secureFields/expirationDate';
import ExpirationMonth from './secureFields/expirationMonth';
import ExpirationYear from './secureFields/expirationYear';

export {
  initMercadoPago,
  CardPayment,
  Brand,
  useCardPaymentBrick,
  Payment,
  usePaymentBrick,
  StatusScreen,
  Wallet,
  getIdentificationTypes,
  getPaymentMethods,
  getInstallments,
  getIssuers,
  createCardToken,
  updateCardToken,
  CardNumber,
  SecurityCode,
  ExpirationDate,
  ExpirationMonth,
  ExpirationYear,
};
