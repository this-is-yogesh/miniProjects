const Container = (Component) =>{

    return ()=>(
        <div>
        <h1> Inside HOC</h1>
        <Component />
    </div>
    )
      
    }

export default Container;