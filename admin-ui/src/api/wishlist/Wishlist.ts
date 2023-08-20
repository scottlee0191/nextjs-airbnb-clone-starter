import { User } from "../user/User";
import { Listing } from "../listing/Listing";

export type Wishlist = {
  createBy?: User;
  createdAt: Date;
  id: string;
  listing?: Listing;
  updatedAt: Date;
};
