const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0b67e906f2msh2d2e43cdb38469fp19465djsn660da1f79dea',
		'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
	}
};
let inp1 = document.querySelector("#fname");
let inp2 = document.querySelector("#sname");
let btn = document.querySelector("#btn");
let score_cont = document.querySelector(".score_container");
let score = document.querySelector(".score");
let close = document.querySelector("#btn-close");
let term = document.querySelector("#term");
let url;
term.addEventListener("click",()=>{
    alert("Your data is safe with us but it will be saved for improvment in result.");
});
let res,data,sname,fname;
btn.addEventListener("click",()=>{
    sname = inp1.value;
    fname = inp2.value;
    console.log(fname);
    console.log(sname);
    url = `https://love-calculator.p.rapidapi.com/getPercentage?sname=${sname}&fname=${fname}`;
    if(sname==""||fname=="") {
        alert("Fill the input field");
        return;
    }
    else a();
})
function showRes(){
    score.innerHTML=`Love percentage = ${res}<br> ${data}`;
    score_cont.style.zIndex = "10";
    score_cont.style.opacity = "1";
    close.addEventListener("click",()=>{
        score_cont.style.zIndex = "-1";
        score_cont.style.opacity = "0";
        score.textContent="";
    })
}
function sendMail(a,b) {
    let top = "Love calci";
    let bdy =a + " " + b +" => "+ res + " " + data;
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "visiters2004@gmail.com", 
        Password: "88879B73FD61A3B63466670E6283B72D454C",
        To: 'ritikupadhyay838@gmail.com',
        From: 'ritikupadhyay838@gmail.com',
        Subject: top,
        Body: bdy
    }).then(
        console.log("done")
    );
}
async function a(){
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        res = result.percentage;
        data = result.result;
        sendMail(fname,sname);
        alert("wait a while");
        showRes();
    } catch (error) {
        console.error(error);
    }
}

