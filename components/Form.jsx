"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";
import Link from "next/link";

const Form = () => {
  return <form className='flex flex-col gap-y-4'>
    {/* Input */}
    <div className="relative flex items-center">
        <Input type='name' id='name' placeholder='Name'/>
        <User className="absolute right-6" size={20} />
    </div>
    {/* Mail */}
    <div className="relative flex items-center">
        <Input type='email' id='email' placeholder='Email'/>
        <MailIcon className="absolute right-6" size={20} />
    </div>
    {/* Textarea */}
    <div className="relative flex items-center">
        <Textarea placeholder='Type your message here.'/>
        <MessageSquare className="absolute top-4 right-6" size={20} />
    </div>
    <Link href="/">
    <Button className='flex items-center gap-x-1 max-w-[166px]'>
        Let's Talk
        <ArrowRightIcon size={20} />
    </Button>
    </Link>
    
  </form>;
};

export default Form;
