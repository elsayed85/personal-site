import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-rose-500 dark:text-zinc-200 dark:hover:text-rose-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-rose-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Elsayed Kamal</title>
        <meta
          name="description"
          content="I’m Elsayed Kamal, I build web applications for a living using Laravel & PHP"
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Elsayed Kamal, and oh boy... I really hate writing these about pages.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <h1>
                Welcome to Elsayed Kamal's World! 👨‍💻</h1> <p>Hello, I'm Elsayed Kamal! I'm a web developer and I specialize in Laravel. Always excited to work on new projects and new challenges with this fantastic framework!</p> <p>🌐 I absolutely love web scraping! Being able to pull information from other sites is a kind of magic for me. Also, I truly enjoy the process of building APIs. It is like constructing the backbone of an application. I simply love it! 💚</p> <p>🔧 Apart from this, I have a profound interest in hacking Electron apps and finding vulnerabilities. I consider these tasks as treasure hunting. They help me to improve my skills while providing an essential service. 🔒</p> <p>✍️ Outside of coding, you can find me sipping on a cup of coffee ☕, exploring new music 🎧, or delving into a great book 📚. I'm constantly seeking out new challenges and areas to grow in both personally and professionally.</p> <p>🚀 Fasten your seat belts and join me in this journey of code, curiosity and coffee!</p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://twitter.com/el_sayed85" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="https://github.com/elsayed85" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/elsayed85" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:el_sayed_kamal@icloud.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                el_sayed_kamal@icloud.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
