import { Client } from "@domain/entities/client";

// Generate unique email
function makeUniqueEmail() {
  return `any_email_${Math.random() * 1000}@any_email.com`;
}

export function makeClient(
  overrides: Partial<Client> = {},
): Client {
  return {
    id: 'any_id',
    fullName: 'any_fullName',
    email: makeUniqueEmail(),
    phone: 'any_phone',
    addressId: 'any_addressId',
    ...overrides,
  } as Client;
}
