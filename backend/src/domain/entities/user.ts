import { Replace } from "@helpers/replace";

export interface UserProps {
  id?: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class User {
  private props: UserProps;

  constructor(props: Replace<UserProps, { createdAt?: Date }>) {
    this.props = {
      ...props,
      createdAt: props.createdAt || new Date()
    }
  }

  public get id(): string {
    return this.props.id;
  }

  public get email(): string {
    return this.props.email;
  }

  public get password(): string {
    return this.props.password;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public get updatedAt(): Date {
    return this.props.updatedAt;
  }

  public set email(email: string) {
    this.props.email = email;
  }

  public set password(password: string) {
    this.props.password = password;
  }

  public set updatedAt(updatedAt: Date) {
    this.props.updatedAt = updatedAt;
  }

  public comparePassword(password: string): boolean {
    return this.password === password;
  }
}
