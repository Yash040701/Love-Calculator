const Calculatelove=()=>{

    const name1=document.getElementById("Partner1").value.trim();
    const name2=document.getElementById("Partner2").value.trim();

    //function for not entering name
    if(name1=="" || name2==""){
        alert("!!Please enter both names!!")
    }

    else{
        const lp=Math.floor(Math.random()*101);
        const rslt=document.getElementById("result");
        rslt.innerHTML=`${name1} and ${name2}'s Love percentage is ${lp}%`;
    }

}