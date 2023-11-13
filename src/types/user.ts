export enum GenderEnum {
  MALE = 'Male',
  FEMALE = 'Female',
}

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatar?: string;
};

