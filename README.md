# 📱 MobileMart

**MobileMart** is a fully functional e-commerce website built for selling smartphones. It features user authentication, cart and wishlist management, a contact form, and responsive UI/UX for seamless shopping.


## 🚀 Features

- 🔐 **User Authentication**
  - Firebase Authentication used for sign-up/login
  - Secure email and password storage
  - Session management

- 🏠 **Navigation Pages**
  - **Home** – Welcome page with brand introduction
  - **Store** – Displays a dynamic product list with images, prices, and action buttons
  - **About** – Overview of the MobileMart brand
  - **Contact** – Contact form with fields for name, email, and phone number

- 🛒 **Cart System**
  - Add items to cart with image, name, and price
  - Quantity increment/decrement using `+` and `-` buttons
  - Real-time update of item count and total price
  - Modal UI for cart
  - Purchase and close buttons

- 💖 **Wishlist Feature**
  - Add/remove items to/from wishlist
  - Wishlist accessible via header icon
  - Modal view similar to cart

- 📦 **Product Handling**
  - Products displayed in card layout
  - Add to cart and wishlist buttons per item

- 🔁 **Backend Integration**
  - Cart and Wishlist data persisted via [CrudCrud](https://crudcrud.com/)
  - User-specific data based on Firebase-authenticated email (sanitized)

- 📱 **Responsive UI**
  - Clean layout and responsive components
  - Styled header, footer, and modals

- 🔗 **Footer**
  - Includes social media links to:
    - Facebook
    - Twitter
    - Instagram
    - LinkedIn


```
## 🗂 Folder Structure
E-Commerce Site/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── components/
│   │   ├── Auth/
│   │   │   ├── AuthForm.jsx
│   │   │   └── AuthForm.module.css
│   │   ├── Cart/
│   │   │   ├── Cart.jsx
│   │   │   └── CartItem.jsx
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.css
│   │   ├── Layout/
│   │   │   ├── About.jsx
│   │   │   ├── ContactUs.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Home.jsx
│   │   │   └── Store.jsx
│   │   ├── PrivateRoute/
│   │   │   └── PrivateRoute.jsx
│   │   ├── Product/
│   │   │   ├── ProductList.jsx
│   │   │   ├── ProductPage.jsx
│   │   │   └── Products.jsx
│   │   ├── Routes/
│   │   │   └── Routers.jsx
│   │   ├── Store/
│   │   │   ├── AuthContext.jsx
│   │   │   ├── CartContext.jsx
│   │   │   ├── CartProvider.jsx
│   │   │   └── UserDataManager.jsx
│   │   ├── Wishlist/
│   │   │   └── WishlistModal.jsx
├── .gitignore
├── package.json
├── README.md
```


## 🛠 Tech Stack

- **Frontend**: React
- **Authentication**: Firebase
- **Backend (Cart/Wishlist)**: CrudCrud
- **State Management**: Context API
- **Routing**: React Router v5
- **Styling**: CSS Modules & Bootstrap