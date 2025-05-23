import React from 'react';
import { render } from '@testing-library/react';
import { Payment } from '../../index';
import { MercadoPagoInstance } from '../../mercadoPago/initMercadoPago';

describe('Test Payment Brick Component', () => {
  test('should found the id of Payment Brick div', async () => {
    MercadoPagoInstance.publicKey = 'PUBLIC_KEY';
    const element = await render(
      <Payment
        initialization={{ amount: 100 }}
        customization={{
          paymentMethods: {
            bankTransfer: ['pix'],
            ticket: 'all',
            atm: 'all',
            creditCard: 'all',
            prepaidCard: 'all',
            debitCard: 'all',
            mercadoPago: 'all',
          },
        }}
        onSubmit={async (param) => {
          console.log(param);
        }}
      />,
    );

    expect(element.container.querySelector('#paymentBrick_container')).toBeTruthy();
  });
  test('should found the id of Payment Brick divif specified', async () => {
    MercadoPagoInstance.publicKey = 'PUBLIC_KEY';
    const element = await render(
      <Payment
        initialization={{ amount: 100 }}
        customization={{
          paymentMethods: {
            bankTransfer: ['pix'],
            ticket: 'all',
            atm: 'all',
            creditCard: 'all',
            prepaidCard: 'all',
            debitCard: 'all',
            mercadoPago: 'all',
          },
        }}
        id="customPaymentBrick_container"
        onSubmit={async (param) => {
          console.log(param);
        }}
      />,
    );

    expect(element.container.querySelector('#customPaymentBrick_container')).toBeTruthy();
  });
});
