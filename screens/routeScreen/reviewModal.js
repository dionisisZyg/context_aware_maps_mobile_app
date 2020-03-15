import React from "react";
import { Text, TouchableHighlight, View, Alert, StyleSheet} from 'react-native';
import {Button, Form, Textarea} from "native-base";
import Modal from "react-native-modal";
import {AirbnbRating} from "react-native-ratings";
import {DEFAULT_RATING} from "../../constants/constants";

const ReviewModal = (props) => {
    const {
        closeModal,
        isModalOpen,
        rating,
        review,
        onFinishRating,
        onReviewChange,
        onRateSubmit
    } = props;
    return (
        <Modal
            isVisible={isModalOpen}
            onSwipeComplete={closeModal}
            swipeDirection={['down']}
        >
            <View  style={styles.content}>
                <Textarea
                    rowSpan={5}
                    bordered
                    placeholder="Route Review"
                    name={"review"}
                    value={review}
                    onChangeText={onReviewChange}
                />
                <AirbnbRating
                    showRating={false}
                    count={5}
                    onFinishRating={onFinishRating}
                    defaultRating={DEFAULT_RATING}
                    size={20}
                />
                <Button block primary onPress={onRateSubmit}>
                    <Text>Rate</Text>
                </Button>
                <Button block transparent onPress={closeModal}>
                    <Text>Cancel</Text>
                </Button>
            </View>
        </Modal>
    )
};

const styles = StyleSheet.create({
    content: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    contentTitle: {
        fontSize: 20,
        marginBottom: 12,
    },
});

export default ReviewModal;