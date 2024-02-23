 
  export const logout = () => {
    localStorage.removeItem("authUser");
    sessionStorage.removeItem("persist:root");
    localStorage.clear()
  };
  