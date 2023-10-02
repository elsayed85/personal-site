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
          content="I’m Elsayed Kamal, I build web applications using PHP & Laravel"
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
              I’m Elsayed
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>Hello, I&apos;m <b>Elsayed Kamal</b>! I&apos;m a web developer and I specialize in <b>Laravel</b>. Always excited to work on new projects and new challenges with this fantastic framework!</p>
              <p>
                I&apos;ve always loved coding, and I&apos;m  constantly learning new technologies and techniques to improve my craft. One of my favorite things to do is building <b>APIs</b>. I believe that APIs are the backbone of any application, and I take great pride in constructing them.
              </p>

              <p>
              I&apos;m  a problem solver at heart, and I enjoy tackling complex challenges. I&apos;m  a great communicator and collaborator, and I always put my <b>clients&apos; needs</b> first.
              </p>

              <p>
              When I&apos;m  not coding, I love to explore new places and try new foods. I&apos;m  also an avid reader and love to learn about different cultures and perspectives.
              </p>

              <p>
                If you&apos;re looking for a <b>skilled and passionate web developer</b> to bring your ideas to life, I&apos;m  the perfect choice. Let&apos;s work together to create something amazing! 💻🚀
              </p>
              
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
