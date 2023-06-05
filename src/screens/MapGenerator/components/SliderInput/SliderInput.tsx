import React from 'react';
import { Col, InputNumber, Row, Slider } from 'antd';

interface SliderInputProps {
  title: string;
  disabled?: boolean;
  inputValue: number;
  minValue?: number;
  maxValue?: number;
  setInputValue: React.Dispatch<React.SetStateAction<number>>;
}

const SliderInput: React.FC<SliderInputProps> = ({
  title,
  disabled,
  inputValue,
  minValue,
  maxValue,
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
          min={minValue}
          max={maxValue}
          onChange={onChange}
          value={typeof inputValue === 'number' ? inputValue : 0}
        />
      </Col>
      {title}:
      <Col span={4}>
        <InputNumber
          disabled={disabled}
          min={minValue}
          max={maxValue}
          style={{ margin: '0 16px' }}
          value={inputValue}
          onChange={onChange}
        />
      </Col>
    </Row>
  );
};

export default SliderInput;
