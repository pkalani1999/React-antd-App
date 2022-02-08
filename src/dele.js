import React from 'react';
import { Form, Input, InputNumber, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, } from 'antd';
const { Option } = Select;




const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const RegistrationForm = () => {
    // const [form] = Form.useForm();
    // const onFinish = (values) => {
    //     console.log('Received values of form: ', values);
    // };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="91">+91</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );




    return (
        <Form
            // {...formItemLayout}
            // form={form}
            // name="register"
            // onFinish={onFinish}
            initialValues={{
                prefix: '+91',
            }}
            // scrollToFirstError
        >
            <Form.Item
                name="phone"
                label="Phone Number"
                rules={[
                    {
                        required: true,
                        message: 'Please input your phone number!',
                    },
                ]}
            >
                <Input
                    addonBefore={prefixSelector}
                    style={{
                        width: '50%',
                    }}
                />
            </Form.Item>
                    
            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                    Register
                </Button>
            </Form.Item>
        </Form>
    );
};

export default RegistrationForm;
