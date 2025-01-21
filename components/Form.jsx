"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";
import emailjs from '@emailjs/browser';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus('Sending...');

    // Use emailjs to send the form data
    emailjs.send(
      'service_nqx1cx5', // Replace with your EmailJS service ID
      'template_zkmswoq', // Replace with your EmailJS template ID
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      'uq9KvK0_0Wnvm1sVa' // Replace with your EmailJS public user ID
    )
    .then((result) => {
      setStatus('Email sent successfully');
      console.log(result.text);
    })
    .catch((error) => {
      setStatus('Failed to send email');
      console.error('Email send error:', error);
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
      {/* Input */}
      <div className="relative flex items-center">
        <Input
          type="text"
          id="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <User className="absolute right-6" size={20} />
      </div>
      {/* Mail */}
      <div className="relative flex items-center">
        <Input
          type="email"
          id="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      {/* Textarea */}
      <div className="relative flex items-center">
        <Textarea
          id="message"
          placeholder="Type your message here."
          value={formData.message}
          onChange={handleChange}
        />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>
      <Button type="submit" className="flex items-center gap-x-1 max-w-[166px]">
        Let's Talk
        <ArrowRightIcon size={20} />
      </Button>

      {status && <p>{status}</p>}
    </form>
  );
};

export default Form;
