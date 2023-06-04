import React from 'react';
import { Col, InputNumber, Row, Slider } from 'antd';

interface SingleInputProps {
  title: string;
  disabled?: boolean;
  type: 'x' | 'y';
  inputValue: number;
  setInputValue: React.Dispatch<React.SetStateAction<number>>;
}

const SingleInput: React.FC<SingleInputProps> = ({
  title,
  disabled,
  type,
  inputValue,
  setInputValue,
}) => {
  const onChange = (newValue: number | null) => {
    setInputValue(newValue ?? 0);
  };

  return (
    <Row align="middle" style={{ width: '50%' }}>
      <Col span={12}>
        <Slider
          disabled={disabled}
          min={-100}
          max={type === 'x' ? 1300 : 900}
          onChange={onChange}
          value={typeof inputValue === 'number' ? inputValue : 0}
        />
      </Col>
      {title}:
      <Col span={4}>
        <InputNumber
          disabled={disabled}
          min={-100}
          max={type === 'x' ? 1300 : 900}
          style={{ margin: '0 16px' }}
          value={inputValue}
          onChange={onChange}
        />
      </Col>
    </Row>
  );
};
export default SingleInput;
