
"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { GraduationCap, Lock, Mail } from "lucide-react"
import Link from "next/link"



export default function AdminLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

 
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.")
      return
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.")
      return
    }

    
    if (email === "admin@example.com" && password === "password123") {
      router.push("/admin/dashboard") 
    } else {
      setError("Invalid email or password.")
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted p-4">
      <div className="w-full max-w-[340px] sm:max-w-md p-4 sm:p-8 space-y-6 sm:space-y-8 bg-card rounded-lg shadow-lg border">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-2">
            <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            <span className="text-xl sm:text-2xl font-bold">Code Club Admin </span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold">Staff Portal</h1>
          <p className="text-xs sm:text-sm text-muted-foreground mt-2">Sign in to access the admin dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="space-y-1 sm:space-y-2">
            <label htmlFor="email" className="text-xs sm:text-sm font-medium">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@codeclub.edu"
                className="pl-10 text-sm h-9 sm:h-10"
              />
            </div>
          </div>

          <div className="space-y-1 sm:space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="text-xs sm:text-sm font-medium">
                Password
              </label>
              <Link href="#" className="text-[10px] sm:text-xs text-primary hover:underline">
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="pl-10 text-sm h-9 sm:h-10"
              />
            </div>
          </div>

          {error && <div className="text-red-500 text-xs">{error}</div>}

          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-3 w-3 sm:h-4 sm:w-4 rounded border-gray-300 text-primary focus:ring-primary"
            />
            <label htmlFor="remember-me" className="ml-2 block text-xs sm:text-sm text-muted-foreground">
              Remember me
            </label>
          </div>

          <Button className="w-full h-9 sm:h-10 text-sm">Sign In</Button>
        </form>

        <div className="text-center text-xs sm:text-sm text-muted-foreground">
          <p>
            Need help? Contact{" "}
            <a href="#" className="text-primary hover:underline">
              IT Support
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
