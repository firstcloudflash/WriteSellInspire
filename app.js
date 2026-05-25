const resourceGrid = document.getElementById("resourceGrid");
const modal = document.getElementById("modal");

const modalImage = document.getElementById("modalImage");
const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalBenefits = document.getElementById("modalBenefits");
const gumroadBtn = document.getElementById("gumroadBtn");

const closeBtn = document.getElementById("closeBtn");

fetch("content.json")
.then(res => res.json())
.then(data => {

  data.resources.forEach(item => {

    const card = document.createElement("div");

    card.className = "resource-card glass";

    card.innerHTML = `
      <img src="${item.image}" alt="">
      <h3>${item.title}</h3>
      <p>${item.short}</p>
    `;

    card.addEventListener("click", () => {

      modal.classList.add("active");

      modalImage.src = item.image;
      modalCategory.innerText = item.category;
      modalTitle.innerText = item.title;
      modalDescription.innerText = item.description;

      gumroadBtn.href = item.link;

      modalBenefits.innerHTML = "";

      item.benefits.forEach(benefit => {

        const li = document.createElement("li");
        li.innerText = benefit;

        modalBenefits.appendChild(li);

      });

    });

    resourceGrid.appendChild(card);

  });

});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

window.addEventListener("click", (e) => {
  if(e.target === modal){
    modal.classList.remove("active");
  }
});
