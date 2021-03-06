import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Device = {
  __typename?: 'Device';
  alias?: Maybe<Scalars['String']>;
  home?: Maybe<Home>;
  id?: Maybe<Scalars['ID']>;
  lastOnline?: Maybe<Scalars['String']>;
  online?: Maybe<Scalars['Boolean']>;
  owner?: Maybe<User>;
  private?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  devices?: Maybe<Array<Maybe<Device>>>;
  email?: Maybe<Scalars['String']>;
  home?: Maybe<Home>;
  id?: Maybe<Scalars['ID']>;
  roles?: Maybe<Roles>;
  terms?: Maybe<Terms>;
  username?: Maybe<Scalars['String']>;
};

export type Roles = {
  __typename?: 'Roles';
  admin?: Maybe<Scalars['Boolean']>;
};

export type Terms = {
  __typename?: 'Terms';
  agelimit?: Maybe<Scalars['Boolean']>;
  privacy?: Maybe<Scalars['Boolean']>;
  promotion?: Maybe<Scalars['Boolean']>;
  usepolicy?: Maybe<Scalars['Boolean']>;
};

export type Home = {
  __typename?: 'Home';
  admins?: Maybe<Array<Maybe<User>>>;
  devices?: Maybe<Array<Maybe<Device>>>;
  family?: Maybe<Array<Maybe<User>>>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type Session = {
  __typename?: 'Session';
  access_token: Scalars['ID'];
  user?: Maybe<User>;
};

export type NewUserInput = {
  agelimit: Scalars['Boolean'];
  email: Scalars['String'];
  password: Scalars['String'];
  privacy: Scalars['Boolean'];
  promotion: Scalars['Boolean'];
  usepolicy: Scalars['Boolean'];
  username: Scalars['String'];
};

export type SignInUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  user?: Maybe<User>;
  me?: Maybe<User>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  newUser?: Maybe<Session>;
  signInUser?: Maybe<Session>;
  tnid?: Maybe<Scalars['ID']>;
};


export type MutationNewUserArgs = {
  user: NewUserInput;
};


export type MutationSignInUserArgs = {
  user: SignInUserInput;
};

export type NewUserMutationVariables = Exact<{
  params: NewUserInput;
}>;


export type NewUserMutation = (
  { __typename?: 'Mutation' }
  & { newUser?: Maybe<(
    { __typename?: 'Session' }
    & Pick<Session, 'access_token'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'username'>
    )> }
  )> }
);

export type SignInMutationVariables = Exact<{
  params: SignInUserInput;
}>;


export type SignInMutation = (
  { __typename?: 'Mutation' }
  & { signInUser?: Maybe<(
    { __typename?: 'Session' }
    & Pick<Session, 'access_token'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'username'>
    )> }
  )> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'username'>
  )> }
);

export type UserQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type UserQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'username'>
    & { terms?: Maybe<(
      { __typename?: 'Terms' }
      & Pick<Terms, 'agelimit' | 'privacy' | 'promotion' | 'usepolicy'>
    )> }
  )> }
);

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetUserByIdQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username'>
  )> }
);


export const NewUserDocument = gql`
    mutation NewUser($params: NewUserInput!) {
  newUser(user: $params) {
    access_token
    user {
      id
      email
      username
    }
  }
}
    `;
export type NewUserMutationFn = Apollo.MutationFunction<NewUserMutation, NewUserMutationVariables>;

/**
 * __useNewUserMutation__
 *
 * To run a mutation, you first call `useNewUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useNewUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [newUserMutation, { data, loading, error }] = useNewUserMutation({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useNewUserMutation(baseOptions?: Apollo.MutationHookOptions<NewUserMutation, NewUserMutationVariables>) {
        return Apollo.useMutation<NewUserMutation, NewUserMutationVariables>(NewUserDocument, baseOptions);
      }
export type NewUserMutationHookResult = ReturnType<typeof useNewUserMutation>;
export type NewUserMutationResult = Apollo.MutationResult<NewUserMutation>;
export type NewUserMutationOptions = Apollo.BaseMutationOptions<NewUserMutation, NewUserMutationVariables>;
export const SignInDocument = gql`
    mutation SignIn($params: SignInUserInput!) {
  signInUser(user: $params) {
    access_token
    user {
      id
      email
      username
    }
  }
}
    `;
export type SignInMutationFn = Apollo.MutationFunction<SignInMutation, SignInMutationVariables>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: Apollo.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
        return Apollo.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, baseOptions);
      }
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<SignInMutation, SignInMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    email
    username
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const UserDocument = gql`
    query User($id: ID!) {
  user(id: $id) {
    id
    email
    username
    terms {
      agelimit
      privacy
      promotion
      usepolicy
    }
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const GetUserByIdDocument = gql`
    query GetUserById($id: ID!) {
  user(id: $id) {
    id
    username
  }
}
    `;

/**
 * __useGetUserByIdQuery__
 *
 * To run a query within a React component, call `useGetUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserByIdQuery(baseOptions: Apollo.QueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
        return Apollo.useQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, baseOptions);
      }
export function useGetUserByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
          return Apollo.useLazyQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, baseOptions);
        }
export type GetUserByIdQueryHookResult = ReturnType<typeof useGetUserByIdQuery>;
export type GetUserByIdLazyQueryHookResult = ReturnType<typeof useGetUserByIdLazyQuery>;
export type GetUserByIdQueryResult = Apollo.QueryResult<GetUserByIdQuery, GetUserByIdQueryVariables>;