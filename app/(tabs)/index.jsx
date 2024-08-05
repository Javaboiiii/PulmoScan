import { Text, View, TextInput, ScrollView, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import MyText from '../../components/MyText';
import React from 'react';
import { Dropdown } from 'react-native-element-dropdown';

const choice = [
  {label: 'Yes', value: 'Yes'},
  {label: 'No', value: 'No'}
]

const disease = [ 
  {label: '(a) asthma', value: 'asthma'},
  {label: '(b) allergic rhinitis', value: 'allergic rhinitis'},
  {label: '(c) eczema', value: 'eczema'},
  {label: '(d) others', value: 'others'},
]

const index = () => {
  const [isFocus, setIsFocus] = React.useState(false);
  const [info, setInfo] = React.useState({
    name: '',
    isbreath: '', 
    isbreathlong: '', 
    isbreathage: '', 
    iscough: '', 
    iscoughlong: '', 
    iscoughage: '', 
    iscoughexpectoration: '', 
    iswhistle: '',
    isasymptomatic: '',
    dosmoke: '',
    dosmokeyear: '',
    dosmokebiomass: '',
    dosmokeyearduration: '',
    dorelative: '',
    disease: '', 
    peakflow: ''
});

  const handleInputChange = (key) => (text) => {
    setInfo({ ...info, [key]: text });
  };

  console.log(info);
  return (
    <ScrollView className='ml-5 space-y-5'>
      <View className='flex-row items-center w-[80%] h-10'>
        <MyText className='h-8'>Enter your Name : </MyText>
        <TextInput
          className='h-8 w-[100%]'
          inputMode='text'
          cursorColor='#786452'
          placeholder='Name input'
          onChangeText={handleInputChange('name')}
        />
      </View>
      <View className='flex-row items-center w-[80%] h-10'>
        <MyText className='h-8'>1. Do you have Breathlessness ?  </MyText>
        <Dropdown
          className= 'w-[40%]'
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={choice}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder="Search..."
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={handleInputChange('isbreath')}/>
      </View>
      <View className={`flex-row items-center w-[80%] h-10 ${info.isbreath.value == 'Yes' ? 'visible' : 'hidden' }`}>
        <MyText className='h-8'>For how Long ? </MyText>
        <TextInput
          className='h-8 w-[100%]'
          inputMode='numeric'
          cursorColor='#786452'
          placeholder='(in months)'
          onChangeText={handleInputChange('isbreathlong')}
          />
      </View>
      <View className={`flex-row items-center w-[80%] h-10 ${info.isbreath.value == 'Yes' ? 'visible' : 'hidden' }`}>
        <MyText className='h-8'>From what Age ? </MyText>
        <TextInput
          className='h-8 w-[100%]'
          inputMode='numeric'
          cursorColor='#786452'
          placeholder='Age'
          onChangeText={handleInputChange('isbreathage')}
        />
      </View>
      <View className='flex-row items-center w-[80%] h-10'>
        <MyText className='h-8'>2. Do you have cough ?  </MyText>
        <Dropdown
          className= 'w-[40%]'
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={choice}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder="Search..."
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={handleInputChange('iscough')}/>
      </View>
      <View className={`flex-row items-center w-[80%] h-10 ${info.iscough.value == 'Yes' ? 'visible' : 'hidden' }`}>
        <MyText className='h-8'>For how Long ? </MyText>
        <TextInput
          className='h-8 w-[100%]'
          inputMode='numeric'
          cursorColor='#786452'
          placeholder='(in months)'
          onChangeText={handleInputChange('iscoughlong')}
        />
      </View>
      <View className={`flex-row items-center w-[80%] h-10 ${info.iscough.value == 'Yes' ? 'visible' : 'hidden' }`}>
        <MyText className='h-8'>From what Age ? </MyText>
        <TextInput
          className='h-8 w-[100%]'
          inputMode='numeric'
          cursorColor='#786452'
          placeholder='Age'
          onChangeText={handleInputChange('iscoughage')}
        />
      </View>
      <View className={`flex-row items-center w-[80%] h-10 ${info.iscough.value == 'Yes' ? 'visible' : 'hidden' }`}>
        <MyText className='h-8'>From what Age ? </MyText>
        <TextInput
          className='h-8 w-[100%]'
          inputMode='text'
          cursorColor='#786452'
          placeholder='Yes/No(strictly)'
          onChangeText={handleInputChange('iscoughexpectoration')}
        />
      </View>
      <View className='flex-row items-center w-[55%] h-15 space-x-3'>
        <MyText className='h-8'>3. Did you ever have wheezing/whistling in chest without viral infection?</MyText>
        <Dropdown
          className= 'w-[40%]'
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={choice}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder="Search..."
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={handleInputChange('iswhistle')}/>
      </View>
      <View className='flex-row items-center w-[55%] h-15 space-x-3'>
        <MyText className='h-8'>4. Did you have intermittent asymptomatic periods &gt; 7 days?</MyText>
        <Dropdown
          className= 'w-[40%]'
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={choice}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder="Search..."
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={handleInputChange('isasymptomatic')}/>
      </View>
      <View className='flex-row items-center w-[80%] h-15 space-x-3'>
        <MyText className='h-8'>5. Do you smoke?</MyText>
        <Dropdown
          className= 'w-[40%]'
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={choice}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder="Search..."
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={handleInputChange('dosmoke')}/>
      </View>
      <View className={`flex-row items-center w-[80%] h-15 space-x-3 ${info.dosmoke.value == 'Yes' ? 'visible' : 'hidden'}`}>
        <MyText className='h-8'>How many pack per year ?</MyText>
        <TextInput
          className='h-8 w-[100%]'
          inputMode='numeric'
          cursorColor='#786452'
          placeholder='Packs per year'
          onChangeText={handleInputChange('dosmokeyear')}
        />
      </View>
      <View className='flex-row items-center w-[55%] h-15 space-x-3'>
        <MyText className='h-8'>6. Were you exposed directly to biomass smoke while cooking food?</MyText>
        <Dropdown
          className= 'w-[40%]'
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={choice}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder="Search..."
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={handleInputChange('dosmokebiomass')}/>
      </View>
      <View className={`flex-row items-center w-[80%] h-15 space-x-3 ${info.dosmokebiomass.value == 'Yes' ? 'visible' : 'hidden'}`}>
        <MyText className='h-8'>total duration of exposure: </MyText>
        <TextInput
          className='h-8 w-[100%]'
          inputMode='numeric'
          cursorColor='#786452'
          placeholder='Duration(in ...)'
          onChangeText={handleInputChange('dosmokeyearduration')}
        />
      </View>
      <View className='flex-row items-center w-[55%] h-15 space-x-3'>
        <MyText className='h-8'>7. Does anybody in your family (blood relative) have history of atopy?</MyText>
        <Dropdown
          className= 'w-[40%]'
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={choice}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder="Search..."
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={handleInputChange('dorelative')}/>
      </View>
      <View className={`flex-row items-center w-[80%] h-15 space-x-3 ${info.dorelative.value == 'Yes' ? 'visible' : 'hidden'}`}>
        <MyText className='h-8'>total duration of exposure: </MyText>
        <Dropdown
          className= 'w-[40%]'
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={disease}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder="Search..."
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={handleInputChange('disease')}/>
      </View>
      <View className='flex-row items-center w-[80%] h-15 space-x-3'>
        <MyText className='h-8'>PeakFlow meter Value </MyText>
        <TextInput
          className='h-8 w-[100%]'
          inputMode='numeric'
          cursorColor='#786452'
          placeholder='(in %)'
          onChangeText={handleInputChange('peakflow')}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default index