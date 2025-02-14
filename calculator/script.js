// Button number
let $1 = document.getElementById('1')
let $2 = document.getElementById('2')
let $3 = document.getElementById('3')
let $4 = document.getElementById('4')
let $5 = document.getElementById('5')
let $6 = document.getElementById('6')
let $7 = document.getElementById('7')
let $8 = document.getElementById('8')
let $9 = document.getElementById('9')
let $0 = document.getElementById('0')
//button symbol
let $multiply = document.getElementById('multiply')
let $add = document.getElementById('add')
let $substract = document.getElementById('substract')
let $divide = document.getElementById('divide')
let $point = document.getElementById('point')

//mainstring
let strr = ""
let strrr
let hist
let show = document.getElementById('qscreen')

function onlickerclick(x) {
    strr = strr.concat(x)
    console.log(strr);
    show.innerHTML=strr
    show.style.fontSize="45px"
    show.style.textAlign="center"
}
function outpusher() {
    strrr = eval(strr)
    console.log(strrr);

    console.log(typeof strrr);
hist = `${strr} = ${strrr}`
// if (JSON.parse(localStorage.getItem("hist"))==null){
//     localStorage.setItem("hist",JSON.stringify(hist))

// }
// else{
//      let get=JSON.parse(localStorage.getItem("hist"))
//      hist = hist +get
//      localStorage.setItem("hist",JSON.stringify(hist))
// }
show.innerHTML=hist
show.style.fontSize="45px"
show.style.textAlign="center"
    strr = ""

}

// let calc=''

// calc=eval(calc)