import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation loginUser() {
        login() {

        }
    }
`;

export const ADD_USER = gql`
    mutation addUser() {
        addUser() {
            
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($input: BookInput) {
        saveBook(input: $input) {
            _id
            username
            bookCount
            savedBooks
        }
    }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook() {
        removeBook() {
            
        }
    }
`;