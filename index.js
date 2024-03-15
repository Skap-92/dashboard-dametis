// on recupere le nombre de sites
fetch('sites.json')
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  const nbSites = data.length;
  const title = document.querySelector(".sites");
  title.innerText = `Sur un total de ${nbSites} sites, nous avons ...`;
})
.catch(error => {
  console.error('There was a problem with your fetch operation:', error);
});


// on recupere le nombre de playgrounds
fetch('playgrounds.json')
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  const nbPlaygrounds = data.total
  const playground = document.querySelector("#nbPlaygrounds")
  playground.innerText = nbPlaygrounds;
})
.catch(error => {
  console.error('There was a problem with your fetch operation:', error);
});

const playground = document.querySelector("#nbPlaygrounds")
playground.innerText = nbPlaygrounds;


// on recupere le nombre de Reports
fetch('reports.json')
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
    const nbReports = data.total
    const report = document.querySelector("#nbReports")
    report.innerText = nbReports;
})
.catch(error => {
  console.error('There was a problem with your fetch operation:', error);
});

const Reports = document.querySelector("#nbReports")
Reports.innerText = nbReports;


// on recupere le nombre de Synoptics
fetch('synoptics.json')
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
    const nbSynoptics = data.total
    const synoptics = document.querySelector("#nbSynoptics")
    synoptics.innerText = data.total;
})
.catch(error => {
  console.error('There was a problem with your fetch operation:', error);
});

const synoptics = document.querySelector("#nbSynoptics")
synoptics.innerText = nbSynoptics;

// on recupere le nombre de Projects
fetch('projects.json')
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
    const nbProjects = data.total
    const projects = document.querySelector("#nbProjects")
    projects.innerText = nbProjects;
})
.catch(error => {
  console.error('There was a problem with your fetch operation:', error);
});

const projects = document.querySelector("#nbProjects")
projects.innerText = nbProjects;