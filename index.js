let data = [
  {
    "code": "USD",
    "name": "United States Dollar",
    "flag": "🇺🇸"
  },
  {
    "code": "EUR",
    "name": "Euro",
    "flag": "🇪🇺"
  },
  {
    "code": "JPY",
    "name": "Japanese Yen",
    "flag": "🇯🇵"
  },
  {
    "code": "GBP",
    "name": "British Pound",
    "flag": "🇬🇧"
  },
  {
    "code": "AUD",
    "name": "Australian Dollar",
    "flag": "🇦🇺"
  },
  {
    "code": "CAD",
    "name": "Canadian Dollar",
    "flag": "🇨🇦"
  },
  {
    "code": "CHF",
    "name": "Swiss Franc",
    "flag": "🇨🇭"
  },
  {
    "code": "CNY",
    "name": "Chinese Yuan",
    "flag": "🇨🇳"
  },
  {
    "code": "INR",
    "name": "Indian Rupee",
    "flag": "🇮🇳"
  },
  {
    "code": "BRL",
    "name": "Brazilian Real",
    "flag": "🇧🇷"
  },
  {
    "code": "ZAR",
    "name": "South African Rand",
    "flag": "🇿🇦"
  },
  {
    "code": "RWF",
    "name": "Rwandan Franc",
    "flag": "🇷🇼"
  },
  {
    "code": "KES",
    "name": "Kenyan Shilling",
    "flag": "🇰🇪"
  },
  {
    "code": "NGN",
    "name": "Nigerian Naira",
    "flag": "🇳🇬"
  },
  {
    "code": "EGP",
    "name": "Egyptian Pound",
    "flag": "🇪🇬"
  },
  {
    "code": "MXN",
    "name": "Mexican Peso",
    "flag": "🇲🇽"
  },
  {
    "code": "RUB",
    "name": "Russian Ruble",
    "flag": "🇷🇺"
  },
  {
    "code": "KRW",
    "name": "South Korean Won",
    "flag": "🇰🇷"
  },
  {
    "code": "SAR",
    "name": "Saudi Riyal",
    "flag": "🇸🇦"
  },
  {
    "code": "TRY",
    "name": "Turkish Lira",
    "flag": "🇹🇷"
  },
  { "code": "SEK", "name": "Swedish Krona", "flag": "🇸🇪" },
  { "code": "NOK", "name": "Norwegian Krone", "flag": "🇳🇴" },
  { "code": "DKK", "name": "Danish Krone", "flag": "🇩🇰" },
  { "code": "SGD", "name": "Singapore Dollar", "flag": "🇸🇬" },
  { "code": "HKD", "name": "Hong Kong Dollar", "flag": "🇭🇰" },
  { "code": "NZD", "name": "New Zealand Dollar", "flag": "🇳🇿" },
  { "code": "TWD", "name": "New Taiwan Dollar", "flag": "🇹🇼" },
  { "code": "AED", "name": "UAE Dirham", "flag": "🇦🇪" },
  { "code": "ARS", "name": "Argentine Peso", "flag": "🇦🇷" },
  { "code": "PKR", "name": "Pakistani Rupee", "flag": "🇵🇰" },
  { "code": "THB", "name": "Thai Baht", "flag": "🇹🇭" },
  { "code": "IDR", "name": "Indonesian Rupiah", "flag": "🇮🇩" },
  { "code": "MYR", "name": "Malaysian Ringgit", "flag": "🇲🇾" },
  { "code": "UAH", "name": "Ukrainian Hryvnia", "flag": "🇺🇦" },
  { "code": "VND", "name": "Vietnamese Dong", "flag": "🇻🇳" }
];

let api_key = '2b54ce03b2eef396fba470d3';

    let resultNUM = document.getElementById('resultNUM');
    resultNUM.style.display="none";

    const loader = document.getElementById("loader");
    loader.style.display="none";



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