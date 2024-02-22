# ShopifyLite Project

Welcome to ShopifyLite, a lightweight e-commerce project built with simplicity in mind. This README provides an overview of the project's functionalities and how to get started.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
  - [Login Process](#login-process)
  - [Authorization Token](#authorization-token)
  - [Protected Home Page](#protected-home-page)
  - [Fetch Products](#fetch-products)
  - [Search Products](#search-products)
  - [Filter by Price](#filter-by-price)
  - [Shopping Cart](#shopping-cart)
    - [Cart Count](#cart-count)
    - [Add to Cart](#add-to-cart)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ShopifyLite.git
   cd ShopifyLite
   ```

## Usage

- [Login Process](#login-process)

  The project implements a simple login process using the authentication service at https://dummyjson.com/docs/auth. Users can log in with their credentials to access the protected features.

- [Authorization Token](#authorization-token)

  Upon successful login, the user's token is saved in Local Storage for authorization purposes. This token is required for accessing protected routes and making authenticated requests.

- [Protected Home Page](#protected-home-page)

  The Home page is a protected route, allowing only logged-in users to access it. If a user is not logged in, they will be redirected to the login page.

- [Fetch Products](#fetch-products)

  The Home page fetches products from https://dummyjson.com/docs/products and displays them to the user.

- [Search Products](#search-products)

  A search functionality is implemented on the Home page, enabling users to search for products based on their name.

- [Filter by Price](#filter-by-price)

  Users can filter products on the Home page based on price, providing a customizable and user-friendly experience.

- [Shopping Cart](#shopping-cart)

  The project includes a shopping cart feature, allowing users to add products to their cart.

  - [Cart Count](#cart-count)

    The top of the page displays the current count of items in the user's cart, providing a quick overview.

  - [Add to Cart](#add-to-cart)

    Each product card on the Home page includes an "Add to Cart" button, allowing users to easily add items to their shopping cart.

## Tech Stack

The project is built using the following technologies and React components:

- ReactJs
- React Router DOM
- React Context API
- Vite 

Feel free to explore and customize ShopifyLite to suit your needs. Happy shopping!
