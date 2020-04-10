import { ViewStyle, TextStyle } from "react-native";

interface Style {
  container: ViewStyle;
  item: ViewStyle;
  itemLabel: TextStyle;
  header: ViewStyle;
  headerLabel: TextStyle;
}

const styles: Style = {
  container: {
    position: "relative",
  },

  item: {
    flex: 1,
    backgroundColor: "brown",
    height: 40,
    marginLeft: 10,
    justifyContent: "center",
    borderTopColor: "grey",
    borderTopWidth: 1,
  },

  itemLabel: {
    color: "grey",
    fontWeight: "500",
    fontSize: 12,
  },

  header: {
    width: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 10,
    position: "absolute",
    top: 20,
    backgroundColor: "green",
  },

  headerLabel: {
    color: "black",
    fontWeight: "bold",
    fontSize: 12,
  },
};

export default styles;
