import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import ReactDOM from 'react-dom'
import React from 'react'
import Webcam from "react-webcam";


import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className='main-body d-flex flex-row align-items-center justify-content-center' style={{ backgroundColor: "#dec98c", height: "100vh", fontFamily: "verdana" }}>
        <div className='' style={{ height: "95vh", width: "60vw", }}>
          <div className='w-100 pt-4 pb-5 ps-5 pe-5' style={{ backgroundColor: "#fac666", height: "100%", border: "2px solid white", borderRadius: "25px", boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.5)" }}>
            <div className='w-100 p-3' style={{ backgroundColor: "#32553a", height: "100%", borderRadius: "15px", boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.5)", borderBottom: "6px solid black" }}>
              <div className=' d-flex align-items-center' style={{ backgroundColor: "#d6d7c0", height: "80%", width: "100%", borderRadius: "15px", borderBottom: "4px solid black" }}>
                <Webcam mirrored={true} style={{ width: "100%", height: "100%" }} />
              </div>
              <div className='w-100 d-flex align-items-center justify-content-between' style={{ height: "20%" }}>
                <button className='py-2 btn' style={{ backgroundColor: "#ff5f3b", color: "white", width: "100px", borderRadius: "10px", boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.25)", }}>
                  PLAY
                </button>
                <button className='py-2 btn' style={{ backgroundColor: "#426d4a", color: "white", width: "100px", borderRadius: "10px", boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.25)" }}>
                  PAUSE
                </button>
                <button className='py-2 btn' style={{ backgroundColor: "#426d4a", color: "white", width: "100px", borderRadius: "10px", boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.25)" }}>
                  NEXT
                </button>

              </div>

            </div>
          </div>
        </div>

      </div>
    </>
  )
}
