 
 import "./Product.css";  
 import Price from "./Price.jsx"; 

function Product({title, idx}) { 

    let oldPrices = ["11,495" , "12,900" , "1,599" , "599"];  
    let newPrices = ["8,999", "9,199" , "899" , "278"]; 
    let description = [
        ["8,000 DPI","5 Programable buttons"],
         ["intutive surface", "designed for ipad" ],
           ["designed for ipad","intutive surface" ],
          ["wireless" ,"intutive surface" ]
        ];
    return (
        <div  className="Product"> 
        <h4>{title}</h4>
       
        <p> {description[idx][0]}</p>  
        <p> {description[idx][1]}</p> 
        <Price  oldPrice={oldPrices[idx]}  newPrice={newPrices[idx]}/>
        </div>
    );
} 

export default Product; 