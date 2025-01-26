import React, { useState, useEffect } from 'react';
import { FlatList, View, TextInput, ActivityIndicator, Text, StyleSheet, Pressable } from 'react-native';
import { paginateData } from '../utils/pagination';
import { searchData } from '../utils/search';
import { sortData } from '../utils/sorting';
import { styles } from '../styles/listStyles';


const CustomFlatList = ({
  data,
  renderItem,
  keyExtractor,
  paginationEnabled = false,
  searchEnabled = false,
  sortingEnabled = false,
  sortOption,
  layout = 'vertical',  // Default layout is vertical
  columns = 1,  // Default to 1 column if no columns are passed
  pageSize = 10,  // Default page size
  initialPage = 0  // Default initial page (0 or 1)
}) => {
  const [displayData, setDisplayData] = useState([]);
  const [page, setPage] = useState(initialPage);
  const [searchQuery, setSearchQuery] = useState('');

  const [loading, setLoading] = useState(false);

  // Handle sorting
  const handleSorting = (data) => {
    if (sortOption) {
      return sortData(data, sortOption);
    }
    return data;
  };

  // Handle search
  const handleSearch = (data) => {
    if (searchQuery) {
      return searchData(searchQuery, data);
    }
    return data;
  };

  // Handle pagination with loader
  const handleLoadMore = () => {
    if (paginationEnabled && !loading) {
      setLoading(true);
      setPage((prevPage) => {
        const newPage = prevPage + 1;
        const itemsToFetch = pageSize * columns;

        // Apply search before pagination
        let updatedData = handleSearch(data);

        // After filtering, apply pagination
        const newData = paginateData(updatedData, newPage, itemsToFetch);
        setDisplayData((prevData) => [...prevData, ...newData]);
        setLoading(false);
        return newPage;
      });
    }
  };

  // Initial data display with search and pagination
  useEffect(() => {
    let updatedData = [...data];

    // Apply search and then sorting before pagination
    
    if(sortingEnabled) {
      updatedData = handleSorting(updatedData);
    }else if(searchEnabled) {
      updatedData = handleSearch(updatedData);
    }else{
      return updatedData
    }

    const initialData = paginateData(updatedData, initialPage, pageSize * columns);
    setDisplayData(initialData);
  }, [data, searchQuery, sortOption, initialPage, pageSize, columns]);

  // Effect to handle the loader visibility
  useEffect(() => {
    if (paginationEnabled && loading) {
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 1000); // Simulate loader for 1 second
      return () => clearTimeout(timeout);
    }
  }, [loading]);

  return (
    <View style={{ flex: 1 }}>
      {searchEnabled && (
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
      )}
     
      <FlatList
        data={displayData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onEndReached={paginationEnabled ? handleLoadMore : null}
        onEndReachedThreshold={0.5} // Load more when you reach halfway through the list
        horizontal={layout === 'horizontal'}  // Dynamically set for horizontal layout
        numColumns={layout === 'grid' ? columns : 1}  // Dynamically set for grid layout
        ListFooterComponent={loading ? <ActivityIndicator size="large" color="#0000ff" /> : null}
        key={columns} // This forces a re-render when columns change
      />
    </View>
  );
};



export default CustomFlatList;
