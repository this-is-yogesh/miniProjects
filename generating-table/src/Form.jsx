const Form = ({ submitForm }) => {
    return (
        <form onSubmit={(e) => submitForm(e)}>
            <div>
                <label htmlFor="rows"> Rows</label>
                <input type='number' name="rows" id="rows" />
            </div>
            <div>
                <label htmlFor="columns"> Columns</label>
                <input type='number' name="columns" id="columns" />
            </div>
            <button type='submit'> Submit</button>
        </form>
    )

}

export default Form