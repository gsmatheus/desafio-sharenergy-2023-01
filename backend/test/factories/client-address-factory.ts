import { ClientAddress } from "@domain/entities/client-address";

export function makeClientAddress(
  overrides: Partial<ClientAddress> = {},
): ClientAddress {
  return {
    street: 'any_street',
    city: 'any_city',
    state: 'any_state',
    country: 'any_country',
    zip: 'any_zip',
    number: 'any_number',
    createdAt: new Date(),
  } as ClientAddress;
}
