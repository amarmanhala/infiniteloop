import React from 'react'
import PageSection from './PageSection'
import PageSectionHeader from './PageSectionHeader'
import Anchor from './Anchor'

const Contact = () => {
  return (
    <PageSection>
    <PageSectionHeader title="Let's chat"></PageSectionHeader>
    <p className="text-stone-100 text-xl">
      Email me at{" "}
      <Anchor paramURL="mailto: amar.manhala@gmail.com">
        amar.manhala@gmail.com
      </Anchor>{" "}
      or you can find on{" "}
      <Anchor paramURL="https://twitter.com/hyumanamar">Twitter</Anchor>,{" "}
      <Anchor paramURL="https://github.com/amarmanhala">Github</Anchor>,{" "}
      <Anchor paramURL="https://www.linkedin.com/in/hyumanamar/">
        LinkedIn
      </Anchor>
      .
    </p>
  </PageSection>
  )
}

export default Contact