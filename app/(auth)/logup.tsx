import { ThemeContext } from '@/components/ThemeContext';
import { addUser, checkEmailExists } from '@/lib/supabaseImplementation';
import { Ionicons } from '@expo/vector-icons';
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from 'expo-router';
import React, { useContext, useState, } from 'react';
import { Controller, useForm } from "react-hook-form";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { z } from "zod";
// define zod schema for logUp data
const signUpSchema = z.object({
  firstName: z
    .string()
    .min(2, "first name muse be greater than 2 characters!"),
  lastName: z
    .string()
    .min(2, "last name muse be greater than 2 characters!"),
  email: z.email("invalid email address!"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters!")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter!\n")
    .regex(/[a-z]/, "Password must contain at least on lowercase letter\n")
    .regex(/[0-9]/, "Password must contain at least one digit!\n")
    .regex(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain a special character!"),
  confirmPassword: z.string(),
})
  // check password and dataPassword
  .refine((data) => data.password === data.confirmPassword, {
    message: "confirm password must match password!",
    path: ["confirmPassword"],
  });
type signUpForm = z.infer<typeof signUpSchema>;
const SignUp = () => {
  const { dark } = useContext(ThemeContext)!;
  const [authError, setAuthError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<signUpForm>({
    resolver: zodResolver(signUpSchema),
    criteriaMode: "all",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onSubmit",
  });
  const passwordValue = control._formValues.password || "";
  // check conditions
  const passwordConditions = [
    { label: "Password must be at least 8 characters!", valid: passwordValue.length >= 8 },
    { label: "Password must contain at least one uppercase letter!", valid: /[A-Z]/.test(passwordValue) },
    { label: "Password must contain at least on lowercase letter", valid: /[a-z]/.test(passwordValue) },
    { label: "Password must contain at least one digit!", valid: /[0-9]/.test(passwordValue) },
    { label: "Password must contain a special character!", valid: /[!@#$%^&*(),.?\":{}|<>]/.test(passwordValue) },
  ];

  const onSubmit = async (data: signUpForm) => {
    try {
      setAuthError(null);
      const exists = await checkEmailExists(data.email);
      if (exists) {
        setAuthError("Email Already exists!");
        return;
      }
      await addUser({
        first_name: "John",
        last_name: "Doe",
        email: data.email
      },
        data.password,
      );
      router.replace("/(auth)/login");
    }
    catch (e) {
      setAuthError(
        e instanceof Error ? e.message : "Sign up failed. Please try again."
      );
    }
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
      {/**First name */}
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', width: "100%" }}>
        <Text style={styles.text}>First Name: </Text>
        <Controller
          control={control}
          name='firstName'
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={[styles.input, errors.firstName && styles.inputError]}
              placeholder='Enter your first name'
              placeholderTextColor={"grey"}
              value={value}
              onChangeText={onChange} />
          )}
        />
      </View>
      {[errors.firstName && <Text style={styles.error}>{errors.firstName.message}</Text>]}

      {/*last name */}
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', width: "100%" }}>
        <Text style={styles.text}>Last Name: </Text>
        <Controller
          control={control}
          name='lastName'
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={[styles.input, errors.lastName && styles.inputError]}
              placeholder='Enter your last name'
              placeholderTextColor={"grey"}
              value={value}
              onChangeText={onChange} />
          )}
        />
      </View>
      {[errors.lastName && <Text style={styles.error}>{errors.lastName.message}</Text>]}

      {/*email */}
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', width: "100%" }}>
        <Text style={[styles.text, { marginLeft: 32 }]}>Email: </Text>
        <Controller
          control={control}
          name='email'
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={[styles.input, errors.email && styles.inputError]}
              placeholder='Enter your email'
              placeholderTextColor={"grey"}
              value={value}
              onChangeText={onChange} />
          )}
        />
      </View>
      {[errors.email && <Text style={styles.error}>{errors.email.message}</Text>]}

      {/*password */}
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', width: "100%" }}>
        <Text style={[styles.text, { marginLeft: 50 }]}>Password: </Text>
        <Controller
          control={control}
          name='password'
          render={({ field: { onChange, value } }) => (
            <TextInput
              secureTextEntry={showPassword}
              style={[styles.input, errors.password && styles.inputError]}
              placeholder='Enter your password'
              placeholderTextColor={"grey"}
              value={value}
              onChangeText={onChange} />

          )}
        />
        <TouchableOpacity style={{ marginLeft: 5, marginRight: 20, marginTop: 20 }} onPress={() => setShowPassword(!showPassword)}>
          <Text>
            {showPassword ? <Ionicons name={dark ? 'eye-off-outline' : 'eye-off'} color={dark ? "white" : "black"} size={20} />
              : <Ionicons name={dark ? 'eye-outline' : 'eye'} color={dark ? "white" : "black"} size={20} />}
          </Text>
        </TouchableOpacity>
      </View>
      {passwordConditions.map((condition, index) => (
        <Text
          key={index}
          style={{ color: condition.valid ? "green" : "red", fontSize: 11, marginTop: 4 }}
        >
          {condition.label}
        </Text>
      ))}


      {/*confirm password */}
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', width: "100%" }}>
        <Text style={[styles.text, { marginLeft: 50 }]}>Confirm Pass:  </Text>
        <Controller
          control={control}
          name='confirmPassword'
          render={({ field: { onChange, value } }) => (
            <TextInput
              secureTextEntry={showConfirmPassword}
              style={[styles.input, errors.confirmPassword && styles.inputError,]}
              placeholder='Enter your confirm password'
              placeholderTextColor={"grey"}
              value={value}
              onChangeText={onChange} />
          )}
        />
        <TouchableOpacity style={{ marginLeft: 5, marginRight: 40, marginTop: 20 }} onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
          <Text>
            {showPassword ? <Ionicons name={dark ? 'eye-off-outline' : 'eye-off'} color={dark ? "white" : "black"} size={20} />
              : <Ionicons name={dark ? 'eye-outline' : 'eye'} color={dark ? "white" : "black"} size={20} />}
          </Text>
        </TouchableOpacity>

      </View>
      {[errors.confirmPassword && <Text style={styles.error}>{errors.confirmPassword.message}</Text>]}
      {authError && (
        <Text style={[styles.error]}>{authError}</Text>
      )}
      <TouchableOpacity activeOpacity={0.6} style={[styles.buttonDisabled, { alignItems: 'center' }]} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.button} >Sign Up</Text>
      </TouchableOpacity>
      {/** */}
      <View style={styles.signUpContainer} >
        <Text style={[styles.smallText,]}>Have an account ?</Text>
        <TouchableOpacity activeOpacity={0.6} onPress={() => router.replace("/(auth)/login")}>
          <Text style={[styles.smallText, { textDecorationLine: "underline", fontWeight: 'bold' }]}>Sign In</Text>
        </TouchableOpacity>
      </View>

    </ScrollView >
  )
}

export default SignUp

