import * as React from 'react';
import { Form, Button, Input, Layout, Radio } from 'antd';
import './App.css';
import { calculateSuper, calculateTax } from './utils/calculations';

export default function App() {
  const EMPLOYEE_SALARY = 250000;
  const [showResults, setShowResults] = React.useState(false);
  const [tax, setTax] = React.useState(0);
  const [supa, setSupa] = React.useState(0);

  function onSubmit() {
    setTax(calculateTax(EMPLOYEE_SALARY));
    setSupa(calculateSuper(EMPLOYEE_SALARY));
    setShowResults(true);
  }

  return (
    <>
      <Layout>
        <Layout.Header className="nav">
          <div className="logo">Onboarding</div>
        </Layout.Header>
        <Layout.Content className="form-container">
          {showResults ? (
            <>
              <h1>Salary Information</h1>
              <ul>
                <li>Salary: ${EMPLOYEE_SALARY}</li>
                <li>Tax: ${tax.toFixed(2)}</li>
                <li>Superannuation: ${supa.toFixed(2)}</li>
              </ul>
              <Button
                onClick={() => setShowResults(false)}
                className="primary-btn"
              >
                Reset
              </Button>
            </>
          ) : (
            <Form layout="vertical" onFinish={onSubmit}>
              <Form.Item  label="Employee Number" name="employeeNumber">
                <Input disabled defaultValue={1} />
              </Form.Item>
              <Form.Item
                label="First Name"
                name="firstName"
                rules={[
                  {
                    required: true,
                    message: 'Please input your first name!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Last Name"
                name="lastName"
                rules={[
                  {
                    required: true,
                    message: 'Please input your last name!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item label="Gender">
                <Radio.Group name="gender" defaultValue={1}>
                  <Radio value={1}>Male</Radio>
                  <Radio value={2}>Female</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
                hasFeedback
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          'The new password that you entered do not match!'
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Button htmlType="submit" className="primary-btn">
                Sign Up!
              </Button>
            </Form>
          )}
        </Layout.Content>
      </Layout>
    </>
  );
}
