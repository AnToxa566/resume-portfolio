import { profileData } from "@/data";
import { Section } from "@/components/section";
import { ContactCard } from "./contact-card";

export function Contact() {
  const { contact } = profileData;

  return (
    <Section
      id="contact"
      label="Contact"
      className="pb-[clamp(4.5rem,10vw,8rem)]"
    >
      <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.1] display">
        {contact.heading}
      </h2>
      <p className="mt-4 mb-10 max-w-[62ch] text-muted">{contact.blurb}</p>

      <div className="grid grid-cols-1 min-[600px]:grid-cols-2 min-[1360px]:grid-cols-4 gap-px overflow-hidden rounded-lg border border-line bg-line">
        {contact.links.map((link) => (
          <ContactCard key={link.label} link={link} />
        ))}
      </div>

      <div className="mt-8 flex flex-wrap justify-between gap-4 font-mono text-xs text-muted">
        <span>{contact.footerLeft}</span>

        <span>
          {contact.footerRight.replace("{year}", String(new Date().getFullYear()))}
        </span>
      </div>
    </Section>
  );
}
