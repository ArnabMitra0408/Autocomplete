const items = [
    "aryan",
    "arjun",
    "arnab",
    "aman",
    "bharat",
    "bhaskar",
    "dheraj",
    "dhevan",
    "farhan",
    "falgun",
    "harsh",
    "hritik",
    "ritik",
    "rohan",
    "gaurav",
    "garvit",
    "arnav",
    "hardik",
    "harshat"
];


const root = new makeNode('\0');
for (const item of items)
    add(item, 0, root);

const text_box = document.getElementById("text-box");
const list = document.getElementById("list");

function handler(e) {
    const str = e.target.value;
    const predictions = search(str, 0, root);

    console.log(predictions);

    list.innerHTML = "";
    for (const prediction of predictions)
        list.innerHTML += `<li class="list-group-item clickable" onclick="handleClick(this)"><b>${str}</b>${prediction.substring(str.length)}</li>`;

}

const phone = new Map([
  ["aryan",9123429131],
  ["arjun",9123429131],
  ["arnab",9123429131],
  ["aman",9123429131],
  ["bharat",9123429131],
  ["bhaskar",9123429131],
  ["dheraj",9123429131],
  ["dhevan",9123429131],
  ["farhan",9123429131],
  ["falgun",9123429131],
  ["harsh",9123429131],
  ["hritik",9123429131],
  ["ritik",9123429131],
  ["rohan",9123429131],
  ["gaurav",9123429131],
  ["garvit",9123429131],
  ["arnav",9123429131],
  ["hardik",9123429131],
  ["harshat",9123429131]

]);

function handleClick(e) {
   const text = e.innerHTML.split("<b>").join("").split("</b>").join("");
    text_box.value = text;
    //console.log('text');
    //window.location.href("")
}

const wrapper = document.querySelector('.wrapper');
const form = wrapper.querySelectorAll('.names');
const submitinput = form[0].querySelector('input[type="submit"]');
function getDataFrom(e){
  e.preventDefault();
  var formData= new FormData(form[0]);
  const name=formData.get('person');

  alert(name+"-"+ phone.get(name));
}
document.addEventListener('DOMContentLoaded',function(){
  submitinput.addEventListener('click',getDataFrom,false);
},false);



//handler({ target: { value: "" } });


text_box.addEventListener("keyup", handler);
