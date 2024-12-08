let reset_btn = document.getElementById("reset");
let get_btn = document.getElementById("get");
let generate_btn = document.getElementById("generate");


let arr=[];
let amount;

get_btn.addEventListener("click",()=>
    {
        let product = document.getElementById("product").value;
        
        
        switch (product) {
            case "Milk":
                document.getElementById("preprize").value = 30;
            break;
        case "Coffie powder":
            document.getElementById("preprize").value = 10;
            break;    
        case "Cocolate":
            document.getElementById("preprize").value = 20;
            break;
        case "Biscuit":
            document.getElementById("preprize").value = 10;
            break;
        case "Rice":
            document.getElementById("preprize").value = 150;
            break;        
        case "Washing Soap":
            document.getElementById("preprize").value = 180;
            break;
        case "Suger":
            document.getElementById("preprize").value = 120;
            break;
        }
    }
);

reset_btn.addEventListener("click",()=>
    {
        let bill_no = Number(document.getElementById("billno").value);
        bill_no++;
        document.getElementById("billno").value= bill_no;
        document.getElementById("product").value="";
        document.getElementById("quantity").value="";
        document.getElementById("preprize").value ="";
        
}

);

    
generate_btn.addEventListener("click",()=>
    {
        let bill_no = Number(document.getElementById("billno").value);
        let product = document.getElementById("product").value;
        let quantity = Number(document.getElementById("quantity").value);
        let preprize = Number(document.getElementById("preprize").value);
        
        
        let total = preprize*quantity
        let gst =(total*2)/100
        let discount = (total*5)/100
        let grand = (gst+total)-discount
        
        arr.push(grand)
        console.log(arr);
        amount = arr.reduce((init,elemet)=>init+elemet) || [0,0]
        document.getElementById("bill-amount").innerHTML = amount.toPrecision(4);

        
        let row = document.createElement("tr")

        let sno =  document.createElement("td")
        sno.innerText = bill_no
        let items =  document.createElement("td")
        items.innerText = product
        let value =  document.createElement("td")
        value.innerText = quantity
        let prize =  document.createElement("td")
        prize.innerText = preprize
        let tot =  document.createElement("td")
        tot.innerText = total
        let gt =  document.createElement("td")
        gt.innerText = gst.toPrecision(4)
        let dis =  document.createElement("td")
        dis.innerText = discount.toPrecision(4)
        let grandtotal =  document.createElement("td")
        grandtotal.innerText = grand.toPrecision(4)
        let remove_element = document.createElement("button")
        remove_element.classList.add("remove")
        remove_element.innerHTML = "X"
        
        
        row.appendChild(sno)
        row.appendChild(items)
        row.appendChild(value)
        row.appendChild(prize)
        row.appendChild(tot)
        row.appendChild(gt)
        row.appendChild(dis)
        row.appendChild(grandtotal)
        row.appendChild(remove_element)
        
        remove_element.addEventListener("click",()=>{
            row.removeChild(sno)
            row.removeChild(items)
            row.removeChild(value)
            row.removeChild(prize)
            row.removeChild(tot)
            row.removeChild(gt)
            row.removeChild(dis)
            row.removeChild(grandtotal)
            row.removeChild(remove_element)
            
            remove(grand)
            console.log(arr);

        })
        
        document.getElementById("bill_print").appendChild(row)
       
    }

);

function remove(grand)
{
    let index = arr.indexOf(grand);
    if(index>-1)
        {
            arr.splice(index,1)
        }

    let len = arr.length
    console.log(len);
    if(len>=1)
        {
            amount =  arr.reduce((init,elemet)=>init+elemet) 
            document.getElementById("bill-amount").innerHTML = amount;
        }
    else
    {
        amount=0
        document.getElementById("bill-amount").innerHTML = 0;
        document.getElementById("bill_print").innerHTML = ""

    }

}


let prtnbtn = document.getElementById("print")


prtnbtn.addEventListener("click",()=>{
    
    document.querySelector(".container").style.display = "none";
    window.print()
    document.querySelector(".container").style.display = "block";

})
