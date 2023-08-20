import { JsonValue } from "type-fest";
import { Trip } from "../trip/Trip";
import { User } from "../user/User";
import { Wishlist } from "../wishlist/Wishlist";

export type Listing = {
  createdAt: Date;
  id: string;
  locationData: JsonValue;
  locationType: string;
  mapData: JsonValue;
  photos: JsonValue;
  placeSpace: JsonValue;
  placeType: string;
  trips?: Array<Trip>;
  updatedAt: Date;
  user?: User;
  wishlists?: Array<Wishlist>;
};
