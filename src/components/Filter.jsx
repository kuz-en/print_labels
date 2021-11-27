import { CATEGORY_LABELS_LIST } from '../constants';

function Filter({ title, filterLabels }) {
    return (
        <div className='form-check'>
            <label>
                <input
                    type='radio'
                    name='react-tips'
                    value={title}
                    onChange={(e) => {
                        filterLabels(e.target.value);
                    }}
                    //checked={}
                    className='form-check-input'
                />
                {CATEGORY_LABELS_LIST[title]}
            </label>
        </div>
    );
}

export default Filter;
