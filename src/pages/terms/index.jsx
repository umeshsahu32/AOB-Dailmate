import LegalPageLayout from "../../components/LegalPageLayout";
import {
  Introduction,
  Section,
  SubSection,
  Paragraph,
  BulletList,
  ContactSection,
} from "../../components/LegalPageComponents";

const Terms = () => {
  return (
    <LegalPageLayout
      title="Terms and Conditions"
      breadcrumbText="Terms and Conditions"
      effectiveDate="7 Dec 2025"
      lastUpdated="7 Dec 2025"
    >
      <Introduction>
        Welcome to www.dialforce.in, a website operated by Leadsync
        Technologies ("we," "our," "us"). By accessing or using this
        website, you agree to comply with and be bound by the following
        terms and conditions. Please read these terms carefully before
        using our website. If you do not agree with any part of these
        terms, you must not use our website.
      </Introduction>

      <Section title="1. Acceptance of Terms">
        <Paragraph>
          By using this website, you acknowledge that you have read,
          understood, and agree to be bound by these Terms and Conditions, as
          well as our Privacy Policy. These terms apply to all visitors,
          users, and others who access or use the website.
        </Paragraph>
      </Section>

      <Section title="2. Use of Website">
        <SubSection title="2.1 License">
          <Paragraph>
            DialForce grants you a limited, non-exclusive,
            non-transferable, and revocable license to access and use the
            website for your personal or business purposes, subject to these
            Terms and Conditions.
          </Paragraph>
        </SubSection>

        <SubSection title="2.2 Prohibited Conduct">
          <Paragraph>
            You agree not to engage in any of the following prohibited
            activities:
          </Paragraph>
          <BulletList
            items={[
              "Using the website for any unlawful purpose or in violation of any applicable laws or regulations.",
              "Attempting to interfere with, disrupt, or disable the website's functionality, including through the use of viruses, bots, or other malicious code.",
              "Accessing or using the website to collect any personally identifiable information, including account names or email addresses, for commercial purposes.",
              "Attempting to gain unauthorized access to any part of the website, other users' accounts, or any computer systems or networks connected to the website.",
              "Impersonating any person or entity, or falsely stating or otherwise misrepresenting your affiliation with a person or entity.",
            ]}
          />
        </SubSection>

        <SubSection title="2.3 Modifications to the Website">
          <Paragraph>
            We reserve the right to modify, suspend, or discontinue any part
            of the website at any time without notice. We will not be liable
            to you or any third party for any modification, suspension, or
            discontinuance of the website or any part thereof.
          </Paragraph>
        </SubSection>
      </Section>

      <Section title="3. Intellectual Property">
        <SubSection title="3.1 Ownership">
          <Paragraph>
            All content on the website, including text, graphics, logos,
            images, and software, is the property of Leadsync Technologies
            or its content suppliers and is protected by copyright,
            trademark, and other intellectual property laws. You may not
            reproduce, distribute, modify, or create derivative works based
            on any content without our express written permission.
          </Paragraph>
        </SubSection>

        <SubSection title="3.2 Trademarks">
          <Paragraph>
            "DialForce," "Leadsync Technologies," and all related logos,
            product names, and services mentioned on the website are
            trademarks of Leadsync Technologies or its affiliates. You may
            not use any of these trademarks without our prior written
            consent.
          </Paragraph>
        </SubSection>
      </Section>

      <Section title="4. User Content">
        <SubSection title="4.1 User Submissions">
          <Paragraph>
            You may have the opportunity to post, submit, or otherwise make
            available content, such as comments, feedback, or other
            information ("User Content") on the website. By submitting User
            Content, you grant DialForce a non-exclusive, worldwide,
            royalty-free, perpetual, and irrevocable license to use,
            reproduce, modify, adapt, publish, translate, create derivative
            works from, distribute, and display such content.
          </Paragraph>
        </SubSection>

        <SubSection title="4.2 Responsibility">
          <Paragraph>
            You are solely responsible for the content you submit and agree
            that your User Content will not violate any applicable law,
            infringe upon any third-party rights, or contain any defamatory,
            obscene, or otherwise objectionable material.
          </Paragraph>
        </SubSection>
      </Section>

      <Section title="5. Disclaimers">
        <SubSection title="5.1 No Warranties">
          <Paragraph>
            The website is provided on an "as-is" and "as-available" basis.
            DialForce makes no warranties, express or implied, regarding the
            website's operation, content, or the information provided. To the
            fullest extent permitted by law, we disclaim all warranties,
            including but not limited to implied warranties of
            merchantability, fitness for a particular purpose, and
            non-infringement.
          </Paragraph>
        </SubSection>

        <SubSection title="5.2 Limitation of Liability">
          <Paragraph>
            DialForce shall not be liable for any damages, including but not
            limited to direct, indirect, incidental, punitive, and
            consequential damages, arising out of or in connection with your
            use of the website, even if we have been advised of the
            possibility of such damages. Your sole remedy for dissatisfaction
            with the website is to stop using it.
          </Paragraph>
        </SubSection>
      </Section>

      <Section title="6. Indemnification">
        <Paragraph>
          You agree to indemnify, defend, and hold harmless DialForce, its
          affiliates, officers, directors, employees, and agents from and
          against any and all claims, damages, losses, liabilities, costs, and
          expenses (including reasonable attorneys' fees) arising out of or in
          connection with your use of the website, your violation of these
          Terms and Conditions, or your violation of any rights of another.
        </Paragraph>
      </Section>

      <Section title="7. Termination">
        <Paragraph>
          We reserve the right to terminate or suspend your access to the
          website, without notice, for conduct that we believe violates these
          Terms and Conditions or is harmful to other users, us, or third
          parties, or for any other reason at our sole discretion.
        </Paragraph>
      </Section>

      <Section title="8. Governing Law">
        <Paragraph>
          These Terms and Conditions are governed by and construed in
          accordance with the laws of India. You agree to submit to the
          exclusive jurisdiction of the courts located in Hyderabad, India,
          for the resolution of any disputes arising out of or relating to
          these terms or your use of the website.
        </Paragraph>
      </Section>

      <Section title="9. Changes to These Terms">
        <Paragraph>
          DialForce may update these Terms and Conditions from time to time.
          We will notify you of any changes by posting the new terms on this
          page and updating the effective date. Your continued use of the
          website after any changes indicates your acceptance of the revised
          terms.
        </Paragraph>
      </Section>

      <Section title="10. Contact Us">
        <ContactSection>
          If you have any questions or concerns about these Terms and
          Conditions, please write to us at
        </ContactSection>
      </Section>
    </LegalPageLayout>
  );
};

export default Terms;
