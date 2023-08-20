import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";
import { ListingTitle } from "../listing/ListingTitle";

export const WishlistEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="createBy.id" reference="User" label="createBy">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput source="listing.id" reference="Listing" label="Listing">
          <SelectInput optionText={ListingTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
