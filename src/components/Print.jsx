import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import LabelForPrint from './LabelForPrint';
function Print({ listForPrint, clearInputsAfterPrint }) {
    const componentRef = useRef();

    return (
        <>
            <div style={{ display: 'none' }}>
                <div ref={componentRef}>
                    {listForPrint.map((item) => {
                        return <LabelForPrint key={item.id} text={item.text} />;
                    })}
                </div>
            </div>
            <LabelForPrint />
            <ReactToPrint
                onAfterPrint={() => clearInputsAfterPrint()}
                trigger={() => (
                    <button className='button-primary'>
                        Распечатать {listForPrint.length} шт.
                    </button>
                )}
                content={() => componentRef.current}
            />
        </>
    );
}

export default Print;
