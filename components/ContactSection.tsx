import { HugeiconsIcon } from "@hugeicons/react";
import {
  Github01Icon,
  Linkedin01Icon,
  NewTwitterIcon,
  Email,
  TelegramIcon,
} from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";

const emailUser = "m7shah007";
const emailDomain = "gmail.com";
const emailAddress = `${emailUser}@${emailDomain}`;

const contactItems = [
  {
    icon: Email,
    label: "Email",
    value: `${emailUser} [at] ${emailDomain}`,
    href: `mailto:${emailAddress}`,
    size: "large",
    gradient: "from-blue-500/5 to-cyan-500/5",
  },
  {
    icon: Github01Icon,
    label: "GitHub",
    value: "monushah108",
    href: "https://github.com/monushah108",
    size: "small",
    gradient: "from-gray-500/5 to-slate-500/5",
  },
  {
    icon: Linkedin01Icon,
    label: "LinkedIn",
    value: "monushah",
    href: "https://www.linkedin.com/in/monushah",
    size: "small",
    gradient: "from-blue-600/5 to-blue-800/5",
  },
  {
    icon: NewTwitterIcon,
    label: "X (Twitter)",
    value: "@monushah108",
    href: "https://x.com/monushah108",
    size: "small",
    gradient: "from-gray-500/5 to-gray-600/5",
  },
  {
    icon: TelegramIcon,
    label: "Telegram",
    value: "@monushah108",
    href: "https://t.me/monushah108",
    size: "small",
    gradient: "from-blue-500/5 to-blue-600/5",
  },
];

export default function ContactSection() {
  return (
    <section id="contact">
      <div className="mx-auto h-full max-w-5xl border-x">
        <div className="flex grow flex-col justify-center border-b bg-linear-to-br from-muted/40 via-background to-muted/20 px-4 py-10 sm:py-14 md:py-16 md:items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Let&apos;s Connect</h2>
          <p className="mt-1 mb-2 text-sm sm:text-base text-muted-foreground">
            Reach out through email or find me on social media
          </p>
        </div>

        <BorderSeparator />

        <div className="grid md:grid-cols-3">
          {contactItems.map((contact, index) => {
            const isLarge = contact.size === "large";
            const isMiddle = contact.label === "X (Twitter)";
            const isRow1 = index < 2;
            const isRightEdge = index === 1 || index === 4;

            return (
              <Box
                key={contact.label}
                icon={contact.icon}
                title={contact.label}
                value={contact.value}
                href={contact.href}
                hoverClassName={
                  isMiddle ? "hover:bg-secondary/5" : "hover:bg-secondary/10"
                }
                description={
                  contact.label === "Email"
                    ? "I respond to all emails within 24 hours."
                    : contact.label === "GitHub"
                      ? "See my latest work and contributions."
                      : contact.label === "LinkedIn"
                        ? "Connect with me professionally."
                        : contact.label === "X (Twitter)"
                          ? "Follow updates and short thoughts."
                          : "Reach out quickly for a chat."
                }
                className={cn(
                  isLarge ? "md:col-span-2" : "md:col-span-1",
                  index === 1 ? "md:col-start-3" : "",
                  // Mobile borders
                  index === contactItems.length - 1 ? "border-b-0" : "border-b",
                  // Desktop/tablet borders
                  isRow1 ? "md:border-b" : "md:border-b-0",
                  isRightEdge ? "md:border-r-0" : "md:border-r",
                )}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BorderSeparator({ className }: React.ComponentProps<"div">) {
  return (
    <div className={cn("relative inset-x-0 h-px w-full border-b", className)} />
  );
}

type ContactBox = React.ComponentProps<"div"> & {
  icon: typeof Email;
  title: string;
  description: string;
  value: string;
  href: string;
  hoverClassName?: string;
};

function Box({
  title,
  description,
  value,
  href,
  hoverClassName,
  className,
  icon: Icon,
}: ContactBox) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative flex h-full flex-col justify-between overflow-hidden transition-colors border-border/60",
        hoverClassName,
        className,
      )}
    >
      <div className="pointer-events-none absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 opacity-[0.08]">
        <HugeiconsIcon
          icon={Icon}
          size={60}
          className="transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-1"
        />
      </div>

      <div className="flex items-center gap-x-3 border-b bg-secondary/50 p-3.5 sm:p-4 dark:bg-secondary/20">
        <HugeiconsIcon
          icon={Icon}
          size={18}
          className="text-muted-foreground shrink-0"
        />
        <h4 className="font-heading font-medium text-base sm:text-lg tracking-wider">
          {title}
        </h4>
      </div>
      <div className="flex items-center gap-x-2 p-3.5 sm:p-4 py-6 sm:py-8 md:py-10">
        <span className="font-medium font-mono text-xs sm:text-sm tracking-wide break-all xs:break-normal">
          {value}
        </span>
      </div>
      <div className="border-t p-3.5 sm:p-4">
        <p className="text-muted-foreground text-xs sm:text-sm">{description}</p>
      </div>
    </a>
  );
}
