import React from 'react'
import LabeledInput from '../Elements/LabeledInput'
import CheckBox from '../Elements/CheckBox'
import Button from '../Elements/Button'
import { Link } from 'react-router-dom'

function FormSignIn() {
  return (
    <>
      <div className="mt-16">
        <form>
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
              placeholder="xxxxxxxxxxxx"
              name="password"
            />
          </div>

          <div className="mb-6">
            <CheckBox
              label="Keep me signed in"
              id="status"
              name="status"
            />
          </div>

          <Button>Login</Button>
        </form>
      </div>

      {/* divider */}
      <div className="relative my-9 px-7 flex flex-col justify-center items-center text-xs text-gray-03">
        <div className="border border-gray-05 w-full"></div>
        <div className="px-2 bg-special-mainBg absolute pointer-events-none">
          or sign in with
        </div>
      </div>

      {/* google */}
      <Button type="button" variant="secondary">
        Continue with Google
      </Button>

      {/* link */}
      <div className="flex justify-center">
        <Link to="/register" className="mt-4 text-primary text-sm font-bold">
          Create an account
        </Link>
      </div>
    </>
  )
}

export default FormSignIn;
