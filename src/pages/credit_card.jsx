import React from 'react';
import {
    FlatList,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import { styles } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { CreditCardComponent, InnerList } from '../components';

const CreditCard = ({ navigation, route }) => {
    const { item } = route.params;
    return (
        <SafeAreaView style={styles.styles.safeArea}>

            <FlatList
                ListHeaderComponent={() => (
                    <View>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Icon
                                paddingLeft={10}
                                name="arrow-left" size={20} color="#fff" />
                        </TouchableOpacity>
                        <View style={styles.styles.alignCard}>
                            <CreditCardComponent
                                valorTotal={item.valorTotal}
                                cardNumber={item.cardNumber}></CreditCardComponent>
                        </View>
                        <View style={styles.styles.listGastos}>
                            <Text
                                paddingLeft={10}
                                style={styles.styles.textSub}>
                                Extrato
                            </Text>
                            <FlatList
                                paddingLeft={10}
                                paddingRight={10}
                                data={item.extract.extractCard}
                                paddingTop={20}
                                ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                                renderItem={({ item }) => (
                                    <InnerList extractCard={item} navigation={navigation} />
                                )}
                            />
                        </View>
                    </View>
                )}
            />
        </SafeAreaView>
    )
}



export default CreditCard;
