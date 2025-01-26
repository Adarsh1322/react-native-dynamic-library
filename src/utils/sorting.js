export const sortData = (data, option) => {
    switch (option) {
      case 'a-to-z':
        return data.sort((a, b) => a.name.localeCompare(b.name));
      case 'z-to-a':
        return data.sort((a, b) => b.name.localeCompare(a.name));
      case '1-to-n':
        return data.sort((a, b) => a.id - b.id);
      case 'n-to-1':
        return data.sort((a, b) => b.id - a.id);
      default:
        return data;
    }
  };
  