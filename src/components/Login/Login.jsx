import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import { auth } from "../../firebase.init"
import { useState } from "react"
import './Login.css'
export default function Login() {
  const [user, setUser] = useState(null)
  const provider = new GoogleAuthProvider();
  const GithubProvider = new GithubAuthProvider();
  const handleBtn = () => {
    signInWithPopup(auth, provider)
      .then(
        (result) => {
          console.log(result)
          setUser(result.user)

        }
      ).catch((error) => {
        console.log(error)
      })
  }
  const handleSignOut = () => {
    signOut(auth).then(()=>{
      setUser(null)
    }).catch((error) => 
     console.log(error)
    )
  }
  const handleGithubSignIn = () => {

    signInWithPopup(auth , GithubProvider).then((result)=> {
      const githubUser =result.user
      setUser(githubUser)
    })
  }
  return (
    <div className="main">
      <h3>Please Login</h3>
      
      
      {
        user ? <button onClick={handleSignOut}>Sign Out</button>
        :<button onClick={handleBtn}>Sign In With Google</button>
      }
         {
        user ? ''
        :<button onClick={handleGithubSignIn}>Sign In With Github</button>
      }
      
      {
        user && <div>
          <h2>{user.displayName}</h2>
          <h3>Email: {user.email}</h3>
          <img src={user.photoURL
} alt="" />

        </div>
      }
    </div>
  )
}
