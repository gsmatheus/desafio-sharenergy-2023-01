import { Client } from "@domain/entities/client";
import { CreateClientRequest } from "@domain/use-cases/client/create-client";
import { makeClientAddress } from "./client-address-factory";

// Generate unique email
function makeUniqueEmail() {
  return `any_email_${Math.random() * 1000}@any_email.com`;
}

// Generate unique id 25 characters long
function makeUniqueId() {
  return Math.random().toString(36).substr(2, 25);
}

function makeUniqueCpf() {
  return Math.random().toString(36).substr(2, 11);
}

export function makeClient(
  overrides: Partial<Client> = {},
): Client {
  return {
    id: makeUniqueId(),
    fullName: 'any_fullName',
    document: makeUniqueCpf(),
    documentType: 'CPF',
    email: makeUniqueEmail(),
    phone: 'any_phone',
    address: [
      makeClientAddress()
    ],
    ...overrides,
  } as Client;
}

export function makeClientWithAddress(
  overrides: Partial<CreateClientRequest> = {},
): CreateClientRequest {
  const uniqueId = makeUniqueId();
  return {
    id: uniqueId,
    fullName: 'any_fullName',
    document: makeUniqueCpf(),
    documentType: 'CPF',
    email: makeUniqueEmail(),
    phone: 'any_phone',
    address: {
      street: 'any_street',
      city: 'any_city',
      state: 'any_state',
      country: 'any_country',
      zip: 'any_zip',
      number: 'any_number',
      isDefault: true,
      clientId: uniqueId,
    },
    ...overrides,
  } as CreateClientRequest;
}
