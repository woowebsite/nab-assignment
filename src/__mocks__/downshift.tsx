import React, { useState } from 'react';

const Downshift: React.FC<any> = ({ value, onChange, children, itemToString }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputV] = useState('');
  const handleChange = (e: any) => {
    onChange && onChange(e);
    itemToString?.();

    itemToString?.({
      name: 'A'
    });
    setInputV(e.target.value);
    setIsOpen(true);
  };

  const getInputProps = () => {};
  const getItemProps = () => {};
  const getMenuProps = () => {};

  return (
    <>
      <input data-testid='downshift-onChange' value={value || ''} onChange={handleChange} key={1} />
      {children({ getInputProps, getItemProps, getMenuProps, isOpen, inputValue, highlightedIndex: 1, selectedItem: { name: 'HCM' } })}
    </>
  );
};

export default Downshift;
