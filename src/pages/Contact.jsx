import React from 'react'
import Navbar from '../components/common/Navbar'
import { Button } from '../components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Contact = () => {
  return (
    <div>
      <Navbar />

      {/* wrapper that centers the card */}
      <div className="flex justify-center mt-10">
        {/* card parent */}
        <Card className="w-80">
          {/* card header */}
          <CardHeader>
            <CardTitle>Trip Details</CardTitle>
            <CardDescription>Create new trip</CardDescription>
            <CardAction>Menu</CardAction>
          </CardHeader>

          {/* card content */}
          <CardContent>
            <div className="h-40 w-full border flex items-center justify-center">
              <img src="Pool.jpg" alt="pool" className="h-full w-full object-cover" />
            </div>

            <h3>Mustang</h3>
            <p>Welcome to the trip</p>
          </CardContent>

          {/* card footer */}
          <CardFooter>
            <Button>Book Now</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default Contact;