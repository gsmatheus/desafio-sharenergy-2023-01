import { ClientAddress } from "./client-address";

describe('ClientAddress', () => {
  it('should be able to create a new client address', async () => {
    const clientAddress = new ClientAddress({
      id: 'any_id',
      street: 'any_street',
      number: 'any_number',
      city: 'any_city',
      state: 'any_state',
      country: 'any_country',
      zip: 'any_zip',
    })

    expect(clientAddress).toBeTruthy();
  });
});
