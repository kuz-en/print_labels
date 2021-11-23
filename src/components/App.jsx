import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Label from './Label';
import Print from './Print';
import labels from '../data/labels';

function App() {
    const [printLabels, setPrintLabels] = useState(labels);
    const [listForPrint, setListForPrint] = useState([]);

    function createLabelsForPrint() {
        let prepareForPrint = [];
        const labelsForPrint = printLabels.filter((item) => item.qty > 0);
        labelsForPrint.forEach((item) => {
            for (let i = 0; i < item.qty; i++) {
                prepareForPrint = [...prepareForPrint, Object.assign({}, item)];
            }
        });
        prepareForPrint.map((item) => (item.id = uuidv4()));
        setListForPrint(prepareForPrint);
    }

    function handleInput(value, itemId) {
        const order = printLabels.find((item) => item.id === itemId);
        order.qty = +value;
        setPrintLabels([...printLabels]);
        createLabelsForPrint();
    }

    function plusQty(itemId) {
        const order = printLabels.find((item) => item.id === itemId);
        order.qty = order.qty + 1;
        setPrintLabels([...printLabels]);
        createLabelsForPrint();
    }

    function minusQty(itemId) {
        const order = printLabels.find((item) => item.id === itemId);
        order.qty = order.qty - 1;
        setPrintLabels([...printLabels]);
        createLabelsForPrint();
    }

    function clearInputsAfterPrint() {
        printLabels.find((item) => (item.qty = 0));
        setListForPrint([]);
    }

    return (
        <div className='container' style={{ marginTop: '40px' }}>
            <div className='row'>
                <table className='u-full-width'>
                    <thead>
                        <tr>
                            <th>Название</th>
                            <th></th>
                            <th>Количество</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {labels.map((item) => {
                            return (
                                <Label
                                    id={item.id}
                                    key={item.id}
                                    title={item.title}
                                    plusQty={plusQty}
                                    minusQty={minusQty}
                                    handleInput={handleInput}
                                    qty={item.qty}
                                />
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <Print
                listForPrint={listForPrint}
                clearInputsAfterPrint={clearInputsAfterPrint}
            />
        </div>
    );
}

export default App;
