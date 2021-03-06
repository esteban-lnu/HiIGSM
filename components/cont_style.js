import {StyleSheet} from 'react-native';

const cont_style = StyleSheet.create({
    
    emailText:{
        fontSize: 18,
		color: '#1D3557',
		fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
      
    },
    nameText: {
        fontSize: 17,
        color: '#1D3557',
        fontWeight: 'bold',
        textAlignVertical: 'center',
        marginLeft: 10,
        marginTop: 5,
    },
    numberText:{
        fontSize: 12,
        color: '#4A4A4A',
        textAlignVertical: 'center',
        marginLeft: 10,
        marginBottom: 10,
    },
    photoContainer:{
            position: 'absolute',
            right: 30,
            // marginTop:5,
    },
});

export default cont_style;