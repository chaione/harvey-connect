import { StyleSheet } from 'react-native';

export const Colors = {
    green: '#009000',
    maroon: '#800000',
    darkblue: '#000080',
    needText: '#505E65',

    white: '#FFFFFF',
    red: '#FF5A5F',
    cyan: '#50E3C2',
    blue: '#0080FE',
    black: '#505E65',
    grey: '#A2AEB6',
}

export const _dropShadowStyles = {
    shadowRadius: 1,
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.7,
    shadowColor: 'black',
    elevation: 4
};

export const TitleText = {
    fontSize: 32,
    color: Colors.black,
}

export const PlainText = {
    fontSize: 24,
    color: Colors.black,
    fontWeight: '300',
}

export const ButtonText = {
    fontSize: 32,
    color: Colors.black,
}

export const styles = StyleSheet.create({
    cardSheet: {
        left: 0,
        right: 0,
        bottom: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'absolute',
    },

    cardViewContainer: {
        flex: 1,
        height: 240,
        borderRadius: 50,
    },

    actionButtonContainer: {
        height: 44,
        flexDirection: 'row',
        alignContent: 'space-around',
        justifyContent: 'space-between',
        margin: 10,
    },
    actionButton: {
        height: 44,
        flex: 1,
        backgroundColor: 'green',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 50,
        marginRight: 10,
        marginLeft: 10,
        ... _dropShadowStyles
    },
    actionButtonSpacer: {
        height: 0,
        flex: 1,
        flexDirection: 'row',
        marginRight: 0,
        marginLeft: 0,
    },
    actionButtonIcon: {
        color: "#FFF",
        marginRight: 8
    },
    actionButtonFilter: {
        backgroundColor: '#FF5A5F',
    },
    actionButtonNeed: {
        backgroundColor: '#0080FE',
    },
    actionButtonText: {
        color: 'white',
        fontSize: 15
    },
    pageControl: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 15
    },
    pageControlIndicator: {
        borderRadius: 5
    },

});