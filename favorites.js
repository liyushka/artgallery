/* ==========================================
   Art Gallery - Favorites System (localStorage)
   ========================================== */

function getFavorites() {
  return JSON.parse(localStorage.getItem('art_gallery_favorites')) || [];
}

function isFavorite(artworkId) {
  const favorites = getFavorites();
  return favorites.includes(artworkId);
}

function toggleFavorite(artworkId) {
  let favorites = getFavorites();
  if (favorites.includes(artworkId)) {
    favorites = favorites.filter(id => id !== artworkId);
  } else {
    favorites.push(artworkId);
  }
  localStorage.setItem('art_gallery_favorites', JSON.stringify(favorites));
  return favorites.includes(artworkId);
}