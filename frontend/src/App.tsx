import { Container, Row } from "react-bootstrap";
import { FormComponent } from "./components/FormComponent";
import { TableComponent } from "./components/TableComponent";

function App() {
  return (
    <Container>
      <h4 className='p-5 fw-bold'>User CRUD</h4>
      <Row className='mt-4 p-4 col-lg-4'>
        <FormComponent />
      </Row>
      <Row className='p-3'>
        <h4 className='p-3 fw-bold'>User Info Table</h4>
        <TableComponent />
      </Row>
    </Container>
  );
}

export default App;
