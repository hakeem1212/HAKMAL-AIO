// ================debut style card ======================
// const carousel = document.querySelectorAll(".carousel");
// const images = document.querySelectorAll(".carousel img");
// const prevBtn = document.querySelectorAll(".prev");
// const nextBtn = document.querySelectorAll(".next");

// let index = 0;

// nextBtn.addEventListener("click", () => {
//   if (index < images.length - 1) {
//     index++;
//   } else {
//     index = 0;
//   }
//   updateCarousel();
// });

// prevBtn.addEventListener("click", () => {
//   if (index > 0) {
//     index--;
//   } else {
//     index = images.length - 1;
//   }
//   updateCarousel();
// });

// function updateCarousel() {
//   carousel.style.transform = `translateX(-${index * 320}px)`;
// }
// ================ fin style card =======================

// document.querySelectorAll(".arti_plus_info").forEach((item) => {
//   item.addEventListener("click", function () {
//     const name = this.getAttribute("data-name");
//     const price = this.getAttribute("data-price");
//     const description = this.getAttribute("data-description");

//     document.getElementById("articleModalLabel").innerText = name;
//     document.getElementById("modalPrice").innerText = price;
//     document.getElementById("modalDescription").innerText = description;
//   });
// });

// =============== modal img produit card ===================

// Récupérer les balises
// const sourceImages = document.querySelectorAll(".carousel img");
// const destination = document.querySelectorAll(".img_modal ");

// const new_title = document.querySelectorAll(".article_name");
// const ancien_title = document.querySelectorAll(".modal-title");
// const descri = document.querySelectorAll(".descrip_article");

// document.getElementById("modalDescription").innerText = descri.innerText;

// ancien_title.innerText = new_title.innerText;

// console.log(new_title.innerText);
// console.log(ancien_title.innerText);

// Vider la destination si besoin
// destination.innerHTML = "";

// // Parcourir les images et les copier
// sourceImages.forEach((img) => {
//   const copiedImg = document.createElement("img");
//   copiedImg.src = img.src;
//   copiedImg.alt = img.alt;
//   copiedImg.className = "card-img img_modal_style"; // tu peux ajouter un style ici
//   destination.appendChild(copiedImg);
// });

// ================ fin modal img produit card ===============

// ================ modal produit card ==================

// Quand un slide est cliqué, on remplit le modal
const articleModal = document.getElementById("articleModal");
articleModal.addEventListener("show.bs.modal", (event) => {
  const image = event.relatedTarget;

  const title = image.getAttribute("data-title");
  const desc = image.getAttribute("data-desc");
  const price = image.getAttribute("data-price");
  const src = image.getAttribute("data-img-prod");

  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalDesc").textContent = desc;
  document.getElementById("modalPrice").textContent = price;
  document.getElementById("modalImage").src = src;
});
// ================= fin modal produit  ====================

// ================= pour l'integration whatshap ============
// Ton numéro WhatsApp ici (sans le +)

// const boutonsPartager = document.querySelectorAll(".whatsapp-button");
// boutonsPartager.forEach((bouton) => {
//   bouton.addEventListener("click", function () {
//     const titre = document.querySelector(".article_name").textContent;
//     const description = document.querySelector(".descrip_article").textContent;
//     const prix = document.querySelector(".price").textContent;
//     const image = document.querySelector(".toff").src;

//     partagerSurWhatsApp(titre, description, prix, image);
//   });
// });

// console.log(partagerSurWhatsApp.innerText);

// function partagerSurWhatsApp(titre, description, prix, image) {
//   const tonNumeroWhatsApp = "221775092119"; // Remplace par ton numéro WhatsApp
//   const message = `Salut, je suis intéressé par votre annonce: ${titre} !\n\n${description}\n\n${prix}\n\nVoir l'image : ${image}`;
//   const lienWhatsApp = `https://wa.me/${tonNumeroWhatsApp}?text=${encodeURIComponent(
//     message
//   )}`;
//   window.open(lienWhatsApp, "_blank");
// }

// =============== fin integration whatshap =================
// ============== integration 2 =============================

const boutonsPartager = document.querySelectorAll(".whatsapp-button");

boutonsPartager.forEach((bouton) => {
  bouton.addEventListener("click", function () {
    const parent = bouton.closest(".card-prod_body"); // Trouve le parent qui contient les infos de l'article

    const titre = parent.querySelector(".article_name")?.innerText || "";
    const description = parent.querySelector(".descrip_article")?.innerText || "";
    const prix = parent.querySelector(".price")?.innerText || "";
    const image = parent.querySelector(".toff")?.src || "";

    partagerSurWhatsApp(titre, description, prix, image);
  });
});

function partagerSurWhatsApp(titre, description, prix, image) {
  const tonNumeroWhatsApp = "221775092119"; // Remplace par ton numéro WhatsApp
  const message = `Salut, je suis intéressé par votre annonce : *${titre}*\n\n📄 ${description}\n💰 Prix : ${prix}\n🖼️ Voir l'image : ${image}`;
  const lienWhatsApp = `https://wa.me/${tonNumeroWhatsApp}?text=${encodeURIComponent(message)}`;
  window.open(lienWhatsApp, "_blank");
}
