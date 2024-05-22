import React, { useState, useEffect } from 'react';
import { Form, Input, Row, Col, DatePicker, InputNumber, Select, Button, message } from 'antd';
// import { Form, Input, Button, Row, Col } from 'antd';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

import moment from 'moment/moment';

const { Option } = Select;

function AddPassportForm() {


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
                    const res = await axios.get(`https://vimpex-admin-git-main-development197.vercel.app/api/passport/get/${id}`);
                    const data = res.data;
                    console.log(data);
                    form.setFieldsValue({
                        for_person: data.for_person,
                        name_on_passport: data.name_on_passport,
                        position: data.position,
                        passport_issued:  moment(data.passport_issued),
                        passport_expired: moment(data.passport_expired),
                        passport_current_status: data.passport_current_status,
                        original_passport_in_files: data.original_passport_in_files,
                        visa_issued: moment(data.visa_issued),
                        visa_expired: moment(data.visa_expired),
                        visa_current_status: data.visa_current_status,
                        visa_copy_in_files: data.visa_copy_in_files,
                        frc_issued: moment(data.frc_issued),
                        frc_expired: moment(data.frc_expired),
                        frc_current_status: data.frc_current_status,
                        frc_copy_in_files: data.frc_copy_in_files,
                        formc_issued: moment(data.formc_issued),
                        formc_expired: moment(data.formc_expired),
                        formc_current_status: data.formc_current_status,
                        formc_copy_in_files: data.formc_copy_in_files,
                        holiday: data.holiday,
                        company: data.company,
                        remark: data.remark,
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
                await axios.put(`https://vimpex-admin-git-main-development197.vercel.app/api/passport/update/${id}`, values);
                navigate(-1)
            } else {
                await axios.post('https://vimpex-admin-git-main-development197.vercel.app/api/passport/add', values);
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
                <h1>{id ? <>Edit Passport</> : <>Add Passport</>}</h1>
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
                        <Form.Item label="For" name="for_person" rules={[{ required: true }]} labelAlign="left">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col md={{ span: 11 }} xs={{ span: 22 }} style={{ margin: '0 14px' }}>

                        <Form.Item label="Name On Passport" name="name_on_passport" rules={[{ required: true }]} labelAlign="left">
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>

                <Row>
                    <Col md={{ span: 11 }} xs={{ span: 22 }} style={{ margin: '0 14px' }} >
                        <Form.Item label="Position" name="position" rules={[{ required: true }]} labelAlign="left">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col md={{ span: 11 }} xs={{ span: 22 }} style={{ margin: '0 14px' }}>

                        <Form.Item label="Passport Issue Date" name="passport_issued" rules={[{ required: true }]} labelAlign="left">
                            <DatePicker />
                        </Form.Item>
                    </Col>
                </Row>

                <Row>
                    <Col md={{ span: 11 }} xs={{ span: 22 }} style={{ margin: '0 14px' }} >
                        <Form.Item label="Passport Expired Date" name="passport_expired" rules={[{ required: true }]} labelAlign="left">
                            <DatePicker />
                        </Form.Item>
                    </Col>
                    <Col md={{ span: 11 }} xs={{ span: 22 }} style={{ margin: '0 14px' }}>

                        <Form.Item label="Passport Current Status" name="passport_current_status" rules={[{ required: true }]} labelAlign="left">
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>


                <Row>
                    <Col md={{ span: 11 }} xs={{ span: 22 }} style={{ margin: '0 14px' }} >
                        <Form.Item label="Original Passport in Files" name="original_passport_in_files" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col md={{ span: 11 }} xs={{ span: 22 }} style={{ margin: '0 14px' }}>

                        {/* <Form.Item label="Renewal" name="renewal" rules={[{ required: true }]}>
                            <Select>
                                <Option value="Yes">Yes</Option>
                                <Option value="No">No</Option>
                            </Select>
                        </Form.Item> */}
                    </Col>
                </Row>

                <h2>Visa</h2>

                <Row>
                    <Col md={{ span: 11 }} xs={{ span: 22 }} style={{ margin: '0 14px' }}>

                        <Form.Item label="Visa Issue Date" name="visa_issued" rules={[{ required: true }]} labelAlign="left">
                            <DatePicker />
                        </Form.Item>
                    </Col>
                    <Col md={{ span: 11 }} xs={{ span: 22 }} style={{ margin: '0 14px' }} >
                        <Form.Item label="Visa Expired Date" name="visa_expired" rules={[{ required: true }]} labelAlign="left">
                            <DatePicker />
                        </Form.Item>
                    </Col>


                </Row>

                <Row>

                    <Col md={{ span: 11 }} xs={{ span: 22 }} style={{ margin: '0 14px' }}>

                        <Form.Item label="Visa Current Status" name="visa_current_status" rules={[{ required: true }]} labelAlign="left">
                            <Input />
                        </Form.Item>
                    </Col>

                    <Col md={{ span: 11 }} xs={{ span: 22 }} style={{ margin: '0 14px' }} >
                        <Form.Item label="Visa Copy in Files" name="visa_copy_in_files" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>



                <h2>FRC</h2>

                <Row>
                    <Col md={{ span: 11 }} xs={{ span: 22 }} style={{ margin: '0 14px' }}>

                        <Form.Item label="Frc Issue Date" name="frc_issued" rules={[{ required: true }]} labelAlign="left">
                            <DatePicker />
                        </Form.Item>
                    </Col>
                    <Col md={{ span: 11 }} xs={{ span: 22 }} style={{ margin: '0 14px' }} >
                        <Form.Item label="Frc Expired Date" name="frc_expired" rules={[{ required: true }]} labelAlign="left">
                            <DatePicker />
                        </Form.Item>
                    </Col>


                </Row>

                <Row>

                    <Col md={{ span: 11 }} xs={{ span: 22 }} style={{ margin: '0 14px' }}>

                        <Form.Item label="Frc Current Status" name="frc_current_status" rules={[{ required: true }]} labelAlign="left">
                            <Input />
                        </Form.Item>
                    </Col>

                    <Col md={{ span: 11 }} xs={{ span: 22 }} style={{ margin: '0 14px' }} >
                        <Form.Item label="Frc Copy in Files" name="frc_copy_in_files" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>



                <h2>Form C</h2>

                <Row>
                    <Col md={{ span: 11 }} xs={{ span: 22 }} style={{ margin: '0 14px' }}>

                        <Form.Item label="FormC Issue Date" name="formc_issued" rules={[{ required: true }]} labelAlign="left">
                            <DatePicker />
                        </Form.Item>
                    </Col>
                    <Col md={{ span: 11 }} xs={{ span: 22 }} style={{ margin: '0 14px' }} >
                        <Form.Item label="FormC Expired Date" name="formc_expired" rules={[{ required: true }]} labelAlign="left">
                            <DatePicker />
                        </Form.Item>
                    </Col>


                </Row>

                <Row>

                    <Col md={{ span: 11 }} xs={{ span: 22 }} style={{ margin: '0 14px' }}>

                        <Form.Item label="FromC Current Status" name="formc_current_status" rules={[{ required: true }]} labelAlign="left">
                            <Input />
                        </Form.Item>
                    </Col>

                    <Col md={{ span: 11 }} xs={{ span: 22 }} style={{ margin: '0 14px' }} >
                        <Form.Item label="FormC Copy in Files" name="formc_copy_in_files" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>


                <Row>
                    <Col md={{ span: 11 }} xs={{ span: 22 }} style={{ margin: '0 14px' }} >
                        <Form.Item label="Holiday" name="holiday" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                    </Col>

                    <Col md={{ span: 11 }} xs={{ span: 22 }} style={{ margin: '0 14px' }} >
                        <Form.Item label="Company" name="company" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                    </Col>

                </Row>


                <Row>
                    <Col md={{ span: 11 }} xs={{ span: 22 }} style={{ margin: '0 14px' }}>

                        <Form.Item label="Remarks" name="remarks">
                            <Input.TextArea rows={4} />
                        </Form.Item>
                    </Col>

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


export default AddPassportForm;