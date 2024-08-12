const url = "https://api.github.com/users";
const searchinputel=document.getElementById("searchinput");
const profilecontainerel=document.getElementById("profilecontainer");
const searchbuttonel = document.getElementById("searchbtn");
const loadingel=document.getElementById("loading");
const generateprofile = (profile)=> {
    return`
    <div class="profilebox">
    <div class="topsection">
        <div class="left">
            <div class="avatar">
            <img alt="avatar" src="${profile.avatar_url}" />
            </div>
            <div class="self">
                <h1>${profile.name}</h1>
                <h1>@${profile.login}</h1>
            </div>
        </div>
        <div><a href="${profile.html_url}" target="_blank">
     <button class="primary-btn">Check Profile</button>
     </a></div>
  
    <div class="about">
        <h2>About</h2>
        <p>${profile.bio}</p>
    </div>
    <div class="status">
        <div class="statusitem">
            <h3>Followers</h3>
            <p>${profile.followers}</p>
        </div>
        <div class="statusitem">
            <h3>Following</h3>
            <p>${profile.following}</p>
            
    </div>
    <div class="statusitem">
        <h3>Repos</h3>
        <p>${profile.public_repos}</p>
        
</div>
   </div>
</div>
`;
};
const fetchprofile=async()=>{
const username=searchinputel.value;
loadingel.innerText="Loading..."
loadingel.style.color="black"

  try {
   const res=await fetch(`${url}/${username }`);
   const data= await res.json();
   if(data.bio){
    loadingel.innerText="";
    profilecontainerel.innerHTML=generateprofile(data);

   }
   else{
loadingel.innerHTML=data.message;
loadingel.style.color="red";
profilecontainerel.innerText="";
   }
   console.log("data", data);
   
  } catch (error) {
   console.log({error}); 
   loadingel.innerText="";
  }
};
searchbuttonel.addEventListener ("click", fetchprofile);