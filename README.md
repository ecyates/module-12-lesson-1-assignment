# Front-End Specialization - Module 12 - Lesson 1 - State Management with Custom Hooks and Context API
Author: Elizabeth Yates

## Building a Contact Management App Using Context API

**Objective**: The goal of this assignment is to build a simple contact management application using React's Context API. This app will allow users to view a list of contacts and select an individual contact to view detailed information.

**Problem Statement**: Your task is to create a contact management application without a backend service, using dummy data to simulate a list of contacts. The application should be capable of displaying all contacts in a list and showing detailed information for a selected contact using the Context API to manage and share the state across components.

### Task 1: Set Up the Contact Context

Create a context to manage the state of contacts in your application. This context will hold both the list of contacts and the currently selected contact.

**Expected Outcome**:
A context that provides the list of contacts and the selected contact to the entire app.

### Task 2: Display the List of Contacts

Create a component that consumes the Contact Context to display a list of contacts. Each contact should be clickable, setting the selected contact in the context.

**Expected Outcome**:
A list of contacts displayed on the screen, where clicking a contact updates the selected contact in the context.

### Task 3: Show Selected Contact Details

Create a component that consumes the Contact Context to display details of the selected contact.

**Expected Outcome**:
When a user clicks on a contact in the list, the app displays the selected contact's details.

### Integration:

Ensure your application is wrapped with the ContactProvider in your main App component to provide context to your components.

## Managing Product Inventory with Custom Hooks

**Objective**:
The goal of this assignment is to develop a product inventory management feature for a mock application using custom React hooks. You will create a custom hook to handle operations like fetching, adding, and removing products using dummy data.

**Problem Statement**:
You're tasked with creating a functional component of a product inventory system for an e-commerce platform. This system should allow users to view a list of products, add a new product, and remove an existing product. Since the backend isn't implemented yet, you will use dummy data to simulate these functionalities.

### Task 1: Create a Custom Hook for Inventory Management

Develop a custom hook named useInventory that manages the inventory state. This hook should provide functionalities to fetch all products, add a new product, and remove a product.

**Expected Outcome**:
A custom hook that allows managing the product inventory.

### Task 2: Implement the Product List Component

Create a ProductList component that uses the useInventory hook to display the list of products and a button to remove each product.

**Expected Outcome**:
A list of products displayed on the screen, each with a button to remove the product from the inventory.

### Task 3: Add New Product Form Component

Create a NewProductForm component that uses the useInventory hook to add a new product to the inventory.

**Expected Outcome**:
A form that allows users to add new products to the inventory.