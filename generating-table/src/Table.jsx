
const Table = ({ rows, cols }) => {
    return (
        <table>
            <tbody>
                {
                    Array.from({ length: rows }).map((_, row) => {         
                  return  (
                        <tr key={row}>
                            {
                                Array.from({ length: cols }).map((_, col) =>{
                                return (
                                    <td key={col}>
                                        {col % 2 === 0 ? rows * col + ( row + 1) : rows* (col + 1) - row}
                                    </td>
                                )})}
                        </tr>
                    ) 
                    })
                    }
            </tbody>
        </table>
    )
}

export default Table;