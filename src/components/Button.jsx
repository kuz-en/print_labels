import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import Comp from './LabelForPrint';
function Button({ printLabels }) {
    const componentRef = useRef();
    const listForPrint = [];

    function createLabelsForPrint() {
        const labelsForPrint = printLabels.filter((item) => item.qty > 0);

        labelsForPrint.forEach((item) => {
            for (let i = 0; i < item.qty; i++) {
                listForPrint.push(item.title);
            }
        });
        console.log(listForPrint);
    }
    return (
        <>
            <input className='button-primary' type='submit' value='отправить' />
            <div style={{ display: 'none' }}>
                <div ref={componentRef} style={{}}>
                    {listForPrint.map((item) => {
                        return console.log(item);
                        //return <p key={item.id}>{item}</p>;
                    })}
                </div>
            </div>
            <Comp />
            <p>Это не печатаем</p>
            <div>
                <ReactToPrint
                    onBeforeGetContent={() => createLabelsForPrint()}
                    trigger={() => <button>Print this out!</button>}
                    content={() => componentRef.current}
                />
            </div>
        </>
    );
}

export default Button;
