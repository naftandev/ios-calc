import { useRef, useState } from 'react';

import { Operators } from '../interfaces/screens/CalculatorScreen';

const useCalculator = () => {
  const lastOperation = useRef<Operators>();
  const [previousValue, setPreviousValue] = useState('0');
  const [currentValue, setCurrentValue] = useState('0');

  const handleClean = () => {
    setPreviousValue('0');
    setCurrentValue('0');
  }

  const toggleNegative = () => {
    if (currentValue.includes('-')) {
      setCurrentValue(currentValue.replace('-', ''));
    } else {
      setCurrentValue(`-${currentValue}`);
    };
  };

  const handleDelete = () => {
    let isNegative = false;
    let tempValue = currentValue;

    if (tempValue.startsWith('-')) {
      isNegative = true;
      tempValue = tempValue.substring(1);
    };

    if (tempValue.length > 1) {
      setCurrentValue(`${isNegative ? '-' : ''}${tempValue.slice(0, -1)}`);
    } else {
      setCurrentValue('0');
    };
  };

  const handleNumber = (enteredValue: string) => {
    // Verifica si existe un punto decimal
    if (enteredValue === '.' && currentValue.includes('.')) return;

    if (currentValue.startsWith('0') || currentValue.startsWith('-0')) {
      // Punto decimal
      if (enteredValue === '.') {
        setCurrentValue(currentValue + enteredValue);

        // Evaluar si se está construyendo un número decimal
      } else if (enteredValue === '0' && currentValue.includes('.')) {
        setCurrentValue(currentValue + enteredValue);

        // Sustituir el solamente hay un 0
      } else if (enteredValue !== '0' && !currentValue.includes('.')) {
        setCurrentValue(enteredValue)

        // Evitar 0000.0
      } else if (enteredValue === '0' && !currentValue.includes('.')) {
        setCurrentValue(currentValue)
      } else {
        setCurrentValue(currentValue + enteredValue);
      };
    } else {
      setCurrentValue(currentValue + enteredValue);
    };
  };

  const moveCurrentValue = () => {
    if (currentValue.endsWith('.')) {
      setPreviousValue(currentValue.slice(0, -1));
    } else {
      setPreviousValue(currentValue);
    }
    setCurrentValue('0');
  }

  const handleDivision = () => {
    moveCurrentValue();
    lastOperation.current = Operators.division;
  }

  const handlemultiplication = () => {
    moveCurrentValue();
    lastOperation.current = Operators.multiplication;
  }

  const handleSubtraction = () => {
    moveCurrentValue();
    lastOperation.current = Operators.subtraction;
  }

  const handleAddition = () => {
    moveCurrentValue();
    lastOperation.current = Operators.addition;
  }

  const calculate = () => {
    const value1 = Number(previousValue);
    const value2 = Number(currentValue);

    if (!value1) return;

    switch (lastOperation.current) {
      case Operators.division:
        setCurrentValue(`${value1 / value2}`);
        break;
      case Operators.multiplication:
        setCurrentValue(`${value1 * value2}`);
        break;
      case Operators.subtraction:
        setCurrentValue(`${value1 - value2}`);
        break;
      default:
        setCurrentValue(`${value1 + value2}`);
        break;
    }

    setPreviousValue('0');
  }

  return {
    previousValue,
    currentValue,
    handleClean,
    toggleNegative,
    handleDelete,
    handleNumber,
    handleDivision,
    handlemultiplication,
    handleSubtraction,
    handleAddition,
    calculate
  };
};

export default useCalculator;
