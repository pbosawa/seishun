export const isUserSignedIn = (userId: string, username?: string): boolean => {
  if (userId === "ABC") {
    console.log("User is signed in! User name is ", username);
    return true;
  } else {
    console.log("User is not signed in.");
    return false;
  }
};
