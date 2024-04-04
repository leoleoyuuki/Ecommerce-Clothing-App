import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "@rneui/base";

export default ({ navigation }) => {
  const [favoritos, setFavoritos] = useState([]);

  

  const unlike = async(item)=>{
    const novosFavoritos = favoritos.filter((produto)=>produto.nome != item.nome);
    await AsyncStorage.setItem("favoritos", JSON.stringify(novosFavoritos));
    setFavoritos(novosFavoritos);
    alert("Produto removido dos favoritos");
  }
  const buscarDados = async () => {
    const dadosFavoritos = await AsyncStorage.getItem("favoritos");
    if (dadosFavoritos !== null) {
      setFavoritos(JSON.parse(dadosFavoritos));
      console.log(favoritos);
    }
  };

  useEffect(() => {

    
    buscarDados();
    
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header navigation={navigation} />
      </View>

      <Button title="Recarregar" onPress={buscarDados} type="clear" />

      <FlatList
        data={favoritos}
        renderItem={({ item, index }) => {
          return (
            <View>
              <View style={styles.card}>
                <LinearGradient
                  // Background Linear Gradient
                  colors={["rgba(17,17,17,0.6)", "transparent"]}
                  style={styles.background}
                />
                <View style={styles.cardTop}>
                  <View>
                    <Text style={styles.titleCard}>{item.nome}</Text>
                    <Text style={styles.subTitleCard}>R$ {item.preco}</Text>
                  </View>
                  <View>
                    <Ionicons
                      name="pricetag-outline"
                      color={"#000"}
                      size={25}
                    />
                  </View>
                </View>
                <View style={styles.cardDown}>
                  <View>
                    <TouchableOpacity onPress={()=> unlike(item)}>
                      <Ionicons name="heart-dislike-outline" size={24} color={"#000"} />
                    </TouchableOpacity>

                    {/* <TouchableOpacity>
                      <Ionicons name="cart-outline" size={24} color={"#000"} />
                    </TouchableOpacity> */}
                  </View>
                  <View>
                    <Image source={item.imagem} />
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 15,
    paddingBottom: 15,
    flexDirection: "row",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 320,
    borderRadius: 10,
  },
  card: {
    width: 230,
    height: 350,
    backgroundColor: "#e6e4e4",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  titleCard: {
    fontSize: 18,
    fontWeight: "500",
  },
  subTitleCard: {
    fontSize: 16,
    fontWeight: "400",
  },
  cardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardDown: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});