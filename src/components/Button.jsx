import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import LabelForPrint from './LabelForPrint';
function Button({ listForPrint, clearInputsAfterPrint }) {
    const componentRef = useRef();

    return (
        <>
            <div style={{ display: 'none' }}>
                <div ref={componentRef} style={{}}>
                    {listForPrint.map((item) => {
                        return (
                            <LabelForPrint key={item.id} title={item.title} />
                        );
                    })}
                </div>
            </div>
            <LabelForPrint />
            <ReactToPrint
                onAfterPrint={() => clearInputsAfterPrint()}
                trigger={() => (
                    <button className='button-primary'>Распечатать</button>
                )}
                content={() => componentRef.current}
            />
        </>
    );
}

export default Button;
