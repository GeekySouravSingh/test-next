"use client"
import AlertDialogSlide from "@/src/components/common/modal";
import { useState } from "react";

export default function Login() {
  const [open, setOpen] = useState(true)
    
  return (
    <AlertDialogSlide open={open} onClose={()=>setOpen(false)} />
  )
}