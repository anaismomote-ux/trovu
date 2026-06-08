import Link from "next/link";

export default function CategoriesSection() {
  return (
    <section className="py-section-gap px-margin-desktop max-w-container-max mx-auto">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-background mb-2">Curated Categories</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Exceptional services for an exceptional lifestyle.</p>
        </div>
        <Link href="/services" className="font-label-md text-label-md text-primary flex items-center gap-2 group">
          View All <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <Link href="/services/hair-styling" className="md:col-span-8 group cursor-pointer overflow-hidden relative aspect-[16/7] bg-surface-container block">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            alt="A luxurious, minimalist hair salon interior featuring high ceilings, curved white furniture, and a soft pink color palette."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDydFBsndgiWiPs90r_uvPVRdrpugZsgr7KG0BTHcVZO19u08GpOxS_KSG_-FzEDFa8L-TGZexZHofZv2jTKuzuOdgdsogNtxB61FDsPDXDeiP9Ekle5k8QA5GAspSFhLqM8Cq_zpbftNHrbLU3X-xzJcCVpq0UNoO_4p_FFe1j6OE3C98G_9yhAU7B30U6O_rHDiWo_oSZEhpDqMN_TkND0OvHkquwAq995i3AA99YSZ39zPCX3a7GahfbljsywKrX155hucUJzbt"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-on-background/60 to-transparent flex flex-col justify-end p-8">
            <h3 className="font-headline-md text-headline-md text-white">Hair Styling</h3>
            <p className="text-white/80 font-body-md">Precision cuts and luxury coloring</p>
          </div>
        </Link>
        <Link href="/services/beauty" className="md:col-span-4 group cursor-pointer overflow-hidden relative aspect-[4/5] bg-surface-container block">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            alt="Close up of a high-end beauty treatment focusing on skincare and luxury cosmetics."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCATes4OaWjRg-baV_x7cU1kjRYYy9QQg7pU9A9N_Fd65D1R78EAe3xi7YF_78CjMeebGQSaWjEOSpeyBj4OvUV0fA5moXYhRABZ_BjcK-YKKMIM_ucaZajXfur3sFU1DWuj79gTeE0gbFl0E4a60jrtxS2WNytMyZC3Pk_0l4eeC1MNfD5HZ970hfr_ztfC_wspkmO9L_sd1NJblgc5zDCyOxX3FsofAhxl5ZmKoBiiuFHB84UGjsjBCWf33M-f-vb-OScudbGZvqx"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-on-background/60 to-transparent flex flex-col justify-end p-8">
            <h3 className="font-headline-md text-headline-md text-white">Beauty</h3>
            <p className="text-white/80 font-body-md">Aesthetic excellence</p>
          </div>
        </Link>
        <Link href="/services/fitness" className="md:col-span-4 group cursor-pointer overflow-hidden relative aspect-[4/5] bg-surface-container block">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            alt="A high-performance boutique fitness studio with high-end equipment and a minimalist aesthetic."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcflJ1mE54s_A2kAX_ZAND3pfZhTmrTaK8TzSC5cdaEbiFSIgpiMS8yB44HYZUgrk3c3bVGPSwf7YzXErV5HOpQsOk0Goazqi1YqLvAr7lBXaYILDREEBVzPcvZxe156YTh1TzwgMtsWFJpl8CLEWyyPuIeG7xZ4Rc1tbG_2N2r5kKqNxeXEuZsXMGhpysoUWM7RVDBl29QC47TdERp4aDMLDArhdw7JwC9VxAG-5I8QNCGDD-xqeW-jx_xI-82K9bmtkqUFHZpIrq"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-on-background/60 to-transparent flex flex-col justify-end p-8">
            <h3 className="font-headline-md text-headline-md text-white">Fitness</h3>
            <p className="text-white/80 font-body-md">Elite personal coaching</p>
          </div>
        </Link>
        <Link href="/services/photography" className="md:col-span-8 group cursor-pointer overflow-hidden relative aspect-[16/7] bg-surface-container block">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            alt="A professional photography session in a sleek, modern architectural space."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtY_iPcyPyqYI2r9ElOyush5GczByyffZM7R7GfyQqju0WvFbqNZUQOhMk52-wSSr9xURyTmGE9wlnaN0kawr5H7CinflipU5iRH9QDI631JAGBDSEDKfhXb0gmczOwh0nFfGTSHSHlDSEDPfowdGaTWvNxfxXfu79DGEju0dS2tq4h7I1Dsa99NUlzMd33oKYolwfo0IwtBZsdNaN2AEQbNHLSYTQzy-5nleu7MF8OozIoXQdqjCdChJEiakOcK6Nfr4cBe4gwl4F"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-on-background/60 to-transparent flex flex-col justify-end p-8">
            <h3 className="font-headline-md text-headline-md text-white">Photography</h3>
            <p className="text-white/80 font-body-md">Capturing your finest moments</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
