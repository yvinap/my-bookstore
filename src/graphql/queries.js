/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBook = /* GraphQL */ `
  query GetBook($id: ID!) {
    getBook(id: $id) {
      id
      title
      description
      image
      author
      featured
      price
      orders {
        items {
          id
          book_id
          order_id
          createdAt
          updatedAt
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listBooks = /* GraphQL */ `
  query ListBooks(
    $filter: ModelBookFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        image
        author
        featured
        price
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const book_id = /* GraphQL */ `
  query Book_id(
    $book_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBookOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    book_id(
      book_id: $book_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        book_id
        order_id
        book {
          nextToken
        }
        order {
          id
          user
          date
          total
          createdAt
          updatedAt
          customer
        }
        createdAt
        updatedAt
        customer
      }
      nextToken
    }
  }
`;
export const order_id = /* GraphQL */ `
  query Order_id(
    $order_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBookOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    order_id(
      order_id: $order_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        book_id
        order_id
        book {
          nextToken
        }
        order {
          id
          user
          date
          total
          createdAt
          updatedAt
          customer
        }
        createdAt
        updatedAt
        customer
      }
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      user
      date
      total
      books {
        items {
          id
          book_id
          order_id
          createdAt
          updatedAt
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
      customer
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user
        date
        total
        books {
          nextToken
        }
        createdAt
        updatedAt
        customer
      }
      nextToken
    }
  }
`;
export const user = /* GraphQL */ `
  query User(
    $user: String!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    user(
      user: $user
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        user
        date
        total
        books {
          nextToken
        }
        createdAt
        updatedAt
        customer
      }
      nextToken
    }
  }
`;
