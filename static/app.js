const tot=document.getElementById('but1');
const act=document.getElementById('but2');
const dea=document.getElementById('but3');
const rec=document.getElementById('but4');

tot.addEventListener('click',funct1,false);
act.addEventListener('click',funct2,false);
dea.addEventListener('click',funct3,false);
rec.addEventListener('click',funct4,false);

function funct1(event){
    ele=document.getElementById('data1')
    ele.style.visibility='visible'
    ele.innerHTML=total;
    ele.classList.add('animate__animated','animate__bounceInUp');
    ele.addEventListener('animationend',func,false);
    function func(event){
        ele.classList.remove('animate__animated','animate__bounceInUp')
    };
};
function funct2(event){
    ele=document.getElementById('data1')
    ele.style.visibility='visible'
    ele.innerHTML=active;
    ele.classList.add('animate__animated','animate__bounceInUp');
    ele.addEventListener('animationend',func,false);
    function func(event){
        ele.classList.remove('animate__animated','animate__bounceInUp')
    };
};
function funct3(event){
    ele=document.getElementById('data1')
    ele.classList.remove('animate__animated','animate__bounceInUp');
    ele.style.visibility='visible'
    ele.innerHTML=deaths;
    ele.classList.add('animate__animated','animate__bounceInUp');
    ele.addEventListener('animationend',func,false);
    function func(event){
        ele.classList.remove('animate__animated','animate__bounceInUp')
    };
};
function funct4(event){
    ele=document.getElementById('data1')
    ele.classList.remove('animate__animated','animate__bounceInUp');
    ele.style.visibility='visible'  
    ele.innerHTML=recovery;
    ele.classList.add('animate__animated','animate__bounceInUp');
    ele.addEventListener('animationend',func,false);
    function func(event){
        ele.classList.remove('animate__animated','animate__bounceInUp')
    };
};
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
if (vw>620){
    // fun()
    fun2()
};
// function fun(event){
// const ic1=document.getElementById('virus')
// const ic2=document.getElementById('hospital')
// const ic3=document.getElementById('dizy')
// const ic4=document.getElementById('check')

// ic1.addEventListener('mouseover',show1,false)
// ic1.addEventListener('mouseout',remove1,false)
// function show1(event){
//     ele=document.getElementById('tot')
//     ele.style.visibility='visible'

// };
// function remove1(event){
//     ele=document.getElementById('tot')
//     ele.style.visibility='hidden'
// };

// ic2.addEventListener('mouseover',show2,false)
// ic2.addEventListener('mouseout',remove2,false)
// function show2(event){
//     ele=document.getElementById('act')
//     ele.style.visibility='visible'

// };
// function remove2(event){
//     ele=document.getElementById('act')
//     ele.style.visibility='hidden'
// };

// ic3.addEventListener('mouseover',show3,false)
// ic3.addEventListener('mouseout',remove3,false)
// function show3(event){
//     ele=document.getElementById('dea')
//     ele.style.visibility='visible'

// };
// function remove3(event){
//     ele=document.getElementById('dea')
//     ele.style.visibility='hidden'
// };

// ic4.addEventListener('mouseover',show4,false)
// ic4.addEventListener('mouseout',remove4,false)
// function show4(event){
//     ele=document.getElementById('rec')
//     ele.style.visibility='visible'

// };
// function remove4(event){
//     ele=document.getElementById('rec')
//     ele.style.visibility='hidden'
// };
// }
function fun2(event){
    const tot=document.getElementById('but1')
    const act=document.getElementById('but2')
    const dea=document.getElementById('but3')
    const rec=document.getElementById('but4')

    tot.addEventListener('click',cli1,false)
    function cli1(event){
        document.getElementById('tot').style.fontWeight='700'
        document.getElementById('act').style.fontWeight='400'
        document.getElementById('dea').style.fontWeight='400'
        document.getElementById('rec').style.fontWeight='400'
    };
    act.addEventListener('click',cli2,false)
    function cli2(event){
        document.getElementById('tot').style.fontWeight='400'
        document.getElementById('act').style.fontWeight='700'
        document.getElementById('dea').style.fontWeight='400'
        document.getElementById('rec').style.fontWeight='400'
    };
    dea.addEventListener('click',cli3,false)
    function cli3(event){
        document.getElementById('tot').style.fontWeight='400'
        document.getElementById('act').style.fontWeight='400'
        document.getElementById('dea').style.fontWeight='700'
        document.getElementById('rec').style.fontWeight='400'
    };
    rec.addEventListener('click',cli4,false)
    function cli4(event){
        document.getElementById('tot').style.fontWeight='400'
        document.getElementById('act').style.fontWeight='400'
        document.getElementById('dea').style.fontWeight='400'
        document.getElementById('rec').style.fontWeight='700'
    };
;}
