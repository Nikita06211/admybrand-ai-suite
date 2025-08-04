"use client";
import Image from 'next/image';
import ButtonTag from './ui/ButtonTag';
import ActionButtons from './ui/ActionButtons';

export default function HeroSection() {
  return (
    <section className="relative bg-[#0e1016] text-white py-20 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 z-10">
          <ButtonTag
            content="AI-Powered Marketing Suite"
            logo={<Image src="/icons/ai-technology.png" 
                    alt="AI Technology"
                    width={20}
                    height={20}
                    className="object-contain"
                    priority={false}/>}
            borderColor= "border-purple-600/20" 
            bgColor="bg-purple-400/20"
            textColor="text-purple-200"
          />
         <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          <span className="block bg-gradient-to-r from-[#9b54e7] to-[#729cff] text-transparent bg-clip-text">
            Transform Your Brand
          </span>
          <span className="block bg-gradient-to-r from-[#9b54e7] to-[#729cff] text-transparent bg-clip-text">
            with
          </span>
          <span className="block bg-gradient-to-r from-[#9b54e7] to-[#80a5fa] text-transparent bg-clip-text">
            ADmyBRAND AI
          </span>
        </h1>
          <p className="text-xl mb-8 text-gray-400 w-auto">
            Revolutionize your marketing strategy with cutting-edge AI tools. Create compelling campaigns, analyze performance, and scale your brand like never before.
          </p>
          <div className="flex gap-4 mb-8">
            <ActionButtons
              mainLabel="Start Free Trial"
              secondaryLabel="Watch Demo"
              showArrow={false}
              onMainClick={() => {/* handle trial click */}}
              onSecondaryClick={() => {/* handle demo click */}}
            />
          </div>
          <ul className="flex flex-wrap gap-6 text-gray-400 font-medium text-sm">
            <li>🔒 No Credit Card Required</li>
            <li>⚡ Setup in 5 Minutes</li>
            <li>🛡️ Enterprise Security</li>
          </ul>
        </div>

        <div className="relative md:w-1/2 flex justify-center items-center min-h-[26rem]">
          <div className="absolute inset-20 bg-gradient-to-tr from-blue-700/30 via-purple-600/30 to-fuchsia-600/20 blur-2xl rounded-3xl pointer-events-none" />
          <div className="relative z-10 rounded-3xl backdrop-blur-xl bg-white/5 p-6 shadow-[0_0_20px_8px_rgba(168,85,247,0.35)] max-w-lg flex flex-col items-center border-0 border-white/10">
            <Image
              src="/hero-ai-dashboard.jpg"
              width={540}
              height={340}
              alt="ADmyBRAND dashboard illustration"
              className="rounded-2xl shadow-[0_0_32px_8px_rgba(168,85,247,0.35)] border border-purple-600/10"
              priority
            />
          </div>
          <div
            className="
              backdrop-opacity-80
              absolute top-10 left-8
              bg-blue-700/12
              backdrop-blur-2xl
              rounded-xl
              font-semibold text-lg text-white
              px-4 py-2
              w-38
              border-2 border-blue-100/25
              shadow-[0_0_20px_8px_rgba(59,130,246,0.35)]
              z-20
              transition
            "
            style={{ pointerEvents: 'auto' }}
          >
            <div className='text-purple-500'> 250% </div> 
            <span className='text-sm text-gray-400'>ROI Increase</span>
          </div>
          <div
            className="
              backdrop-opacity-80
              absolute bottom-6 right-4
              bg-purple-600/12
              backdrop-blur-2xl
              rounded-xl
              w-50
              font-semibold text-lg text-white
              px-4 py-2
              border-2 border-purple-100/25
              shadow-[0_0_20px_8px_rgba(168,85,247,0.35)]
              z-20
              transition
            "
            style={{ pointerEvents: 'auto' }}
          >
            <div className='text-cyan-500'>10M+</div> 
            <span className='text-sm text-gray-400'>Campaigns Generated</span>
          </div>
        </div>
      </div>
    </section>
  );
}
