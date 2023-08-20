import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";

export type WishlistUpdateInput = {
  createBy?: UserWhereUniqueInput;
  listing?: ListingWhereUniqueInput;
};
