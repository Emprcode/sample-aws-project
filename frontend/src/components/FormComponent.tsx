import { useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import type { User } from "../types";

export const FormComponent = () => {
  const [formDt, setFormDt] = useState<User>();

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormDt({
      ...formDt,
      [name]: value,
    });
  };

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log(formDt);
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Group className='mb-3'>
        <Form.Label>First Name</Form.Label>
        <Form.Control type='text' placeholder='Jack' name='firstName' onChange={handleOnChange} />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Last Name</Form.Label>
        <Form.Control type='text' placeholder='Doe' name='lastName' onChange={handleOnChange} />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type='email'
          placeholder='jack@email.com'
          name='email'
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type='number' placeholder='98784578' name='phone' onChange={handleOnChange} />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  );
};
