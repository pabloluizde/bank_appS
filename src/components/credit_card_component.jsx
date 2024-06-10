import PropTypes from 'prop-types';
import {
    Text,
    View,
} from 'react-native';
import { styles, } from '../constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const CreditCardComponent = ({ cardNumber, valorTotal }) => {
    return (
        <View style={styles.styles.creditCardView}>
            <View style={styles.styles.columnCredit}>
                <View style={styles.styles.rowCredit}>
                    <FontAwesome paddingLeft={10}
                        name="dollar" size={25} color="#fff" />
                    <View style={styles.styles.column}>
                        <Text style={styles.styles.creditNumber}>{valorTotal}</Text>
                    </View>
                </View>
                <View style={styles.styles.rowCredit}>
                    <View style={styles.styles.column}>
                        <Text style={styles.styles.creditNumber}>{cardNumber}</Text>
                        <View style={styles.styles.creditCardrow}>
                            <Text style={styles.styles.textSub}>VALID: </Text>
                            <Text style={styles.styles.textSub}>09/28</Text>
                        </View>
                    </View>
                    <FontAwesome
                        name="cc-visa" size={30} color="#fff" />
                </View>
            </View>
        </View>
    )
}

CreditCardComponent.propTypes = {
    valorTotal: PropTypes.string.isRequired,
    cardNumber: PropTypes.string.isRequired,
};
export default CreditCardComponent;