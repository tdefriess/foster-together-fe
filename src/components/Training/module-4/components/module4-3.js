import React, { useState } from 'react'
import {
  Page,
  Section,
  MainContent,
  Signature,
  Submit,
  ATag,
  Header,
  Image4,
  InputHolder,
  SignContain,
  BigInput,
  Link,
  Header2,
  Body,
} from './module3styles.js'
import Player from 'react-player'
import { useHistory } from 'react-router-dom'
import TrainingNav from '../TrainingNav/NavBar'

export default function Module3(props) {
  const [section, setSection] = useState(1)
  const { push } = useHistory()
  return (
    <>
      <TrainingNav />
      <Header>
        <svg
          width='21'
          height='18'
          viewBox='0 0 27 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          onClick={() => push('/Module4')}
        >
          <path
            d='M27 10.443H5.6129L13.3739 2.20163L11.3006 0L0 12L11.3006 24L13.3739 21.7984L5.6129 13.557H27V10.443Z'
            fill='#517E92'
          />
        </svg>
        Body Safety Rules by The Mama Bear Effect{' '}
      </Header>
      <Page id='section3'>
        <>
          <MainContent>
            Foster parents wishing to use a Foster Together parent helper are
            required to post the body safety rules in their home. We purchase a
            poster for each of our foster families, and if you'd like one for
            your own home, you may order by clicking
            <Link
              href='https://mamabeareffect.ecwid.com/Body-Safety-Poster-p51112142'
              target='blank'
            >
              {' '}
              here.
            </Link>
          </MainContent>
          <Image4 src='https://images.squarespace-cdn.com/content/v1/5823691a725e2518e78c6c50/1524686041133-7YL55J2UUCA0HGFQ9DFQ/ke17ZwdGBToddI8pDm48kGrEzKbmlT1aXa03pZYZUlJ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmD3GJgI7_jN764QbmlaUTk5WyFFzHgH39gSTvnaFnniHmMoF0B1QmrvergKLtg00N/mama+bear+effect.jpg?format=1500w' />
        </>
        <Body>
          Guidelines adapted from the book Off Limits: A Parent's Guide to
          Keeping Children Safe from Sexual Abuse and the live workshop
          Parenting Safe Children. To book a Parenting Safe Children workshop
          with Feather Berkower in Colorado, click here. It's a half-day
          training with your neighborhood, school, church, or club teaching you
          to prevent child abuse from happening right under your nose.
        </Body>
        <>
          <Header2>
            Body safety rules for all Foster Together Homes: Complete before
            proceeding
          </Header2>
          <SignContain>
            <MainContent>
              The children in this home are actively taught body-safety rules
              and we ask that you reinforce these rules if the child ever raises
              the topics of: private parts, secrets, feeling unsafe, or open
              communication. *
            </MainContent>
            <InputHolder>
              <Signature placeholder='If you understand, please type your full name here to agree' />
            </InputHolder>
          </SignContain>
          <SignContain>
            <MainContent>
              Rule One: Children in this home do not touch other people’s
              private parts and no one is allowed to touch theirs.
            </MainContent>
            <InputHolder>
              <Signature placeholder='If you understand, please type your full name here to agree' />
            </InputHolder>
          </SignContain>
          <SignContain>
            <MainContent>
              Rule Two: Children in this home are regularly instructed not to
              keep secrets from the parents in their lives. *
            </MainContent>
            <InputHolder>
              <Signature placeholder='If you understand, please type your full name here to agree' />
            </InputHolder>
          </SignContain>
          <SignContain>
            <MainContent>
              Rule Three: Children in this home are regularly reminded to tell a
              safe adult if anyone tries to break any of their body safety rules
              or asks them to do anything that worries or frightens them. *
            </MainContent>
            <InputHolder>
              <Signature placeholder='If you understand, please type your full name here to agree' />
            </InputHolder>
          </SignContain>
          <SignContain>
            <MainContent>
              Rule Four: We have open communication with children in this home
              and no topics are off-limits. *
            </MainContent>
            <InputHolder>
              <Signature placeholder='If you understand, please type your full name here to agree' />
            </InputHolder>
          </SignContain>
          <SignContain>
            <MainContent>
              I understand that foster parents using a Foster Together helper
              are trained on this material and regularly talk about body safety
              with all kids at home. *
            </MainContent>
            <InputHolder>
              <Signature placeholder='If you understand, please type your full name here to agree' />
            </InputHolder>
          </SignContain>
          <MainContent>
            Any questions or concerns about this section?
          </MainContent>
          <InputHolder>
            <BigInput />
          </InputHolder>
        </>
        <ATag href='#section4'>
          <Submit
            onClick={() => {
              setSection(4)
            }}
          >
            Continue
          </Submit>
        </ATag>
      </Page>
    </>
  )
}
