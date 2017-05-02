function toggleVisibility(toggle, id) {
  'use strict';
  
  var description = document.getElementById(id),
    visible = 'visible',
    hidden = 'hidden';
  
  if (description.className === hidden) {
    description.className = visible;
    toggle.innerHTML = 'Less';
  } else {
    description.className = hidden;
    toggle.innerHTML = 'More...';
  }
}