import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";

export const TableComponent = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>0124578</td>
          <td>
            <Button variant='warning'>Edit</Button> <Button variant='danger'>Delete</Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};
