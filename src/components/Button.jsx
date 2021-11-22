import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import Comp from './LabelForPrint';
function Button({ printLabels, createLabelsForPrint }) {
    const componentRef = useRef();
    const listForPrint = [];

    return (
        <>
            <input
                className='button-primary'
                type='submit'
                value='Dотправить'
            />
            <div style={{ display: 'none' }}>
                <div ref={componentRef} style={{}}>
                    {listForPrint.map((item) => {
                        return console.log(item);
                        //return <p key={item.id}>{item}</p>;
                    })}
                </div>
            </div>
            <Comp />
            <p onClick={() => createLabelsForPrint()}>Это не печатаем</p>
            <div>
                <ReactToPrint
                    // onBeforeGetContent={}
                    trigger={() => <button>Print this out!</button>}
                    content={() => componentRef.current}
                />
            </div>
        </>
    );
}

export default Button;
