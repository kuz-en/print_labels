import { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

function Label({ id, title, plusQty, minusQty, handleInput, qty }) {
    return (
        <tr>
            <td style={{ width: '800px' }}>{title}</td>
            <td style={{ width: '20px' }}>
                <button onClick={() => minusQty(id)} className='button-count'>
                    <FaMinus
                        style={{
                            color: '#33c3f0',
                            fontSize: '14px',
                            textAlign: 'center',
                            verticalAlign: 'middle',
                        }}
                    />
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
                    onChange={(e) => handleInput(e.target.value, id)}
                    value={qty}
                    style={{
                        width: '30px',
                        height: '26px',
                        textAlign: 'center',
                        fontSize: '2.2rem',
                    }}
                />
            </td>
            <td style={{ width: '20px', textAlign: 'center' }}>
                <button
                    className='button-count'
                    onClick={() => plusQty(id)}
                    style={{ verticalAlign: 'middle' }}
                >
                    <FaPlus
                        style={{
                            color: '#33c3f0',
                            fontSize: '14px',
                            textAlign: 'center',
                            verticalAlign: 'middle',
                        }}
                    />
                </button>
            </td>
        </tr>
    );
}

export default Label;
