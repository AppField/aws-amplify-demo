/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTalk = /* GraphQL */ `
  mutation CreateTalk(
    $input: CreateTalkInput!
    $condition: ModelTalkConditionInput
  ) {
    createTalk(input: $input, condition: $condition) {
      id
      clientId
      name
      description
      speakerName
      speakerBio
      comments {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTalk = /* GraphQL */ `
  mutation UpdateTalk(
    $input: UpdateTalkInput!
    $condition: ModelTalkConditionInput
  ) {
    updateTalk(input: $input, condition: $condition) {
      id
      clientId
      name
      description
      speakerName
      speakerBio
      comments {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTalk = /* GraphQL */ `
  mutation DeleteTalk(
    $input: DeleteTalkInput!
    $condition: ModelTalkConditionInput
  ) {
    deleteTalk(input: $input, condition: $condition) {
      id
      clientId
      name
      description
      speakerName
      speakerBio
      comments {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      message
      createdBy
      talk {
        id
        clientId
        name
        description
        speakerName
        speakerBio
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      message
      createdBy
      talk {
        id
        clientId
        name
        description
        speakerName
        speakerBio
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      message
      createdBy
      talk {
        id
        clientId
        name
        description
        speakerName
        speakerBio
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
