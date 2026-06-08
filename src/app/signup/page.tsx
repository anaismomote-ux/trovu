import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-surface-container-low flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl editorial-shadow p-10 border border-outline-variant/10">
        <div className="text-center mb-10">
          <Link href="/" className="font-playfair text-[32px] font-bold text-primary block mb-6">TROVU</Link>
          <h1 className="font-playfair text-[32px] font-semibold text-on-background mb-2">Create your account</h1>
          <p className="font-manrope text-[16px] text-on-surface-variant">Join thousands of happy Trovu customers</p>
        </div>

        <form className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-manrope text-[14px] font-semibold text-on-surface block mb-2">First Name</label>
              <input type="text" className="w-full px-5 py-3 rounded-xl border border-outline-variant focus:border-primary outline-none font-manrope text-[16px]" />
            </div>
            <div>
              <label className="font-manrope text-[14px] font-semibold text-on-surface block mb-2">Last Name</label>
              <input type="text" className="w-full px-5 py-3 rounded-xl border border-outline-variant focus:border-primary outline-none font-manrope text-[16px]" />
            </div>
          </div>
          <div>
            <label className="font-manrope text-[14px] font-semibold text-on-surface block mb-2">Email</label>
            <input type="email" className="w-full px-5 py-3 rounded-xl border border-outline-variant focus:border-primary outline-none font-manrope text-[16px]" placeholder="you@example.com" />
          </div>
          <div>
            <label className="font-manrope text-[14px] font-semibold text-on-surface block mb-2">Password</label>
            <input type="password" className="w-full px-5 py-3 rounded-xl border border-outline-variant focus:border-primary outline-none font-manrope text-[16px]" />
          </div>
          <div>
            <label className="font-manrope text-[14px] font-semibold text-on-surface block mb-2">I am a</label>
            <select className="w-full px-5 py-3 rounded-xl border border-outline-variant focus:border-primary outline-none font-manrope text-[16px] bg-white">
              <option>Customer</option>
              <option>Provider</option>
              <option>Business</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-primary text-on-primary py-4 rounded-full font-manrope text-[14px] font-semibold tracking-[0.05em] hover:bg-on-primary-container transition-all">
            Create Account
          </button>
          <p className="text-center font-manrope text-[12px] text-on-surface-variant">
            By signing up you agree to our{" "}
            <Link href="/terms" className="text-primary hover:underline">Terms</Link> and{" "}
            <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
          </p>
        </form>

        <p className="text-center font-manrope text-[14px] text-on-surface-variant mt-8">
          Already have an account?{" "}
          <Link href="/login" className="text-primary font-semibold hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
