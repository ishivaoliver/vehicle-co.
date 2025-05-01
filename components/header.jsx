import React from 'react'

const Header = () => {
  return (
    <div>
      
      <SignedOut>
        <SignInButton />
        <SignUpButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      r
    </div>
  );
}

export default Header