import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";

export type WishlistWhereInput = {
  createBy?: UserWhereUniqueInput;
  id?: StringFilter;
  listing?: ListingWhereUniqueInput;
};
