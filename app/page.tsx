import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BookOpen, Calendar, ChevronRight, GraduationCap, MapPin, Phone } from "lucide-react"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
type Program = {
  id: number
  title: string
  description: string
  imageUrl: string
  backgroundColor?: string
}

async function getPrograms(): Promise<Program[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/programs`, {
    cache: "no-store",
  })
  return res.json()
}
type Event = {
  id: number
  title: string
  description: string
  date: string
}

async function getEvents(): Promise<Event[]> {
  const res = await fetch("http://localhost:3000/api/events", {
    cache: "no-store",
  })
  return res.json()
}


export default async function Home() {
  const programs = await getPrograms()
  const events = await getEvents()

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Code Club</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#programs" className="text-sm font-medium hover:text-primary">
              Programs
            </Link>
            <Link href="#events" className="text-sm font-medium hover:text-primary">
              Events
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <Link href="/admin" className="text-sm font-medium hover:text-primary">
              Staff Portal
            </Link>
            <Button size="sm">Apply Now</Button>
          </div>
          <div className="flex md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative z-20">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="pt-10">
                <div className="flex flex-col gap-4">
                  <Link href="#" className="text-base font-medium hover:text-primary">
                    Home
                  </Link>
                  <Link href="#about" className="text-base font-medium hover:text-primary">
                    About
                  </Link>
                  <Link href="#programs" className="text-base font-medium hover:text-primary">
                    Programs
                  </Link>
                  <Link href="#events" className="text-base font-medium hover:text-primary">
                    Events
                  </Link>
                  <Link href="#contact" className="text-base font-medium hover:text-primary">
                    Contact
                  </Link>
                  <Link href="/admin" className="text-base font-medium text-primary hover:underline">
                    Staff Portal / Login
                  </Link>
                  <Button size="sm" className="mt-2">
                    Apply Now
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 z-10" />
          <div className="relative h-[400px] sm:h-[500px] md:h-[600px]">
            <Image
              src="/code_club_logo.jpg"
              alt="code-club logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container px-4 md:px-6">
              <div className="max-w-xl space-y-4">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                  Learn to code with Code Club
                </h1>
                <p className="text-base text-black sm:text-lg md:text-xl">
                  Our projects have step-by-step instructions to teach you how to create games,animations, and much more. Choose from hundred of options, in up to 30 languages.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button size="lg" className="w-full sm:w-auto">
                    Schedule a Tour
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

       

        {/* Programs Section */}
        <section id="programs" className="py-16 md:py-24 bg-muted">
        <section id="programs" className="py-16 md:py-24 bg-muted">
  <div className="container">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Academic Programs</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        Code Club offers a diverse range of programs designed to meet the needs and interests of all students.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {programs.map((program) => (
        <div
          key={program.id}
          className="bg-card rounded-lg shadow-sm overflow-hidden border"
          style={{ backgroundColor: program.backgroundColor || "#fff" }}
        >
          <div className="relative h-48">
            <Image
              src={program.imageUrl}
              alt={program.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{program.title}</h3>
            <p className="text-muted-foreground mb-4">{program.description}</p>
            <Button variant="outline" size="sm">Learn More</Button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

        </section>

        {/* Events Section */}
        <section id="events" className="py-16 md:py-24 bg-muted">
        <section id="events" className="py-16 md:py-24 bg-muted">
  <div className="container">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Upcoming Events</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        Stay connected with our Code Club community through these upcoming events.
      </p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event) => (
        <div key={event.id} className="bg-card rounded-lg shadow-sm overflow-hidden border">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-sm text-muted-foreground">
                {new Date(event.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">{event.title}</h3>
            <p className="text-muted-foreground mb-4">{event.description}</p>
            <Button variant="outline" size="sm">Learn More</Button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-16 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl mb-4 md:mb-6">Contact Us</h2>
                <p className="text-muted-foreground mb-6 md:mb-8 text-sm sm:text-base">
                  We're here to answer any questions you may have about our programs and courses.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-muted-foreground text-sm sm:text-base">
                        123 Education Lane, Academic City, AC 12345
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-muted-foreground text-sm sm:text-base">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <BookOpen className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Admissions</h3>
                      <p className="text-muted-foreground text-sm sm:text-base">admissions@codeclub.edu</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-card p-4 sm:p-6 rounded-lg shadow-sm border mt-6 md:mt-0">
                <h3 className="text-lg sm:text-xl font-bold mb-4">Send Us a Message</h3>
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Message subject"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your message"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-8 sm:py-12 border-t">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">Code Club</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Empowering students to achieve academic excellence and personal growth.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4">Quick Links</h3>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-muted-foreground hover:text-primary">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#programs" className="text-muted-foreground hover:text-primary">
                    Programs
                  </Link>
                </li>
                <li>
                  <Link href="#events" className="text-muted-foreground hover:text-primary">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-muted-foreground hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4">Resources</h3>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Admissions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Calendar
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Parent Portal
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Student Resources
                  </Link>
                </li>
                <li>
                  <Link href="/admin" className="text-muted-foreground hover:text-primary">
                    Staff Portal
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4">Connect With Us</h3>
              <div className="flex space-x-4 mb-3 sm:mb-4">
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Link>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Subscribe to our newsletter for updates on school events and news.
              </p>
              <div className="mt-2 flex flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex h-10 w-full rounded-md sm:rounded-r-none border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mb-2 sm:mb-0"
                />
                <Button className="w-full sm:w-auto sm:rounded-l-none">Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t text-center text-xs sm:text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Code Club. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

