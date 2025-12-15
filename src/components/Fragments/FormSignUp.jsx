import React from 'react'
import { Link } from "react-router-dom"
import LabeledInput from '../Elements/LabeledInput'
import CheckBox from '../Elements/CheckBox'
import Button from '../Elements/Button'

function FormSignUp() {
  return (
    <>
      {/* form */}
      <div className="mt-16">
        <form>
          <div className="mb-6">
            <LabeledInput
              label="Name"
              id="name"
              type="text"
              placeholder="Tanzir Rahman"
              name="name"
            />
          </div>

          <div className="mb-6">
            <LabeledInput
              label="Email address"
              id="email"
              type="email"
              placeholder="hello@example.com"
              name="email"
            />
          </div>

          <div className="mb-6">
            <LabeledInput
              label="Password"
              id="password"
              type="password"
              placeholder="xxxxxxxx"
              name="password"
            />
          </div>

          <div className="mb-6">
            <CheckBox
              type="checkbox"
              label="By continuing, you agree to our terms of service"
              id="terms"
              name="terms"
            />
          </div>

          <Button>Sign Up</Button>
        </form>
      </div>

      {/* link */}
      <div className="flex justify-center">
        <Link to="/login" className="mt-4 text-primary text-sm font-bold">
          Already have an account? Sign In Here
        </Link>
      </div>
    </>
  )
}

export default FormSignUp;
