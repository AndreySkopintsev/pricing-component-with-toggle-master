const priceSwitch = document.getElementById('priceSwitch')
const priceSpans = document.querySelectorAll('#basicPrice')

priceSwitch.addEventListener('change',()=>{
    priceSpans.forEach(span => {
        let price
        if(!span.classList.contains('monthly')){
            price = Number(span.textContent)
            span.textContent = Math.floor((price/10)*100)/100
            console.log(price/10)
        }else{
            price = Number(span.textContent)
            span.textContent = Math.floor(price*10) + 0.99 
        }
        span.classList.toggle('monthly')
    })
})