import React, { useEffect } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import AppNavigation from './src/navigation'
import { apiCall } from './src/api/openAI'

export default function App() {
  useEffect(() => {
    // apiCall('what is quantum computing?')
    // apiCall("create an image of a dog");
  }, [])
  return (
    <SafeAreaProvider>
      <AppNavigation />
    </SafeAreaProvider>
  )
}
