import { Client } from "@domain/entities/client";

// Generate unique email
function makeUniqueEmail() {
  return `any_email_${Math.random() * 1000}@any_email.com`;
}

// Generate unique id 25 characters long
function makeUniqueId() {
  return Math.random().toString(36).substr(2, 25);
}

export function makeClient(
  overrides: Partial<Client> = {},
): Client {
  return {
    id: makeUniqueId(),
    fullName: 'any_fullName',
    email: makeUniqueEmail(),
    phone: 'any_phone',
    addressId: 'any_addressId',
    ...overrides,
  } as Client;
}
