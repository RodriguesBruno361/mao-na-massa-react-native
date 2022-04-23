import React, {useState} from 'react';
import {Button, Text, TextInput, View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const estilos = StyleSheet.create ({
  principal: {
    flex: 1,
    backgroundColor: '#cb2027'
  },

  text: {
    color: "#FFF",
    fontFamily: "Monotype Corsiva",
    fontWeight: "Bold",
    fontSize: 20
  },

  textInput: {
    fontSize: 12,
    backgroundColor: '#FFF',
    width: '45%',
    borderRadius: 7,
    padding: 10,
    textAlign: 'center'
  },

  crudPizza: {
    flex: 2,
    alignItems: 'center',
    paddingTop: 80
  },

  button: {
    alignItems: 'center',
    paddingBottom: 40,
  },

  lista: {
    paddingLeft: 20,
    marginTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: "darkgray",
  }
});

const CadastroPizzas = (props) => { 
  const [saborPizza, setSabor] = useState("");
  const [ingredientes, setIngredientes] = useState("");
  const [valor, setValor] = useState("0");
  
  return (
    <View style={estilos.principal}>
      <View style={estilos.crudPizza}>
      <Text style={estilos.text}>Sabor da Pizza</Text>
      <TextInput style={estilos.textInput} placeholder="Digite o sabor da pizza" value={saborPizza} 
                 onChangeText={(txt) => {
                      setSabor(txt);
                      }}/>
      <Text style={estilos.text}>Ingredientes</Text>
      <TextInput style={estilos.textInput} placeholder="Digite os ingredientes da pizza" 
            value={ingredientes} onChangeText={setIngredientes}/>
      <Text style={estilos.text}>Valor</Text>
      <TextInput style={estilos.textInput} placeholder="Digite o valor da pizza" 
            value={valor} onChangeText={setValor}/>
      </View>
      <View style={estilos.button}>
      <Button title="Adcionar" onPress={
        () => { 
          const obj = {
              saborPizza : saborPizza,
              ingredientes: ingredientes,
              valor: valor};

          const listaTemp = [...props.lista];
          listaTemp.push(obj);
          props.setLista(listaTemp);

          alert("A Lista contem " + 
                 listaTemp.length + " elementos");
        }
       }/>
       </View>
    </View>
  )
}

const CadastroPaes = (props) => { 
  const [tipoPao, setPao] = useState("");
  const [valorGrama, setvalorGrama] = useState("0");
  
  return (
    <View style={estilos.principal}>
      <View style={estilos.crudPizza}>
      <Text style={estilos.text}>Tipo de Pão</Text>
      <TextInput style={estilos.textInput} placeholder="Digite o tipo de pão" value={tipoPao} 
                 onChangeText={(txt) => {
                      setPao(txt);
                      }}/>
      <Text style={estilos.text}>A cada 100g</Text>
      <TextInput style={estilos.textInput} placeholder="" 
            value={valorGrama} onChangeText={setvalorGrama}/>
      </View>
      <View style={estilos.button}>
      <Button title="Adcionar" onPress={
        () => { 
          const obj = {
              tipoPao: tipoPao,
              valorGrama: valorGrama};

          const listaTemp = [...props.lista];
          listaTemp.push(obj);
          props.setLista(listaTemp);

          alert("A Lista contem " + 
                 listaTemp.length + " elementos");
        }
       }/>
       </View>
    </View>
  )
}

const ListaPizzas = (props) => { 
  const listaP = [
  ];
  for(let i = 0; i < props.lista.length; i++) {
    const obj = props.lista[i];
    listaP.push(
      <View style={estilos.lista}>
        <Text></Text>
        <Text style={estilos.text}>Pizza de: {obj.saborPizza} </Text>
        <Text style={estilos.text}>Ingredientes: {obj.ingredientes}</Text>
        <Text style={estilos.text}>Valor: {obj.valor}</Text>
      </View>
    );
  }
   return (
    <View style={estilos.principal}>
      <Text style={estilos.text}>PIZZAS</Text>
      {listaP}
    </View>
   );
}

const ListaPaes = (props) => { 
  const listaPd = [
  ];
  for(let i = 0; i < props.lista.length; i++) {
    const obj = props.lista[i];
    listaPd.push(
      <View style={estilos.lista}>
        <Text></Text>
        <Text style={estilos.text}>Pão de: {obj.tipoPao} </Text>
        <Text style={estilos.text}>Valor a cada 100g: {obj.valorGrama}</Text>
      </View>
    );
  }
   return (
    <View style={estilos.principal}>
      <Text style={estilos.text}>PADARIA</Text>
      {listaPd}
    </View>
   );
}

const Principal = (props) => { 

  const [listaPz, setListaPz] = useState([]);
  const [listaPs, setListaPs] = useState([]);

  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Pizzaria">
            {() => <CadastroPizzas {...props} lista={listaPz} setLista={setListaPz}/>}
          </Tab.Screen>
          <Tab.Screen name="Padaria">
            {() => <CadastroPaes {...props} lista={listaPs} setLista={setListaPs}/>}
          </Tab.Screen>
          <Tab.Screen name="Lista de Pizzas">
            {() => <ListaPizzas {...props} lista={listaPz} />}
          </Tab.Screen>
            <Tab.Screen name="Lista de Pães">
            {() => <ListaPaes {...props} lista={listaPs} />}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
  )
}

export default Principal;