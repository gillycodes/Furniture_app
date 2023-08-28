import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { SliderBox } from 'react-native-image-slider-box'
import { COLORS } from '../../constants';

const Carousel = () => {
    const slides = [
        "https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/small-living-room-ideas-section-2.jpg",
        "https://d326fntlu7tb1e.cloudfront.net/uploads/b1f6d96d-3297-4270-ba65-657dc2bc0236-fn2.jpg",
        "https://d326fntlu7tb1e.cloudfront.net/uploads/5d445b91-c01a-4564-8ff8-c27c2b88ea5b-fn7.png",
        "https://www.decorilla.com/online-decorating/wp-content/uploads/2022/12/Simple-elegant-living-room-ideas-by-Decorilla-designer-Jatnna-M.jpeg",
        "https://www.oppeinhome.com/upload/images/ueditor/20220714/7-Small-Living-Room-Design-Ideas-3.jpg"
    ]
  return (
    <View style={styles.carouselContainer}>
      <SliderBox 
      images={slides}
      dotColor= {COLORS.primary}
      inactiveDotColor = {COLORS.secondary}
      ImageComponentStyle = {{borderRadius: 15, width: '92%', marginTop: 15}}
      autoplay
      circleLoop
      />
    </View>
  )
}

export default Carousel;

const styles = StyleSheet.create({
    carouselContainer: {
        flex: 1,
        alignItems: 'center'
    }
})
