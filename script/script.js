let interviewList=[];
let rejectedList=[];

let total=document.getElementById('total');
let interviewCount=document.getElementById('interviewCount');
let rejectedCount=document.getElementById('rejectedCount');

const allFilterBtn=document.getElementById('all-filter-btn');
const interviewFilterBtn=document.getElementById('interview-filter-btn');
const rejectedFilterBtn=document.getElementById('rejected-filter-btn');


const allCardSection=document.getElementById('allCards');
const mainContainer=document.querySelector('main');
const filterSection=document.getElementById('filtered-section');

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

mainContainer.addEventListener('click',function(event){

    if(event.target.classList.contains('interview-btn')){
      const parentNode=event.target.parentNode.parentNode;
    const mobileFirst=parentNode.querySelector('.mobileFirst');
    const reactNative=parentNode.querySelector('.reactNative');
    const remote=parentNode.querySelector('.remote');
    const status=parentNode.querySelector('.status');
    const notes=parentNode.querySelector('.notes');


    const cardInfo={
        mobileFirst,
        reactNative,
        remote,
        status,
        notes
    }
     //console.log(cardInfo);

     const mobileExist=interviewList.find(item=>item.mobileFirst==cardInfo.mobileFirst);

     if(!mobileExist){
        interviewList.push(cardInfo);
     }
     renderInterview();
    }
})
    
    

function renderInterview(){
    filterSection.innerHTML=''

    for(let interview of interviewList){
        let div=document.createElement('div');
        div.className='card flex justify-between border p-8'
        div.innerText=`
                      <div class="space-y-6">
            <!--part 1-->
            <div>
                <p class="mobileFirst text-4xl">Mobile First Crop</p>
                <p class="reactNative">react Native Developer</p>
            </div>

             <!--part 2-->
             <div>
                <p class="remote">Remote• Full-time • $130,000 - $175,000</p>
             </div>

             <!--part 3-->
                <p class="status bg-gray-200 px-5">NOT APPLIED</p>
                <p class="notes">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>

                <div class="flex gap-5">
                    <button class="interview-btn bg-gray-100 text-green-400">INTERVIEW</button>
                    <button class="rejected-btn bg-gray-100 text-red-400">REJECTED</button>
                </div>
        </div>
        <!--main part 2-->
        <div>
            <button class="btn-delete"><img src="./Group 1.png" alt=""></button>
        </div>
      </div>
        `
    }
}