import { useState } from "react";

function useInventory() {
    const [inventory, setInventory] = useState([
        {id: 1, name: 'Shoes', description: 'To put on your feet.', price:45.99},
        {id: 2, name: 'Shirt', description: 'To put on your upper body.', price:15.99},
        {id: 3, name: 'Hat', description: 'To put on your head.', price: 7.99},
        {id: 4, name: 'Pants', description: 'To put on your legs.', price:65.99},
        {id: 5, name: 'Socks', description: 'To cover up your feet.', price:3.99},
        {id: 6, name: 'Underwear', description: 'To cover up your under area.', price:5.99},
        {id: 7, name: 'Scarf', description: 'To put on your neck.', price:10.99}
    ]);

    // Function to add a new product
    const addProduct = (id, name, description, price) => {
        setInventory(prevInventory=>(
            [...prevInventory, 
                {id:id, 
                    name:name, 
                    description:description, 
                    price:price}]
        ));
        
    };

    // Function to remove a product using the product id
    const removeProduct = (id) => {
        setInventory(inventory.filter(product => product.id!==id));
    };

    return { inventory, addProduct, removeProduct };
}

export default useInventory;