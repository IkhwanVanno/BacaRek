function toggleProfileMenu() {
  const profileMenu = document.querySelector('.profile-menu');
  const overlay = document.getElementById('overlay');
  
  if (profileMenu.style.display === 'block') {
      profileMenu.style.display = 'none';
      overlay.style.display = 'none';
  } else {
      profileMenu.style.display = 'block';
      overlay.style.display = 'block';
  }
}

function hideOverlay() {
  const profileMenu = document.querySelector('.profile-menu');
  const overlay = document.getElementById('overlay');

  profileMenu.style.display = 'none';
  overlay.style.display = 'none';
}
