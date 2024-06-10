import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import { styles } from '../constants';

const DefaultButton = ({ icon, title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.styles.buttonHome}>
                <View
                    style={styles.styles.rowButtonIcon}>
                    <MaterialIcons
                        name={icon} size={20} color="#fff" />
                    <Text style={styles.styles.textButton}>{title}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}


DefaultButton.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
};

export default DefaultButton