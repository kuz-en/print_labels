import { FaMinus, FaPlus } from 'react-icons/fa';
import { CATEGORY_LABELS_LIST } from '../constants';

function Label({ id, title, plusQty, minusQty, handleInput, qty, category }) {
    return (
        <tr>
            <td
                style={{ width: '800px' }}
            >{`${title} (${CATEGORY_LABELS_LIST[category]})`}</td>
            <td style={{ width: '20px' }}>
                <button onClick={() => minusQty(id)} className='button-count'>
                    <FaMinus className='change-qty' />
                </button>
            </td>
            <td
                style={{
                    width: '20px',
                    textAlign: 'center',
                    verticalAlign: 'middle',
                }}
            >
                <input
                    className='input-qty'
                    onChange={(e) => handleInput(e.target.value, id)}
                    value={qty}
                />
            </td>
            <td style={{ width: '20px', textAlign: 'center' }}>
                <button
                    className='button-count'
                    onClick={() => plusQty(id)}
                    style={{ verticalAlign: 'middle' }}
                >
                    <FaPlus className='change-qty' />
                </button>
            </td>
        </tr>
    );
}

export default Label;
