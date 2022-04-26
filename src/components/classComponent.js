import { Form, Button, Table } from "react-bootstrap";
import { createRef, Component } from 'react';

export default class AddProducts extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
        this.formData = createRef();
    }




    add = (event) => {
        event.preventDefault();

        const newProduct = {
            product_name: this.formData.current.product_name.value,
            product_code: this.formData.current.product_code.value,
            price: this.formData.current.price.value,
            qty: Number(this.formData.current.qty.value)
        }


        this.setState(prevState => [
            ...prevState,
            newProduct

        ]);





    }


    increQty = (event) => {
        // console.log(event.target.value)
        const indexOfArray = event.target.value;
        this.state.products[indexOfArray].qty = this.state.products[indexOfArray].qty + 1;
        this.setState({
            products: this.state.products
        })
    }
    decreQty = (event) => {
        const indexOfArray = event.target.value;
        this.state.products[indexOfArray].qty = this.state.products[indexOfArray].qty - 1;

    }





    render() {
        return (




            <div>





                <Form onSubmit={this.add} ref={this.formData}>
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
                        <Form.Control type="number" placeholder=" qty" name="qty" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        SAVE

                    </Button>

                </Form>


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

                            this.state.products.map((item, index) => {

                                return (
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <td>{item.product_name}</td>
                                        <td>{item.product_code}</td>
                                        <td>{item.price}</td>
                                        <td>{item.qty}</td>

                                        <td>
                                            <Button variant="success" onClick={event => this.increQty(event)} value={index}>+</Button>

                                            <Button variant="danger" onClick={event => this.decreQty(event)} value={index}> - </Button>


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

















}
