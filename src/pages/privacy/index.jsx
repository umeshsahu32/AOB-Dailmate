import LegalPageLayout from "../../components/LegalPageLayout";
import {
  Introduction,
  Section,
  SubSection,
  Paragraph,
  ContactSection,
} from "../../components/LegalPageComponents";

const Privacy = () => {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      breadcrumbText="Privacy Policy"
      effectiveDate="7 Dec 2025"
      lastUpdated="7 Dec 2025"
    >
      <Introduction>
        DialForce, a brand of Leadsync Technologies ("we," "our," "us"),
        respects your privacy and is committed to protecting your personal
        information. This Privacy Policy outlines how we collect, use,
        disclose, and safeguard your data when you visit our website
        www.dialforce.in and use our services.
      </Introduction>

      <Section title="1. Information We Collect">
        <SubSection title="1.1 Personal Information">
          <Paragraph>
            We may collect personal information that you voluntarily provide
            to us when you register on our website, fill out forms, or
            communicate with us. This information may include your name,
            email address, phone number, company name, and other relevant
            details.
          </Paragraph>
        </SubSection>

        <SubSection title="1.2 Automatically Collected Information">
          <Paragraph>
            When you access our website, we may automatically collect
            certain information about your device, browsing actions, and
            usage patterns. This may include your IP address, browser type,
            operating system, access times, and the pages you have viewed
            directly before and after accessing the website.
          </Paragraph>
        </SubSection>

        <SubSection title="1.3 Cookies and Similar Technologies">
          <Paragraph>
            We may use cookies, web beacons, and other tracking technologies
            to collect information about your interactions with our website
            and to enhance your experience. You can choose to disable
            cookies through your browser settings, but this may affect your
            ability to use certain features of our website.
          </Paragraph>
        </SubSection>
      </Section>

      <Section title="2. How We Use Your Information">
        <SubSection title="2.1 To Provide and Manage Services">
          <Paragraph>
            We use your personal information to provide, manage, and improve
            our lead generation services. This includes processing your
            requests, managing your account, and delivering qualified leads
            to you.
          </Paragraph>
        </SubSection>

        <SubSection title="2.2 To Communicate with You">
          <Paragraph>
            We may use your contact information to send you updates,
            marketing communications, and other information related to our
            services. You can opt-out of receiving marketing communications
            at any time.
          </Paragraph>
        </SubSection>

        <SubSection title="2.3 To Improve Our Services">
          <Paragraph>
            We may use the information we collect to analyze usage trends,
            monitor the performance of our website, and improve the
            effectiveness of our services.
          </Paragraph>
        </SubSection>

        <SubSection title="2.4 To Ensure Compliance">
          <Paragraph>
            We use your information to ensure compliance with our legal
            obligations, such as maintaining the confidentiality of your
            data and adhering to relevant laws and regulations.
          </Paragraph>
        </SubSection>
      </Section>

      <Section title="3. Data Security">
        <SubSection title="3.1 Protection Measures">
          <Paragraph>
            We implement appropriate technical and organizational measures
            to protect your personal information from unauthorized access,
            alteration, disclosure, or destruction. Our data servers are
            located in India and are secured in accordance with the
            guidelines of the Government of India.
          </Paragraph>
        </SubSection>

        <SubSection title="3.2 Restricted Access">
          <Paragraph>
            Access to your personal information is restricted to authorized
            personnel who require it to perform their job functions. We take
            all reasonable steps to ensure that your data is treated
            securely and in accordance with this Privacy Policy.
          </Paragraph>
        </SubSection>
      </Section>

      <Section title="4. Data Sharing and Disclosure">
        <SubSection title="4.1 Third-Party Service Providers">
          <Paragraph>
            We may share your information with third-party service providers
            who assist us in providing our services, such as email marketing
            platforms, tele-sales executives, and digital marketing experts.
            These third parties are contractually obligated to keep your
            information confidential and use it only for the purposes for
            which it was disclosed.
          </Paragraph>
        </SubSection>

        <SubSection title="4.2 Legal Requirements">
          <Paragraph>
            We may disclose your information if required to do so by law or
            in response to valid requests by public authorities (e.g., a
            court or government agency).
          </Paragraph>
        </SubSection>

        <SubSection title="4.3 Business Transfers">
          <Paragraph>
            We may disclose your information if required to do so by law or
            in the event of a merger, acquisition, or sale of all or a
            portion of our assets, your personal information may be
            transferred as part of that transaction.
          </Paragraph>
        </SubSection>
      </Section>

      <Section title="5. Data Retention">
        <Paragraph>
          We retain your personal information for as long as necessary to
          fulfill the purposes outlined in this Privacy Policy or as
          required by law. Once your data is no longer needed, we will
          securely delete or anonymize it.
        </Paragraph>
      </Section>

      <Section title="6. Your Rights">
        <SubSection title="6.1 Access and Correction">
          <Paragraph>
            You have the right to access and correct any personal
            information we hold about you. If you wish to update or correct
            your data, please contact us.
          </Paragraph>
        </SubSection>

        <SubSection title="6.2 Opt-Out">
          <Paragraph>
            You have the right to opt-out of receiving marketing
            communications from us at any time. To do so, please follow the
            unsubscribe instructions in the emails you receive or contact us
            directly.
          </Paragraph>
        </SubSection>
      </Section>

      <Section title="7. No Sale of Data">
        <Paragraph>
          DialForce does not sell your personal information to any third
          parties. We use your data solely to provide our services and
          improve your experience.
        </Paragraph>
      </Section>

      <Section title="8. Changes to This Privacy Policy">
        <Paragraph>
          We may update this Privacy Policy from time to time to reflect
          changes in our practices or for other operational, legal, or
          regulatory reasons. We will notify you of any significant changes
          by posting the new Privacy Policy on our website and updating the
          effective date.
        </Paragraph>
      </Section>

      <Section title="9. Contact Us">
        <ContactSection>
          If you have any questions or concerns about this Privacy Policy or
          our data practices, please contact us at
        </ContactSection>
      </Section>
    </LegalPageLayout>
  );
};

export default Privacy;
