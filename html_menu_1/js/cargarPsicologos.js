const loadPsicologos = () => {
  fetch("../data/psicologos.json")
    .then((resultado) => resultado.json())
    .then((array) => {
      const psicologos = document.getElementById("psicologos");
      let cont = 0;
      for (let obj of array) {
        const template = `<div class="strip_list wow fadeIn psicologo">
            <a href="#0" class="wish_bt"></a>
            <figure>
              <a href="detail-page-2.html">
                <img src="http://via.placeholder.com/565x565.jpg" alt="" />
              </a>
            </figure>
        <small>${obj.especialidad}</small>
            <h3 class="nombrePsicologo">${obj.nombre}</h3>
            <p>
              ${obj.descripcion}
            </p>
            <span class="rating">
              <i class="icon_star voted"></i>
              <i class="icon_star voted"></i>
              <i class="icon_star voted"></i>
              <i class="icon_star"></i>
              <i class="icon_star"></i> <small>(${obj.reviews})</small>
            </span>
            <a
              href="badges.html"
              data-toggle="tooltip"
              data-placement="top"
              data-original-title="Badge Level"
              class="badge_list_1"
            >
              <img src="img/badges/badge_1.svg" width="15" height="15" alt="" />
            </a>
            <ul>
              <li>
                <a
                  href="#0"
                  onclick="onHtmlClick('Piscólogos', 0)"
                  class="btn_listing"
                >
                  Ver en el mapa
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/dir//Assistance+%E2%80%93+H%C3%B4pitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x0:0xa6a9af76b1e2d899!2sAssistance+%E2%80%93+H%C3%B4pitaux+De+Paris!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361"
                  target="_blank"
                >
                  Directions
                </a>
              </li>
              <li>
                <a href="detail-page-2.html" ${
                  cont === 0
                    ? `data-step="3"
                data-intro="Da click para agendar tu cita"`
                    : ""
                }>Agenda ahora</a>
              </li>
            </ul>
          </div>`;
        cont++;
        psicologos.innerHTML += template;
      }
    })
    .then(() => {
      introJs().start();
    })
    .catch((error) => {
      console.log("Hubo un problema con la petición Fetch:" + error.message);
    });
};

const filterResults = () => {
  const submit = document.getElementById("submit");

  submit.addEventListener("click", (e) => {
    e.preventDefault();

    const textSearch = document.getElementById("textSearch").value;

    const resultados = document.getElementsByClassName("psicologo");

    for (let r of resultados) {
      const psicologo = r.getElementsByClassName("nombrePsicologo")[0];
      r.setAttribute("class", r.getAttribute("class") + " d-none");
      if (psicologo.textContent.includes(textSearch)) {
        r.classList.remove("d-none");
      }
    }
  });
};

document.addEventListener("DOMContentLoaded", function () {
  loadPsicologos();
  filterResults();
});
