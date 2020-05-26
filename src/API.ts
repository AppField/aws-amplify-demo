/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTalkInput = {
  id?: string | null,
  clientId?: string | null,
  name: string,
  description: string,
  speakerName: string,
  speakerBio: string,
};

export type ModelTalkConditionInput = {
  clientId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  speakerName?: ModelStringInput | null,
  speakerBio?: ModelStringInput | null,
  and?: Array< ModelTalkConditionInput | null > | null,
  or?: Array< ModelTalkConditionInput | null > | null,
  not?: ModelTalkConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateTalkInput = {
  id: string,
  clientId?: string | null,
  name?: string | null,
  description?: string | null,
  speakerName?: string | null,
  speakerBio?: string | null,
};

export type DeleteTalkInput = {
  id?: string | null,
};

export type ModelTalkFilterInput = {
  id?: ModelIDInput | null,
  clientId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  speakerName?: ModelStringInput | null,
  speakerBio?: ModelStringInput | null,
  and?: Array< ModelTalkFilterInput | null > | null,
  or?: Array< ModelTalkFilterInput | null > | null,
  not?: ModelTalkFilterInput | null,
};

export type CreateTalkMutationVariables = {
  input: CreateTalkInput,
  condition?: ModelTalkConditionInput | null,
};

export type CreateTalkMutation = {
  createTalk:  {
    __typename: "Talk",
    id: string,
    clientId: string | null,
    name: string,
    description: string,
    speakerName: string,
    speakerBio: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTalkMutationVariables = {
  input: UpdateTalkInput,
  condition?: ModelTalkConditionInput | null,
};

export type UpdateTalkMutation = {
  updateTalk:  {
    __typename: "Talk",
    id: string,
    clientId: string | null,
    name: string,
    description: string,
    speakerName: string,
    speakerBio: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTalkMutationVariables = {
  input: DeleteTalkInput,
  condition?: ModelTalkConditionInput | null,
};

export type DeleteTalkMutation = {
  deleteTalk:  {
    __typename: "Talk",
    id: string,
    clientId: string | null,
    name: string,
    description: string,
    speakerName: string,
    speakerBio: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetTalkQueryVariables = {
  id: string,
};

export type GetTalkQuery = {
  getTalk:  {
    __typename: "Talk",
    id: string,
    clientId: string | null,
    name: string,
    description: string,
    speakerName: string,
    speakerBio: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTalksQueryVariables = {
  filter?: ModelTalkFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTalksQuery = {
  listTalks:  {
    __typename: "ModelTalkConnection",
    items:  Array< {
      __typename: "Talk",
      id: string,
      clientId: string | null,
      name: string,
      description: string,
      speakerName: string,
      speakerBio: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateTalkSubscription = {
  onCreateTalk:  {
    __typename: "Talk",
    id: string,
    clientId: string | null,
    name: string,
    description: string,
    speakerName: string,
    speakerBio: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTalkSubscription = {
  onUpdateTalk:  {
    __typename: "Talk",
    id: string,
    clientId: string | null,
    name: string,
    description: string,
    speakerName: string,
    speakerBio: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTalkSubscription = {
  onDeleteTalk:  {
    __typename: "Talk",
    id: string,
    clientId: string | null,
    name: string,
    description: string,
    speakerName: string,
    speakerBio: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
