import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { List, ListItem, SearchBar } from 'react-native-elements'

class FlatListDemo extends Component {
    constructor(props) {
        super(props);

        this.state={
            loading: true,
            data: [],
            page: 2,
            seed: 1,
            error: null,
            refreshing: false
        };
    }

    componentDidMount() {
        this.makeRemoteRequest();
    }

    makeRemoteRequest = () => {
        const { page, seed } = this.state;
        const url = `https://randomuser.me/api?seed=${seed}&page=${page}&results=20`;
        this.setState({ loading: true });
        fetch(url)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: page === 1 ?  res.results : [...this.state.data, ...res.results],
                    error: res.error || null,
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
                            title={`${item.name.first} ${item.name.last}`}
                            subtitle={item.email}
                            avatar={{ uri: item.picture.thumbnail }}
                            containerStyle={{ borderBottomWidth: 0}}
                        />
                    )}
                    keyExtractor={item => item.email} // having key for each items (normally database keys)
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
      backgroundColor: '#F5FCFF',
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
    }
});
  
  export default FlatListDemo;