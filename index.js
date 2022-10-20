let textinput = document.querySelector("#textinput");
let imaglogo = document.querySelector("#imaglogo");
let info = document.querySelector(".info");

imaglogo.addEventListener("click", function () {
  fetchgit();
});

textinput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    fetchgit();
  }
});

function fetchgit() {
  if (textinput.value == "") {
    info.innerHTML = "no data";
  } else {
    fetch(`https://api.github.com/users/${textinput.value}/repos`)
      .then((response) => response.json())

      .then((data) => {

        info.innerHTML = "";

        data.forEach( repos => {

          let box =  document.createElement("div");
          box.className = "box";

          let divallinfo = document.createElement("div");
          divallinfo.className = "divallinfo";

          let h3reposname = document.createElement("h3");
          let boxname = document.createTextNode(repos.name);
          h3reposname.appendChild(boxname);

          let alinkrepos = document.createElement("a");
          let avalue = document.createTextNode("link");
          alinkrepos.appendChild(avalue);
          alinkrepos.href = `https://github.com/${info.innerHTML}/${repos.name}`;
          alinkrepos.target = "_blank";

          let star = document.createElement("span");
          let startrepos = document.createTextNode(repos.stargazers_count);
          star.appendChild(startrepos);

          divallinfo.appendChild(alinkrepos);
          divallinfo.appendChild(star);

          box.appendChild(h3reposname);
          box.appendChild(divallinfo);

          info.appendChild(box);

        });
      })

      .catch(error => {
        info.innerHTML = "no data";
      });
  }
}
