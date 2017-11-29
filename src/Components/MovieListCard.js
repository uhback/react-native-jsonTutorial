import React, {Component} from 'react';
import {
	Image,
	Text,
	TouchableOpacity,
	View
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles/movieListStyle';

const iconStar = <Icon name="md-star" size={16} color="#F5B642" />;

class MovieListCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { info } = this.props;
        return (
            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <Image source={{ uri: `https://image.tmdb.org/t/p/w185/${info.poster_path}` }} 
                        style={styles.cardImage} />
                    <View style={styles.cardDetails}>
                        <Text
                            style={styles.cardTitle}
                            numberOfLines={3}>
                            {info.original_title}
                        </Text>
                        <View style={styles.cardRatings}>
                            {iconStar}
                            <Text style={styles.cardStarRatings}>
                                {info.vote_average.toFixed(1)}
                            </Text>
                        </View>
                        <Text style={styles.cardDescription} numberOfLines={5}>
                            {info.overview}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default MovieListCard;