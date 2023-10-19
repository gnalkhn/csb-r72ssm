const e=document.getElementById("weight"),t=document.getElementById("weight_percentage"),a=document.getElementById("width"),l=document.getElementById("height"),n=document.getElementById("rim_diameter"),d=document.getElementById("height_percentage"),u=document.querySelector("form");u.addEventListener("submit",u=>{u.preventDefault();// тут будет логика калькулятора
let m=parseFloat(e.value),o=parseFloat(t.value),r=parseFloat(a.value),g=parseFloat(l.value),c=parseFloat(n.value),i=parseFloat(d.value),p=(m*(o/100)/2/(3.14*(r*g/100*(i/100))*((25.4*c+2*(r*g/100))*r)**.5/100)).toFixed(3),s=document.getElementById("result_output_1");s.innerText="Удельное давление на грунт: "+p+" кг/см2"});//# sourceMappingURL=index.85038a4a.js.map

//# sourceMappingURL=index.85038a4a.js.map
