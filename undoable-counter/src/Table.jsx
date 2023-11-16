const Table = ({ history }) => {
    return (
        <div className="row"> 
        <table >
            <thead>
                <tr>
                    <th>Opertion</th>
                    <th>Old</th>
                    <th>New</th>
                </tr>
            </thead>
            
            <tbody>
                {history.map((item, index) => (
                    <tr key={index}>
                        <td>{item.opr}</td>
                        <td>{item.oldCounter}</td>
                        <td>{item.newCounter}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    )
}

export default Table;