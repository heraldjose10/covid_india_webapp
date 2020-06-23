var dark_button=document.getElementById('darkmode');
dark_button.addEventListener('click',toggle_mode,false);

function toggle_mode(event){
    document.getElementById('bg').style.backgroundColor='white'
    document.getElementById('head1').style.backgroundColor='black'
    document.getElementById('statename').style.color='white'
    document.getElementById('icon1').style.color='white'
    document.getElementById('icon').style.color='white'
    document.getElementById('tot').style.color='black'
    document.getElementById('act').style.color='black'
    document.getElementById('dea').style.color='black'
    document.getElementById('rec').style.color='black'
    document.getElementById('data1').style.color='black'
    document.getElementById('virus').style.color='black'
    document.getElementById('hospital').style.color='black'
    document.getElementById('dizy').style.color='black'
    document.getElementById('check').style.color='black'
    document.getElementById('darkmode2').style.visibility='visible'
    document.getElementById('darkmode').style.visibility='hidden'

};

var dark_button1=document.getElementById('darkmode2');
dark_button1.addEventListener('click',toggle_mode1,false);

function toggle_mode1(event){
    document.getElementById('bg').style.backgroundColor='black'
    document.getElementById('head1').style.backgroundColor='white'
    document.getElementById('statename').style.color='black'
    document.getElementById('icon1').style.color='black'
    document.getElementById('icon').style.color='black'
    document.getElementById('tot').style.color='white'
    document.getElementById('act').style.color='white'
    document.getElementById('dea').style.color='white'
    document.getElementById('rec').style.color='white'
    document.getElementById('data1').style.color='white'
    document.getElementById('virus').style.color='white'
    document.getElementById('hospital').style.color='white'
    document.getElementById('dizy').style.color='white'
    document.getElementById('check').style.color='white'
    document.getElementById('darkmode2').style.visibility='hidden'
    document.getElementById('darkmode').style.visibility='visible'

};