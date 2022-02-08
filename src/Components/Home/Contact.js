import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Tooltip, Select } from 'antd';
import NumericInputDemo from './NumericInputDemo';
const { TextArea } = Input;
const { Option } = Select;



const AppContact = () => {
    const [numberIn, setNumberInn] = useState({ value: '' });
    const NumberChange = value => {
        setNumberInn({ value });
    };


    const formatNumber = (value) => {
        value += '';
        const list = value.split('.');
        const prefix = list[0].charAt(0) === '-' ? '-' : '';
        let num = prefix ? list[0].slice(1) : list[0];
        let result = '';
        while (num.length > 3) {
            result = `,${num.slice(-3)}${result}`;
            num = num.slice(0, num.length - 3);
        }
        if (num) {
            result = num + result;
        }
        return `${prefix}${result}${list[1] ? `.${list[1]}` : ''}`;
    }

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


    // NUmber vali
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



    const onChange = (e) => {
        const { value } = e.target;
        const reg = /^-?\d*(\.\d*)?$/;
        if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
            NumberChange(value)
        }

    };



    // const onBlur = () => {

    //     const { value, onBlur, onChange } = props;
    //     let valueTemp = value
    //     if (value.charAt(value.length - 1) === '.' || value === '-') {
    //         valueTemp = value.slice(0, -1);
    //     }
    //     props.NumberChange(valueTemp.replace(/0*(\d+)/, '$1'));
    // if (onBlur) {
    //     onBlur();
    // }
    // };

    const { value } = numberIn;
    const title = value ? (
        <span className="numeric-input-title">{value !== '-' ? formatNumber(value) : '-'}</span>
    ) : (
        'Input a number'
    );

    return (
        <div id="contact" className="block contactBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Get in Touch</h2>
                    <p>Dolore nam rerum obcaecati fugit odio nobis Molestiae rerum</p>
                </div>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                        prefix: "+91"
                    }}
                >
                    <Form.Item
                        name="fullname"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter your full name!'
                            }]
                        }
                    >
                        <Input placeholder="Full Name" />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ]}
                    >
                        <Input placeholder="Email Address" />
                    </Form.Item >
                    <Form.Item
                        name="phone"
                        // label="Phone Number"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your phone number!',
                            },
                        ]}>

                        {/* <Tooltip
                            trigger={['focus']}
                            title={title}
                            placement="topLeft"
                            overlayClassName="numeric-input"
                        > */}

                        <Input
                            addonBefore={prefixSelector}
                            style={{
                                width: '50%',
                            }}
                            value={numberIn.value}
                            onChange={(e) => onChange(e)}
                            // onBlur={onBlur}
                            placeholder="Input a number"
                            maxLength={25}
                        />
                        {/* </Tooltip> */}
                    </Form.Item>
                    <Form.Item name="subject">
                        <Input placeholder="Subject" />
                    </Form.Item>
                    <Form.Item
                        name="message"
                    >
                        <TextArea placeholder="Message" />
                    </Form.Item>
                    <Form.Item
                        name="agreement"
                        valuePropName="checked"
                        rules={[
                            {
                                validator: (_, value) =>
                                    value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                            },
                        ]}
                        {...tailFormItemLayout}
                    >

                        <Checkbox>I agree with terms and conditions.</Checkbox>
                    </Form.Item>
                    <Form.Item  {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
};

export default AppContact;
