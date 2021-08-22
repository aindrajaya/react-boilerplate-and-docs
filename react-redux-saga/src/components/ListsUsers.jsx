import React from 'react'
import { Button, ListGroup, ListGroupItem } from 'reactstrap';

export default function ListsUsers({users}) {
  console.log(users);
  return (
    <ListGroup>
      {users.map((user) => {
        return(
          <ListGroupItem
            key={user.id}
          >
            <section style={{display: 'flex'}}>
              <div style={{flexGrow: '1', margin:'auto 0'}}>
                {user.firstName} {user.lastName}
              </div>
              <Button outline color="danger">
                Delete
              </Button>
            </section>
          </ListGroupItem>
        )
      })}
    </ListGroup>
  )
}
