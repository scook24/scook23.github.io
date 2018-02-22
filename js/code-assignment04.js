// assign values to a set of variables representing a project's metadata
let projectId = 1
let projectUrl = 'http://arcg.is/2n5E9Jf'
let projectTitle = 'Book Assignment 1: Web Story map of RJ, Brasil'
let projectDesc = 'Web Story map of RJ, Brasil'
let projectThumb = true

// create an array and assign six variables to positions 0 through 5
let projectArray = [
  projectId,
  projectUrl,
  projectTitle,
  projectDesc,
  projectThumb,
]

// create an object and assign six variables to property names (i.e., keys)
let projectObject = {
  id: projectId,
  url: projectUrl,
  title: projectTitle,
  desc: projectDesc,
  thumb: projectThumb,
}

// logs the title from the project data array, because the title is in position 2
console.log(projectArray[2])

// two ways to log the title from the project data object
console.log(projectObject.title)
console.log(projectObject['title'])
