import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Label from './Label';
import Print from './Print';
import labels from '../data/labels';

function App() {
    const [printLabels, setPrintLabels] = useState(labels);
    const [basket, setBasket] = useState(labels);
    const [listForPrint, setListForPrint] = useState([]);

    function createLabelsForPrint() {
        let prepareForPrint = [];
        const labelsForPrint = basket.filter((item) => item.qty > 0);
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
        setBasket([...printLabels]);
        createLabelsForPrint();
    }

    function plusQty(itemId) {
        const order = basket.find((item) => item.id === itemId);
        order.qty = order.qty + 1;
        // setBasket([...printLabels]);
        createLabelsForPrint();
    }

    function minusQty(itemId) {
        const order = printLabels.find((item) => item.id === itemId);
        order.qty = order.qty - 1;
        setBasket([...printLabels]);
        createLabelsForPrint();
    }

    function clearInputsAfterPrint() {
        printLabels.find((item) => (item.qty = 0));
        basket.find((item) => (item.qty = 0));
        setListForPrint([]);
    }

    function filterLabels(value) {
        const result = labels.filter((item) => item.category === value);
        result.length > 0 ? setPrintLabels(result) : setPrintLabels(labels);
    }

    return (
        <div className='container' style={{ marginTop: '40px' }}>
            <div className='row'>
                <form>
                    <div className='form-check'>
                        <label>
                            <input
                                type='radio'
                                name='react-tips'
                                value=''
                                onChange={(e) => {
                                    filterLabels(e.target.value);
                                }}
                                //checked={}
                                className='form-check-input'
                            />
                            Все
                        </label>
                    </div>
                    <div className='form-check'>
                        <label>
                            <input
                                type='radio'
                                name='react-tips'
                                value='diapers'
                                onChange={(e) => {
                                    filterLabels(e.target.value);
                                }}
                                //checked={}
                                className='form-check-input'
                            />
                            Option 1
                        </label>
                    </div>

                    <div className='form-check'>
                        <label>
                            <input
                                type='radio'
                                name='react-tips'
                                value='pants'
                                onChange={(e) => {
                                    filterLabels(e.target.value);
                                }}
                                //checked={type === 'diapers'}
                                className='form-check-input'
                            />
                            Option 2
                        </label>
                    </div>

                    <div className='form-group'>
                        <button className='btn btn-primary mt-2' type='submit'>
                            Save
                        </button>
                    </div>
                </form>
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
                        {printLabels.map((item) => {
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
