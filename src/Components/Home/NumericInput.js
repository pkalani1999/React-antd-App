import React from 'react';
import { Input, Tooltip, Form, Select } from 'antd';
const { Option } = Select;


const NumericInput = (props) => {

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

    function formatNumber(value) {
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

    const onChange = e => {
        const { value } = e.target;
        const reg = /^-?\d*(\.\d*)?$/;
        if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
            props.NumberChange(value);
        }
    };

    // '.' at the end or only '-' in the input box.

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

    const { value } = props;
    const title = props.value ? (
        <span className="numeric-input-title">{props.value !== '-' ? formatNumber(value) : '-'}</span>
    ) : (
        'Input a number'
    );


    return (
        <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
                {
                    required: true,
                    message: 'Please input your phone number!',
                },
            ]}>
            <Tooltip
                trigger={['focus']}
                title={title}
                placement="topLeft"
                overlayClassName="numeric-input"
            >
                <Input
                    addonBefore={prefixSelector}
                    style={{
                        width: '50%',
                    }}
                    {...props}
                    onChange={(e) => onChange(e)}
                    // onBlur={onBlur}
                    placeholder="Input a number"
                    maxLength={25}
                />
            </Tooltip>
        </Form.Item>
    )
};

export default NumericInput;
