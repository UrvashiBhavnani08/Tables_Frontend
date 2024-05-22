import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, message } from 'antd';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {

    const { dispatch } = useContext(AuthContext)

    const onFinish = async (values) => {
        
        const email = values.email;
        const password = values.password
        console.log('Received values of form: ', values, email);
        // e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        // setFetch(true);
        try {
            const res = await axios.post(
                "https://vimpex-admin-git-main-development197.vercel.app/api/auth/login",
                { email, password }
            );
            message.success("Login Sccessful")
            console.log(res);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            // swal(res.data.msg, {
            //     icon: "success",
            // });
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE" });
            // setFetch(false);
            // swal(`${err.response.data.msg}`, {
            //     icon: "warning",
            // });
        }
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
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" style={{ padding: "14px 10px" }} />
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
                    style={{ padding: "14px 10px" }}
                />
            </Form.Item>
            {/* <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                    Forgot password
                </a>
            </Form.Item> */}

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
                Or <a href="">register now!</a>
            </Form.Item>
        </Form>
    );
};
export default Login;