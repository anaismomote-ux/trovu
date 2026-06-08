import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-surface-container-low flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl editorial-shadow p-10 border border-outline-variant/10">
        <div className="text-center mb-10">
          <Link href="/" className="font-playfair text-[32px] font-bold text-primary block mb-6">TROVU</Link>
          <h1 className="font-playfair text-[32px] font-semibold text-on-background mb-2">Welcome back</h1>
          <p className="font-manrope text-[16px] text-on-surface-variant">Sign in to your Trovu account</p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="font-manrope text-[14px] font-semibold text-on-surface block mb-2">Email</label>
            <input type="email" className="w-full px-5 py-3 rounded-xl border border-outline-variant focus:border-primary outline-none font-manrope text-[16px]" placeholder="you@example.com" />
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="font-manrope text-[14px] font-semibold text-on-surface">Password</label>
              <Link href="/forgot-password" className="font-manrope text-[12px] text-primary hover:underline">Forgot password?</Link>
            </div>
            <input type="password" className="w-full px-5 py-3 rounded-xl border border-outline-variant focus:border-primary outline-none font-manrope text-[16px]" />
          </div>
          <button type="submit" className="w-full bg-primary text-on-primary py-4 rounded-full font-manrope text-[14px] font-semibold tracking-[0.05em] hover:bg-on-primary-container transition-all">
            Sign In
          </button>
        </form>

        <div className="my-8 flex items-center gap-4">
          <div className="flex-1 h-[1px] bg-outline-variant/40" />
          <span className="font-manrope text-[12px] text-on-surface-variant">or continue with</span>
          <div className="flex-1 h-[1px] bg-outline-variant/40" />
        </div>

        <button className="w-full border border-outline-variant py-4 rounded-full font-manrope text-[14px] font-semibold text-on-surface hover:bg-surface-container-low transition-all flex items-center justify-center gap-3">
          <svg width="18" height="18" viewBox="0 0 18 18"><path fill="#4285F4" d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18z"/><path fill="#34A853" d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17z"/><path fill="#FBBC05" d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18z"/><path fill="#EA4335" d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3z"/></svg>
          Continue with Google
        </button>

        <p className="text-center font-manrope text-[14px] text-on-surface-variant mt-8">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-primary font-semibold hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
