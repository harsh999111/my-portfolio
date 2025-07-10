"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import Link from "next/link";


export default function SignupFormDemo() {

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/harsh999111",
      icon: (
        <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
      ),
    },
    {
      name: "Email",
      href: "mailto:baraiyaharsh319@gmail.com",
      icon: (
        <IconMail className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/harsh-baraiya-774155250/",
      icon: (
        <IconBrandLinkedin className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
      ),
    },
  ];


  return (
    <div className="shadow-input mx-auto w-full rounded-xl bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
      <h2 className="text-xl font-bold flex justify-center text-neutral-800 dark:text-neutral-200">
        Contact Me
      </h2>
      <p className="mt-2 flex justify-center text-sm text-neutral-600 dark:text-neutral-300">
        Open to projects — feel free to reach out
      </p>

      {/* ✅ Send form data to your email via FormSubmit */}
      <form
        className="my-8"
        action="https://formsubmit.co/baraiyaharsh319@gmail.com"
        method="POST"
      >
        {/* Hidden input to turn off captcha */}
        <input type="hidden" name="_captcha" value="false" />
        {/* Redirect URL after form submission (optional) */}
        <input
          type="hidden"
          name="_next"
          value="https://yourdomain.com/thank-you"
        />

        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name:</Label>
            <Input
              id="firstname"
              name="First Name"
              placeholder="Enter Your First Name"
              type="text"
              required
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name:</Label>
            <Input
              id="lastname"
              name="Last Name"
              placeholder="Enter Your Last Name"
              type="text"
              required
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address:</Label>
          <Input
            id="email"
            name="Email"
            placeholder="Enter Your Email"
            type="email"
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Message:</Label>
          <Input
            id="message"
            name="Message"
            placeholder="Enter your message"
            type="text"
            required
          />
        </LabelInputContainer>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          Submit &rarr;
          <BottomGradient />
        </button>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

        <div className="flex flex-col space-y-4">
          {socialLinks.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              rel="noopener noreferrer"
              className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
            >
              {item.icon}
              <span className="text-sm text-neutral-700 dark:text-neutral-300">
                {item.name}
              </span>
              <BottomGradient />
            </Link>
          ))}
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
