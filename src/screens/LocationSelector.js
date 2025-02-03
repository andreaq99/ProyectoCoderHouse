import { StyleSheet, Text, View } from 'react-native'
import SubmitButton from '../components/SubmitButton'
import MapPreview from '../components/MapPreview'
import { googleapi } from '../googleApi'
import { useSelector } from 'react-redux'
import { usePatchLocationMutation } from '../services/user'
import { useNavigation } from '@react-navigation/native'
import * as Location from "expo-location";
import { useEffect, useState } from "react";

const LocationSelector = () => {

    const navigation = useNavigation()
    const localId = useSelector(state => state.user.localId)
    const [triggerLocation] = usePatchLocationMutation()
    const [address, setAddress] = useState("")
    const [location, setLocation] = useState({
        lat: "",
        long: ""
    })

    useEffect(() => {
        const getLocation = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                return;
            }

            let loc = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });

            setLocation({
                lat: loc.coords.latitude,
                long: loc.coords.longitude
            });
        }

        getLocation();
    }, []);

    useEffect(() => {
        const getAddress = async () => {
            if (location.lat && location.long) {
                const urlReverseGeocoding =  `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.long}&key=${googleapi}`;
                try {
                    const response = await fetch(urlReverseGeocoding);
                    const data = await response.json();

                    if (data.status === "OK" && data.results.length > 0) {
                        setAddress(data.results[0].formatted_address);
                    } else {
                        setAddress("Dirección no encontrada");
                    }
                } catch (error) {
                    setAddress("Error al obtener la dirección");
                }
            }
        }

        getAddress();
    }, [location]);

    const handleConfirmLocation = () => {
        triggerLocation({ localId, address, location });
        navigation.navigate("MyProfile");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.dir}>Dirección: {address}</Text>
            <MapPreview location={location}/>
            <SubmitButton title="Confirmar Ubicacion" onPress={handleConfirmLocation}/>
        </View>
    );
};

export default LocationSelector;

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        alignItems: 'center',
        gap: 15
    }
});
