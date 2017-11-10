import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, Image } from 'react-native';
import { List, ListItem, SearchBar } from 'react-native-elements'


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
        
        // 데이터 받아와서 listview로 뿌릴 수 있도록 개발 ...
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
                    backgroundColor: "#CED0CE",
                    marginLeft: "14%"
                }}
            />
        );
    };

    renderHeader = () => {
        return <SearchBar placeholder="Type here..." lightTheme round />;
    };

    render() {
        if(this.state.loading) {
            return (
                <View style = {styles.container}>
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
            <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>                
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => (
                        <ListItem
                            roundAvatar
                            title={item.title}
                            subtitle={
                                <View style={styles.cardDetails}>
                                    <Image source={{ uri: `https://image.tmdb.org/t/p/w185/${item.poster_path}` }} style={styles.cardImage} />
                                    <Text> {item.overview} </Text>
                                </View>
                            }
                            containerStyle={{ borderBottomWidth: 0}}
                        />
                    )}
                    keyExtractor={item => item.id} // having key for each items (normally database keys)
                    ItemSeparatorComponent={this.renderSeparator}
                    ListHeaderComponent={this.renderHeader}
                    
                />
            </List>            
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000000',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
    },
    cardImage: {
		height: 163,
		width: 120,
		borderTopLeftRadius: 3,
		borderBottomLeftRadius: 3
    },
    card: {
		backgroundColor: 'white',
		borderRadius: 3,
		minHeight: 148,
		flexDirection: 'row',
		paddingRight: 16,
        overflow: 'hidden'
    },
    cardDetails: {
		paddingLeft: 10,
        flex: 1
    }
});
  
  export default MovieListDemo;