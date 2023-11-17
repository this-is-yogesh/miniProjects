const List = ({ list, setList, bulk,sw}) => {

function findcheckedlist(list){
    let cnt =0;
for(let k in list){
    if(list[k])
    cnt++;
}
return cnt;
}
    return (
        <div >
            <input type='checkbox' id={"bulk"} onClick={() => bulk(list, setList,sw)} checked={sw}/>
            <label htmlFor="bulk"> {findcheckedlist(list)} / {Object.keys(list).length}</label>
            {Object.keys(list).map((i) => (
                <div key={i}>
                    <input id="item"
                        type="checkbox"
                        checked={list[i]}
                        onChange={() => setList({ ...list, [i]: !list[i] })}
                    />
                    <label htmlFor="item">{i}</label>
                </div>
            ))}

        </div>
    )
}

export default List;