import React, { useState, useEffect } from 'react';
import { Form, Input, Row, Col, DatePicker, InputNumber, Select, Button, message } from 'antd';
// import { Form, Input, Button, Row, Col } from 'antd';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import "./licenses.css"

import moment from 'moment/moment';

const { Option } = Select;

function AddLicenseForm() {


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
                    const res = await axios.get(`https://vimpex-admin-git-main-development197.vercel.app/api/licenses/get/${id}`);
                    const data = res.data;
                    form.setFieldsValue({
                        company_name: data.company_name,
                        license_type: data.license_type,
                        license_number: data.license_number,
                        issue_date: moment(data.issue_date),
                        last_date: moment(data.last_date),
                        amount_payable: data.amount_payable,
                        payment_terms: data.payment_terms,
                        renewal: data.renewal,
                        govt_office_address: data.govt_office_address,
                        remarks: data.remarks,
                        note: data.note,
                        status: data.status,
                        paid: data.paid,
                        added_by: data.added_by
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
                await axios.put(`https://vimpex-admin-git-main-development197.vercel.app/api/licenses/update/${id}`, values);
                navigate(-1)
            } else {
                await axios.post('https://vimpex-admin-git-main-development197.vercel.app/api/licenses/add', values);
                navigate(-1)
            }
            message.success('License saved successfully');
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
                <h1>{id ? <>Edit License</> : <>Add License</>}</h1>
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
                        <Form.Item label="Company Name" name="company_name" rules={[{ required: true }]} labelAlign="left">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col md={{ span: 11 }} xs={{ span: 22 }} style={{ margin: '0 14px' }}>

                        <Form.Item label="License Type" name="license_type" rules={[{ required: true }]} labelAlign="left">
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>

                <Row>
                    <Col md={{ span: 11 }} xs={{ span: 22 }} style={{ margin: '0 14px' }} >
                        <Form.Item label="License Number" name="license_number" rules={[{ required: true }]} labelAlign="left">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col md={{ span: 11 }} xs={{ span: 22 }} style={{ margin: '0 14px' }}>

                        <Form.Item label="Issue Date" name="issue_date" rules={[{ required: true }]} labelAlign="left">
                            <DatePicker />
                        </Form.Item>
                    </Col>
                </Row>

                <Row>
                    <Col md={{ span: 11 }} xs={{ span: 22 }} style={{ margin: '0 14px' }} >
                        <Form.Item label="Last Date" name="last_date" rules={[{ required: true }]} labelAlign="left">
                            <DatePicker />
                        </Form.Item>
                    </Col>
                    <Col md={{ span: 11 }} xs={{ span: 22 }} style={{ margin: '0 14px' }}>

                        <Form.Item label="Amount Payable" name="amount_payable" rules={[{ required: true }]} labelAlign="left">
                            <InputNumber min={0} step={0.01} />
                        </Form.Item>
                    </Col>
                </Row>


                <Row>
                    <Col md={{ span: 11 }} xs={{ span: 22 }} style={{ margin: '0 14px' }} >
                        <Form.Item label="Payment Terms" name="payment_terms" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col md={{ span: 11 }} xs={{ span: 22 }} style={{ margin: '0 14px' }}>

                        <Form.Item label="Renewal" name="renewal" rules={[{ required: true }]}>
                            <Select>
                                <Option value="Yes">Yes</Option>
                                <Option value="No">No</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>


                <Row>
                    <Col md={{ span: 11 }} xs={{ span: 22 }} style={{ margin: '0 14px' }} >
                        <Form.Item label="Govt Office Address" name="govt_office_address" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col md={{ span: 11 }} xs={{ span: 22 }} style={{ margin: '0 14px' }}>

                        <Form.Item label="Remarks" name="remarks">
                            <Input.TextArea rows={4} />
                        </Form.Item>
                    </Col>
                </Row>


                <Row>
                    <Col md={{ span: 11 }} xs={{ span: 22 }} style={{ margin: '0 14px' }} >
                        <Form.Item label="Note" name="note">
                            <Input.TextArea rows={4} />
                        </Form.Item>
                    </Col>
                    <Col md={{ span: 11 }} xs={{ span: 22 }} style={{ margin: '0 14px' }}>

                        <Form.Item label="Status" name="status" rules={[{ required: true }]}>
                            <Select>
                                <Option value="Active">Active</Option>
                                <Option value="Expired">Expired</Option>
                                <Option value="Pending">Pending</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>


                <Row>

                    <Col md={{ span: 11 }} xs={{ span: 22 }} style={{ margin: '0 14px' }}>

                        <Form.Item label="Paid" name="paid" rules={[{ required: true }]}>
                            <Select>
                                <Option value="Yes">Yes</Option>
                                <Option value="No">No</Option>
                            </Select>
                        </Form.Item>
                    </Col>

                    <Col md={{ span: 11 }} xs={{ span: 22 }} style={{ margin: '0 14px' }} >
                        <Form.Item label="Added By" name="created_by" rules={[{ required: true }]} labelAlign="left">
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


export default AddLicenseForm;