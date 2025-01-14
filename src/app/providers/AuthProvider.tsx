"use client"
import { SessionProvider as SessionProviderNextAuth } from 'next-auth/react'
import React, { PropsWithChildren, FC } from 'react'


export const AuthProvider: FC<PropsWithChildren> = ({children}) => {
  return (
    <SessionProviderNextAuth>
      {children}
    </SessionProviderNextAuth>
  )
}
