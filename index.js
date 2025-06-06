let api_key = '2b54ce03b2eef396fba470d3';

    let resultNUM = document.getElementById('resultNUM');
    resultNUM.style.display="none";

    const loader = document.getElementById("loader");
    loader.style.display="none";


fetch('./currencies_with_flags.json')

.then(Response => Response.json())
.then(data =>{
    data.forEach(item => {
        let from_option = document.getElementById('from-option');
        from_option.innerHTML += `
        <option value="${item.code}">( ${item.code} ) ${item.name} </option>
        `

           let to_option = document.getElementById('to-option');
        to_option.innerHTML += `
        <option value="${item.code}">( ${item.code} ) ${item.name} </option>
        `
    });
    
});

function convert(){
    let from = document.getElementById('from-option').value;
    let to = document.getElementById('to-option').value;
    let amount = document.getElementById('amount').value;

    console.log(from);
    loader.style.display="block"
    
    fetch(`https://v6.exchangerate-api.com/v6/${api_key}/pair/${from}/${to}/${amount}`)
    .then(Response => Response.json())
    .then(data =>{
        resultNUM.style.display="block";
        loader.style.display="none";
        document.getElementById("result").innerText= `${data.conversion_result} ${to}`;
        
    })
}