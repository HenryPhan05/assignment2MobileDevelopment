import { ThemeContext } from "@/components/ThemeContext";
import { useAuth } from "@/hook/useAuth";
import { Ionicons } from "@expo/vector-icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, } from "react-native";
import { z } from "zod";
//defind  a zod Schema for login data
const loginSchema = z.object({
  email: z.email("invalid email address!"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters!"),
})
type loginForm = z.infer<typeof loginSchema>;

export default function Login() {
  const { signIn } = useAuth();
  const [authError, setAuthError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { dark } = useContext(ThemeContext)!;
  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<loginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onSubmit",
  });
  const onSubmit = async (data: loginForm) => {
    try {
      setAuthError(null);
      await signIn(data.email, data.password);
    }
    catch (e) {
      setAuthError(
        e instanceof Error ? e.message : "Sign in failed, please try again."
      )
    }
  };






  // styles
  const styles = StyleSheet.create({
    body: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: dark ? 'black' : 'white',
    },
    container: {
      width: "70%",
      height: "40%",
      justifyContent: 'space-around',

      marginTop: 15,
      borderColor: dark ? 'white' : 'black',
      borderWidth: 1,
      padding: 10,
      borderRadius: 15,

    },
    textContainer: {
      color: dark ? 'white' : 'black',
      fontSize: 20,
      fontWeight: '800',
      textAlign: 'center',
    },
    textUser: {
      fontSize: 16,
      color: dark ? 'white' : 'black',
      fontWeight: '400',
      left: 0,
    },
    input: {
      width: "100%",
      borderRadius: 5,
      borderWidth: 1,
      borderColor: dark ? 'white' : 'black',
      padding: 10,
      color: dark ? "white" : "black",
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
    inputError: {
      borderColor: 'red',
    },
    error: {
      color: 'red',
      fontSize: 11,
      marginTop: 4,
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
    <View style={styles.body}>
      <Image
        source={require('../../assets/images/spotifyImages/others/spotifyWhite.png')}
        style={{ width: 50, height: 50, }}
      />
      <View style={styles.container}>
        <Text style={styles.textContainer}>Sign In</Text>
        {/**Email */}
        <Text style={styles.textUser}>Email</Text>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={[styles.input, errors.email && styles.inputError]}
              placeholder="Enter your Email"
              placeholderTextColor={'grey'}
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        {[errors.email && <Text style={styles.error}>{errors.email.message}</Text>]}
        {/**password */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.textUser}>Password</Text>
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Text>
              {showPassword ? <Ionicons name={dark ? 'eye-off-outline' : 'eye-off'} color={dark ? "white" : "black"} size={20} />
                : <Ionicons name={dark ? 'eye-outline' : 'eye'} color={dark ? "white" : "black"} size={20} />}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <TextInput
                secureTextEntry={showPassword}
                style={[styles.input, errors.password && styles.inputError]}
                placeholder="Enter your Password"
                placeholderTextColor={'grey'}
                value={value}
                onChangeText={onChange}

              />
            )}
          />

        </View>
        {[errors.password && <Text style={styles.error}>{errors.password.message}</Text>]}
        {authError && (
          <Text style={styles.error}>{authError}</Text>
        )}
        <TouchableOpacity activeOpacity={0.6} style={{ alignItems: 'center' }} onPress={handleSubmit(onSubmit)}>
          <Text style={[styles.button]} >Sign In</Text>
        </TouchableOpacity>
        {/** */}
        <View style={styles.signUpContainer} >
          <Text style={[styles.smallText,]}>Don&apos;t have an account ?</Text>
          <TouchableOpacity activeOpacity={0.6} onPress={() => router.push("/(auth)/logup")}>
            <Text style={{ color: dark ? "white" : "black", textDecorationLine: "underline", fontWeight: 'bold' }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity activeOpacity={0.6} onPress={() => router.push("/(auth)/employee")}>
          <Text style={{ color: dark ? "white" : "black", textDecorationLine: "underline", fontWeight: 'bold', textAlign: 'center' }}>
            Employee Information
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

