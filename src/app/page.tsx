'use client'

import { useState, useEffect } from "react"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"


export default function Home() {
  const [theme, setTheme] = useState("inspirational")
  const [quote, setQuote] = useState({
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  })
  useEffect(() => {
    const fetchQuote = async () => {
      const response = await fetch("YOUR_API_URL")
      const data = await response.json()
      setQuote(data)
    }
    fetchQuote()
  }, [theme])
  const handleSubmit = () => {
    const fetchQuote = async () => {
      const response = await fetch("YOUR_API_URL")
      const data = await response.json()
      setQuote(data)
    }
    fetchQuote()
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background text-foreground">
      <div className="max-w-md w-full px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight">AI-Powered Quote Generator</h1>
            <p className="mt-2 text-muted-foreground">Select a theme to generate a quote.</p>
          </div>
          <div className="flex flex-col gap-4">
            <Select value={theme} onValueChange={setTheme}>
              <SelectTrigger>
                <SelectValue placeholder="Select a theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="inspirational">Inspirational</SelectItem>
                <SelectItem value="motivational">Motivational</SelectItem>
                <SelectItem value="wisdom">Wisdom</SelectItem>
                <SelectItem value="humor">Humor</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={handleSubmit}>Generate Quote</Button>
          </div>
          <Card className={`bg-${theme}-background text-${theme}-foreground`}>
            <CardContent className="space-y-4">
              <div className="text-2xl font-bold">{quote.text}</div>
              <div className="text-muted-foreground">- {quote.author}</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
