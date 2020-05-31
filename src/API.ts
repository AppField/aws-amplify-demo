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

export type CreateCommentInput = {
  id?: string | null,
  message?: string | null,
  createdBy?: string | null,
  commentTalkId?: string | null,
};

export type ModelCommentConditionInput = {
  message?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type UpdateCommentInput = {
  id: string,
  message?: string | null,
  createdBy?: string | null,
  commentTalkId?: string | null,
};

export type DeleteCommentInput = {
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

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  message?: ModelStringInput | null,
  createdBy?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
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
    comments:  {
      __typename: "ModelCommentConnection",
      nextToken: string | null,
    } | null,
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
    comments:  {
      __typename: "ModelCommentConnection",
      nextToken: string | null,
    } | null,
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
    comments:  {
      __typename: "ModelCommentConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment:  {
    __typename: "Comment",
    id: string,
    message: string | null,
    createdBy: string | null,
    talk:  {
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
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment:  {
    __typename: "Comment",
    id: string,
    message: string | null,
    createdBy: string | null,
    talk:  {
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
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment:  {
    __typename: "Comment",
    id: string,
    message: string | null,
    createdBy: string | null,
    talk:  {
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
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetCoinsQueryVariables = {
  limit?: number | null,
  start?: number | null,
};

export type GetCoinsQuery = {
  getCoins:  Array< {
    __typename: "Coin",
    id: string,
    name: string,
    symbol: string,
    price_usd: string,
  } | null > | null,
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
    comments:  {
      __typename: "ModelCommentConnection",
      nextToken: string | null,
    } | null,
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

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment:  {
    __typename: "Comment",
    id: string,
    message: string | null,
    createdBy: string | null,
    talk:  {
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
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      message: string | null,
      createdBy: string | null,
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
    comments:  {
      __typename: "ModelCommentConnection",
      nextToken: string | null,
    } | null,
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
    comments:  {
      __typename: "ModelCommentConnection",
      nextToken: string | null,
    } | null,
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
    comments:  {
      __typename: "ModelCommentConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCommentSubscriptionVariables = {
  createdBy: string,
};

export type OnCreateCommentSubscription = {
  onCreateComment:  {
    __typename: "Comment",
    id: string,
    message: string | null,
    createdBy: string | null,
    talk:  {
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
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCommentSubscriptionVariables = {
  createdBy: string,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment:  {
    __typename: "Comment",
    id: string,
    message: string | null,
    createdBy: string | null,
    talk:  {
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
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCommentSubscriptionVariables = {
  createdBy: string,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment:  {
    __typename: "Comment",
    id: string,
    message: string | null,
    createdBy: string | null,
    talk:  {
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
    createdAt: string,
    updatedAt: string,
  } | null,
};
