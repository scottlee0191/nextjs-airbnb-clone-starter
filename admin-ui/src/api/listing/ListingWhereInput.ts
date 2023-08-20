import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { TripListRelationFilter } from "../trip/TripListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WishlistListRelationFilter } from "../wishlist/WishlistListRelationFilter";

export type ListingWhereInput = {
  id?: StringFilter;
  locationData?: JsonFilter;
  locationType?: StringFilter;
  mapData?: JsonFilter;
  photos?: JsonFilter;
  placeSpace?: JsonFilter;
  placeType?: StringFilter;
  trips?: TripListRelationFilter;
  user?: UserWhereUniqueInput;
  wishlists?: WishlistListRelationFilter;
};
