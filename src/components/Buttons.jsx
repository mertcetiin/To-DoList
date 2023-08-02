

function Buttons({ onDelete }) {
    return (
        <div>
            <button type='submit'>Add</button>
            <button onClick={onDelete}>Clear</button>
        </div>
    )
}

export default Buttons;