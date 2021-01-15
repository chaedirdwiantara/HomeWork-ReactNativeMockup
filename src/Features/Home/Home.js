import React, {Component} from 'react';
import {ScrollView, Text, View, Image, TouchableOpacity, YellowBox} from 'react-native';
import {HomeStyle} from './style';
import {GlobalStyle} from '../../Shared/GlobalStyle/style';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
      image:
        'https://images.unsplash.com/photo-1603931259357-41675cfd78ac?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1650&q=80',
    };
  }

  changeImage() {
    if (this.state.status) {
      this.setState({
        status: false,
        image:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      });
    } else {
      this.setState({
        status: true,
        image:
          'https://images.unsplash.com/photo-1515734674582-29010bb37906?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      });
    }
  }

  render() {
    return (
      <View style={[HomeStyle.Container]}>
{/* TOP CONTAINER ZONE */}
        <View style={HomeStyle.topContainer}>
          <View style={HomeStyle.HeroContainer}>
            <View style={HomeStyle.HeroProfile}>
                <Image
                  source={{uri: this.state.image}}
                  style={HomeStyle.HeroImage}
                />
                <View style={HomeStyle.HeroTxt}>
                  <View>
                    <Text style={{color: 'black', fontSize:18, fontWeight:'bold'}}>Ratu Elizabeth</Text>
                    <Text style={{fontWeight:'bold', color: '#B3BEC5'}}>Queen of England</Text>
                  </View>   
                  <View style={HomeStyle.HeroAbility}>
                    <View style={HomeStyle.HeroAbilityPart}>
                      <Text style={HomeStyle.HeroAbilityTxt}>Acticles</Text>
                      <Text style={{color: 'blue'}}>30</Text>
                    </View>
                    <View style={HomeStyle.HeroAbilityPart}>
                      <Text style={HomeStyle.HeroAbilityTxt}>Followers</Text>
                      <Text style={{color: 'blue'}}>10</Text>
                    </View>
                    <View style={HomeStyle.HeroAbilityPart}>
                      <Text style={HomeStyle.HeroAbilityTxt}>Rating</Text>
                      <Text style={{color: 'blue'}}>4.0</Text>
                    </View>                    
                  </View>                  
                </View>                
            </View>  
            <View style={HomeStyle.ButtonHeroContainer}>
              <TouchableOpacity
                style={[HomeStyle.ButtonContainer, HomeStyle.firstButton]}>
                <Text>Chat</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[HomeStyle.ButtonContainer, HomeStyle.secondButton]}>
                <Text style={{color: 'white'}}>Follow</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
{/*END OF TOP CONTAINER ZONE */}

{/* BOTTOM CONTAINER ZONE */}
        <View style={HomeStyle.BottomContainer}>
          <View style={HomeStyle.BottomContainerAlpha}>
            <View style={HomeStyle.BottomHeader}>
              <Text style={{fontWeight:'bold', fontSize:18}}>Notable Works</Text>
              <Text style={{fontWeight: 'bold', color: '#B3BEC5'}}>Based on the popularity of Articles</Text>
            </View>
            <View style={HomeStyle.BottomMain}>
              {/* Scroll View zone */}
            <ScrollView horizontal={true} style={HomeStyle.BottomMain} >
              <View style={HomeStyle.HeroGallery}>                
                <Image
                  source={{uri: this.state.image}}
                  style={HomeStyle.HeroImageGallery}
                /> 
                <View style={HomeStyle.HeroTextGallery}>
                  <Text style={{fontSize:12, color:'#B3BEC5', fontWeight:'bold'}}>Queen Kekeyi</Text>
                  <Text style={{fontSize:14, fontWeight:'bold'}}>Based on true story </Text>
                </View>                
              </View>    
              <View style={HomeStyle.HeroGallery}>
                <Image
                  source={{uri: this.state.image}}
                  style={HomeStyle.HeroImageGallery}
                /> 
                <View style={HomeStyle.HeroTextGallery}>
                  <Text style={{fontSize:12, color:'#B3BEC5', fontWeight:'bold'}}>Ivan Gunawan</Text>
                  <Text style={{fontSize:14, fontWeight:'bold'}}>Aku gak tau apa yang harus kutulis </Text>
                </View>
              </View>  
              <View style={HomeStyle.HeroGallery}>
                <Image
                  source={{uri: this.state.image}}
                  style={HomeStyle.HeroImageGallery}
                /> 
                <View style={HomeStyle.HeroTextGallery}>
                  <Text style={{fontSize:12, color:'#B3BEC5', fontWeight:'bold'}}>Dorce Gamalama</Text>
                  <Text >Orang ini lagi galau gaessss</Text>
                </View>
              </View>                       
              
            </ScrollView>
              {/* End Scroll View zone */}
          </View>          
          </View>
          <View style={HomeStyle.BottomFooter}>
            <View style={HomeStyle.BottomFooterPage}>
              <View style={HomeStyle.Article}>
                <TouchableOpacity
                  style={HomeStyle.ArticleButton}>
                  <Text style={{color:'white'}}>Featured Articles</Text>
                </TouchableOpacity>
              </View>                
              <Text style={{color:'white', fontWeight:'bold'}}>Menampilkan gambar-gambar wanita sexy di seluruh pelosok nusantara</Text>
            </View>
          </View>
          {/* <TouchableOpacity
            onPress={() => this.changeImage()}
            activeOpacity={0.7}
            style={[HomeStyle.ButtonContainer, HomeStyle.secondButton]}>
            <Text style={{color: 'white'}}>Follow</Text>
          </TouchableOpacity> */}
        </View>
{/*END BOTTOM CONTAINER ZONE */}
      </View>
    );
  }
}

export default Home;
