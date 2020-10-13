import React from "react";
import { useAuthContext } from '../contexts/AuthContext'

export default function NavBar() {
  const { user } = useAuthContext()
  return <div className="NavBar">
    {user ? user.name : "Nothing"}
  </div>
  ;
}
