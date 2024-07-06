export default function Book({book}){
    const {name, price} = book;
    return(
        <div className="shadow">
            <h2>Book Name: {name}</h2>
            <h2>Price: {price}</h2>

        </div>
    )
        
    
}