import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Label from './Label';
import Print from './Print';
import labels from '../data/labels';
import Filter from './Filter';

function App() {
    const [printLabels, setPrintLabels] = useState(labels);
    const [basket] = useState(labels);
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
        const order = basket.find((item) => item.id === itemId);
        order.qty = +value;
        createLabelsForPrint();
    }

    function plusQty(itemId) {
        const order = basket.find((item) => item.id === itemId);
        order.qty = order.qty + 1;
        createLabelsForPrint();
    }

    function minusQty(itemId) {
        const order = basket.find((item) => item.id === itemId);
        order.qty = order.qty - 1;
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

    function unique(arr) {
        let result = [];

        for (let obj of arr) {
            if (!result.includes(obj.category)) {
                result.push(obj.category);
            }
        }

        return result;
    }

    return (
        <div className='container' style={{ marginTop: '40px' }}>
            <h4 className='title__header'>Печать этикеток</h4>
            <div className='row filter'>
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
                    {unique(labels).map((item) => {
                        return (
                            <Filter
                                key={item}
                                title={item}
                                filterLabels={filterLabels}
                            />
                        );
                    })}
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
                                    category={item.category}
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
