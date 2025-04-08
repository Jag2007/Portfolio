import React from 'react'
import logo from '../assets/jp.png'
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-4 text-white backdrop-blur-md">
      <img src={logo} alt="logo"  className="mx-2 w-10 " />
      <span className="flex gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
        <FaTwitter />
      </span>
    </nav>
  )
}

export default Navbar
