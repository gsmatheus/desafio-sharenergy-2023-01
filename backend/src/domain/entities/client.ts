import { Replace } from "@helpers/replace";
import { DocumentType } from "@prisma/client";
import { Address as RawAddress } from "@prisma/client"

export interface ClientProps {
  id?: string;
  fullName: string;
  document: string;
  documentType: DocumentType;
  email: string;
  phone: string;
  profilePicture?: string;
  createdAt?: Date;
  updatedAt?: Date;

  address?: RawAddress[]
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

  public get document(): string {
    return this.props.document;
  }

  public get documentType(): DocumentType {
    return this.props.documentType;
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

  public get address(): RawAddress[] {
    return this.props.address;
  }

  public set fullName(fullName: string) {
    this.props.fullName = fullName;
  }

  public set document(document: string) {
    this.props.document = document;
  }

  public set documentType(documentType: DocumentType) {
    this.props.documentType = documentType;
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

  public set address(address: RawAddress[]) {
    this.props.address = address;
  }
}
