import { StyleSheet } from "react-native";
import { Colors } from "../utils/Colors";

export const styles = StyleSheet.create({
  searchInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 10,
    borderRadius: 5,
  },
  sortingContainer: {
    padding: 5,
    borderColor: '#ccc',
    margin: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sortingtext: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.black,
  },
  sortingOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  sortingOption: {
    padding: 5,
    borderWidth: 1,
    borderColor: Colors.black,
    backgroundColor: Colors.white,
    borderRadius: 5,
    alignItems: 'center',
  },
  sortingOptiontext:{
    fontSize: 14,
    fontWeight: '700',
    color: Colors.black,
  }
});