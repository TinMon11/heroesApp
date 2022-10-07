import React from 'react'
import { AuhtProvider } from './auth'
import { AppRouter } from './router/AppRouter'

export const HeroesApp = () => {
  return (
    <>
      <AuhtProvider>
        <AppRouter />
      </AuhtProvider>
    </>
  )
}
