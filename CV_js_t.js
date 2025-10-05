document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach((section, index) => {
    section.style.opacity = 0;
    section.style.transform = "translateY(30px)";
    setTimeout(() => {
      section.style.transition = "all 0.6s ease-out";
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }, 300 * index);
  });

  // Effet sur les liens de contact
  const contactLinks = document.querySelectorAll(".contact a");
  contactLinks.forEach(link => {
    link.addEventListener("mouseover", () => {
      link.style.color = "#ffcc00";
    });
    link.addEventListener("mouseout", () => {
      link.style.color = "";
    });
  });

  // Animation spécifique à l'iframe PDF
  const pdfFrame = document.querySelector(".portfolio iframe");
  if (pdfFrame) {
    pdfFrame.style.opacity = 0;
    pdfFrame.style.transition = "opacity 1s ease";
    setTimeout(() => {
      pdfFrame.style.opacity = 1;
    }, sections.length * 300);
  }

  console.log("Bienvenue sur le CV interactif de Heytham !");
});

// Horloge
function mettreAJourHorloge() {
  const maintenant = new Date();
  const heures = maintenant.getHours().toString().padStart(2, '0');
  const minutes = maintenant.getMinutes().toString().padStart(2, '0');
  const secondes = maintenant.getSeconds().toString().padStart(2, '0');
  const heureElement = document.getElementById('heure');
  heureElement.textContent = `${heures}:${minutes}:${secondes}`;
}

setInterval(mettreAJourHorloge, 1000);
mettreAJourHorloge();

// Thème clair/sombre
const boutonTheme = document.getElementById('toggle-theme');
const iconeTheme = document.getElementById('theme-icon');

boutonTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    iconeTheme.src = 'sun.png';
    iconeTheme.alt = 'Passer en mode clair';
  } else {
    iconeTheme.src = 'moon.png';
    iconeTheme.alt = 'Passer en mode sombre';
  }
});
