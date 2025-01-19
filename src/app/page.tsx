import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <img src="/assets/soon.gif" alt="Product 1" className='w-[50vw] h-[80vh] block m-auto'/>
      <Link href="/shop" passHref>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "var(--border-color)", 
          "&:hover": {
            backgroundColor: "var(--main-color)",  
          },
        }}
      >
        Go to Shop
      </Button>
    </Link>
    </div>
  )
}

export default Page