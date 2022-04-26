import { Form, Button, Table } from "react-bootstrap";
import { useState, createRef } from 'react';


export default function AddProduct() {

    let initialValue = [];


    const [products, setProduct] = useState(initialValue);
    const formData = createRef();


    const add = (event) => {
        event.preventDefault();

        const newProduct = {
            product_name: formData.current.product_name.value,
            product_code: formData.current.product_code.value,
            price: formData.current.price.value,
            qty: Number(formData.current.qty.value)
        }
        //console.log(newProduct);

        setProduct([...products, newProduct]);
        //console.log(products);

    }


    const increQty = (event) => {
        // console.log(event.target.value)
        const indexOfArray = event.target.value;
        products[indexOfArray].qty = products[indexOfArray].qty + 1;
        setProduct([...products])
    }
    const decreQty = (event) => {
        const indexOfArray = event.target.value;
        products[indexOfArray].qty = products[indexOfArray].qty - 1;
        setProduct([...products])
    }

    

    return (
        <div>
            <Form onSubmit={add} ref={formData}>
                <Form.Group controlId="formBasicPoductName">
                    <Form.Label>Product Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter Product Name" name="product_name" />


                </Form.Group>

                <Form.Group controlId="formBasicProductCode">
                    <Form.Label>Product Code:</Form.Label>
                    <Form.Control type="number" placeholder="Enter Product Code" name="product_code" />
                </Form.Group>

                <Form.Group controlId="formBasicProductPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" placeholder="Enter Product Price" name="price" />
                </Form.Group>



                <Form.Group controlId="formBasicQty">
                    <Form.Label>Quantity:</Form.Label>
                    <Form.Control type="number" placeholder=" Qty" name="qty" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    SAVE

                </Button>

            </Form>
            <h2>ADD PRODUCT</h2>

            <Table striped bordered hover variant="dark">
            
                <thead>
                    
                    <tr>
                        <th>Index</th>
                        <th>Product Name</th>
                        <th>Product code</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Options</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {

                        products.map((item, index) => {

                            return (
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{item.product_name}</td>
                                    <td>{item.product_code}</td>
                                    <td>{item.price}</td>
                                    <td>{item.qty}</td>

                                    <td>
                                        <Button variant="success" onClick={event => increQty(event)} value={index}>+</Button>

                                        <Button variant="danger" onClick={event => decreQty(event)} value={index}> - </Button>
                                        <Button variant="warning">Remove</Button>

                                    </td>
                                </tr>


                            )


                        })





                    }

                </tbody>
            </Table>





        </div>






    )
}
