import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Label from './components/Label';
import Button from './components/Button';
import LabelForPrint from './components/LabelForPrint';

const labels = [
    {
        title: 'Вася',
        text: 'Опыт многократный, в самом деле горький опыт, научил его давно, что всякое сближение, которое вначале так приятно разнообразит жизнь и представляется милым и легким приключением, у порядочных людей, особенно у москвичей, тяжелых на подъем, нерешительных, неизбежно вырастает в целую задачу, сложную чрезвычайно, и положение в конце концов становится тягостным.',
        id: 1,
        qty: 3,
    },
    {
        title: 'Петя',
        text: 'В Ореанде сидели на скамье, недалеко от церкви, смотрели вниз на море и молчали. Ялта была едва видна сквозь утренний туман, на вершинах гор неподвижно стояли белые облака. Листва не шевелилась на деревьях, кричали цикады, и однообразный, глухой шум моря, доносившийся снизу, говорил о покое, о вечном сне, какой ожидает нас. Так шумело внизу, когда еще тут не было ни Ялты, ни Ореанды, теперь шумит и будет шуметь так же равнодушно и глухо, когда нас не будет. ',
        id: 2,
        qty: 2,
    },
    {
        title: 'Миша',
        text: 'В Москве сидели на скамье, недалеко от церкви, смотрели вниз на море и молчали. Ялта была едва видна сквозь утренний туман, на вершинах гор неподвижно стояли белые облака. Листва не шевелилась на деревьях, кричали цикады, и однообразный, глухой шум моря, доносившийся снизу, говорил о покое, о вечном сне, какой ожидает нас. Так шумело внизу, когда еще тут не было ни Ялты, ни Ореанды, теперь шумит и будет шуметь так же равнодушно и глухо, когда нас не будет. ',
        id: 3,
        qty: 2,
    },
];

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

    function minusQty(id) {}

    function handleInput(id, value) {}

    function plusQty(itemId) {
        const order = printLabels.find((item) => item.id === itemId);
        order.qty = order.qty + 1;
        setPrintLabels([...printLabels]);
    }

    return (
        <div className='container' style={{ marginTop: '40px' }}>
            <div className='row'>
                {listForPrint.map((item) => {
                    return (
                        <LabelForPrint
                            createLabelsForPrint={createLabelsForPrint}
                            key={item.id}
                            title={item.title}
                        />
                    );
                })}

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
            <Button
                printLabels={printLabels}
                createLabelsForPrint={createLabelsForPrint}
            />
        </div>
    );
}

export default App;
