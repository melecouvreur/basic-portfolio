let grid = document.querySelector(".grid");
let imageInput = document.querySelector("#image-input");
let button = document.querySelector("button");
let form = document.querySelector("form");
let projectID = 1;


let projectInfo = {};
let allProjectInfo = [];

//ADD PROJECT TO PORTFOLIO GRID
function addProject(event) {
  event.preventDefault();

  let formItems = event.target.elements;
  
  //store userinput in var's
  let projectImage = formItems.image.value;
  let projectTitle = formItems.title.value;
  let projectDescription = formItems.description.value;

  //create project object, including ID
  let projectInfo = {
    id: projectID,
    title: projectTitle,
    description: projectDescription,
    image: projectImage
  };

  //if at least 1 of user input values submitted store in project object
  if (projectImage || projectTitle || projectDescription) {
    projectInfo.id = projectID;
    projectInfo.title = projectTitle;
    projectInfo.description = projectDescription;
    projectInfo.image = projectImage;
  }

  //push project object into array and ++ID for each object added
  allProjectInfo.push(projectInfo);
  projectID++;


  uploadImg();
  //form.reset();
}

//submitted url link triggers creation new image element and assigns url to img.src
  function uploadImg() {
    if (imageInput.value) {
      let img = document.createElement("img");
      img.src = imageInput.value;
      img.id = imageID;
      grid.appendChild(img);
    }
  }


//WHEN A PROJECT IMG CLICKED, CREATES AND POPULATES FEATURED SECTION
  function chooseItem(event) {
      event.preventDefault();
      //grab id of item clicked if image
      if (event.target.tagName === "IMG") {
      let selectedID = event.target.id;

      //console.log(`This is the image id:${selectedID}`)

      // loop to find where selectedID = projectID and pass through featureProject function
        for (let project of allProjectInfo) {
          if (project.id == selectedID) {
            let clickedProject = project;
            //console.log(clickedProject, clickedProject.title)
            featureProject(clickedProject);
        }
      }
    }
  }

    function featureProject(clickedProject) {
      let featuredGrid = document.querySelector(".featured");
      featuredGrid.id = "#featured-clicked";
      let featuredImage = document.querySelector("#featured-img");
        featuredImage.src = clickedProject.image;
        //console.log(featuredImage.src)
        
        let featuredTitle = document.querySelector("#featured-t");
        featuredTitle.innerText = clickedProject.title;

        let featuredDescription = document.querySelector("#featured-p");
        featuredDescription.innerText = clickedProject.description;
    
      }
      
form.addEventListener("submit", addProject); 

grid.addEventListener("click", chooseItem);