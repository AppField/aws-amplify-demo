/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCoins = /* GraphQL */ `
  query GetCoins($limit: Int, $start: Int) {
    getCoins(limit: $limit, start: $start) {
      id
      name
      symbol
      price_usd
    }
  }
`;
export const getTalk = /* GraphQL */ `
  query GetTalk($id: ID!) {
    getTalk(id: $id) {
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
export const listTalks = /* GraphQL */ `
  query ListTalks(
    $filter: ModelTalkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTalks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        clientId
        name
        description
        speakerName
        speakerBio
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        message
        createdBy
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
