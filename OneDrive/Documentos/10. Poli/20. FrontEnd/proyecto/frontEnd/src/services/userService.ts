export interface User {
    name: string;
    email: string;
    password: string;
  }
  
  const STORAGE_KEY = "users";
  
  export const getUsers = (): User[] => {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  };
  
  export const saveUser = (user: User): { success: boolean; message: string } => {
    const users = getUsers();
    const exists = users.some(u => u.email === user.email);
  
    if (exists) {
      return { success: false, message: "El correo ya está registrado." };
    }
  
    users.push(user);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
  
    return { success: true, message: "Usuario registrado con éxito." };
  };
  
  export const deleteUser = (email: string): void => {
    const users = getUsers().filter(u => u.email !== email);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
  };
  
  export const updateUser = (updatedUser: User): void => {
    const users = getUsers().map(user =>
      user.email === updatedUser.email ? updatedUser : user
    );
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
  };
  