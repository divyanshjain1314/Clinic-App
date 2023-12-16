import React, { useEffect, useState } from 'react'
import WebService, { urls } from './WebService'

export const FatchData = () => {
    let [state,setState] = useState('')
    useEffect(() => {
        loadReception()
    }, [])

    const loadReception = async () => {
        const response = await WebService.GetApiCall(urls.GETReception)
        console.log(response.data)
    }
    
  return (
    <>
    <div>
        
    </div>
    </>
  )
}
