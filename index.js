let grid = document.querySelector(".grid");
let imageInput = document.querySelector("#image-input");
let button = document.querySelector("button");

let form = document.querySelector("form");
let imageID = 1;
let projectID = 1;

/*
function handleSubmit(event) {
  event.preventDefault();
  if (imageInput.value) {
    let img = document.createElement("img");
    img.src = imageInput.value;
    img.id = imageID;
    grid.appendChild(img);
    imageID++;
  }
}
*/
let projectInfo = {};
let allProjectInfo = [];

function addProject(event) {
  event.preventDefault();
  
  uploadImg();
  let formItems = event.target.elements;
  
  //NB: refers to name tag in HTML
  //use event.target to capture values submitted in form
  let projectImage = formItems.image.value;
  let projectTitle = formItems.title.value;
  let projectDescription = formItems.description.value;

  //create template project object, including ID
  let projectInfo = {
    id: projectID,
    title: projectTitle,
    description: projectDescription,
    image: projectImage
  };

  //use submitted form values to populate template project object
  if (projectImage || projectTitle || projectDescription) {
    projectInfo.id = projectID;
    projectInfo.title = projectTitle;
    projectInfo.description = projectDescription;
    projectInfo.image = projectImage;
  }

  //push objects into array and ++ID
  allProjectInfo.push(projectInfo);
  projectID++;
  //form.reset();
}

  function uploadImg() {
    if (imageInput.value) {
      let img = document.createElement("img");
      img.src = imageInput.value;
      img.id = imageID;
      grid.appendChild(img);
      imageID++;
    }
  }

  function chooseItem(event) {
      event.preventDefault();
      //grab id of item clicked if image
      if (event.target.tagName === "IMG") {
      let selectedID = event.target.id;

      console.log(`This is the image id:${selectedID}`)
      // loop to find where imageID = projectID and pass through function
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
      
//form.addEventListener("submit", handleSubmit);

form.addEventListener("submit", addProject); 

//grid.addEventListener("click", featureImage);

grid.addEventListener("click", chooseItem);