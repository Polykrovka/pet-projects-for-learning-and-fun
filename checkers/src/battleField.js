import React from 'react';
import './battleField.scss';
function BattleField() {
    function fieldGenerator () {
        const allFields = [];
        let y = 1;
        let x = 1;
        for(let i = 1; i < 65; i++) {
            allFields.push(<div className="oneField" data-y={y} data-x={x} key={i}></div>)
            x++
            if(x === 9) {
                x = 1;
                y++
            }
        }
        return allFields;
    }
    
    console.log(fieldGenerator())
  return (
    <div className="battleField">
      {fieldGenerator()}
    </div>
  );
}

export default BattleField;
