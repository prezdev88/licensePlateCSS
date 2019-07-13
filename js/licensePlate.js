(function() {
   document.querySelectorAll('.plate').forEach((plateDiv) => {
      var plate = plateDiv.innerHTML.trim();

      var part1 = plate.substring(0,2);
      var part2 = plate.substring(2,4);
      var part3 = plate.substring(4,6);
      
      plateDiv.innerHTML = "";

      var contentDiv = document.createElement("div");
      var countryDiv = document.createElement("div");
      var part1Span = document.createElement("span");
      var part2Span = document.createElement("span");
      var part3Span = document.createElement("span");
      var circleImg = document.createElement("img");
      var shieldImg = document.createElement("img");

      part1Span.innerHTML = part1;
      part2Span.innerHTML = part2;
      part3Span.innerHTML = part3;

      part1Span.setAttribute("class", "part1");
      part2Span.setAttribute("class", "part2");
      part3Span.setAttribute("class", "part3");

      circleImg.setAttribute("class", "circle");
      circleImg.setAttribute("src", "images/circle.png");

      shieldImg.setAttribute("class", "shield");
      shieldImg.setAttribute("src", "images/shield.png");

      countryDiv.innerHTML = "chile";
      countryDiv.setAttribute("class", "country");

      contentDiv.appendChild(part1Span);
      contentDiv.appendChild(circleImg);
      contentDiv.appendChild(part2Span);
      contentDiv.appendChild(shieldImg);
      contentDiv.appendChild(part3Span);

      plateDiv.appendChild(contentDiv);
      plateDiv.appendChild(countryDiv);
   });
})();