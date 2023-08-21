let total = 0;
const purchaseBtn = document.getElementById('purchase-btn')
const couponBtn = document.getElementById('coupn-btn')
const discountInput =  document.getElementById('discount-coupon')
const discountPrice = document.getElementById('discount')
const totalPriceDis = document.getElementById('totalPrice')

function handelClickBtn(target){
    const setProductContainer = document.getElementById('product-entry');
   const itemName = target.childNodes[5].childNodes[1].innerText;
   const li = document.createElement('li');
   li.innerText = itemName;
   setProductContainer.appendChild(li);
   const itemPrice = target.childNodes[5].childNodes[3].innerText.split(' ')[0];
   total = parseFloat(total) + parseFloat(itemPrice);
   totalFloatPrice = total.toFixed(2);
   const firstTotal = document.getElementById('total').innerText = totalFloatPrice;
    console.log(firstTotal)
   

   if (firstTotal > 0) {
    purchaseBtn.removeAttribute('disabled');
} else {
    purchaseBtn.setAttribute('disabled', 'true');
}
   

   
   

   if (firstTotal >= 200) {
    couponBtn.removeAttribute('disabled');
} else {
    couponBtn.setAttribute('disabled', 'true');
}

    
}

couponBtn.addEventListener('click', () => {
    const discountCode = discountInput.value.trim();
    if (discountCode === 'SELL200') {
        const discountAmount = total * 0.8;
        total -= discountAmount;
        discountPrice.textContent = total.toFixed(2);
        
        

        const x = total;
        total = discountAmount - total;
        totalPriceDis.textContent = total.toFixed(2)


        // console.log(total)
    }
    
    
});




document.getElementById('go-home').addEventListener('click',function(){
    location.reload();
})



