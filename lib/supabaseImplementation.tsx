import { supabase } from "./supabase";
import { User } from "./type";

export const getCurrentUser = async () => {
  const { data, error } = await supabase.auth.getUser();
  if (error) {
    throw error
  }
  return data.user;
}
export const getUserProfile = async (): Promise<User | null> => {
  const user = await getCurrentUser();
  if (!user) return null;
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", user.id)
    .single();
  if (error) {
    throw error;
  }
  return data as User;
}
export const checkEmailExists = async (email: string) => {
  const { data, } = await supabase
    .from("users")
    .select("email")
    .eq("email", email)
    .single();
  if (data) return true;
  return false;
}
export const addUser = async (userData: User, password: string) => {
  const { data, error } = await supabase.auth.signUp({ email: userData.email, password: password })
  if (error) throw error;
  const userId = data?.user?.id ?? data.session?.user?.id;
  if (userId) {
    const { error: insertError } = await supabase.from("users")
      .insert({
        id: userId,
        email: userData.email,
        first_name: userData.first_name,
        last_name: userData.last_name
      })
    if (insertError) throw insertError;
  }
  return data;
}