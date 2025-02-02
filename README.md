# React Native Dynamic Flatlist Library

A powerful and dynamic FlatList wrapper for React Native that provides enhanced functionality out of the box. This library simplifies creating complex lists with features like pagination, sorting, grid layouts, search.

## Features

- **Normal List**: Render a standard vertical or horizontal list.
- **Pagination**: Load data incrementally as the user scrolls.
- **Sorting**: Dynamic sorting options:
  - A to Z
  - Z to A
  - 1 to Nth (ascending numerical order)
  - Nth to 1 (descending numerical order)
- **Sorting with Pagination**: Combine sorting and pagination for large datasets.
- **Vertical List**: Default vertical scrolling list.
- **Horizontal List**: Render items in a horizontally scrollable list.
- **Grid Layout**: Support for dynamic number of columns in a grid layout.
- **Search Bar**: Include a TextInput for search functionality at the top of the list.
- **Search with Pagination**: Filter and paginate data simultaneously.

## Installation

Install the library via npm:

```sh
npm install react-native-dynamic-flatlist
```

Or with Yarn:

```sh
yarn add react-native-dynamic-flatlist
```

## Usage

### Basic Example

```jsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomFlatList from "react-native-dynamic-flatlist";

const App = () => {
  const data = [...Array(50).keys()].map((i) => ({ id: i, name: `Item ${i}` }));

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <CustomFlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    margin: 5,
  },
});

export default App;
```

### Advanced Usage

#### Pagination

```jsx
<CustomFlatList
  data={data}
  renderItem={renderItem}
  paginationEnabled={true}
  onPaginate={(page, currentData) => {
    // Fetch the next set of data based on `page` and return updated data
    return [...currentData, ...fetchNewData(page)];
  }}
/>
```

#### Sorting

```jsx
<CustomFlatList
  data={data}
  renderItem={renderItem}
  sortingOptions={["a-to-z", "z-to-a", "1-to-n", "n-to-1"]}
  onSort={(option, data) => {
    if (option === "a-to-z") {
      return data.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (option === "z-to-a") {
      return data.sort((a, b) => b.name.localeCompare(a.name));
    }
    return data;
  }}
/>
```

#### Grid Layout

```jsx
<CustomFlatList data={data} renderItem={renderItem} layout="grid" columns={3} />
```

#### Search with Pagination

```jsx
<CustomFlatList
  data={data}
  renderItem={renderItem}
  searchEnabled={true}
  onSearch={(query, data) => {
    return data.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
  }}
  paginationEnabled={true}
  onPaginate={(page, currentData) => {
    // Fetch and return paginated data based on search query
    return [...currentData, ...fetchSearchResults(query, page)];
  }}
/>
```

## Props

| Prop                | Type     | Default   | Description                                              |
| ------------------- | -------- | --------- | -------------------------------------------------------- |
| `data`              | Array    | []        | The data to render in the list.                          |
| `renderItem`        | Function | undefined | A function that returns a component to render each item. |
| `keyExtractor`      | Function | undefined | A function to extract unique keys for each item.         |
| `paginationEnabled` | Boolean  | false     | Enable or disable pagination.                            |
| `sortingOptions`    | Array    | null      | Array of sorting options.                                |
| `searchEnabled`     | Boolean  | false     | Enable or disable the search bar.                        |
| `layout`            | String   | vertical  | Layout type (vertical, horizontal, grid).                |
| `columns`           | Number   | 1         | Number of columns for grid layout.                       |
| `onSearch`          | Function | null      | Callback function for search functionality.              |
| `onSort`            | Function | null      | Callback function for sorting.                           |
| `onPaginate`        | Function | null      | Callback function for pagination.                        |

## License

This library is licensed under the MIT License.


## 🔍 **Keywords**

- `react-native`
- `scrollView`
- `view`
- `loader`
- `pagination`
- `sorting`
- `horizontal`
- `vertical`
- `grid`
- `search`

