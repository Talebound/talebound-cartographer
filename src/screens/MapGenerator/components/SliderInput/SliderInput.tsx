import React, { useEffect, useState } from 'react';
import { Col, InputNumber, Row, Slider } from 'antd';

interface SliderInputProps {
  title: string;
  disabled?: boolean;
  inputValue: number;
  minValue?: number;
  maxValue?: number;
  setInputValue: (newValue: number) => void;
}

const SliderInput: React.FC<SliderInputProps> = ({
  title,
  disabled,
  inputValue,
  minValue,
  maxValue,
  setInputValue,
}) => {
  const [internalValue, setInternalValue] = useState<number>(inputValue);

  useEffect(() => {
    setInternalValue(inputValue);
  }, [inputValue]);

  const onChange = (newValue: number | null) => {
    setInternalValue(newValue ?? 0);
  };

  const onAfterChange = (newValue: number | null) => {
    setInputValue(newValue ?? 0);
  };

  return (
    <Row align="middle" style={{ width: '50%', gap: '1rem' }}>
      <Col span={12}>
        <Slider
          disabled={disabled}
          min={minValue}
          max={maxValue}
          onChange={onChange}
          onAfterChange={onAfterChange}
          value={internalValue}
        />
      </Col>
      {title}:
      <Col span={4}>
        <InputNumber
          disabled={disabled}
          min={minValue}
          max={maxValue}
          style={{ margin: '0 16px' }}
          value={internalValue}
          onChange={onAfterChange}
        />
      </Col>
    </Row>
  );
};

export default SliderInput;
