import React from "react";
import { Button, Modal, Form, Input, TextArea } from "semantic-ui-react";

const AddOrder = (props) => {
  return (
    <Modal onClose={props.handleAdd} open={props.open}>
      <Modal.Header>Add Order</Modal.Header>
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
              required
              fluid
            />
            <Form.Field
              placeholder="Price"
              type="text"
              onChange={props.handleOnChange}
              name="price"
              label="Price"
              required
              control={Input}
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
            fluid
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={props.handleAdd}>
          Close
        </Button>
        <Button
          content="save"
          labelPosition="right"
          icon="save"
          onClick={props.onAddOrder}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default AddOrder;
