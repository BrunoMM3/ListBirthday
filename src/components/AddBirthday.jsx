import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import DateTimePickerModal from "react-native-modal-datetime-picker"
import moment from 'moment';
//https://yarnpkg.com/package?q=react-native-modal-date&name=react-native-modal-datetime-picker
//https://momentjs.com/

export default function AddBirthday() {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [formData, setFormData] = useState({})

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const dateBirth = date
    dateBirth.setHours(0)
    dateBirth.setMinutes(0)
    dateBirth.setSeconds(0)
    setFormData({...formData,dateBirth})
    console.log(formData)
    console.log(moment(date).format('MMMM Do YYYY, h:mm:ss a'))
    hideDatePicker();
  };

  return (
    <>
        <View>
            <TextInput placeholder = 'Nombre' placeholderTextColor='#969696' />
        </View>
        <View>
            <TextInput placeholder = 'Apellidos' placeholderTextColor='#969696' />
        </View>
        <View>
          <Text
          title="Show Date Picker" onPress={showDatePicker}>
            {
              formData.dateBirth 
              ? moment(formData.dateBirth ).format('MMMM Do YYYY') 
              : 'Fecha nacimiento' 
            }
            
          </Text>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
          
      </View>

    </>
  )
}

const styles = StyleSheet.create({})