export function filterData(searchInput, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
      restaurant.data.name?.toLowerCase()?.includes(searchInput.toLowerCase())
    );
  
    return filterData;
  }