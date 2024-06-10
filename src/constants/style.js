import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({

    simpleRow:{
        flexDirection: 'row',
        alignItems:"center"
    },


    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },

    alignText: {
        flexDirection:'column',
        alignItems: 'center',
        
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 24,
        color:"white"
    },
    descriptionConvert: {
        paddingHorizontal:10,
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 24,
        color:"white"
    },
    descriptionCenterConvert: {
        paddingHorizontal:10,
        fontSize: 13,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 24,
        color:"white",
        opacity:0.6
    },
    inputContainer: {
        marginBottom: 16,
        paddingHorizontal: 10,
    },
    label: {
        fontSize: 18,
        marginBottom: 8,
        color:"white"
    },
    input: {
        color:"white",
        height: 55,
        borderColor: "white",
        borderWidth: 1,
        fontWeight: '600',
        borderRadius: 10,
        paddingHorizontal: 20,
        fontSize: 16,
    },
  
    extractView:{
    backgroundColor:"#8D90E7",
    height:230,
    borderBottomRightRadius:20,
    borderBottomLeftRadius:20,
    justifyContent:"space-between"
    },
    
    creditCardView:{
    backgroundColor:"#8D90E7",
    height:200,
    width:370,
    borderRadius:20,
    },

    alignCard:{
    paddingTop:40,
    alignSelf:"center"
    },

    rowExtract: {
        flex:1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
      },
   creditCardrow: {
        flexDirection: 'row',
        alignItems: 'center',
      },
   creditCardColumn: {
    paddingTop:20,
        flexDirection: 'column',
        alignItems: 'center',
      },
    row: {
        flex:1,
        paddingLeft:10,
        flexDirection: 'row',
        alignItems: 'center',
        
      },
    rowButtonIcon: {
        paddingHorizontal:10,
        justifyContent:"space-around",
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        
      },
    rowCredit: {
       paddingBottom:20,
        paddingLeft:10,
        paddingRight:20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      columnCredit: {
        paddingTop:20,
        flex:1,
        justifyContent:"space-between",
        flexDirection: 'column',
      },
      column: {
        paddingLeft:10,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      },
      columnExtract: {
        paddingTop:60,
        paddingLeft:20,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      },
      columnDetails: {
        paddingTop:20,
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
      fontDetails: {
        color: "white",
        fontSize: 25,
        fontWeight: 'bold'
      },
     listGastos:{
        paddingTop:30,

    },

    safeArea: {
        height:"100%",
        backgroundColor: '#161622'
    },
    viewExtract: {
        height:"100%",
        backgroundColor: '#161622'
    },
    safeAreaa: {
        backgroundColor: '#2D2D2D'
    },

    textContainer: {
        overflow:"hidden",
        height: 80,
        backgroundColor: "#1D1D2C",
        borderRadius: 10,
     
    },

    imageExtract: {
        backgroundColor:"white",
        height: 50,
        width: 50,
        borderRadius: 10,
        alignItems:"center",
        justifyContent:"center"
    },

    alignBack:{
        flexDirection: 'column',
        paddingLeft: 10,
        height:49,
        position: 'absolute',
        left: 0, // Garante que está alinhado à esquerda, você pode ajustar conforme necessário
        right: 0, // Garante que ocupa a largura total, você pode ajustar conforme necessário
        justifyContent: 'flex-end',
        alignItems: 'flex-start', // 
    },
 
    image: {
        borderRadius:50,
        alignSelf: "flex-end",
        flexDirection: "column",
        height: 40,
        width: 40
    },
    viewRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingRight: 10,
        paddingLeft: 10,

    },
    viewRowExtract: {
        flexDirection: "row",
        paddingRight: 10,
        paddingLeft: 10,

    },
    textTitle: {
        color: "white",
        fontSize: 25,
        fontWeight: 'bold'
    },
    textExtractTitle: {
        color: "white",
        fontSize: 20,
        fontWeight: 'bold'
    },
    creditNumber: {
        color: "white",
        fontSize: 18,
        fontWeight: 'bold'
    },
    viewCardHome: {
       position:"absolute"
    },
    textSub: {
        color: "white",
        fontSize: 13,
        fontWeight: 'bold'
    },
    textSubContacts: {
        color: "white",
        fontSize: 13,
        textAlign:"center",
        fontWeight: 'bold'
    },
    textValorExtract: {
        color: "white",
        fontSize: 40,
        fontWeight: 'bold'
    },


    //home
    topContainer:{
        height:330,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        backgroundColor:"#8D90E7"
    },
    topContainerConvert:{
        height:390,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        backgroundColor:"#8D90E7"
    },
    alignBalance:{
        paddingTop:40,
        alignSelf:"center",
    },
    textBalance:{
      fontSize:40,
      color:"white",
      fontWeight:"600"
    },
    buttonHome:{
        borderRadius:30,
        height:55,
        width:130,
        fontSize:40,
        backgroundColor:"#8D90E7",
        borderWidth:1.5,
        borderColor:"white"
        
    },
    buttonHomeCircle:{
        borderRadius:100,
        height:55,
        width:55,
        fontSize:40,
        backgroundColor:"#8D90E7",
        borderWidth:1.5,
        borderColor:"white",
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonVisibleCircle:{
        borderRadius:100,
        height:30,
        width:30,
        borderWidth:1.5,
        borderColor:"white",
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonHomeCircleTransparent:{
        borderRadius:100,
        height:55,
        width:55,
        fontSize:40,
        backgroundColor:"transparent",
        borderWidth:1.5,
        borderColor:"white",
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContacts:{
        borderRadius:100,
        height:65,
        width:65,
        fontSize:40,
        backgroundColor:"#8D90E7",
        justifyContent: 'center',
        alignItems: 'center',
    },
    alignTextButton:{ height:"100%",
        justifyContent: 'center', 
        alignItems:"center",
        alignSelf:"center",
    },
    textButton: {
        color: "white",
        fontSize: 16,
        fontWeight: 'bold'
    },
  
});


export default {styles} ;