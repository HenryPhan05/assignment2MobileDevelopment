import { StyleSheet, Text, ScrollView, Image, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { router } from 'expo-router';
import { ThemeContext } from '@/components/ThemeContext';
import { AuthContext } from '@/components/AuthContext';
import { Ionicons } from '@expo/vector-icons';
const employeeSchema = z.object({
  fullName: z.
    string()
    .min(2, "name must be at least 2 characters!")
    .max(30, "name must be less than 30 characters!"),
  email: z
    .string()
    .email("invalid email!"),
  phone: z
    .string()
    .regex(/^\d{10}$/, "Phone number must be 10 digits!"),
  postalCode: z
    .string()
    .regex(/^[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d$/, "Invalid Postal Code! Must like: T2A 5A5"),
  EmployeeCode: z
    .string()
    .regex(/^\d{4}$/, "Code must be 4 digits!"),
})
type employeeForm = z.infer<typeof employeeSchema>;
const Employee = () => {
  const { dark } = useContext(ThemeContext)!;
  const { setIsLoggedUp, setIsLoggedIn } = useContext(AuthContext)!;
  const [showCode, setShowCode] = useState<boolean>(true);
  const {
    control,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm<employeeForm>({
    resolver: zodResolver(employeeSchema),
    criteriaMode: "all",
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      postalCode: '',
      EmployeeCode: '',
    },
    mode: "onChange",

  });
  const watchValue = watch();
  const isFormFilled = Object.values(watchValue).every((v) => v.length > 0);
  const onSubmit = () => {
    setIsLoggedUp(true);
    setIsLoggedIn(true);
  }
  const styles = StyleSheet.create({
    body: {
      flex: 1,
      backgroundColor: dark ? "black" : "white",
    },
    contentBody: {
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10,
    },
    text: {
      color: dark ? "white" : "black",
      marginTop: 20,
      fontWeight: "500",
    },
    input: {
      width: "60%",
      borderRadius: 5,
      borderWidth: 1,
      borderColor: dark ? 'white' : 'black',
      padding: 10,
      color: dark ? "white" : "black",
      marginTop: 10,
    },
    inputError: {
      borderColor: 'red',
    },
    error: {
      color: 'red',
      fontSize: 11,
      marginTop: 4,
    },
    correct: {
      color: 'green',
      fontSize: 11,
      marginTop: 4,
    },
    button: {
      width: "100%",
      backgroundColor: dark ? 'white' : 'black',
      textAlign: 'center',
      color: dark ? 'black' : 'white',
      fontWeight: '600',
      padding: 10,
      borderRadius: 10,
    },
    smallText: {
      color: dark ? "white" : "black",
      fontSize: 12,
    },
    signUpContainer: {
      flexDirection: 'row',
      gap: 8,
    },
    buttonDisabled: {
      opacity: 0.5,
    }
  })
  return (
    <ScrollView style={styles.body} contentContainerStyle={styles.contentBody}>
      <Image
        source={require('../../assets/images/spotifyImages/others/spotifyWhite.png')}
        style={{ width: 50, height: 50, margin: 10 }}
      />
      {/**Full name */}
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', width: "100%" }}>
        <Text style={[styles.text, { marginLeft: 5 }]}>Full Name: </Text>
        <Controller
          control={control}
          name='fullName'
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={[styles.input, errors.fullName && styles.inputError]}
              placeholder='Enter your full name'
              placeholderTextColor={"grey"}
              value={value}
              onChangeText={onChange} />
          )}
        />
      </View>
      <Text style={styles.error}>{errors.fullName?.message}</Text>

      {/**email  */}
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', width: "100%" }}>
        <Text style={[styles.text, { marginLeft: 35 }]}>Email: </Text>
        <Controller
          control={control}
          name='email'
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={[styles.input, errors.email && styles.inputError]}
              placeholder='Enter Your Email'
              placeholderTextColor={"grey"}
              value={value}
              onChangeText={onChange} />
          )}
        />
      </View>
      {<Text style={styles.error}>{errors.email?.message}</Text>}
      {/**Phone  */}
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', width: "100%" }}>
        <Text style={[styles.text, { marginLeft: 30 }]}>Phone: </Text>
        <Controller
          control={control}
          name='phone'
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={[styles.input, errors.phone && styles.inputError]}
              placeholder='Enter Your Phone Number'
              placeholderTextColor={"grey"}
              value={value}
              onChangeText={onChange} />
          )}
        />
      </View>
      <Text style={styles.error}>{errors.phone?.message}</Text>
      {/**Postal Code  */}
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', width: "100%" }}>
        <Text style={styles.text}>Postal Code: </Text>
        <Controller
          control={control}
          name='postalCode'
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={[styles.input, errors.postalCode && styles.inputError]}
              placeholder='Enter your Postal Code'
              placeholderTextColor={"grey"}
              value={value}
              onChangeText={onChange} />
          )}
        />
      </View>
      <Text style={styles.error}>{errors.postalCode?.message}</Text>
      {/**Employee Code  */}
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', width: "100%" }}>
        <Text style={styles.text}>Employee Code: </Text>
        <Controller
          control={control}
          name='EmployeeCode'
          render={({ field: { onChange, value } }) => (
            <TextInput
              secureTextEntry={showCode}
              style={[styles.input, errors.EmployeeCode && styles.inputError]}
              placeholder='Enter Your Code'
              placeholderTextColor={"grey"}
              value={value}
              onChangeText={onChange} />
          )}
        />
        <TouchableOpacity style={{ marginTop: 20, marginLeft: 5 }} onPress={() => setShowCode(!showCode)}>
          <Text>
            {showCode ? <Ionicons name={dark ? 'eye-off-outline' : 'eye-off'} color={dark ? "white" : "black"} size={20} />
              : <Ionicons name={dark ? 'eye-outline' : 'eye'} color={dark ? "white" : "black"} size={20} />}
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.error}>{errors.EmployeeCode?.message}</Text>

      <TouchableOpacity activeOpacity={0.6} style={[!isFormFilled && styles.buttonDisabled, { alignItems: 'center' }]} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.button} >Submit</Text>
      </TouchableOpacity>
      {/** */}
      <View style={styles.signUpContainer} >
        <Text style={[styles.smallText,]}>Have an account ?</Text>
        <TouchableOpacity activeOpacity={0.6} onPress={() => router.replace("/(auth)/login")}>
          <Text style={[styles.smallText, { textDecorationLine: "underline", fontWeight: 'bold' }]}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Employee;

