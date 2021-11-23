import { FaMinus, FaPlus } from 'react-icons/fa';

function Label({ id, title, plusQty, minusQty, handleInput, qty }) {
    return (
        <tr>
            <td style={{ width: '800px' }}>{title}</td>
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
