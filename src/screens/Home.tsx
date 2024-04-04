import {
  Text,
  View,
  Image,
  FlatList,
  RefreshControl,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import Header from "./Header";
import AsyncStorage from "@react-native-async-storage/async-storage";

const blusas = [
  {
    nome: "Moletom Preto",
    preco: 217.5,
    imagem: require("../../assets/moletom-preto.jpg"),
    id: 1,
  },
  {
    nome: "Moletom Branco",
    preco: 217.5,
    imagem: require("../../assets/moletom-branco.jpg"),
    id: 2,
  },

  {
    nome: "Blusa Branca",
    preco: 109.8,
    imagem: require("../../assets/blusa-branca.jpg"),
    id: 3,
  },
];
export function Blusas() {
  const [favoritos, setFavoritos] = useState([]);
  const [carrinho, setCarrinho] = useState([]);
  const [reload, setReload] = useState(0);

  useEffect(() => {
    async function loadFavoritos() {
      const fav = await AsyncStorage.getItem("favoritos");
      if (fav !== null) {
        setFavoritos(JSON.parse(fav));
        console.log(favoritos);
      }
    }

    async function loadCarrinho() {
      const cart = await AsyncStorage.getItem("carrinho");
      if (cart !== null) {
        setCarrinho(JSON.parse(cart));
        console.log(carrinho);
      }
    }
    loadFavoritos();
    loadCarrinho();
  }, [reload]);

  async function addFavoritos(item) {
    const fav = await AsyncStorage.getItem("favoritos");
    setFavoritos(JSON.parse(fav));
    const itemExists = favoritos.some((fav) => fav.id === item.id);
    if (itemExists) {
      alert("Item já adicionado aos favoritos");
    } else {
      setReload(reload + 1);
      const newFavoritos = favoritos;
      newFavoritos.push(item);
      setFavoritos(newFavoritos);
      // Atualiza o armazenamento assíncrono
      await AsyncStorage.setItem("favoritos", JSON.stringify(favoritos));
      alert("Item adicionado aos favoritos");
      setReload(reload + 1); // Atualiza o estado para forçar a re-renderização
    }
  }

  async function addCarrinho(item) {
    const cart = await AsyncStorage.getItem("carrinho");
    setCarrinho(JSON.parse(cart));
    const itemExists = carrinho.some((cart) => cart.id === item.id);
    if (itemExists) {
      alert("Item já adicionado ao carrinho");
    } else {
      setReload(reload + 1);
      const newCarrinho = carrinho;
      newCarrinho.push(item);
      setCarrinho(newCarrinho);
      // Atualiza o armazenamento assíncrono
      await AsyncStorage.setItem("carrinho", JSON.stringify(carrinho));
      alert("Item adicionado ao carrinho");
      setReload(reload + 1); // Atualiza o estado para forçar a re-renderização
    }
  }

  return (
    <FlatList
      horizontal={true}
      ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
      data={blusas}
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
                  <Ionicons name="pricetag-outline" color={"#000"} size={25} />
                </View>
              </View>
              <View style={styles.cardDown}>
                <View>
                  <TouchableOpacity onPress={() => addFavoritos(item)}>
                    <Ionicons name="heart-outline" size={24} color={"#000"} />
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => addCarrinho(item)}>
                    <Ionicons name="cart-outline" size={24} color={"#000"} />
                  </TouchableOpacity>
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
  );
}
const calcas = [
  {
    nome: "Calça Jeans",
    preco: 199.9,
    imagem: require("../../assets/calca-jeans.png"),
    componente: "calca-jeans",
  },
  {
    nome: "Calça Moletom",
    preco: 129.9,
    imagem: require("../../assets/calca-moletom.png"),
    componente: "calca-moletom",
  },
  {
    nome: "Calça Social",
    preco: 249.9,
    imagem: require("../../assets/calca-social.png"),
    componente: "calca-social",
  },
];
export function Calcas() {
  const [favoritos, setFavoritos] = useState([]);
  const [carrinho, setCarrinho] = useState([]);

  // async function buscarDasdos(){
  //   const f = await AsyncStorage.getItem("favoritos")
  //   console.log(JSON.parse(f))
  //  }
  // useEffect(()=>{
  //   AsyncStorage.clear()
  // })
  useEffect(() => {
    async function loadFavoritos() {
      const fav = await AsyncStorage.getItem("favoritos");
      if (fav !== null) {
        setFavoritos(JSON.parse(fav));
      }
    }

    async function loadCarrinho() {
      const cart = await AsyncStorage.getItem("carrinho");
      if (cart !== null) {
        setCarrinho(JSON.parse(cart));
      }
    }

    loadFavoritos();
    loadCarrinho();
  }, []);

  async function addFavoritos(item) {
    const newFavoritos = [...favoritos, item];
    setFavoritos(newFavoritos);
    await AsyncStorage.setItem("favoritos", JSON.stringify(newFavoritos));
  }

  async function addCarrinho(item) {
    const newCarrinho = [...carrinho, item];
    setCarrinho(newCarrinho);
    await AsyncStorage.setItem("carrinho", JSON.stringify(newCarrinho));
  }
  return (
    <FlatList
      horizontal={true}
      ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
      data={calcas}
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
                  <Ionicons name="pricetag-outline" color={"#000"} size={25} />
                </View>
              </View>
              <View style={styles.cardDown}>
                <View>
                  <TouchableOpacity onPress={() => addFavoritos(item)}>
                    <Ionicons name="heart-outline" size={24} color={"#000"} />
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => addCarrinho(item)}>
                    <Ionicons name="cart-outline" size={24} color={"#000"} />
                  </TouchableOpacity>
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
  );
}

export default ({ navigation }) => {
  function irCarrinho() {
    navigation.navigate("(Carrinho)");
  }
  const [refreshing, setRefreshing] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header navigation={navigation} />

        <View style={styles.viewTitle}>
          <Text style={styles.title}>Outono até Inverno .</Text>
        </View>

        <View>
          <Text style={styles.subtitle}>Blusas</Text>
          <Blusas />
        </View>

        <View>
          <Text style={styles.subtitleCalca}>Calças</Text>
          <Calcas />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 320,
    borderRadius: 10,
  },

  viewTitle: {
    marginBottom: 20,
  },
  title: {
    fontSize: 23,
    fontWeight: "700",
    textAlign: "center",
  },

  subtitle: {
    fontSize: 20,
    fontWeight: "500",
    textAlign: "right",
    marginBottom: 10,
  },
  subtitleCalca: {
    fontWeight: "500",
    paddingRight: 10,
    fontSize: 20,
    marginBottom: 10,
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
