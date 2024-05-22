import React, { useState, useEffect } from 'react';
import { Form, Input, Row, Col, DatePicker, InputNumber, Select, Button, message } from 'antd';
// import { Form, Input, Button, Row, Col } from 'antd';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

import moment from 'moment/moment';

const { Option } = Select;

function AddInsuranceForm() {


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
                    const res = await axios.get(`https://vimpex-admin-git-main-development197.vercel.app/api/insurance/get/${id}`);
                    const data = res.data;
                    console.log(data);
                    form.setFieldsValue({
                        company_name : data.company_name,
                        address: data.address,
                        insurance_no: data.insurance_no,
                        issued_date: moment(data.issued_date),
                        last_date: moment(data.last_date),
                        remarks: data.remarks,
                        insurance_company: data.insurance_company,
                        pic_name_phone_num: data.pic_name_phone_num,
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
                await axios.put(`https://vimpex-admin-git-main-development197.vercel.app/api/insurance/update/${id}`, values);
                navigate(-1)
            } else {
                await axios.post('https://vimpex-admin-git-main-development197.vercel.app/api/insurance/add', values);
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
                <h1>{id ? <>Edit Insurance</> : <>Add Insurance</>}</h1>
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

{/* const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'company_name', headerName: 'Company Name', width: 200 },
    { field: 'address', headerName: 'Address', width: 200 },
    { field: 'insurance_no', headerName: 'Insurance No.', width: 200 },
    { field: 'issued_date', headerName: 'Issued Date', width: 150 },
    { field: 'last_date', headerName: 'Last Date', width: 150 },
    { field: 'remarks', headerName: 'Remarks', width: 200 },
    { field: 'insurance_company', headerName: 'Insurance Company', width: 200 },
    { field: 'pic_name_phone_num', headerName: 'PIC Name/Phone No.', width: 200 },
    { field: 'created_by', headerName: 'Created By', width: 150 },
    { field: 'created_at', headerName: 'Created At', width: 150 },
    { field: 'updated_at', headerName: 'Updated At', width: 150 },
  ]; */}
                <Row>
                    <Col md={{ span: 11 }} xs={{ span: 22 }} style={{ margin: '0 14px' }} >
                        <Form.Item label="Company Name" name="company_name" rules={[{ required: true }]} labelAlign="left">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col md={{ span: 11 }} xs={{ span: 22 }} style={{ margin: '0 14px' }}>

                        <Form.Item label="Address" name="address" rules={[{ required: true }]} labelAlign="left">
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>

                <Row>
                    <Col md={{ span: 11 }} xs={{ span: 22 }} style={{ margin: '0 14px' }} >
                        <Form.Item label="Insurance No" name="insurance_no" rules={[{ required: true }]} labelAlign="left">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col md={{ span: 11 }} xs={{ span: 22 }} style={{ margin: '0 14px' }}>

                        <Form.Item label="Issue Date" name="issued_date" rules={[{ required: true }]} labelAlign="left">
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

                        <Form.Item label="Remarks" name="remarks">
                            <Input.TextArea rows={4} />
                        </Form.Item>
                    </Col>
                   
                </Row>


                <Row>
                    <Col md={{ span: 11 }} xs={{ span: 22 }} style={{ margin: '0 14px' }} >
                        <Form.Item label="insurance_company" name="insurance_company" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col md={{ span: 11 }} xs={{ span: 22 }} style={{ margin: '0 14px' }}>

                        <Form.Item label="PIC Name & Phone Num" name="pic_name_phone_num" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>


                <Row>
                    {/* <Col md={{ span: 11 }} xs={{ span: 22 }} style={{ margin: '0 14px' }}>

                        <Form.Item label="Remarks" name="remarks">
                            <Input.TextArea rows={4} />
                        </Form.Item>
                    </Col> */}

                    <Col md={{ span: 11 }} xs={{ span: 22 }} style={{ margin: '0 14px' }} >
                        <Form.Item label="Created By" name="created_by">
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


export default AddInsuranceForm;