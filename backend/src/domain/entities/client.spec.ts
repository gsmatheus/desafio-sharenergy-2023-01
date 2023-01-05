import { makeClientAddress } from "@test/factories/client-address-factory";
import { Client } from "./client";
import { ClientAddress } from "./client-address";

describe('Client', () => {
  it('should be able to create a new client', async () => {
    const client = new Client({
      id: 'any_id',
      fullName: 'any_fullName',
      document: 'any_document',
      documentType: "CPF",
      email: 'any_email',
      phone: 'any_phone',
      address: [
        makeClientAddress({ clientId: 'any_id' })
      ]
    })

    expect(client).toBeTruthy();
  });
});
