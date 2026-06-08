import Link from "next/link";

export default function FeaturedProfessionals() {
  return (
    <section className="py-section-gap bg-surface-container-low">
      <div className="px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-on-background mb-4">Elite Professionals</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
            Vetted experts hand-picked for their exceptional craft and professional integrity.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">

          {/* Card 1 */}
          <div className="bg-white rounded-xl overflow-hidden editorial-shadow group border border-outline-variant/10">
            <div className="relative aspect-square">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Professional headshot of Elena Vance, Master Hair Colorist"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA16ZA8YtoFHfFL3kpiixDu8b7EEWSQzVDkSPjwFBv9xEN-RH8ebiM4p7SMlEOXF4GraDrN8pSpU-Ud40rfB3AdxnoRejjfXdEIcY6I_nt4kLKTA4DbHHtSe3ciEoK3hX8LfgZEh5RNymNc_I2XBxDRiyFNDneW4ftK0PWUOWKfWP2Qx_oqlR5Ze25sdjXBJ1UcL_O8_9gHpC8aWV5MM1-fSeWkdK7zkGpsbToVVWLV2GXFDwoG6lNDEKpFt_Km_6Usce3HvFeSQQA-"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1">
                <span className="material-symbols-outlined text-tertiary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                <span className="text-label-sm font-label-sm text-on-surface">Verified</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-headline-md text-headline-md text-on-surface leading-tight">Elena Vance</h3>
                <div className="flex items-center gap-1 text-primary">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="text-label-md font-label-md">4.9</span>
                </div>
              </div>
              <p className="font-body-md text-on-surface-variant mb-4">Master Hair Colorist</p>
              <div className="flex items-center gap-2 mb-6 text-on-surface-variant">
                <span className="material-symbols-outlined text-sm">location_on</span>
                <span className="text-label-sm font-label-sm">Mayfair, London</span>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-outline-variant/30">
                <div>
                  <p className="text-label-sm font-label-sm text-on-surface-variant">Starts from</p>
                  <p className="font-headline-md text-headline-md text-primary">£120</p>
                </div>
                <Link href="/providers/elena-vance" className="bg-primary text-on-primary px-5 py-2.5 rounded-full font-label-md text-label-md hover:bg-on-primary-container transition-all">
                  Book Now
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl overflow-hidden editorial-shadow group border border-outline-variant/10">
            <div className="relative aspect-square">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Professional portrait of Marcus Thorne, Performance Coach"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoATZfCOfhSFh7tk8-UQqxK1_2LSd3D7jR50CHWNjWsOh-N4g1w1Byt7IXYh3VQJ2QHyxtXkj9WU5p3P6fy1CF6rE4ttDjOb7KtucVn-PpHVW-Cz9mRoJ9FWUHt-Lb0mlt4pf81NdeD2KTHrdHccu4Z_V0xgZvKYBIykRRTFIITNss0-dFs4lD7YtgPP_6g6BXYJB_OkZZmBmmzH1HJl6n8VABGbU5SdrTmAm_2zHib2r6zDdoshYS7PI_g89aBhbaIIxWIoMSBCmE"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1">
                <span className="material-symbols-outlined text-tertiary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                <span className="text-label-sm font-label-sm text-on-surface">Verified</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-headline-md text-headline-md text-on-surface leading-tight">Marcus Thorne</h3>
                <div className="flex items-center gap-1 text-primary">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="text-label-md font-label-md">5.0</span>
                </div>
              </div>
              <p className="font-body-md text-on-surface-variant mb-4">Performance Coach</p>
              <div className="flex items-center gap-2 mb-6 text-on-surface-variant">
                <span className="material-symbols-outlined text-sm">location_on</span>
                <span className="text-label-sm font-label-sm">Chelsea, London</span>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-outline-variant/30">
                <div>
                  <p className="text-label-sm font-label-sm text-on-surface-variant">Starts from</p>
                  <p className="font-headline-md text-headline-md text-primary">£85</p>
                </div>
                <Link href="/providers/marcus-thorne" className="bg-primary text-on-primary px-5 py-2.5 rounded-full font-label-md text-label-md hover:bg-on-primary-container transition-all">
                  Book Now
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl overflow-hidden editorial-shadow group border border-outline-variant/10">
            <div className="relative aspect-square">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Professional portrait of Sophie Laurent, Interior Consultant"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuByRGDCxIQMs_daaMIQ3Fz-tJGe5vCZWSR16UZvNxPZrlDhXGCaWpNLVuGadA6muAAv0z5X_xTk_Ac1QEg6Y-PAjv8IjesuHvv_sUxd_rj48ZHHhUahA6obPfW1fSY7zk0ulYIw-yhNsIick-ETc3bC_ej5KFqICvWz799i1xDMOda8maLbl7Q3mk814zoRZFfAuYEhzEz2FbHM6uZwCkN3LCmOMeT2uA3ALoeMoR6kIwGZVt1TXRRoqTKaFWEvCnIFnFLDO4Q3l1gw"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1">
                <span className="material-symbols-outlined text-tertiary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                <span className="text-label-sm font-label-sm text-on-surface">Verified</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-headline-md text-headline-md text-on-surface leading-tight">Sophie Laurent</h3>
                <div className="flex items-center gap-1 text-primary">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="text-label-md font-label-md">4.8</span>
                </div>
              </div>
              <p className="font-body-md text-on-surface-variant mb-4">Interior Consultant</p>
              <div className="flex items-center gap-2 mb-6 text-on-surface-variant">
                <span className="material-symbols-outlined text-sm">location_on</span>
                <span className="text-label-sm font-label-sm">Kensington, London</span>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-outline-variant/30">
                <div>
                  <p className="text-label-sm font-label-sm text-on-surface-variant">Starts from</p>
                  <p className="font-headline-md text-headline-md text-primary">£200</p>
                </div>
                <Link href="/providers/sophie-laurent" className="bg-primary text-on-primary px-5 py-2.5 rounded-full font-label-md text-label-md hover:bg-on-primary-container transition-all">
                  Book Now
                </Link>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl overflow-hidden editorial-shadow group border border-outline-variant/10">
            <div className="relative aspect-square">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Professional portrait of David Chen, Private Math Tutor"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGsdVO_3jnW4PfQsAKYmrg8QfjgIgpAVlIUFDl8vyPBlAeA06fRfthB5d3JcCRBbzeLtgrakRLbBySDDsrjTE0XxpI9XwXmDm1uwiplqmPIEKGGve6325zE1XhK8amMQHRt6OEDvCU0uV17AwujNYjRsNjR0yYaU91lI6KwpDj9q32aqQdZDKoxVvHtFJwmCxMEcsFSGs_dxtrjUBhxM_BAOrqpJJCZX6mbjE9WJkFI6K0v4aZy5ymG7WyALAr3iygUfnAJ7DWw_nT"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1">
                <span className="material-symbols-outlined text-tertiary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                <span className="text-label-sm font-label-sm text-on-surface">Verified</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-headline-md text-headline-md text-on-surface leading-tight">David Chen</h3>
                <div className="flex items-center gap-1 text-primary">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="text-label-md font-label-md">4.9</span>
                </div>
              </div>
              <p className="font-body-md text-on-surface-variant mb-4">Private Math Tutor</p>
              <div className="flex items-center gap-2 mb-6 text-on-surface-variant">
                <span className="material-symbols-outlined text-sm">location_on</span>
                <span className="text-label-sm font-label-sm">Richmond, London</span>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-outline-variant/30">
                <div>
                  <p className="text-label-sm font-label-sm text-on-surface-variant">Starts from</p>
                  <p className="font-headline-md text-headline-md text-primary">£60</p>
                </div>
                <Link href="/providers/david-chen" className="bg-primary text-on-primary px-5 py-2.5 rounded-full font-label-md text-label-md hover:bg-on-primary-container transition-all">
                  Book Now
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
