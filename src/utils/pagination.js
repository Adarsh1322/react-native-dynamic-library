export const paginateData = (data, page, pageSize) => {
  let startIndex;
  if (page == 0) {
    // For page 0, start index should be 0
    startIndex = 0;
  } else {
    // For other pages, calculate start index by (page * pageSize)
    startIndex = page * pageSize;
  }

  return data.slice(startIndex, startIndex + pageSize);
};