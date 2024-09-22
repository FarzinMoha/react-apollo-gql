'use client'
import { client } from '@/graphql/apolloClient'
import { reactNode } from '@/types/types'
import { ApolloProvider } from '@apollo/client'
import React from 'react'

const ApolloWrapper = ({ children }: reactNode) => {
  return (
    <ApolloProvider client={client}>
        {children}
    </ApolloProvider>
  )
}

export default ApolloWrapper