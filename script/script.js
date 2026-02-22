let interviewList=[];
let rejectedList=[];

let total=document.getElementById('total');
let interviewCount=document.getElementById('interviewCount');
let rejectedCount=document.getElementById('rejectedCount');

const allFilterBtn=document.getElementById('all-filter-btn');
const interviewFilterBtn=document.getElementById('interview-filter-btn');
const rejectedFilterBtn=document.getElementById('rejected-filter-btn');


const allCardSection=document.getElementById('allCards');
const mainContainer=document.querySelector("main");


//const allFilterBtn=document.getElementById('all-filter-btn');
//allFilterBtn.addEventListener("click",function(){
  //  alert("Click from add even")
//})


function calculateCount(){
    total.innerText=allCardSection.children.length;
    interviewCount.innerText=interviewList.length;
    rejectedCount.innerText=rejectedList.length;
    
}
calculateCount();

function toggleStyle(id){

    allFilterBtn.classList.add('bg-gray-300','text-black')
    interviewFilterBtn.classList.add('bg-gray-300','text-black')
    rejectedFilterBtn.classList.add('bg-gray-300','text-black')

     allFilterBtn.classList.remove('bg-black','text-white')
    interviewFilterBtn.classList.remove('bg-black','text-white')
    rejectedFilterBtn.classList.remove('bg-black','text-white')


    const selected=document.getElementById(id);


    selected.classList.remove('bg-gray-300','text:blue')
    selected.classList.add('bg-black','text-white');
}