import React, { useState }  from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity ,Alert , ScrollView} from 'react-native';

// import MyNavigator  from './navigation/MyNavigator';

const DetailSubjectScreen = () => {


  return (
    <ScrollView style={styles.container}>
   
      <Text>{"\n"}รายละเอียดของวิชา... (แปะไว้ก่อน){"\n"}</Text>

      <View style={styles.information_teacher}> 
      <Image style={styles.teacher} source={require("../assets/sehun.jpg")} />
      <Text style={{color:"#FFFF00", fontSize:10, left:80, top:0}}> อาจารย์ : เซฮุนเซนเซย์  </Text>
      <Text style={{color:"#FFFF00", fontSize:10, left:80, top:0,}}>  วันที่เรียน : ศ. 11.00-23.00 </Text>
      <Text style={{color:"#FFFF00", fontSize:10, left:80, top:0,}}>  จำนวนนักเรียน : 99</Text>
     </View>
     
      
      <View style={styles.box}>
          <Image style={styles.img} source={require("../assets/wan.png")} />
         
          <Text style={styles.text}>{"\n"}{"\n"}{"\n"}{"\n"}ภาพรวมของเทคโนโลยีเครือข่ายไร้สายและการประยุกต์ใช้งาน พื้นฐานการส่งผ่านแบบไร้สาย
           การแพร่กระจายคลื่นวิทยุ เสาอากาศ การม๊อดดูเลท การมัลติเพล็กซ์ การควบคุมการเข้าถึงแบบหลายทางพร้อมกัน เครือข่ายท้องถิ่นแบบไร้สาย
            มาตรฐาน IEEE 802.11 การสำรวจสถานที่ การวางแผน การออกแบบและการปรับใช้เครือข่ายท้องถิ่นแบบไร้สาย 
            ความปลอดภัยบนเครือข่ายท้องถิ่นแบบไร้สายและมาตรฐานที่เกี่ยวข้อง เครือข่ายส่วนบุคคลแบบไร้สาย เครือข่ายเมืองแบบไร้สาย 
            เครือข่ายระยะไกลแบบไร้สาย การจัดการและการแก้ปัญหาเครือข่ายไร้สายเบื้องต้น{"\n"}{"\n"}
          </Text>
    <Text style={styles.title}>06016334 WIRELESS NETWORK TECHNOLOGY</Text>
    </View>

    <View >  
      <TouchableOpacity
       style = {styles.btn}
       onPress={() => Alert.alert('ยืนยันการลงทะเบียน')}>
            <Text>ลงทะเบียน</Text>
         </TouchableOpacity>
      </View>
     

    
    </ScrollView>
  );
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#6495ED",
    padding:"3%",
    

  },
  img: {
    position: "absolute",
    // height: 200,
    // width:  300,
    height: "70%",
    width:  "100%",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:50,
    backgroundColor:"black",
    opacity: 0.5,
    // padding: 10,
    borderWidth: 3,

  },

  information_teacher: {
 
    height: 200,
    width:  330,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:50,
    backgroundColor:"black",
     
  },

  teacher: {
    flex: 1,
    position: "absolute",
    height: "100%",
    width:  "50%",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:50,
    borderWidth: 3,
    marginTop: "10%",
    left:0,

  },

  text: {
    color:"white",
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:14,
    textAlign: "center",
    padding:"20%",
    

  },
  title: {
    flex: 1,
    ...StyleSheet.absoluteFill,
    fontSize:10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: "center",
    fontWeight: "bold",
    backgroundColor:"white",
    color:"black",
    borderWidth: 2,
    padding:"2%",
    width: "70%",
    height:"10%",
    top: "10%",
    left: "15%",
    right:"15%",

  },
  box: {
    
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: "center",
   
      },
  btn: {
    
    height: "30%",
    width: "100%",
    borderRadius:50,
    backgroundColor: "#FFD700",
    borderWidth: 2,
    textAlign: "center",
    color:"white", 
    alignItems: 'center',
    justifyContent: 'center',
    bottom:"30%",
    
    
  },
   


});
export default DetailSubjectScreen;