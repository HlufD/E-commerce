import {singinWithGoogle,createUserFromAuth} from '../../utills/firebase.utills'
function SignIn() {
  const logInfo  = async()=>{
   const res = await singinWithGoogle();
   const {user} = res;
   createUserFromAuth(user);
  }
  
  return (
    <div>
      <p>Sign In page</p>
      <button onClick={logInfo}>Sing in with Google</button>
    </div>
  );
}

export default SignIn;
