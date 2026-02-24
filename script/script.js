let interviewList=[];
let rejectedList=[];
let currentStatus='all';

let total=document.getElementById('total');
let interviewCount=document.getElementById('interviewCount');
let rejectedCount=document.getElementById('rejectedCount');

let jobsBtn = document.getElementById('jobs-btn');

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


      let appliedJobs = interviewList.length + rejectedList.length; 
    let totalJobs = allCardSection.children.length;      
    jobsBtn.innerText = `${appliedJobs} of ${totalJobs} jobs`;
    
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
    currentStatus=id;

     console.log(currentStatus);


    selected.classList.remove('bg-gray-300','text:blue')
    selected.classList.add('bg-black','text-white');

    if(id=='interview-filter-btn'){
        allCardButton.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderInterview();
    }else if(id=='all-filter-btn'){
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden');
    }else if(id=='rejected-filter-btn'){
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderRejected();
    }
}

mainContainer.addEventListener('click',function(event){

   // console.log(event,event.target.parentNode.parentNode);

    //console.log(event.target.classList.contains('interview-filter-btn'));

    if(event.target.classList.contains('interview-btn')){
      const parentNode=event.target.parentNode.parentNode;

    const mobileFirst=parentNode.querySelector('.mobileFirst').innerText
    const reactNative=parentNode.querySelector('.reactNative').innerText
    const remote=parentNode.querySelector('.remote').innerText
    const status=parentNode.querySelector('.status').innerText
    const notes=parentNode.querySelector('.notes').innerText
    
    parentNode.querySelector('.status').innerText='interview'

    const cardInfo={
        mobileFirst,
        reactNative,
        remote,
        status:'interview',
        notes
    }
     //console.log(cardInfo);

     const mobileExist=interviewList.find(item=>item.mobileFirst==cardInfo.mobileFirst);
     
    // parentNode.querySelector('.status').innerText='interview'
     if(!mobileExist){
        interviewList.push(cardInfo);
     }


     rejectedList=rejectedList.filter(item=>item.mobileFirst != cardInfo.mobileFirst);
   

     if(currentStatus == 'rejected-filter-btn'){
        renderRejected();
     }
     calculateCount()
    }
    else if(event.target.classList.contains('rejected-btn')){
      const parentNode=event.target.parentNode.parentNode;

    const mobileFirst=parentNode.querySelector('.mobileFirst').innerText
    const reactNative=parentNode.querySelector('.reactNative').innerText
    const remote=parentNode.querySelector('.remote').innerText
    const status=parentNode.querySelector('.status').innerText
    const notes=parentNode.querySelector('.notes').innerText
    
    parentNode.querySelector('.status').innerText='rejected'

    const cardInfo={
        mobileFirst,
        reactNative,
        remote,
        status:'rejected',
        notes
    }
     //console.log(cardInfo);

     const mobileExist=rejectedList.find(item=>item.mobileFirst==cardInfo.mobileFirst);
     
    // parentNode.querySelector('.status').innerText='interview'
     if(!mobileExist){
        rejectedList.push(cardInfo);
     }

    
       interviewList=interviewList.filter(item=>item.mobileFirst !=cardInfo.mobileFirst)

       if(currentStatus=="interview-filter-btn"){
        renderInterview();
       }
     calculateCount();

    }
})
    
    

function renderInterview(){
    filterSection.innerHTML=''

    for(let interview of interviewList){
        let div=document.createElement('div');
        div.className='card flex justify-between border p-8'
        div.innerHTML=`
                      <div class="space-y-6">
            <!--part 1-->
            <div>
                <p class="mobileFirst text-4xl">${interview.mobileFirst}</p>
                <p class="reactNative">react Native Developer</p>
            </div>

             <!--part 2-->
             <div>
                <p class="remote">Remote• Full-time • $130,000 - $175,000</p>
             </div>

             <!--part 3-->
                <p class="status bg-gray-200 px-5">${interview.status}</p>
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
        filterSection.appendChild(div);
    }
    //calculateCount();
}
    function renderRejected(){
    filterSection.innerHTML=''

    for(let rejected of rejectedList){
        let div=document.createElement('div');
        div.className='card flex justify-between border p-8'
        div.innerHTML=`
                      <div class="space-y-6">
            <!--part 1-->
            <div>
                <p class="mobileFirst text-4xl">${rejected.mobileFirst}</p>
                <p class="reactNative">react Native Developer</p>
            </div>

             <!--part 2-->
             <div>
                <p class="remote">Remote• Full-time • $130,000 - $175,000</p>
             </div>

             <!--part 3-->
                <p class="status bg-gray-200 px-5">${rejected.status}</p>
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
        filterSection.appendChild(div);
    }
}