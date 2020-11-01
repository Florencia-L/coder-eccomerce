import React, {useState} from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';


function SizeSelector(){
    const [radioValue, setRadioValue] = useState('1');
  
    const radios = [
      { name: 'Talle S', value: '1' },
      { name: 'Talle M', value: '2' },
      { name: 'Talle L', value: '3' },
    ];
    
    return  <>
        <div className="d-flex justify-content-between mt-4">
            <p small>Seleccione su talle:</p>
            <Button variant="outline-info" href="#">Ver tabla de talles</Button>
        </div>
        <div>
        <ButtonGroup toggle className="mb-4">
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            type="radio"
            variant="secondary"
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
        </div>
    </>
}

export default SizeSelector;