import React, { useState } from 'react';
import {
    FlatList,
    TextInput,
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { images, styles, lists } from '../constants';
import { CreditCardComponent, DefaultButton } from '../components';
import Icon from 'react-native-vector-icons/Entypo';
import Entypo from 'react-native-vector-icons/Entypo';


const Home = ({ navigation }) => {

    const [isBalanceVisible, setIsBalanceVisible] = useState(true);

    const toggleBalanceVisibility = () => {
        setIsBalanceVisible(!isBalanceVisible);
    };

    return (
        <View
            height={"100%"}
            style={styles.styles.safeArea}>
            <View style={styles.styles.topContainer}>

                <View
                    paddingTop={60}
                    style={styles.styles.viewRow}>
                    <View >
                        <Text style={styles.styles.textSub}>
                            Welcome, Back
                        </Text>
                        <Text style={styles.styles.textTitle}>
                            Pablo Luiz
                        </Text>
                    </View>
                    <Image
                        style={styles.styles.image}
                        source={images.logo}></Image>
                </View>
                <View style={styles.styles.alignBalance}>
                    <Text alignSelf={"center"} style={styles.styles.textSub}>Seu saldo</Text>
                    <View style={styles.styles.simpleRow}>
                        <Text
                            paddingRight={10}
                            style={styles.styles.textBalance}> {isBalanceVisible ? 'R$ 12.302,00' : 'R$ ****'}</Text>
                        <TouchableOpacity
                            onPress={toggleBalanceVisibility} style={styles.toggleButton} >
                            <View
                                style={styles.styles.buttonVisibleCircle}>
                                <Entypo name={isBalanceVisible ? "eye" : "eye-with-line"} size={20} color="#fff" />

                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View paddingTop={40}>
                    <View style={styles.styles.viewRow}>
                        <DefaultButton icon='pix'
                            title='Pix'
                            onPress={() => navigation.navigate('Convert')}
                        >
                        </DefaultButton>
                        <DefaultButton icon='swap-vert'
                            title='Converter'
                            onPress={() => navigation.navigate('Convert')}
                        ></DefaultButton>
                        <TouchableOpacity >
                            <View style={styles.styles.buttonHomeCircle}>
                                <Icon name="dots-three-vertical" size={24} color="#fff" />

                            </View>
                        </TouchableOpacity>

                    </View>


                </View>

            </View >
            <View paddingTop={20}>
                <FlatList
                    marginHorizontal={10}
                    data={lists.contactLis}
                    horizontal
                    ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
                    renderItem={({ item }) => (
                        <TouchableOpacity >
                            <View style={styles.styles.creditCardColumn}>
                                <View style={styles.styles.buttonContacts}>
                                    <Text style={styles.styles.textTitle}>{item.abrevition}</Text>
                                </View>
                                <View width={65}
                                    style={styles.styles.alignText}
                                >
                                    <Text
                                        paddingTop={10}
                                        numberOfLines={2}
                                        style={styles.styles.textSubContacts}>{item.name}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}>
                </FlatList>
            </View >
            <View>
                <FlatList
                    data={lists.extractList}
                    paddingTop={20}
                    marginHorizontal={10}
                    horizontal
                    ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('CreditCard', { item })}>
                            <CreditCardComponent
                                valorTotal={item.valorTotal}
                                cardNumber={item.cardNumber}></CreditCardComponent>
                        </TouchableOpacity>
                    )}>
                </FlatList>
            </View>
            <View>
            </View>
        </View >
    )
}

export default Home;


