# Woode - Where Furniture and Art Meet 🛋️

Welcome to **Woode**, the coolest furniture e-commerce app on the block! This project is a full-stack **MERN** (**MongoDB, Express, React, Node.js**) showcase designed to display full-stack skills. It’s packed with custom-built features, including a custom **API**, a **JWT-based authentication system**, and a sleek UI.

[Woode - Live Demo](https://andre-rd-rodrigues.github.io/woode/)

## What’s Woode All About?

Woode is your go-to online store for stylish furniture. Browse through a variety of furniture pieces, add your favorites to the cart, and complete your purchase—all while experiencing the seamless integration of **React**, **React Router**, and **Redux**.

![Woode - Homepage](/public/preview.png)

### Key Features

- **Full MERN Stack**: **MongoDB**, **Express**, **React**, and **Node.js** working together harmoniously.
- **Custom API**: Calls to my very own custom node API for managing products, orders, authentication, and more. Check the [woode API here](https://github.com/andre-rd-rodrigues/woode-api).
- **JWT Authentication**: Secure login system using **JSON Web Tokens**.
- **Redux for State Management**: Efficient state management with **Redux**, including reducers and middleware.
- **Testing with RTL and Jest**: Robust unit and integration testing to ensure everything works smoothly.

### 🏗️ App Structure

#### Store Structure

Here's the breakdown of the Redux store structure:

```
store
├── entities
│ ├── auth.js
│ ├── cart.js
│ ├── entitiesReducer.js
│ ├── navigation.js
│ ├── products.js
├── middleware
│ └── activateNotification.js
├── thunks
│ ├── auth.thunks.js
│ ├── cart.thunks.js
│ ├── products.thunks.js
│ ├── user.thunks.js
└── ui
├── notifications.js
├── uiReducer.js
└── rootReducer.js`
```

### 🌟 Features

- **Add Items to Cart**: Easily add your favorite furniture items to the shopping cart.
- **Remove Items**: Change your mind? Quickly remove items from the cart.
- **Update Items**: Adjust quantities or update items in the cart as needed.
- **Checkout**: Smooth checkout process to complete your purchase.
- **Authentication**: Secure login and registration using JWT and OAuth.

### 🧪 Testing

Comprehensive testing with **React Testing Library (RTL)** and **Jest**:

- **Unit Testing**: Ongoing effort to ensure each component works correctly.
- **Integration Testing**
- **Snapshots**

### 🌐 Hosting

The app is hosted on Netlify, making it super easy to access and demo. Check it out:

[Woode - Live Demo](https://andre-rd-rodrigues.github.io/woode/)
