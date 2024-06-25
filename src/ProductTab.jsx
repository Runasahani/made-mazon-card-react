
import Product from "./Product";



function ProductTab() { 

    let styles ={
        display:   "flex", 
        flexWrap: "wrap", 

        justifyContent: "center", 
        alignItems: "center", 

    }
    return (
       <> 
       <div style={styles}> 
      
       <Product title = "Logitech mx Mastre" idx= {0} />
       <Product   title = "Apple pencil "  idx= {1}/>  
       <Product   title = "Zebronic Zeb-transformer" idx= {2}/>  
       <Product   title = "Petronic"  idx= {3}/> 
       </div>
       
       </>
    );
}  

export default ProductTab;
