import { ListingUpdateManyWithoutUsersInput } from "./ListingUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TripUpdateManyWithoutUsersInput } from "./TripUpdateManyWithoutUsersInput";
import { WishlistWhereUniqueInput } from "../wishlist/WishlistWhereUniqueInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  listings?: ListingUpdateManyWithoutUsersInput;
  password?: string;
  roles?: InputJsonValue;
  trips?: TripUpdateManyWithoutUsersInput;
  username?: string;
  wishlists?: WishlistWhereUniqueInput | null;
};
