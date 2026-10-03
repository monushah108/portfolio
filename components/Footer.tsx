import WebsiteViewsCounter from "./WebsiteViewsCounter";

export default function Footer() {
  return (
    <footer className="mt-14 sm:mt-20 md:mt-24">
      <div className="mx-auto h-full max-w-5xl border-x">
        <div className="border-t" />
        <div className="flex flex-col gap-4 sm:gap-6 px-4 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <span className="text-xs sm:text-sm md:text-base text-muted-foreground">
              © {new Date().getFullYear()} monu. All rights reserved.
            </span>
            <div className="flex items-center">
              <WebsiteViewsCounter />
            </div>
          </div>

          <div className="h-8 sm:h-10 border-y border-border/60 stripe-bg-12" />
        </div>

        <div className="relative flex h-full items-center justify-center py-4 sm:py-8 md:py-10">
          <div className="group relative w-full max-w-4xl overflow-hidden px-3 sm:px-6 py-4 sm:py-8">
            <div className="flex items-center justify-center gap-2 xs:gap-4 sm:gap-6">
              <div className="h-6 sm:h-10 md:h-12 flex-1 min-w-3 sm:min-w-6 stripe-bg-12" />
              <h3
                aria-hidden="true"
                className="font-serif text-center text-lg xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground/10 transition-all duration-300 group-hover:text-foreground dark:group-hover:text-white group-hover:drop-shadow-[0_0_18px_rgba(0,0,0,0.12)] dark:group-hover:drop-shadow-[0_0_18px_rgba(255,255,255,0.35)] shrink-0 select-none"
              >
                I USE ARCH BTW
              </h3>
              <div className="h-6 sm:h-10 md:h-12 flex-1 min-w-3 sm:min-w-6 stripe-bg-12" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
