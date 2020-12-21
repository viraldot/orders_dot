import React, { Component } from "react";
import { Table, Icon, Button, Card, Container } from "semantic-ui-react";
import AddOrder from "./components/addOrder";
import EditOrder from "./components/editOrder";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addOpen: false,
      editOpen: false,
      editItem: "",
      name: "",
      price: "",
      notes: "",
      data: [
        { name: "test order 1", price: 100, notes: "test notes 1" },
        { name: "test order 2", price: 150, notes: "test notes 2" },
      ],
    };
  }

  handleOnChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onAddOrder = () => {
    const { name, price, notes, addOpen } = this.state;
    this.setState({ addOpen: !addOpen });
    const data = this.state.data.push({ name, price, notes });
    return data;
  };

  handleAdd = () => {
    const { addOpen } = this.state;
    this.setState({ addOpen: !addOpen });
  };
  handleEdit = (i) => {
    const { editOpen, data } = this.state;
    this.setState({ editOpen: !editOpen });
    if (i !== "") {
      this.setState({
        editItem: i,
        name: data[i].name,
        price: data[i].price,
        notes: data[i].notes,
      });
    }
  };

  onEditOrder = () => {
    const { editItem, editOpen } = this.state;
    this.setState({ editOpen: !editOpen });
    const index = editItem;
    const { data, name, price, notes } = this.state;
    data.splice(index, 1, { name, price, notes });
    this.setState({ data: [...data] });
  };

  removeData = (index) => {
    var array = [...this.state.data];
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({ data: array });
    }
  };

  render() {
    const { addOpen, editOpen } = this.state;
    return (
      <div className="App">
        <AddOrder
          open={addOpen}
          onAddOrder={this.onAddOrder}
          handleAdd={this.handleAdd}
          handleOnChange={this.handleOnChange}
        />
        <EditOrder
          open={editOpen}
          onEditOrder={this.onEditOrder}
          handleEdit={this.handleEdit}
          handleOnChange={this.handleOnChange}
          state={this.state}
        />
        <Card fluid>
          <Card.Content>
            <div className="product-header">
              <Button floated="right" onClick={this.handleAdd}>
                <Icon name="plus circle" />
                Orders
              </Button>
            </div>
          </Card.Content>
        </Card>
        <Container>
          <Table border celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Price</Table.HeaderCell>
                <Table.HeaderCell>Notes</Table.HeaderCell>
                <Table.HeaderCell>Action</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {this.state.data.map((row, i) => (
                <Table.Row>
                  <Table.Cell>{row.name}</Table.Cell>
                  <Table.Cell>{row.price}</Table.Cell>
                  <Table.Cell>{row.notes}</Table.Cell>
                  <Table.Cell>
                    <h3>
                      <Button
                        icon="edit"
                        style={{ color: "black" }}
                        onClick={() => this.handleEdit(i)}
                      />
                      <Button
                        onClick={() => this.removeData(i)}
                        icon="trash"
                        style={{ color: "red" }}
                      />
                    </h3>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Container>
      </div>
    );
  }
}

export default App;
