let total = 0;
function handelClickBtn(target){
    const setProductContainer = document.getElementById('product-entry');
   const itemName = target.childNodes[5].childNodes[1].innerText;
   const li = document.createElement('li');
   li.innerText = itemName;
   setProductContainer.appendChild(li);
   const itemPrice = target.childNodes[5].childNodes[3].innerText.split(' ')[0];
   total = parseFloat(total) + parseFloat(itemPrice);
   totalFloatPrice = total.toFixed(2);
   console.log(totalFloatPrice)
   const firstTotal = document.getElementById('total').innerText = totalFloatPrice;
   
   const setDiscountContainer = document.getElementById('price-part').innerText;
   const discount = .8*totalFloatPrice;
   const finalDis = totalFloatPrice - discount;
   finalDisFloat = finalDis.toFixed(2);
   console.log(finalDisFloat)
   const finalDiscount = document.getElementById('discount').innerText = 
   finalDisFloat;
    const totalPrice = totalFloatPrice-finalDisFloat;
    totalPriceFloat = totalPrice.toFixed(2);
    const finalTotalPrice = document.getElementById('totalPrice').innerText = 
    totalPriceFloat;
    
   

}

document.getElementById('go-home').addEventListener('click',function(){
    location.reload();
})

