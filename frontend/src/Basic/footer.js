import React from 'react'

import Card from 'react-bootstrap/Card'




export default function BaseFooter(){
    const styles = {
        foot:{
            clear: 'both',
            position: 'relative',
            height: '200px',
            backgroundColor : 'rgba(255, 255, 255, 0.6)',
        }
    }
    return(
        <Card className="text-center" style={styles.foot}>
            <Card.Header>User Manager</Card.Header>
            <Card.Body>
                <Card.Title>Educational Practice 2</Card.Title>
                <Card.Text>
                Created with "React" and Bootsrap
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    )
}