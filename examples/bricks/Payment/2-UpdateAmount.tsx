import React, { useState } from 'react';
import Payment from '../../../src/bricks/payment';

import initMercadoPago from '../../../src/mercadoPago/initMercadoPago';

initMercadoPago('TEST-f4563544-ce69-40c3-b88e-6e7d1bd93a83', { locale: 'pt-BR' });

const App = () => {
  const initialAmount = 100;
  const [amount, setAmount] = useState(initialAmount);
  const updateAmount = () => {
    setAmount(90);
  };

  const initialization = {
    amount,
    preferenceId: '207446753-ea3adb2e-a4f2-41dd-a656-11cb01b8772c',
  };

  const customization = {
    paymentMethods: {
      atm: 'all',
      ticket: 'all',
      bankTransfer: ['pix'],
      creditCard: 'all',
      debitCard: 'all',
      mercadoPago: 'all',
    },
  };

  return (
    <>
      <button type="button" onClick={updateAmount}>
        Update amount
      </button>

      <Payment
        initialization={initialization}
        customization={customization}
        onSubmit={async (param) => {
          console.log(param);
        }}
      />
    </>
  );
};

export default App;
