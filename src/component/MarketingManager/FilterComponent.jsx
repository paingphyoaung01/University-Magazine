import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Container, Row, Col, Form} from 'react-bootstrap';
import { BiFilter } from 'react-icons/bi'; // Import the filter icon from react-icons

const FilterComponent = ({ faculties, academicYears, users, filter, onFilterChange }) => {
  const { register, handleSubmit, reset, setValue, watch, formState: { isDefaultDirty } } = useForm(filter);

  const onSubmit = (data) => {
    // Pass the selected filter values to the parent component
    onFilterChange(data);
  };

  const handleReset = () => {
    reset(); // Reset all form fields
    // Pass empty filters to the parent component
    onFilterChange({});
  };

  return (
    <Container className="text-center my-4">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className="justify-content-center">
          <Col md={2}>
            <Form.Select {...register('selectedFaculty')}>
              <option value="">Select Faculty</option>
              {faculties?.map((faculty) => (
                <option key={faculty.id} value={faculty.id}>
                  {faculty.name}
                </option>
              ))}
            </Form.Select>
          </Col>
          <Col md={2} className='m-1'>
            <Form.Select {...register('selectedAcademicYear')}>
              <option value="">Select Academic Year</option>
              {academicYears?.map((year) => (
                <option key={year.id} value={year.id}>
                  {year.name}
                </option>
              ))}
            </Form.Select>
          </Col>
          <Col md={2}>
            <Form.Select {...register('selectedUser')}>
              <option value="">Select User</option>
              {users?.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </Form.Select>
          </Col>
          <Col md={3} className='m-1'>
            <Button type="submit" variant="primary" className="me-2">
              <BiFilter /> {/* Filter icon */}
            </Button>
            {!isDefaultDirty && (
              <Button variant="secondary" onClick={handleReset}>
                Reset
              </Button>
            )}
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default FilterComponent;
