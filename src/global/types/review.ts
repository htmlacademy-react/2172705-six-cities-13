import { UserType } from './user';

export type ReviewType = {
  id: string;
  date: string;
  user: Pick<UserType, 'name' | 'avatarUrl' | 'isPro'>;
  comment: string;
  rating: number;
}
