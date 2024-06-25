export default function Price({oldPrice, newPrice}) { 
    let styles = {
textDecorationLine:"line-through",
    }; 



    let design = {

        backgroundColor: "orange", 
        height:"30px",   
        borderBottonLeftRadius: "14px",

    };


    return (
        <div style= {design}>
             <span style={styles}> {oldPrice}</span>

           &nbsp;   &nbsp;   &nbsp;
            <span>  {newPrice}</span>
        </div>
    );
}