import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Elsayed Kamal</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software , Development Tools , Productivity Tools , and more."
        intro="Software I use, gadgets I love, and other things I recommend."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            
            <Tool title="16” Dell Laptop, 16GB RAM (2020)">
              I was using an Dell Laptop (Intel® Core™ i7-8550U CPU @ 1.80GHz × 8) with 16GB RAM, 512GB SSD, and 2K display. 
            </Tool>
          </ToolsSection>

          <ToolsSection title="Software">
          
            <Tool title="Ubuntu with GNOME">
              I use Ubuntu 22.04.3 LTS. It’s fast, stable, and easy to use.
            </Tool>

            <Tool title="Chrome">
              I use Chrome for browsing the web. It’s fast and has a lot of great extensions.
            </Tool>

            <Tool title="Laravel">
              I&apos;ve been a fan of Laravel for long before I worked there and it is hands down the tool I reach for when building a web application.
            </Tool>

          </ToolsSection>

          <ToolsSection title="Development tools">
            <Tool title="PHPStorm">
              I’ve tried them all and PHPStorm is the best IDE for PHP development.
            </Tool>

            <Tool title="Postman">
              Postman is the best tool for testing APIs. I use it every day.
            </Tool>

            <Tool title="Laravel Valet">
              Valet is a great tool for running Laravel applications locally. It’s fast and easy to use. I use it for all my local development.
            </Tool>

            <Tool title="RedisInsight">
              RedisInsight is a great tool for managing Redis.
            </Tool>

          </ToolsSection>

          <ToolsSection title="Productivity">

            <Tool title="Github Copilot">
              Github Copilot is a great tool for writing code. I use it to write code faster. I also Build Custom ChatBot And Cli Tools Using Copilot Api , available on my Github.
            </Tool>

            <Tool title="Notion">
              Notion is a great tool for taking notes, managing projects, and more. I use it for everything.
            </Tool>

            <Tool title="MitmProxy">
              MitmProxy is a great tool for debugging HTTP requests. I use it to debug API requests Of my applications , Hack Some IOS Apps (😉) , and more.
            </Tool>

            <Tool title="Termius">
              Termius is a great SSH client, and it’s available on all platforms. I use it to connect to my servers.
            </Tool>

          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
