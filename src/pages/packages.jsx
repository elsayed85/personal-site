import Image from 'next/future/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoCopilot from '@/images/logos/copilot.png'
import chat from '@/images/logos/chat.png'
import redis from '@/images/logos/redis.png'
import gitir from '@/images/logos/gitir.png'
import faselhd from '@/images/logos/faselhd.png'
import showbox from '@/images/logos/showbox.png'
import bankMisr from '@/images/logos/bankmisr.png'
import paymob from '@/images/logos/paymob.png'
import fawry from '@/images/logos/fawry.png'
import myfatoorah from '@/images/logos/myfatoorah.png'

const packages = [
  {
    name: 'Copilot Database Assistant (AI)',
    description: 'Ask in human language, get SQL query, and results.',
    link: { href: 'https://github.com/elsayed85/copilot-ask-database', label: 'elsayed85/copilot-ask-database' },
    logo: logoCopilot,
  },
  {
    name: 'Copilot Chat (CLI)',
    description: 'Chat with Github Copilot from your terminal & Write cli commands using for you.',
    link: { href: 'https://github.com/elsayed85/laravel-github-copilot-chat', label: 'elsayed85/laravel-github-copilot-chat' },
    logo: chat,
  },
  {
    name: 'Microservices With Redis',
    description: 'Build Your MicroService App With Laravel & Redis',
    link: { href: 'https://github.com/elsayed85/laravel-microservices-redis', label: 'elsayed85/aravel-microservices-redis' },
    logo: redis,
  },
  {
    name: 'BankMisr',
    description: 'BankMisr is a Laravel Package that allows you to integrate with BankMisr Payment Gateway.',
    link: { href: 'https://github.com/laravel-pay/bank-misr', label: 'laravel-pay/bank-misr' },
    logo: bankMisr,
  },
  {
    name: 'My Fatoorah',
    description: 'MyFatoorah is a Laravel Package that allows you to integrate with MyFatoorah Payment Gateway.',
    link: { href: 'https://github.com/laravel-pay/myfatoorah', label: 'laravel-pay/myfatoorah' },
    logo: myfatoorah,
  },
  {
    name: 'Paymob',
    description: 'Paymob is a Laravel Package that allows you to integrate with Paymob Payment Gateway.',
    link: { href: 'https://github.com/laravel-pay/paymob', label: 'laravel-pay/paymob' },
    logo: paymob,
  },
  {
    name: 'Fawry',
    description: 'Fawry is a Laravel Package that allows you to integrate with Fawry Payment Gateway.',
    link: { href: 'https://github.com/laravel-pay/fawry', label: 'laravel-pay/fawry' },
    logo: fawry,
  },
  {
    name: 'Git.ir',
    description: 'Scrape & Search For Courses From Git.ir , and Download them.',
    link: { href: 'https://github.com/elsayed85/laravel-git-ir', label: 'elsayed85/laravel-git-ir' },
    logo: gitir,
  },
  {
    name: 'FaselHd (Laravel)',
    description: 'Search, Download, and Watch Movies & Series From faselhd.club',
    link: { href: 'https://github.com/elsayed85/lara-faselhd', label: 'elsayed85/lara-faselhd' },
    logo: faselhd,
  },
  {
    name: 'FaselHd (Nodejs)',
    description: 'Search, Download, and Watch Movies & Series From faselhd.club',
    link: { href: 'https://github.com/elsayed85/faselhd_api_node', label: 'elsayed85/faselhd_api_node' },
    logo: faselhd,
  },
  {
    name: 'ShowBox',
    description: 'Search, Download, and Watch Movies & Series From MovieBox Mobile App (alot of experience)',
    link: { href: 'https://github.com/elsayed85/lara-showbox', label: 'elsayed85/lara-showbox' },
    logo: showbox,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Packages() {
  return (
    <>
      <Head>
        <title>Packages - Elsayed Kamal</title>
        <meta
          name="description"
          content="Explore my collection of open-source packages and repositories."
        />
      </Head>
      <SimpleLayout
        title="Explore my collection of open-source packages and repositories."
        intro="I love open-source and I try to contribute to the community as much as I can."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {packages.map((pack) => (
            <Card as="li" key={pack.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={pack.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={pack.link.href}>{pack.name}</Card.Link>
              </h2>
              <Card.Description>{pack.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{pack.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
