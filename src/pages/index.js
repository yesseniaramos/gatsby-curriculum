import * as React from "react"
import BasicLayout from "../layouts/BasicLayout"
import Profile from "../components/Profile"
import AboutMe from '../components/AboutMe'

export default function Index () {
  return (
    <BasicLayout>
      <Profile />
      <AboutMe />
    </BasicLayout>
  )
}
