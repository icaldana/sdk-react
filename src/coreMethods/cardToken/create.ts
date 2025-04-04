import { MercadoPagoInstance } from '../../mercadoPago/initMercadoPago';
import { CardTokenParams } from './types';

/**
 * Token creation method.
 *
 * @see {@link https://github.com/mercadopago/sdk-js/blob/main/docs/core-methods.md#mp-instancecreatecardtokencardtokenparams method documentation}.
 */
const createCardToken = async (cardTokenParams: CardTokenParams) => {
  const instanceMercadoPago = await MercadoPagoInstance.getInstance();
  return instanceMercadoPago?.createCardToken(cardTokenParams);
};

export default createCardToken;
