import { Container, Row, Button, Form, Modal, Spinner, Card } from 'react-bootstrap';
import useInventory from "../hooks/useInventory";
import { useState } from 'react';

const ProductForm = () => {
    const [product, setProduct] = useState({name:'', description:'', price:''});
    const {  inventory, addProduct, removeProduct } = useInventory();
    const [errors, setErrors] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isSubmitting, setSubmitting] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    // For all changes in the form, update the product's name, description or price values. 
    const handleChange = (event) => {
        const { name, value } = event.target;
        setProduct(prevProduct => ({
            ...prevProduct,
            [name]:value
        }));
    };

    // Name and price are required. 
    const validateForm = () => {
        let errors = {};
        if (!product.name) errors.name = 'Product name is required.';
        if (!product.price || parseFloat(product.price)<=0) errors.price = 'Price must be a positive number.';
        setErrors(errors);
        return Object.keys(errors).length===0;
    };

    // Function to calculate the next ID number. 
    // If the inventory is empty, the next ID is 1. 
    // Otherwise, it should be the next biggest number. 
    const nextId=()=>{
        if (inventory.length===0) return 1;
        const idArray = inventory.map(product=>parseFloat(product.id));
        const biggestId = Math.max(...idArray);
        return biggestId+1;
    }

    // When submit is clicked, validate form, add product and set success message.
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent automatic page refresh
        if (!validateForm()) return; // Validate form
        setSubmitting(true); // Set state to submitting
        try{
            const id = nextId();
            addProduct(id,
                product.name,
                product.description,
                parseFloat(product.price)
            );
            setSuccessMessage('Product successfully added.');
            setShowSuccessModal(true);
        }catch(error){
            console.error("Error submitting form:", error.response);
            setErrorMessage(error.response);
        }finally{
            setSubmitting(false);
        };
    };

    // Function to close modal and reset form values
    const closeModal = () => {
        setShowSuccessModal(false);
        setProduct({name:'', description: '', price:''});
    };

    return (
        <Container className="mt-5">
            {isSubmitting && <Alert variant="info">Submitting product data...</Alert>}
            {errorMessage && <Alert variant="danger">Error submitting product data {errorMessage}</Alert>}

            {/* List of products in cards showing title, price, description and button to remove */}
            <h1>Product List</h1>
            <Row>
                {inventory.map(product => (
                    <Card key={product.id} className="text-center col-4 mb-3">
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text className="m-0">${product.price}</Card.Text>
                            <Card.Text className="mb-2">{product.description}</Card.Text>
                            <Button variant="danger" onClick={() => removeProduct(product.id)}>
                                Delete
                            </Button>
                        </Card.Body>
                    </Card>
                ))}
            </Row>

            {/* Form to add a new product, includes fields for name, description and price.  */}
            <h1>Add Product</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Product Name:</Form.Label>
                    <Form.Control type="text" name="name" value={product.name} onChange={handleChange} isInvalid={!!errors.name}/>
                    <Form.Control.Feedback type="invalid">
                        {errors.name}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Description:</Form.Label>
                    <Form.Control type="text" name="description" value={product.description} onChange={handleChange}/>               
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Price:</Form.Label>
                    <Form.Control type="number" name="price" step="0.01" value={product.price} onChange={handleChange} isInvalid={!!errors.price}/>
                    <Form.Control.Feedback type="invalid">
                        {errors.price}
                    </Form.Control.Feedback>                
                </Form.Group>
                <Form.Group className="text-center">
                    <Button variant="info" className="mt-3" type="submit" disabled={isSubmitting}>{isSubmitting? <Spinner as="span" animation="border" size="sm"/>:'Submit'}</Button>
                </Form.Group>
            </Form>

            {/* Show success modal after form submission */}
            <Modal show={showSuccessModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Success!</Modal.Title>
                    </Modal.Header>
                <Modal.Body>
                    {successMessage}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )

};

export default ProductForm;