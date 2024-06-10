import React from 'react';
import {
    FlatList,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import { images, styles } from '../constants';
import Entypo from 'react-native-vector-icons/Entypo';



const InnerList = ({ extractCard, navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Details', { item: extractCard })}>
            <View>
                <View style={styles.styles.textContainer}>
                    <View style={styles.styles.rowExtract}>
                        <View style={styles.styles.row}>
                            <View style={styles.styles.imageExtract}>

                                <Entypo
                                    name={extractCard.icon} size={20} color='#161622' />
                            </View>
                            <View style={styles.styles.column}>
                                <Text style={styles.styles.textExtractTitle}>{extractCard.title}</Text>
                                <Text style={styles.styles.textSub}>{extractCard.data}</Text>
                            </View>
                        </View>
                        <View>
                            <Text
                                paddingRight={10}
                                style={styles.styles.textExtractTitle}>R$ {extractCard.valor}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}



export default InnerList
