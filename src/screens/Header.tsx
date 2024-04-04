import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default ({ navigation }) => {

    function irHome() {
        navigation.navigate("(Home)");
      }

  function irCarrinho() {
    navigation.navigate("(Carrinho)");
  }

  function irFavoritos() {
    navigation.navigate("(Favoritos)");
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ flexDirection: "row", justifyContent:"space-between",     paddingHorizontal: 12, paddingTop:15 }}>

            <TouchableOpacity onPress={irHome}>
                <View>
                    <Ionicons name="home" size={25} color={"#303030"} />
                </View>
            </TouchableOpacity>

          <View style={{ flexDirection: "row", gap:10 }}>
            <TouchableOpacity onPress={irCarrinho}>
              <View>
                <Ionicons name="cart-outline" size={25} color={"#303030"} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={irFavoritos}>
              <View>
                <Ionicons name="heart-sharp" size={25} color={"#303030"} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingBottom: 15,

  },
});
