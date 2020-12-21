import React from "react";
import { Button, Modal, Form, Input, TextArea } from "semantic-ui-react";

const EditOrder = (props) => {
  return (
    <Modal onClose={props.handleEdit} open={props.open}>
      <Modal.Header>Edit Order</Modal.Header>
      <Modal.Content>
        <Form onSubmit={props.onSubmit}>
          <Form.Group widths="equal">
            <Form.Field
              placeholder="Name"
              type="text"
              onChange={props.handleOnChange}
              name="name"
              label="Name"
              control={Input}
              value={props.state.name}
              required
              fluid
            />
            <Form.Field
              placeholder="Price"
              type="text"
              onChange={props.handleOnChange}
              name="price"
              label="Price"
              control={Input}
              value={props.state.price}
              required
              fluid
            />
          </Form.Group>
          <Form.Field
            placeholder="Notes"
            type="text"
            onChange={props.handleOnChange}
            name="notes"
            label="Notes"
            control={TextArea}
            value={props.state.notes}
            fluid
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={props.handleEdit}>
          Close
        </Button>
        <Button
          content="save"
          labelPosition="right"
          icon="save"
          onClick={() => props.onEditOrder()}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default EditOrder;
