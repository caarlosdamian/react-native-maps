import * as React from "react";
import MapView, { Callout, Circle, Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";

export default function App() {
  const [pin, setPin] = React.useState({
    latitude: 19.285013,
    longitude: -103.7327,
  });
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 19.2433,
          longitude: -103.725,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        // provider="google"
      >
        <Marker
          coordinate={pin}
          draggable={true}
          onDragStart={(e) => console.log(e.nativeEvent.coordinate)}
          onDragEnd={(e) =>
            setPin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            })
          }
        >
          <Callout>
            <Text>{JSON.stringify(pin)}</Text>
          </Callout>
        </Marker>
        <Circle
          center={pin}
          radius={1000}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
