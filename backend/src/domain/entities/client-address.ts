import { Replace } from "@helpers/replace";

export interface ClientAddressProps {
  id?: string;
  street: string;
  city: string;
  state: string;
  country: string;
  zip: string;
  number: string;
  isDefault?: boolean;
  createdAt?: Date;
  clientId?: string;
}

export class ClientAddress {
  private props: ClientAddressProps;

  constructor(props: Replace<ClientAddressProps, { createdAt?: Date }>) {
    this.props = {
      ...props,
      createdAt: props.createdAt || new Date(),
      isDefault: props.isDefault || true,
    }
  }

  public get id(): string {
    return this.props.id;
  }

  public get street(): string {
    return this.props.street;
  }

  public get city(): string {
    return this.props.city;
  }

  public get state(): string {
    return this.props.state;
  }

  public get country(): string {
    return this.props.country;
  }

  public get zip(): string {
    return this.props.zip;
  }

  public get number(): string {
    return this.props.number;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public get isDefault(): boolean {
    return this.props.isDefault;
  }

  public get clientId(): string {
    return this.props.clientId;
  }

  public set street(street: string) {
    this.props.street = street;
  }

  public set city(city: string) {
    this.props.city = city;
  }

  public set state(state: string) {
    this.props.state = state;
  }

  public set country(country: string) {
    this.props.country = country;
  }

  public set zip(zip: string) {
    this.props.zip = zip;
  }

  public set number(number: string) {
    this.props.number = number;
  }

  public set isDefault(isDefault: boolean) {
    this.props.isDefault = isDefault;
  }

  public set clientId(clientId: string) {
    this.props.clientId = clientId;
  }

}
