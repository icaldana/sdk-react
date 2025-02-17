import React from 'react';
import Payment from '../../../src/bricks/payment';
import { PUBLIC_KEY } from '../../constants';

import initMercadoPago from '../../../src/mercadoPago/initMercadoPago';

initMercadoPago(PUBLIC_KEY, { locale: 'pt-BR' });

const ExamplePaymentBrickMarketplace = () => {
  return (
    <Payment
      initialization={{
        amount: 100,
        preferenceId: '207446753-ea3adb2e-a4f2-41dd-a656-11cb01b8772c',
        marketplace: true,
      }}
      customization={{
        paymentMethods: {
          atm: 'all',
          ticket: 'all',
          bankTransfer: 'all',
          creditCard: 'all',
          debitCard: 'all',
          prepaidCard: 'all',
          mercadoPago: 'all',
        },
      }}
      onSubmit={async (param) => {
        console.log(param);
      }}
    />
  );
};

export default ExamplePaymentBrickMarketplace;
