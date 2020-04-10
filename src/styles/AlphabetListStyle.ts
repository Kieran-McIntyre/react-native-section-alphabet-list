import { ViewStyle, TextStyle } from "react-native";
import sizes from "../values/sizes";
import colors from "../values/colors";

interface Style {
  container: ViewStyle;
  listItemContainer: ViewStyle;
  listItemLabel: TextStyle;
  sectionHeaderContainer: ViewStyle;
  sectionHeaderLabel: TextStyle;
}

const styles: Style = {
  container: {
    position: "relative",
  },

  listItemContainer: {
    flex: 1,
    height: sizes.itemHeight,
    paddingHorizontal: sizes.spacing.regular,
    justifyContent: "center",
    borderTopColor: colors.seperatorLine,
    borderTopWidth: 1,
  },

  listItemLabel: {
    color: colors.text.dark,
    fontSize: 14,
  },

  sectionHeaderContainer: {
    height: sizes.headerHeight,
    backgroundColor: colors.background.dark,
    justifyContent: "center",
    paddingHorizontal: sizes.spacing.regular,
  },

  sectionHeaderLabel: {
    color: colors.background.light,
  },
};

export default styles;
