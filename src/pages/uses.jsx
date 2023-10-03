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
            <Tool title="Ubuntu with GNOME" href={'https://ubuntu.com/'}>
              I use Ubuntu 22.04.3 LTS. It’s fast, stable, and easy to use.
            </Tool>

            <Tool title="Chrome" href={'https://www.google.com/chrome/'}>
              I use Chrome for browsing the web. It’s fast and has a lot of great extensions.
            </Tool>

            <Tool title="Laravel" href={'https://laravel.com/'}>
              I&apos;ve been a fan of Laravel for long before I worked there and it is hands down the tool I reach for when building a web application.
            </Tool>

          </ToolsSection>

          <ToolsSection title="Development tools">
            <Tool title="PHPStorm" href={'https://www.jetbrains.com/phpstorm/'}>
              I’ve tried them all and PHPStorm is the best IDE for PHP development.
            </Tool>

            <Tool title="Postman" href={'https://www.postman.com/'}>
              Postman is the best tool for testing APIs. I use it every day.
            </Tool>

            <Tool title="Laravel Valet" href={'https://laravel.com/docs/valet'}>
              Valet is a great tool for running Laravel applications locally. It’s fast and easy to use. I use it for all my local development.
            </Tool>

            <Tool title="RedisInsight" href={'https://redislabs.com/redis-enterprise/redis-insight/'}>
              RedisInsight is a great tool for managing Redis.
            </Tool>
          </ToolsSection>

          <ToolsSection title="Debugging">
            <Tool title="Ray" href={'https://myray.app/'}>
            Ray is a desktop application that serves as the dedicated home for debugging output. Send, format and filter debug information from both local projects and remote servers.
            </Tool>
          </ToolsSection>

          <ToolsSection title="Productivity">

            <Tool title="Github Copilot" href={'https://copilot.github.com/'}>
              Github Copilot is a great tool for writing code. I use it to write code faster. I also Build Custom ChatBot And Cli Tools Using Copilot Api , available on my Github.
            </Tool>

            <Tool title="Github Copilot Cli" href={'https://www.npmjs.com/package/@githubnext/github-copilot-cli'}>
              GitHub Copilot CLI translates natural language into shell commands, with modes for different domains.
            </Tool>

            <Tool title="Notion" href={'https://www.notion.so/'}>
              Notion is a great tool for taking notes, managing projects, and more. I use it for everything.
            </Tool>

            <Tool title="MitmProxy" href={'https://mitmproxy.org/'}>
              MitmProxy is a great tool for debugging HTTP requests. I use it to debug API requests Of my applications , Hack Some IOS Apps (😉) , and more.
            </Tool>

            <Tool title="Termius" href={'https://termius.com/'}>
              Termius is a great SSH client, and it’s available on all platforms. I use it to connect to my servers.
            </Tool>

          </ToolsSection>

          <ToolsSection title="Other">
            <Tool title="Spotify" href={'https://www.spotify.com/'}>
              CairoKee , Hamza Namira , Om’Kalthoum , and more. I listen to music all day long.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
