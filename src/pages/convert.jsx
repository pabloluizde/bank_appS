import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { images, styles, lists } from '../constants';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const currencyConverter = (amount, rate) => {
    if (isNaN(amount) || amount === '') {
        return '';
    }
    return (amount * rate).toFixed(2);
};

const Convert = ({ navigation }) => {
    const [real, setReal] = useState('');
    const [dollar, setDollar] = useState('');

    const conversionRate = 0.20; // Exemplo de taxa de conversão fixa

    const handleRealChange = (value) => {
        const numericValue = parseFloat(value);
        if (!isNaN(numericValue)) {
            setReal(value);
            setDollar(currencyConverter(numericValue, conversionRate));
        } else {
            setReal('');
            setDollar('');
        }
    };

    const handleDollarChange = (value) => {
        const numericValue = parseFloat(value);
        if (!isNaN(numericValue)) {
            setDollar(value);
            setReal(currencyConverter(numericValue, 1 / conversionRate));
        } else {
            setDollar('');
            setReal('');
        }
    };

    return (
        <View
            height={"100%"}
            style={styles.styles.safeArea}>
            <View style={styles.styles.topContainerConvert}>
                <View
                    paddingTop={60}
                    paddingBottom={20}
                    style={styles.styles.viewRowExtract}
                >
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon
                            name="arrow-left" size={20} color="#fff" />
                    </TouchableOpacity>
                </View>
                <Text style={styles.styles.descriptionConvert}>Converter seu dinheiro nunca foi tão fácil e prático. Converta com uma das menores taxas do ramo</Text>
                <View style={styles.styles.inputContainer}>
                    <Text
                        paddingBottom={10}
                        style={styles.styles.textSub}>Reais (BRL):</Text>
                    <TextInput
                        style={styles.styles.input}
                        keyboardType="numeric"
                        value={real}
                        onChangeText={handleRealChange}
                        placeholder="Digite o valor em reais"
                        placeholderTextColor={"white"}
                    />
                </View>
                <View style={styles.styles.inputContainer}>
                    <Text
                        paddingBottom={10}
                        style={styles.styles.textSub}>Dólares (USD):</Text>
                    <TextInput
                        style={styles.styles.input}
                        keyboardType="numeric"
                        value={dollar}
                        onChangeText={handleDollarChange}
                        placeholder="Digite o valor em dólares"
                        placeholderTextColor={"white"}
                    />
                </View>

            </View >

            <View paddingTop={100}
                style={styles.styles.creditCardColumn}>
                <Text style={styles.styles.descriptionCenterConvert}>No momento estamos só fazendo a conversão para dolar, não fique triste com isso não!! Estamos trabalhando para encaixar mais moedas para que você aproveite ainda mais.</Text>

            </View>
        </View >

    );
};



export default Convert;
