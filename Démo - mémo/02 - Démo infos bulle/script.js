// Attend que le document HTML soit complètement chargé
document.addEventListener('DOMContentLoaded', function() {
    // Sélectionne l'élément qui déclenche l'infobulle
    const hoverable = document.querySelector('.hoverable');
    // Sélectionne l'infobulle elle-même
    const tooltip = document.getElementById('infoTip');
    // Sélectionne le lien dans l'infobulle
    const tooltipLink = tooltip.querySelector('a');

    // Déclare une variable pour le délai d'exécution
    let timeout;

    // Fonction pour afficher l'infobulle
    function showTooltip() {
      // Annule toute action de masquage en attente
      clearTimeout(timeout);
      // Affiche l'infobulle
      tooltip.style.display = 'block';
      // Rend le lien focusable
      tooltipLink.setAttribute('tabindex', '0');
    }

    // Fonction pour masquer l'infobulle
    function hideTooltip() {
      // Ajoute un délai avant de masquer l'infobulle
      timeout = setTimeout(() => {
        // Masque l'infobulle
        tooltip.style.display = 'none';
        // Rend le lien non focusable
        tooltipLink.setAttribute('tabindex', '-1');
      }, 300);
    }

    // Ajoute des écouteurs d'événements pour l'élément déclencheur
    hoverable.addEventListener('mouseover', showTooltip);
    hoverable.addEventListener('mouseout', hideTooltip);
    hoverable.addEventListener('focus', showTooltip);
    hoverable.addEventListener('blur', hideTooltip);

    // Ajoute des écouteurs d'événements pour l'infobulle elle-même
    tooltip.addEventListener('mouseover', showTooltip);
    tooltip.addEventListener('mouseout', hideTooltip);
    tooltip.addEventListener('focus', showTooltip, true);
    tooltip.addEventListener('blur', hideTooltip, true);
});
