// import React from 'react';
// import { Form, Input, Button, Row, Col } from 'antd';
// // import './styles.css';

// const Demo = () => {
//   const onFinish = (values) => {
//     console.log('Received values of form: ', values);
//   };

//   const onFinishFailed = (errorInfo) => {
//     console.log('Failed:', errorInfo);
//   };

//   const handleCancel = () => {
//     console.log('Cancel button clicked');
//   };

//   return (
    // <Form
    //   name="two_column_form"
    //   onFinish={onFinish}
    //   onFinishFailed={onFinishFailed}
    //   labelCol={{ span: 24 }}
    //   wrapperCol={{ span: 24 }}
    // >
    //   <Row>
    //     <Col md={{ span: 12 }} xs={{ span: 24 }}>
    //       <Form.Item
    //         label="First Name"
    //         name="firstName"
    //         rules={[{ required: true, message: 'Please enter your first name' }]}
    //         labelAlign="left"
    //         labelCol={{ span: 24 }}
    //         wrapperCol={{ span: 24 }}
    //       >
    //         <Input />
    //       </Form.Item>
    //     </Col>
    //     <Col md={{ span: 12 }} xs={{ span: 24 }}>
    //       <Form.Item
    //         label="Last Name"
    //         name="lastName"
    //         rules={[{ required: true, message: 'Please enter your last name' }]}
    //         labelAlign="left"
    //         labelCol={{ span: 24 }}
    //         wrapperCol={{ span: 24 }}
    //       >
    //         <Input />
    //       </Form.Item>
    //     </Col>
    //   </Row>

    //   <div className="form-buttons">
    //     <Form.Item
    //       label=" "
    //       name=" "
    //       labelCol={{ span: 24 }}
    //       wrapperCol={{ span: 24 }}
    //     >
    //       <Button type="primary" htmlType="submit">
    //         Submit
    //       </Button>
    //       <Button type="default" onClick={handleCancel}>
    //         Cancel
    //       </Button>
    //     </Form.Item>
    //   </div>
    // </Form>
//   );
// };

// export default Demo;




import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
const Demo = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" style={{padding:"14px 10px"}} />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          style={{padding:"14px 10px"}}
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
  );
};
export default Demo;