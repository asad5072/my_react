export default function Book({book}){
    const {name, price, id} = book;
    // console.log(name);
    return(
        <div className="shadow">
            <h2>Book id: {id}</h2>
            <h2>Book Name: {name}</h2>
            <h2>Price: {price}</h2>

        </div>
    )
        
    
}