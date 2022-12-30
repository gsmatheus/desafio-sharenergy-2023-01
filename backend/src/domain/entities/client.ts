import { Replace } from "@helpers/replace";
import { ClientAddress } from "./client-address";

export interface ClientProps {
  id?: string;
  fullName: string;
  email: string;
  phone: string;
  profilePicture?: string;
  createdAt?: Date;
  updatedAt?: Date;

  address: ClientAddress;
  addressId?: string;
}

export class Client {
  private props: ClientProps;

  constructor(props: Replace<ClientProps, { createdAt?: Date }>) {
    this.props = {
      ...props,
      createdAt: props.createdAt || new Date(),
    }
  }

  public get id(): string {
    return this.props.id;
  }

  public get fullName(): string {
    return this.props.fullName;
  }

  public get email(): string {
    return this.props.email;
  }

  public get phone(): string {
    return this.props.phone;
  }

  public get profilePicture(): string {
    return this.props.profilePicture;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public get updatedAt(): Date {
    return this.props.updatedAt;
  }

  public get addressId(): string {
    return this.props.addressId;
  }

  public set fullName(fullName: string) {
    this.props.fullName = fullName;
  }

  public set email(email: string) {
    this.props.email = email;
  }

  public set phone(phone: string) {
    this.props.phone = phone;
  }

  public set profilePicture(profilePicture: string) {
    this.props.profilePicture = profilePicture;
  }

  public set updatedAt(updatedAt: Date) {
    this.props.updatedAt = new Date();
  }

  public get address(): ClientAddress {
    return this.props.address;
  }

  public set address(address: ClientAddress) {
    this.props.address = address;
  }

  public set addressId(addressId: string) {
    this.props.addressId = addressId;
  }
}
