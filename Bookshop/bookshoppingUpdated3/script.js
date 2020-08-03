 function home()
 {
   document.getElementById('middle').className='d-block';
}
function showing(url) {
    document.getElementById('show').className = 'd-block border-0';
    document.getElementById('show').src = url;
    document.getElementById('middle').className = 'd-none';
    //document.getElementById('ser').className = 'd-none';
  }
  function showings(url) {
    document.getElementById('show').className = 'd-block border-0';
    document.getElementById('show').src = url;
    document.getElementById('middle').className = 'd-none';
    //document.getElementById('ser').className = 'd-none';
  }
  function seeAll(url) {
    document.getElementById('show').className = 'd-block border-0';
    document.getElementById('show').src = url;
    document.getElementById('middle').className = 'd-none';
    document.getElementById('ser').className = 'd-none';
  }
  function picture(url) {
    document.getElementById('show').className = 'd-block border-0';
    document.getElementById('show').src = url;
    document.getElementById('middle').className = 'd-none';
   // document.getElementById('ser').className = 'd-none';
  }
  function wishlist(url) {
    document.getElementById('show').className = 'd-block border-0';
    document.getElementById('show').src = url;
    document.getElementById('book').className = 'd-none';
  }
  function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("yBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}
function myFunctions() {
    document.getElementById("del").deleteRow(0);
}
function add() {
    var a, b, c;
    a = Number(document.getElementById("first").innerHTML);
    b = Number(document.getElementById("second").innerHTML);
    c = a + b;
    document.getElementById("answer").value = c;
}
   /*Onclick button*/
   function registorage() {
    document.getElementsByClassName('form-group');
    var nam = document.getElementById("nam").value;
    var Remi = document.getElementById("Remi").value;
    var Rpw = document.getElementById("Rpw").value;
    var repw = document.getElementById("repw").value;


    if (nam == "" || nam.length < 3) {
        document.getElementById("msg").innerHTML = "***Please enter a valid name";

    }
    if (Rpw.length < 8) {
        document.getElementById("msg3").innerHTML = "***Minimum 8 Characters";

    }
    else if (Rpw.search(/[0-9]/) == -1) {
        document.getElementById("msg3").innerHTML = "***Atleast one number";
    }
    else if (Rpw.search(/[a-z]/) == -1) {
        document.getElementById("msg3").innerHTML = "***ALphabets missing";

    }
    else if (Rpw.search(/[A-Z]/) == -1) {
        document.getElementById("msg3").innerHTML = "***Atleast one upper case";
    }
    else if (Rpw.search(/[!/@/#/$/%/&/(/)/_/+/-/^/~/`]/) == -1) {
        document.getElementById("msg3").innerHTML = "***Atleast one special character";
    }
    if (Rpw != repw) {
        document.getElementById("msg4").innerHTML = "***Password doesn't match";
    }
    var inp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!Remi.match(inp)) {
        document.getElementById("msg2").innerHTML = "***Invalid";

    }
}
function store(){
    var obj, myobj;
    var name = document.getElementById('nam');
    var mail = document.getElementById('Remi');
    var pass = document.getElementById('Rpw');
    obj = { nam: name.value, Remi: mail.value, Rpw: pass.value };
    myobj = JSON.stringify(obj);
    localStorage.setItem("input", myobj);
    alert('registration successfully');
    window.location ='login.html';
}

// login validation
function validate(){
  var retdata=localStorage.getItem("input");
  var datar=JSON.parse(retdata);
  console.log(datar);
  if (datar.Remi == document.getElementById('lognam').value && datar.Rpw == document.getElementById('logpw').value) {
          alert('Welcome!!');
          window.location.href='file:///C:/Users/admin/Desktop/bookshoppingUpdated3/index.html';
         
  }
  else{
      alert('Password or Username is Incorrect!!');
  }
}

