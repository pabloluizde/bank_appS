import React from 'react';
import {
    FlatList,
    TextInput,
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView
} from 'react-native';
import { images, styles, lists } from '../constants';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';


const Details = ({ navigation, route }) => {
    const { item } = route.params;
    return (
        <View style={styles.styles.safeArea}>
            <View >
                <View style={styles.styles.extractView}>
                    <View style={styles.styles.viewRowExtract}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Icon
                                paddingTop={60}
                                name="arrow-left" size={20} color="#fff" />
                        </TouchableOpacity>
                        <View style={styles.styles.columnExtract}>
                            <Text style={styles.styles.creditNumber}>{item.title}</Text>
                            <Text style={styles.styles.textValorExtract}>R$ - {item.valor} </Text>
                        </View>
                    </View>
                    <View
                        alignItems={"flex-start"}
                        style={styles.styles.simpleRow}>
                        <Text
                            paddingBottom={20}
                            paddingLeft={10}
                            style={styles.styles.textSub}>Data:</Text>
                        <Text
                            paddingBottom={20}
                            paddingLeft={10}
                            style={styles.styles.creditNumber}>{item.data} </Text>
                    </View>
                </View>

                <View
                    paddingTop={20}
                    justifyContent={"center"}
                    style={styles.styles.creditCardColumn}>
                    <View
                        justifyContent={"center"}
                        style={styles.styles.viewRowExtract}>
                        <TouchableOpacity >
                            <View style={styles.styles.buttonHomeCircleTransparent}>
                                <AntIcon name="warning" size={24} color="#fff" />

                            </View>
                        </TouchableOpacity>
                    </View>
                    <Text
                        paddingTop={10}
                        style={styles.styles.textSub}>
                        Relatar Problema
                    </Text>
                </View>
                <View style={styles.styles.listGastos}>
                    <Text
                        paddingLeft={10}
                        style={styles.styles.textSub}>
                        Infos
                    </Text>
                    <View style={styles.styles.columnDetails}>
                        <Text
                            paddingLeft={10}
                            style={styles.styles.textSub}>
                            Cartão usado
                        </Text>
                        <Text
                            paddingLeft={10}
                            style={styles.styles.fontDetails}>
                            {item.cardNumber}
                        </Text>
                    </View>
                    <View style={styles.styles.columnDetails}>
                        <Text
                            paddingLeft={10}
                            style={styles.styles.textSub}>
                            Forma de pagamento
                        </Text>
                        <Text
                            paddingLeft={10}
                            style={styles.styles.fontDetails}>
                            {item.paymentMethod}
                        </Text>
                    </View>
                    <View style={styles.styles.columnDetails}>
                        <Text
                            paddingLeft={10}
                            style={styles.styles.textSub}>
                            Categoria
                        </Text>
                        <Text
                            paddingLeft={10}
                            style={styles.styles.fontDetails}>
                            {item.category}
                        </Text>
                    </View>

                </View>
            </View>
        </View >
    );
}

export default Details