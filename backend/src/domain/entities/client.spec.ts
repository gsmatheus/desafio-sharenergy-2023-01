import { Client } from "./client";
import { ClientAddress } from "./client-address";

describe('Client', () => {
  it('should be able to create a new client', async () => {
    const client = new Client({
      id: 'any_id',
      fullName: 'any_fullName',
      email: 'any_email',
      phone: 'any_phone',
      addressId: 'any_addressId',
      address: new ClientAddress({
        id: 'any_id',
        street: 'any_street',
        number: 'any_number',
        city: 'any_city',
        state: 'any_state',
        country: 'any_country',
        zip: 'any_zip',
      })
    })

    expect(client).toBeTruthy();
  });
});
