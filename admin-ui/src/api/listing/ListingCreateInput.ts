import { InputJsonValue } from "../../types";
import { TripCreateNestedManyWithoutListingsInput } from "./TripCreateNestedManyWithoutListingsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WishlistCreateNestedManyWithoutListingsInput } from "./WishlistCreateNestedManyWithoutListingsInput";

export type ListingCreateInput = {
  locationData: InputJsonValue;
  locationType: string;
  mapData: InputJsonValue;
  photos: InputJsonValue;
  placeSpace: InputJsonValue;
  placeType: string;
  trips?: TripCreateNestedManyWithoutListingsInput;
  user: UserWhereUniqueInput;
  wishlists?: WishlistCreateNestedManyWithoutListingsInput;
};
