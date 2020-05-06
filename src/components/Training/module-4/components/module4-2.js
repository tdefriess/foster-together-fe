import React from "react";
import {
  // Body,
  // Body1,
  MainContent2,
  MainContent3,
  // Body2,
  Half1,
  // Question1,
  MainContent4,
  // Section2,
  // Header3,
  Image2,
  Span,
  // Section1,
  // Module4Input,
  Module4Submit,
  ClickHere,
  ATag1,
  Header4,
  Body3,
  Module4Link,
  // Text,
  Statement,
  Video1,
  /* BackArrow, */
  /* Wrapper, */
  // Title,
  Input
} from "../../TrainStyles.js";
import Player from "react-player";

import {
  PageWrapper,
  PageTitle,
  FormTitle,
  BackArrow,
  MainContent,
  FormContent,
  Text
} from "../../GlobalModule.styles";

export const Module42 = props => {
  const { handleBack, errors, touched } = props

  return (
    <>
      <PageWrapper>
        <PageTitle>
          <BackArrow onClick={handleBack} />
          Sexual abuse prevention{" "}
        </PageTitle>

        <MainContent>
          <MainContent2>
            <Text>
              Because one in three girls and one in four boys will be targets
              for sexual abuse, we can't leave this part out. <br />
            </Text>
            <Text>
              Because kids in foster care are one of the groups most at-risk to
              be abused, we can't afford not to prepare every Foster Family
              Helper to prevent abuse. <br />
            </Text>
            <Text>
              <Span>
                For many people, this may be the toughest part of the Foster
                Together process.{" "}
              </Span>
              And we thank you for doing it anyway. <br />
            </Text>
            <Text>
              We are looking for adults who are willing to feel uncomfortable in
              this training, so that they can decrease the likelihood of abuse
              for the kids they care about. <br />
            </Text>
            <Text>
              We are looking for adults who are willing to feel <br />
              uncomfortable in this training, so that they can <br />
              decrease the likelihood of abuse for the kids they care about.{" "}
            </Text>

            <Video1>
              <Player
                url="https://www.youtube.com/embed/ULGJphesPnk"
                width="550px"
                height="400px"
              />
            </Video1>
          </MainContent2>

          <Text>
            <Span>
              We do not include this section to scare you or make people
              super-suspicious of each other.{" "}
            </Span>
            Rather, we want to create a Foster Together culture of open
            conversations and clarity.
            <br />
          </Text>

          <Half1>
            <Image2
              src="https://images.squarespace-cdn.com/content/v1/5823691a725e2518e78c6c50/1525386132069-86G9CUPJYIFKEVYT5SKY/ke17ZwdGBToddI8pDm48kAUFOTPMSVxuKvNFAx6DKiZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0ouw-8l5B_J38LMU7OZFvYc0yAe_x11zxahcI_hfw238yWAp0jGKzhuVZoU5dfkFlA/FT+37.jpg?format=750w"
              width="450px"
              height="570px"
            />
            <MainContent3>
              <Text>
                The main point is that secrets and wrong motivations can't exist
                in the light of open communication and savvy supervision. So if
                you have nothing to hide, you have nothing to worry about.{" "}
                <br />
                <br></br>
                We also know that the most effective way to prevent predators
                from targeting our kids is by setting the expectation for all
                adults involved that private parts are off limits and secrets
                are a no-go. As a foster care volunteer opportunity, we realize
                that someone who wants to gain access to children might see
                Foster Together as an easy target.{" "}
                <Span>
                  Requiring this training for all foster parents and Family
                  Helpers is the best way we know to say "Not on our watch."
                </Span>
                <br></br>
                <br></br>
                Please read the two linked articles, review the chart of “body
                safety rules,” and fill out the following form, stating that
                <Span>
                  {" "}
                  you understand that our foster parents are aware of red flags
                  for sexual abuse, and regularly enforcing the rules below.
                </Span>
              </Text>
            </MainContent3>
          </Half1>
          <Header4>Again, thank you for sticking with us.</Header4>

          <Body3>
            <Span>PLEASE CLICK TO READ:</Span>
            <Module4Link href="https://parentingsafechildren.com/what-offenders-want-you-to-know/">
              {" "}
              WHAT SEXUAL OFFENDERS WANT YOU TO KNOW
            </Module4Link>
          </Body3>

          <MainContent4>
            <Statement>
              Excerpt: Pay attention to our behaviors. <br />
            </Statement>
            People who sexually abuse children methodically groom to gain
            access—and then compliance. <br />
            <Text>
              “The kids I abused were all seeking love. I would shower the child
              with gifts, special treatment and attention, and painstakingly
              move toward the moment when I could gain compliance and cross the
              line.”
            </Text>
            In some instances, the parent is also being groomed through a level
            of generosity that is probably too good to be true – free
            babysitting, financial support, and perhaps an excessive willingness
            to “help out.” <br /> <br />
            There is good news. With knowledge, you can recognize grooming
            behaviors and with courage, you can speak up. <br /> <br />
            <Span>Lesson:</Span> Pay attention to these kinds of behaviors and
            patterns: favoring children, special treatment, allowing kids to
            break rules, gift-giving, lots of attention, a listening ear, taking
            a child’s side, manipulation, introducing kids to sexual material,
            or talking about sex (i.e., sexualizing the relationship). Read the
            rest by clicking{" "}
            <Module4Link href="https://parentingsafechildren.com/what-offenders-want-you-to-know/">
              here.
            </Module4Link>
            <br />
            <br />
          </MainContent4>

          <MainContent4>
            <ClickHere>
              <Span>
                For a deeper idea of how to keep kids safe, you might want to
                read
              </Span>{" "}
              Top 10 Questions on Preventing Sexual Abuse (Includes
              developmentally appropriate explanations, click{" "}
              <Module4Link href="https://parentingsafechildren.com/your-top-10-questions-about-body-safety-2/">
                HERE
              </Module4Link>{" "}
              to read)
            </ClickHere>
          </MainContent4>
        </MainContent>
        <FormContent>
          <FormTitle>
            Understanding sexual abuse prevention: Complete before proceeding
          </FormTitle>
          <Text>
            What did you learn from the above article(s)? (3+ sentences)
          </Text>
          <Input
            component="textarea"
            id="m4_q2"
            name="m4_q2"
            placeholder="Your Answer Here"
          />
          {errors?.m4_q2 && touched?.m4_q2 && (
            <p style={{ color: "red" }}>{errors.m4_q2}</p>
          )}
          <ATag1>
            <Module4Submit type="submit">Continue</Module4Submit>
          </ATag1>
        </FormContent>
      </PageWrapper>
    </>
  );
};

export default Module42;
