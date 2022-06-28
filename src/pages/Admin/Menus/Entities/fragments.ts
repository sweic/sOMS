import { gql } from "@apollo/client";

export const menuFragment = (id: string | number) => gql`
    fragment Menu${id} on Menu {
        id
        updatedat
        sections {
            id
            code
            title
            fooditems {
                id
                code
                title
                price
                sections {
                    id
                    code
                    title
                }
                image {
                    id
                    imageURL
                }
            }
            image {
                id
                imageURL
            }
            menu {
                id
                title
            }
        }
        title
        fooditems {
            id
            title
            code
            price
            sections {
                id
                title
                code
            }
            image {
                id
                imageURL
            }
            menu {
                id
                title
            }

        }
    }
`;
export const sectionFragment = (id: string | number) => gql`
    fragment Section${id} on Section {
        id
        code
        title
        image {
            id
            imageURL
        }
        menu {
            id
            title
        }
        fooditems {
            id
            title
            price
            code
            image {
                id
                imageURL
            }
            sections {
                id
                code
                title
            }
            menu {
                id
                title
            }
        }
    }
`;

export const foodItemFragment = (id: string | number) => gql`
    fragment FoodItem${id} on FoodItem {
        id
        code
        title
        price
        available
        options
        sections {
            id
            code
            title
            menu {
                id
                title
            },
            fooditems {
                id
                code
                title
            }
            image {
                id
                imageURL
            }
        }
        image {
            id
            imageURL
        }
        menu {
            id
            title
        }
    }
`;
