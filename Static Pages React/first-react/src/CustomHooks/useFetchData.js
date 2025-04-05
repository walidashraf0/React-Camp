import React, { useEffect, useState } from 'react'

const useFetchData = (url) => {
  const [data, setData] = useState([])
  // Custom Hook to Fetch Data from API
  useEffect(() => {
    fetch(url).then((res) => res.json()).then((data) => setData(data))
  }, [])
  return [data]
}

export default useFetchData