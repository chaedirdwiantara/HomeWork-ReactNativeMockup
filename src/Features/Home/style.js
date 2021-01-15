/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const Radius = 35;

export const HomeStyle = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'space-between',
  },

//TOP CONTAINER STYLE AREA  
  topContainer: {
    height: 200,
    backgroundColor: '#879FAF',
    borderBottomLeftRadius: Radius,
    borderBottomRightRadius: Radius,
    paddingHorizontal: 30,
  },
  HeroContainer: {
    marginTop: 50,
    height: 220,
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  HeroProfile: {       
    flexDirection: 'row',
  },
  HeroTxt:{    
    // paddingHorizontal: 10,
    paddingLeft: 20,
    justifyContent: 'space-around',
  },

  HeroAbility: {    
    marginTop: 7,
    flexDirection: 'row',    
    backgroundColor: "#F2F5FA",
    borderRadius:7,
  },

  HeroAbilityPart:{        
    padding: 9,
    justifyContent: 'space-around',
    alignItems: 'center',    
  },

  HeroAbilityTxt:{
    fontSize: 10,
    color: 'black',
  },

  HeroImage: {
    height: 110,
    width: 110,
    borderRadius: 10,
  },
  ButtonHeroContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  ButtonContainer: {
    height: 40,
    width: 140,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    elevation: 2,
  },
  firstButton: {
    backgroundColor: 'white',
  },
  secondButton: {
    backgroundColor: '#5374FF',
  },
// END OF TOP CONTAINER STYLE AREA

// BOTTOM ZONE STYLE AREA
  BottomContainer: {
    flex:1,
    // height: 800,
    paddingTop:100, 
    paddingHorizontal:30,
    justifyContent: 'space-between',
    // backgroundColor: 'red',    
  },
  BottomContainerAlpha:{
    flex:2
  },
  BottomHeader:{
    flex:1,
    // height:100,
    // backgroundColor:'purple',
  },
  BottomMain:{
    flex:3,
    // height:100,
    // backgroundColor: 'red',
    paddingVertical: 5,
  },
  HeroGallery: {    
    height: '120%',
    width: 160,
    marginRight: 20,
  },
  HeroImageGallery: {
    flex:1,
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  HeroTextGallery: {
    flex:1,    
  },  
  BottomFooter:{
    flex:1,
    marginBottom: 50,
    padding: 25,
    height:100,
    backgroundColor: '#738E95',
    borderRadius: 10,    
  },  
  BottomFooterPage:{        
    // backgroundColor: 'lightblue',
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  Article: {    
    // backgroundColor: 'red',
    paddingRight: 110,
  },
  ArticleButton: {
    height: 30,
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    elevation: 2,
    backgroundColor: '#3D636B',
    marginBottom: 20,
  },
// END OF BOTTOM ZONE STYLE AREA
});
