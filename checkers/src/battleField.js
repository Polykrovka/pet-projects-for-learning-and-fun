import React from 'react';
import './battleField.scss';
function BattleField() {
    function fieldGenerator () {
        const allFields = [];
        let y = 1;
        let x = 1;
        for(let i = 1; i < 65; i++) {
            if(((y === 1 || y === 3) && x % 2 === 1) || (y === 2 && x % 2 === 0)) {
              allFields.push(<div onClick={addClass} className="oneField whiteChecker" data-y={y} data-x={x} key={i}></div>)
            } else {
              allFields.push(<div onClick={addClass} className="oneField" data-y={y} data-x={x} key={i}></div>)
            }
            x++
            if(x === 9) {
                x = 1;
                y++
            }
        }
        return allFields;
    }
    const fieldsArray = fieldGenerator();
    
    // fieldsArray[0].props 
    // const [state, setState] = useState(fieldsArray[0].props)

    // setState({
    //   ...state,
    // })
    
    // console.log(fieldsArray[0].props)
    // console.log(state[0])
    function addClass (event) {
      // event.target.className=('sss')
      if(event.target.className.includes('whiteChecker')) {
        event.target.className=(event.target.className + ' activeElement')
      }
      console.log(event.target)
    }
  return (
    <div className="battleField">
      {fieldsArray}
    </div>
  );
}

export default BattleField;
