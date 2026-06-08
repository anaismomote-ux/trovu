import Link from "next/link";

export default function ForProviders() {
  return (
    <section className="py-section-gap bg-surface-container-low overflow-hidden">
      <div className="px-margin-desktop max-w-container-max mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2 order-2 lg:order-1 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
            <img
              className="rounded-2xl relative z-10 editorial-shadow w-full aspect-[4/5] object-cover"
              alt="A portrait of a successful professional woman in a bright, modern studio."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAP7WALlMpJHWlEGxNrpA1Kr0upOcjtuxn2e4yp17vr-Ssp_a5D9eHQT8bw5W13CrflVENdWeTEBFLvHvphynkK9A0E1fWIh5bvGZtdb7s_Cu-ttwjuQLohqB8Tz6UtLyOY-SIweGgGWg8-uFjmIhTsVQ8nRMr0YUQ5f6zEEIpQJwB7uccsSnx8Zc4MeMe40-u39CURdu8GV7-pAr2X5EDcds1XjMw-fQmvpQE_nb1vWob_QNj-VeKLm3JRx-FgEMbeFJjYlatwOol4"
            />
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <h2 className="font-display-md text-display-md text-on-background mb-8">Elevate your business to elite status.</h2>
            <div className="space-y-8 mb-10">
              <div className="flex gap-4">
                <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">1</span>
                <div>
                  <h4 className="font-headline-md text-headline-md mb-2">Exclusive Audience</h4>
                  <p className="font-body-md text-on-surface-variant">Connect with high-net-worth clients who value quality over cost.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">2</span>
                <div>
                  <h4 className="font-headline-md text-headline-md mb-2">Seamless Management</h4>
                  <p className="font-body-md text-on-surface-variant">Integrated booking, payments, and client management tools.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">3</span>
                <div>
                  <h4 className="font-headline-md text-headline-md mb-2">Global Reputation</h4>
                  <p className="font-body-md text-on-surface-variant">Benefit from Trovu&apos;s premium branding and trusted ecosystem.</p>
                </div>
              </div>
            </div>
            <Link
              href="/become-a-provider"
              className="bg-primary text-on-primary px-10 py-4 rounded-full font-label-md text-label-md hover:bg-on-primary-container transition-all inline-block"
            >
              Become a Provider
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
