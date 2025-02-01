import Signin from "../components/Signin";
import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'

export default function SignIn(){
    return(
        <div>
        
            <ClerkProvider>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>

    </ClerkProvider>
        </div>
    )
}