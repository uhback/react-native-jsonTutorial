import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator, Image } from 'react-native';
import { List, ListItem, SearchBar } from 'react-native-elements';

import styles from '../styles/mainStyle';
import MovieListCard from '../Components/MovieListCard';
import { TMDB_API, TMDB_IMG_API, TMDB_API_KEY } from '../Constants/Api';

class MovieListDemo extends Component {
    constructor(props) {
        super(props);

        this.state={
            loading: false,
            data: [],
            page: 2,
            seed: 1,
            error: null,
            refreshing: false,
        };
    }
    
    componentDidMount() {
        this.makeRemoteRequest();
    }

    makeRemoteRequest = () => {

        const { page, seed } = this.state;
        const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d239afcaaca8fb95d5eb2aefa1fae54f&page=${page}`;
        this.setState({ loading: true });


        fetch(url)
            .then(res => res.json())
            .then(resJson => {
                this.setState({
                    data: page === 1 ?  resJson.results : [...this.state.data, ...resJson.results],
                    error: resJson.error || null,
                    loading: false,
                    refreshing: false
                });
            })
            .catch(error => {
                this.setState({ error, loading: false });
            });
    };

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "86%",
                    backgroundColor: "#CED0CE"
                }}
            />
        );
    };

    renderHeader = () => {
        return <SearchBar placeholder="Type here..." lightTheme round />;
    };

    // Activity Indicator rending
    render() {
        if(this.state.loading) {
            return (
                <View style = {styles.actIndiContainer}>
                    <ActivityIndicator
                        animating={this.state.animating}
                        color='#CED0CE'
                        size="large"
                        style={styles.activityIndicator}
                    />
                </View>
            );
        }
        return (
            // <FlatList
            //     data={this.state.data}
            //     renderItem={({ item }) => (
            //         <ListItem
            //             title={
            //                 <Text style={styles.cardTitle}>{item.title}</Text>
            //             }
            //             subtitle={
            //                 <View style={styles.cardDetails}>
            //                     <View style={styles.cardImage}>
            //                         <Image source={{ uri: `https://image.tmdb.org/t/p/w185/${item.poster_path}` }} />
            //                     </View>
            //                     <View style={styles.cardInfo}>
            //                         <View style={styles.cardInfoTop}>
            //                             <Text> {item.genre_ids[0]} </Text>
            //                         </View>
            //                         <View style={styles.cardInfoBottom}>
            //                             <Text> {item.overview} </Text>
            //                         </View>
            //                     </View>
            //                 </View>                        
            //             }
            //             //style={styles.card}
            //             //containerStyle={{ borderBottomWidth: 0}}
            //         />
            //     )}
            //     keyExtractor={item => item.id} // having key for each items (normally database keys)
            //     ItemSeparatorComponent={this.renderSeparator}
            //     //ListHeaderComponent={this.renderHeader}
            // />
            <FlatList
                data={this.state.data}
                renderItem={({ item }) => (
                    <MovieListCard info={item} />
                )}
                keyExtractor={item => item.id} // having key for each items (normally database keys)
                ItemSeparatorComponent={this.renderSeparator}
            //ListHeaderComponent={this.renderHeader}
            />
        );
    }
}

export default MovieListDemo;