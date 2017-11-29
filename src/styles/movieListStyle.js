import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        marginHorizontal: 16
      },
    card: {
      backgroundColor: 'black',
      borderRadius: 3,
      minHeight: 148,
      flexDirection: 'row',
      paddingRight: 16,
      overflow: 'hidden'
    },
    cardImage: {
        height: 163,
        width: 120,
        borderTopLeftRadius: 3,
        borderBottomLeftRadius: 3,
        flex: 0.5
    },
    cardDetails: {
      paddingLeft: 10,
      flex: 1,
      flexDirection: 'column',
      maxHeight: 160
    },
    cardTitle: {
		color: 'white',
		fontSize: 13,
		fontWeight: '500',
        paddingTop: 10,
    },
    cardRatings: {
        flexDirection: 'row',
        marginTop: 5
    },
    cardStarRatings: {
        color: 'white',
		marginLeft: 5,
		fontSize: 12
    },
    cardDescription: {
		color: '#636363',
		fontSize: 13,
		marginTop: 5
    },
});

export default styles;