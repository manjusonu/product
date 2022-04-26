import React from 'react'
import { Row, Col,  ListGroup } from 'react-bootstrap'
import { Link  } from 'react-router-dom'

function Details() {
  return (
    <div>

<Link className="btn btn-outline-dark my-2 rounded bt-sm" to="/">Save</Link>


<Col md={4}>
                        <ListGroup.Item>
                            <h4>List of products</h4>
                            <p>   </p>

                        </ListGroup.Item>
                    </Col>

    </div>
  )
}

export default Details