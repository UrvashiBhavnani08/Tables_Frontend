import React, { useState, useEffect } from 'react';
import { Form, Input, Row, Col, DatePicker, InputNumber, Select, Button, message } from 'antd';
// import { Form, Input, Button, Row, Col } from 'antd';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

import moment from 'moment/moment';

const { Option } = Select;

function AddCarList() {


    const [form] = Form.useForm();
    const [error, setError] = useState('');

    const navigate = useNavigate()

    const path = useParams();

    const id = path.id

    console.log(id);

    useEffect(() => {
        if (id) {
            const fetchData = async () => {
                try {
                    const res = await axios.get(`https://vimpex-admin-git-main-development197.vercel.app/api/car/get/${id}`);
                    const data = res.data;
                    form.setFieldsValue({
                        department: data.department,
                        car_number: data.car_number,
                        book_wheelTax: data.book_wheelTax,
                        agreement_contract: data.agreement_contract,
                        extension_date: moment(data.extension_date),
                        take_by: data.take_by,
                        insurance: data.insurance,
                        insurance_issue: moment(data.insurance_issue),
                        insurance_last: moment(data.insurance_last),
                        model_year: data.model_year,
                        tax: data.tax,
                        created_by: data.created_by
                    });
                } catch (err) {
                    console.error(err);
                    setError('Error retrieving license data');
                }
            };
            fetchData();
        }
    }, [id, form]);


    const handleCancel = () => {
        console.log('Cancel button clicked');
    };





    const handleFinish = async (values) => {
        try {
            if (id) {
                await axios.put(`https://vimpex-admin-git-main-development197.vercel.app/api/car/update/${id}`, values);
                navigate(-1)
            } else {
                await axios.post('https://vimpex-admin-git-main-development197.vercel.app/api/car/add', values);
                navigate(-1)
            }
            message.success('Car List data saved successfully');
            form.resetFields();
        } catch (err) {
            console.error(err);
            setError('Error submitting form');
        }
        console.log(values);
    };

    const handleFinishFailed = ({ errorFields }) => {
        form.scrollToField(errorFields[0].name);
    };

    return (
        <>

            <div className="form-main">
                <h1>{id ? <>Edit Car List</> : <>Add Car List</>}</h1>
                <Button type="primary" onClick={()=>navigate(-1)}>
                    Back
                </Button>
            </div>

            <Form
                name="two_column_form"
                onFinish={handleFinish}
                onFinishFailed={handleFinishFailed}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                form={form}
            >

                <Row>
                    <Col md={{ span: 11 }} xs={{ span: 22 }} style={{ margin: '0 14px' }} >
                        <Form.Item label="Department" name="department" rules={[{ required: true }]} labelAlign="left">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col md={{ span: 11 }} xs={{ span: 22 }} style={{ margin: '0 14px' }}>

                        <Form.Item label="Car Number" name="car_number" rules={[{ required: true }]} labelAlign="left">
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>

                <Row>
                    <Col md={{ span: 11 }} xs={{ span: 22 }} style={{ margin: '0 14px' }} >
                        <Form.Item label="Book Wheel Tax" name="book_wheelTax" rules={[{ required: true }]} labelAlign="left">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col md={{ span: 11 }} xs={{ span: 22 }} style={{ margin: '0 14px' }}>

                        <Form.Item label="Agreement Contract" name="agreement_contract" rules={[{ required: true }]} labelAlign="left">
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>

                <Row>
                    <Col md={{ span: 11 }} xs={{ span: 22 }} style={{ margin: '0 14px' }} >
                        <Form.Item label="Extension Date" name="extension_date" rules={[{ required: true }]} labelAlign="left">
                            <DatePicker />
                        </Form.Item>
                    </Col>
                    <Col md={{ span: 11 }} xs={{ span: 22 }} style={{ margin: '0 14px' }}>

                        <Form.Item label="Take By" name="take_by" rules={[{ required: true }]} labelAlign="left">
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>


                <Row>
                    <Col md={{ span: 11 }} xs={{ span: 22 }} style={{ margin: '0 14px' }} >
                        <Form.Item label="Insurance" name="insurance" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col md={{ span: 11 }} xs={{ span: 22 }} style={{ margin: '0 14px' }}>

                        <Form.Item label="Insurance Issue" name="insurance_issue" rules={[{ required: true }]}>
                            <DatePicker />
                        </Form.Item>
                    </Col>
                </Row>


                <Row>
                    <Col md={{ span: 11 }} xs={{ span: 22 }} style={{ margin: '0 14px' }} >
                        <Form.Item label="Insurance Last" name="insurance_last" rules={[{ required: true }]}>
                            <DatePicker />
                        </Form.Item>
                    </Col>
                    <Col md={{ span: 11 }} xs={{ span: 22 }} style={{ margin: '0 14px' }}>

                        <Form.Item label="Model Year" name="model_year">
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>


                <Row>
                    <Col md={{ span: 11 }} xs={{ span: 22 }} style={{ margin: '0 14px' }} >
                        <Form.Item label="Tax" name="tax">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col md={{ span: 11 }} xs={{ span: 22 }} style={{ margin: '0 14px' }}>
                        <Form.Item label="Created By" name="created_by" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>




                <div className="form-buttons">
                    <Form.Item
                        label=" "
                        name=" "
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                        <Button type="default" onClick={()=>navigate(-1)}>
                            Cancel
                        </Button>
                    </Form.Item>
                </div>
            </Form>
            
        </>
    )

}


export default AddCarList;