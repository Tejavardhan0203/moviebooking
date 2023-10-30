"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import Navbar from '@/components/Navbar/Navbar';
import '../auth.css';
import Link from 'next/link';
import { toast } from 'react-toastify';
import logo from '@/assets/logo.png';
// import { getCookie , setCookie} from 'cookies-next';
// Define an interface for the form data
interface FormData {
    email: string;
    password: string;
}

const Signin = () => {
    const [formData, setFormData] = useState<FormData>({
        email : '',
        password : '',
    });

    const[errors,setErrors] = useState<Record<string,string>>({});
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

  return (
    <div>Signin</div>
  )
}

export default Signin