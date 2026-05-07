import React from 'react'
import Headers from '../components/header'
import UserCard from '../components/UserCard'
import CounterCard from '../components/CounterCard'

function Home() {
  return (
    <>
      <Headers />
      <UserCard name="John Doe" email="john@example.in" role="Developer" />
      <UserCard name="Vivek" email="vivek@example.com" role="Data Engineer" />
      <UserCard name="pradeep sheoron" email="pradeep@example.com" role="Full Stack Developer" />
      <CounterCard  />
    </> 
  )
}

export default Home