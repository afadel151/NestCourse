<template>
    <div class="min-h-screen  bg-gradient-to-b from-gray-50 to-white  ">
      <!-- Navigation -->
      <div class="h-sreen">
      <header class="sticky top-0 px-32 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div class=" flex h-20 items-center justify-between px-4 md:px-6">
          <div class="flex items-center gap-2">
            <SearchIcon class="h-6 w-6 text-primary" />
            <span class="text-xl font-bold text-primary">finderr</span>
          </div>
          <nav class="hidden md:flex items-center gap-8">
            <a href="#features" class="text-sm font-medium text-gray-600 hover:text-primary">Features</a>
            <a href="#how-it-works" class="text-sm font-medium text-gray-600 hover:text-primary">How It Works</a>
            <a href="#pricing" class="text-sm font-medium text-gray-600 hover:text-primary">Pricing</a>
            <a href="#testimonials" class="text-sm font-medium text-gray-600 hover:text-primary">Testimonials</a>
          </nav>
          <div class="flex items-center gap-4">
            <NuxtLink href="/signup" class="text-sm font-medium text-gray-600 hover:text-primary hidden md:inline-block">Sign In</NuxtLink>
            <a @click="login" class="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary">
              Get Started
            </a>
            <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden">
              <MenuIcon v-if="!mobileMenuOpen" class="h-6 w-6" />
              <XIcon v-else class="h-6 w-6" />
            </button>
          </div>
        </div>
        <!-- Mobile Menu -->
        <div v-if="mobileMenuOpen" class="md:hidden">
          <nav class="flex flex-col space-y-4 p-4 bg-white border-t border-gray-200">
            <a href="#features" class="text-sm font-medium text-gray-600 hover:text-primary">Features</a>
            <a href="#how-it-works" class="text-sm font-medium text-gray-600 hover:text-primary">How It Works</a>
            <a href="#pricing" class="text-sm font-medium text-gray-600 hover:text-primary">Pricing</a>
            <a href="#testimonials" class="text-sm font-medium text-gray-600 hover:text-primary">Testimonials</a>
            <a href="#" class="text-sm font-medium text-gray-600 hover:text-primary">Sign In</a>
          </nav>
        </div>
      </header>
  
      <!-- Hero Section -->
      <section class="relative px-32  py-20 md:py-32 overflow-hidden">
        <div class=" px-4 md:px-6">
          <div class="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
            <div class="flex flex-col gap-4">
              <h1 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Find Your Perfect <span class="text-primary">Freelance Match</span>
              </h1>
              <p class="max-w-[600px] text-gray-500 md:text-xl">
                Connect with top talent and clients worldwide. Finderr makes hiring and getting hired seamless, secure, and successful.
              </p>
              <div class="flex flex-col sm:flex-row gap-4 mt-4">
                <a href="#" class="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary">
                  Find Talent
                </a>
                <a href="#" class="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950">
                  Find Work
                </a>
              </div>
              <div class="mt-6 flex items-center gap-2 text-sm text-gray-500">
                <CheckIcon class="h-4 w-4 text-primary" />
                <span>Join 10,000+ freelancers and 5,000+ clients</span>
              </div>
            </div>
            <div class="relative">
              <div class="relative z-10 overflow-hidden rounded-lg border border-gray-200 bg-gradient-to-b from-gray-50 to-white  shadow-xl">
                <img
                  src="/svgs/pixeltrue-web-development.svg"
                  alt="Finderr platform dashboard"
                  class="w-full object-cover"
                  width="800"
                  height="600"
                />
              </div>
              <div class="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-primary/20 blur-xl"></div>
              <div class="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/20 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>
      </div>
      <!-- Trusted By Section -->
      <section class="py-12 px-32  border-y border-gray-200 bg-gray-50">
        <div class=" px-4 md:px-6">
          <div class="flex flex-col items-center justify-center gap-4 text-center">
            <h2 class="text-xl font-medium text-gray-500">Trusted by leading companies</h2>
            <div class="flex flex-wrap items-center justify-center gap-8 grayscale opacity-70">
              <div class="flex items-center justify-center">
                <BuildingIcon class="h-8 w-8" />
                <span class="ml-2 text-lg font-bold">TechCorp</span>
              </div>
              <div class="flex items-center justify-center">
                <GlobeIcon class="h-8 w-8" />
                <span class="ml-2 text-lg font-bold">GlobalSoft</span>
              </div>
              <div class="flex items-center justify-center">
                <RocketIcon class="h-8 w-8" />
                <span class="ml-2 text-lg font-bold">LaunchPad</span>
              </div>
              <div class="flex items-center justify-center">
                <ZapIcon class="h-8 w-8" />
                <span class="ml-2 text-lg font-bold">SpeedTech</span>
              </div>
              <div class="flex items-center justify-center">
                <ShieldIcon class="h-8 w-8" />
                <span class="ml-2 text-lg font-bold">SecureNet</span>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Features Section -->
      <section id="features" class="py-20 px-32 md:py-32">
        <div class=" px-4 md:px-6">
          <div class="flex flex-col items-center justify-center gap-4 text-center md:gap-8">
            <div class="space-y-2">
              <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Powerful Features</h2>
              <p class="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Everything you need to find the perfect match for your project or career
              </p>
            </div>
            <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 md:gap-12">
              <div class="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div class="flex justify-start items-center space-x-4">
                    <div class="mb-4 flex h-12 w-12  items-center justify-center rounded-full bg-primary/10 text-primary">
                        <SearchIcon class="h-6 w-6" />
                    </div>
                    <h3 class="mb-2 text-xl font-bold">Smart Matching</h3>
                </div>
                <p class="text-gray-500">
                  Our AI-powered algorithm connects you with the most relevant talent or projects based on your skills and requirements.
                </p>
              </div>
              <div class="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div class="flex justify-start items-center space-x-4">

                  <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <ShieldCheckIcon class="h-6 w-6" />
                  </div>
                  <h3 class="mb-2 text-xl font-bold">Secure Payments</h3>
                </div>
                <p class="text-gray-500">
                  Escrow payments, milestone-based releases, and fraud protection keep your money safe throughout the project.
                </p>
              </div>
              <div class="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div class="flex justify-start items-center space-x-4">

                  <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <MessageSquareIcon class="h-6 w-6" />
                  </div>
                  <h3 class="mb-2 text-xl font-bold">Seamless Communication</h3>
                </div>
                <p class="text-gray-500">
                  Built-in messaging, video calls, and file sharing make collaboration effortless and efficient.
                </p>
              </div>
              <div class="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div class="flex justify-start items-center space-x-4">
                  <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <StarIcon class="h-6 w-6" />
                  </div>
                  
                  <h3 class="mb-2 text-xl font-bold">Verified Reviews</h3>
                </div>
                <p class="text-gray-500">
                  Transparent feedback system ensures you can trust the ratings and make informed decisions.
                </p>
              </div>
              <div class="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div class="flex justify-start items-center space-x-4">

                  <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <ClipboardCheckIcon class="h-6 w-6" />
                  </div>
                  <h3 class="mb-2 text-xl font-bold">Contract Management</h3>
                </div>
                <p class="text-gray-500">
                  Legally binding contracts, NDAs, and customizable terms protect both parties throughout the engagement.
                </p>
              </div>
              <div class="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div class="flex justify-start items-center space-x-4">

                  <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <BarChartIcon class="h-6 w-6" />
                  </div>
                  <h3 class="mb-2 text-xl font-bold">Analytics Dashboard</h3>
                </div>
                <p class="text-gray-500">
                  Track your performance, earnings, and project metrics with detailed analytics and reporting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- How It Works Section -->
      <section id="how-it-works" class="py-20 px-32  md:py-32 bg-gray-50">
        <div class=" px-4 md:px-6">
          <div class="flex flex-col items-center justify-center gap-4 text-center">
            <div class="space-y-2">
              <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
              <p class="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Simple steps to find the perfect match for your project or career
              </p>
            </div>
            <div class="mt-12 grid gap-8 md:grid-cols-3">
              <div class="relative flex flex-col items-center">
                <div class="flex h-16 w-16 items-center z-10 justify-center rounded-full bg-primary text-white text-xl font-bold">1</div>
                <div class="mt-6 space-y-2">
                  <h3 class="text-xl font-bold">Create Your Profile</h3>
                  <p class="text-gray-500">
                    Sign up and build your professional profile showcasing your skills, experience, and portfolio.
                  </p>
                </div>
                <div class="absolute right-0 top-8 hidden h-0.5 w-full bg-gray-200 md:block md:w-1/2"></div>
              </div>
              <div class="relative flex flex-col items-center">
                <div class="flex h-16 w-16 z-10 items-center justify-center rounded-full bg-primary text-white text-xl font-bold">2</div>
                <div class="mt-6 space-y-2">
                  <h3 class="text-xl font-bold">Connect & Collaborate</h3>
                  <p class="text-gray-500">
                    Browse projects or talent, send proposals, and start conversations with potential matches.
                  </p>
                </div>
                <div class="absolute left-0 right-0 top-8 hidden h-0.5 w-full bg-gray-200 md:block"></div>
              </div>
              <div class="relative flex flex-col items-center">
                <div class="flex h-16 w-16 items-center z-10 justify-center rounded-full bg-primary text-white text-xl font-bold">3</div>
                <div class="mt-6  space-y-2">
                  <h3 class="text-xl font-bold">Work & Get Paid</h3>
                  <p class="text-gray-500">
                    Complete milestones, track progress, and receive secure payments for your completed work.
                  </p>
                </div>
                <div class="absolute left-0 top-8 hidden h-0.5 w-1/2 bg-gray-200 md:block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Testimonials Section -->
      <section id="testimonials" class="py-20 px-32  md:py-32">
        <div class=" px-4 md:px-6">
          <div class="flex flex-col items-center justify-center gap-4 text-center">
            <div class="space-y-2">
              <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Success Stories</h2>
              <p class="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Hear from freelancers and clients who found their perfect match on Finderr
              </p>
            </div>
            <div class="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div class="flex flex-col gap-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div class="flex items-center gap-4">
                  <img
                    src="/svgs/user.png"
                    alt="Sarah Johnson"
                    class="h-12 w-12 rounded-full object-cover"
                    width="48"
                    height="48"
                  />
                  <div>
                    <h3 class="text-lg font-bold">Sarah Johnson</h3>
                    <p class="text-sm text-gray-500">UX Designer</p>
                  </div>
                </div>
                <div class="flex text-primary">
                  <StarIcon class="h-5 w-5 fill-current" />
                  <StarIcon class="h-5 w-5 fill-current" />
                  <StarIcon class="h-5 w-5 fill-current" />
                  <StarIcon class="h-5 w-5 fill-current" />
                  <StarIcon class="h-5 w-5 fill-current" />
                </div>
                <p class="text-gray-500">
                  "Finderr completely transformed my freelance career. Within a month of joining, I landed three major clients and doubled my income. The platform's matching algorithm is spot-on!"
                </p>
              </div>
              <div class="flex flex-col gap-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div class="flex items-center gap-4">
                  <img
                    src="/svgs/user.png"
                    alt="Michael Chen"
                    class="h-12 w-12 rounded-full object-cover"
                    width="48"
                    height="48"
                  />
                  <div>
                    <h3 class="text-lg font-bold">Michael Chen</h3>
                    <p class="text-sm text-gray-500">Tech Startup Founder</p>
                  </div>
                </div>
                <div class="flex text-primary">
                  <StarIcon class="h-5 w-5 fill-current" />
                  <StarIcon class="h-5 w-5 fill-current" />
                  <StarIcon class="h-5 w-5 fill-current" />
                  <StarIcon class="h-5 w-5 fill-current" />
                  <StarIcon class="h-5 w-5 fill-current" />
                </div>
                <p class="text-gray-500">
                  "As a startup founder, finding reliable talent was always a challenge until I discovered Finderr. The quality of professionals on this platform is exceptional, and the secure payment system gives me peace of mind."
                </p>
              </div>
              <div class="flex flex-col gap-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div class="flex items-center gap-4">
                  <img
                           src="/svgs/user.png"
                    alt="Elena Rodriguez"
                    class="h-12 w-12 rounded-full object-cover"
                    width="48"
                    height="48"
                  />
                  <div>
                    <h3 class="text-lg font-bold">Elena Rodriguez</h3>
                    <p class="text-sm text-gray-500">Content Writer</p>
                  </div>
                </div>
                <div class="flex text-primary">
                  <StarIcon class="h-5 w-5 fill-current" />
                  <StarIcon class="h-5 w-5 fill-current" />
                  <StarIcon class="h-5 w-5 fill-current" />
                  <StarIcon class="h-5 w-5 fill-current" />
                  <StarIcon class="h-5 w-5 fill-current" />
                </div>
                <p class="text-gray-500">
                  "The communication tools on Finderr make collaboration seamless. I've been able to work with clients from around the world without any hiccups. The milestone payment system ensures I get paid for my work on time, every time."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Pricing Section -->
      <section id="pricing" class="py-20 md:py-32 bg-gray-50 px-32">
        <div class=" px-4 md:px-6">
          <div class="flex flex-col items-center justify-center gap-4 text-center">
            <div class="space-y-2">
              <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Simple, Transparent Pricing</h2>
              <p class="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Choose the plan that works best for your needs
              </p>
            </div>
            <div class="mt-12 grid gap-8 md:grid-cols-3">
              <!-- Free Plan -->
              <div class="flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
                <div class="p-6">
                  <h3 class="text-2xl font-bold">Basic</h3>
                  <div class="mt-4 flex items-baseline text-gray-900">
                    <span class="text-4xl font-extrabold tracking-tight">Free</span>
                    <span class="ml-1 text-xl font-semibold">/month</span>
                  </div>
                  <p class="mt-4 text-gray-500">Perfect for getting started and exploring opportunities.</p>
                  <ul class="mt-6 space-y-4">
                    <li class="flex items-start">
                      <CheckIcon class="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                      <span>Up to 5 proposals per month</span>
                    </li>
                    <li class="flex items-start">
                      <CheckIcon class="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                      <span>Basic profile customization</span>
                    </li>
                    <li class="flex items-start">
                      <CheckIcon class="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                      <span>Standard support</span>
                    </li>
                    <li class="flex items-start">
                      <CheckIcon class="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                      <span>10% service fee</span>
                    </li>
                  </ul>
                </div>
                <div class="flex flex-1 flex-col justify-end p-6 pt-0">
                  <a @click="login" class="inline-flex h-10 w-full items-center justify-center rounded-md border border-gray-200 bg-white text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950">
                    Get Started
                  </a>
                </div>
              </div>
              <!-- Pro Plan -->
              <div class="flex flex-col rounded-lg border-2 border-primary bg-white shadow-md transition-all hover:shadow-lg">
                <div class="p-6">
                  <div class="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    Most Popular
                  </div>
                  <h3 class="mt-4 text-2xl font-bold">Professional</h3>
                  <div class="mt-4 flex items-baseline text-gray-900">
                    <span class="text-4xl font-extrabold tracking-tight">$29</span>
                    <span class="ml-1 text-xl font-semibold">/month</span>
                  </div>
                  <p class="mt-4 text-gray-500">Ideal for active freelancers and businesses.</p>
                  <ul class="mt-6 space-y-4">
                    <li class="flex items-start">
                      <CheckIcon class="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                      <span>Unlimited proposals</span>
                    </li>
                    <li class="flex items-start">
                      <CheckIcon class="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                      <span>Enhanced profile with portfolio</span>
                    </li>
                    <li class="flex items-start">
                      <CheckIcon class="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                      <span>Priority matching algorithm</span>
                    </li>
                    <li class="flex items-start">
                      <CheckIcon class="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                      <span>Priority support</span>
                    </li>
                    <li class="flex items-start">
                      <CheckIcon class="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                      <span>5% service fee</span>
                    </li>
                  </ul>
                </div>
                <div class="flex flex-1 flex-col justify-end p-6 pt-0">
                  <a href="#" class="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary">
                    Get Started
                  </a>
                </div>
              </div>
              <!-- Enterprise Plan -->
              <div class="flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
                <div class="p-6">
                  <h3 class="text-2xl font-bold">Enterprise</h3>
                  <div class="mt-4 flex items-baseline text-gray-900">
                    <span class="text-4xl font-extrabold tracking-tight">$99</span>
                    <span class="ml-1 text-xl font-semibold">/month</span>
                  </div>
                  <p class="mt-4 text-gray-500">For large teams and organizations with advanced needs.</p>
                  <ul class="mt-6 space-y-4">
                    <li class="flex items-start">
                      <CheckIcon class="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                      <span>Everything in Professional</span>
                    </li>
                    <li class="flex items-start">
                      <CheckIcon class="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                      <span>Team collaboration tools</span>
                    </li>
                    <li class="flex items-start">
                      <CheckIcon class="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                      <span>Dedicated account manager</span>
                    </li>
                    <li class="flex items-start">
                      <CheckIcon class="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                      <span>Custom contracts and NDAs</span>
                    </li>
                    <li class="flex items-start">
                      <CheckIcon class="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                      <span>3% service fee</span>
                    </li>
                  </ul>
                </div>
                <div class="flex flex-1 flex-col justify-end p-6 pt-0">
                  <a href="#" class="inline-flex h-10 w-full items-center justify-center rounded-md border border-gray-200 bg-white text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950">
                    Contact Sales
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- FAQ Section -->
      <section class="py-20 px-32 md:py-32">
        <div class=" px-4 md:px-6">
          <div class="flex flex-col items-center justify-center gap-4 text-center">
            <div class="space-y-2">
              <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
              <p class="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Find answers to common questions about Finderr
              </p>
            </div>
            <div class="mt-12 grid gap-4 md:gap-8 w-full max-w-3xl">
              <div v-for="(faq, index) in faqs" :key="index" class="rounded-lg border border-gray-200 bg-white">
                <button
                  @click="toggleFaq(index)"
                  class="flex w-full items-center justify-between p-4 text-left"
                  :aria-expanded="openFaq === index"
                >
                  <h3 class="text-lg font-medium">{{ faq.question }}</h3>
                  <ChevronDownIcon
                    class="h-5 w-5 transition-transform"
                    :class="{ 'rotate-180': openFaq === index }"
                  />
                </button>
                <div v-if="openFaq === index" class="p-4 pt-0 text-gray-500">
                  <p>{{ faq.answer }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- CTA Section -->
      <section class="py-20 md:py-32 bg-primary px-32 text-white">
        <div class=" px-4 md:px-6">
          <div class="flex flex-col items-center justify-center gap-4 text-center">
            <div class="space-y-2">
              <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Find Your Perfect Match?</h2>
              <p class="mx-auto max-w-[700px] text-white/80 md:text-xl">
                Join thousands of freelancers and businesses already using Finderr to connect, collaborate, and succeed.
              </p>
            </div>
            <div class="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#" class="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white">
                Sign Up Now
              </a>
              <a href="#" class="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Newsletter Section -->
      <section class="py-12 md:py-20 px-32 bg-gray-50">
        <div class=" px-4 md:px-6">
          <div class="flex flex-col items-center justify-center gap-4 text-center">
            <div class="space-y-2">
              <h2 class="text-2xl font-bold tracking-tighter sm:text-3xl">Stay Updated</h2>
              <p class="mx-auto max-w-[500px] text-gray-500">
                Subscribe to our newsletter for the latest features, tips, and success stories.
              </p>
            </div>
            <div class="mt-6 w-full max-w-md">
              <form @submit.prevent="subscribeNewsletter" class="flex flex-col sm:flex-row gap-2">
                <input
                  v-model="email"
                  type="email"
                  placeholder="Enter your email"
                  class="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <button
                  type="submit"
                  class="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                >
                  Subscribe
                </button>
              </form>
              <p v-if="subscribed" class="mt-2 text-sm text-primary">
                Thanks for subscribing! Check your email for confirmation.
              </p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Footer -->
      <footer class="border-t border-gray-200 px-32  bg-white py-12 md:py-16">
        <div class=" px-4 md:px-6">
          <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div class="flex items-center gap-2">
                <SearchIcon class="h-6 w-6 text-primary" />
                <span class="text-xl font-bold text-primary">finderr</span>
              </div>
              <p class="mt-4 text-sm text-gray-500">
                Connecting top talent with amazing opportunities worldwide. Find your perfect match today.
              </p>
              <div class="mt-6 flex gap-4">
                <a href="#" class="text-gray-500 hover:text-primary">
                  <TwitterIcon class="h-5 w-5" />
                  <span class="sr-only">Twitter</span>
                </a>
                <a href="#" class="text-gray-500 hover:text-primary">
                  <FacebookIcon class="h-5 w-5" />
                  <span class="sr-only">Facebook</span>
                </a>
                <a href="#" class="text-gray-500 hover:text-primary">
                  <InstagramIcon class="h-5 w-5" />
                  <span class="sr-only">Instagram</span>
                </a>
                <a href="#" class="text-gray-500 hover:text-primary">
                  <LinkedinIcon class="h-5 w-5" />
                  <span class="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>
            <div>
              <h3 class="text-sm font-medium text-gray-900">For Freelancers</h3>
              <ul class="mt-4 space-y-2">
                <li>
                  <a href="#" class="text-sm text-gray-500 hover:text-primary">Find Work</a>
                </li>
                <li>
                  <a href="#" class="text-sm text-gray-500 hover:text-primary">Create Profile</a>
                </li>
                <li>
                  <a href="#" class="text-sm text-gray-500 hover:text-primary">Success Stories</a>
                </li>
                <li>
                  <a href="#" class="text-sm text-gray-500 hover:text-primary">Resources</a>
                </li>
                <li>
                  <a href="#" class="text-sm text-gray-500 hover:text-primary">Community</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-sm font-medium text-gray-900">For Clients</h3>
              <ul class="mt-4 space-y-2">
                <li>
                  <a href="#" class="text-sm text-gray-500 hover:text-primary">Post a Job</a>
                </li>
                <li>
                  <a href="#" class="text-sm text-gray-500 hover:text-primary">Find Talent</a>
                </li>
                <li>
                  <a href="#" class="text-sm text-gray-500 hover:text-primary">Enterprise Solutions</a>
                </li>
                <li>
                  <a href="#" class="text-sm text-gray-500 hover:text-primary">Success Stories</a>
                </li>
                <li>
                  <a href="#" class="text-sm text-gray-500 hover:text-primary">Resources</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-sm font-medium text-gray-900">Company</h3>
              <ul class="mt-4 space-y-2">
                <li>
                  <a href="#" class="text-sm text-gray-500 hover:text-primary">About Us</a>
                </li>
                <li>
                  <a href="#" class="text-sm text-gray-500 hover:text-primary">Careers</a>
                </li>
                <li>
                  <a href="#" class="text-sm text-gray-500 hover:text-primary">Press</a>
                </li>
                <li>
                  <a href="#" class="text-sm text-gray-500 hover:text-primary">Contact</a>
                </li>
                <li>
                  <a href="#" class="text-sm text-gray-500 hover:text-primary">Blog</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="mt-12 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p class="text-sm text-gray-500">© 2025 Finderr. All rights reserved.</p>
            <div class="mt-4 md:mt-0 flex gap-4">
              <a href="#" class="text-sm text-gray-500 hover:text-primary">Privacy Policy</a>
              <a href="#" class="text-sm text-gray-500 hover:text-primary">Terms of Service</a>
              <a href="#" class="text-sm text-gray-500 hover:text-primary">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import {
    SearchIcon,
    MenuIcon,
    XIcon,
    CheckIcon,
    StarIcon,
    ShieldCheckIcon,
    MessageSquareIcon,
    ClipboardCheckIcon,
    BarChartIcon,
    ChevronDownIcon,
    TwitterIcon,
    FacebookIcon,
    InstagramIcon,
    LinkedinIcon,
    BuildingIcon,
    GlobeIcon,
    RocketIcon,
    ZapIcon,
    ShieldIcon
  } from 'lucide-vue-next'
  definePageMeta({
    layout: false,
})
  // Mobile menu state
  const mobileMenuOpen = ref(false)
  
  // FAQ state
  const openFaq = ref(null)
  const faqs = ref([
    {
      question: 'How does Finderr work?',
      answer: 'Finderr connects freelancers with clients through our smart matching algorithm. Create a profile, browse opportunities, submit proposals, and start working with clients from around the world.'
    },
    {
      question: 'How much does it cost to join?',
      answer: 'Joining Finderr is free. We offer a Basic plan with limited features at no cost, and premium plans starting at $29/month for enhanced features and lower service fees.'
    },
    {
      question: 'How do payments work?',
      answer: 'Finderr uses a secure escrow payment system. Clients fund milestones upfront, and funds are released to freelancers upon completion and approval of work. This ensures both parties are protected.'
    },
    {
      question: 'What service fees does Finderr charge?',
      answer: 'Service fees vary by plan: 10% for Basic users, 5% for Professional users, and 3% for Enterprise users. These fees are calculated based on the total project value.'
    },
    {
      question: 'Can I work with international clients/freelancers?',
      answer: 'Yes! Finderr is a global platform connecting talent and clients from around the world. Our platform supports multiple currencies and payment methods for seamless international collaboration.'
    }
  ])
  
  const toggleFaq = (index) => {
    openFaq.value = openFaq.value === index ? null : index
  }
  
  // Newsletter subscription
  const email = ref('')
  const subscribed = ref(false)
  
  const subscribeNewsletter = () => {
    console.log('Subscribing email:', email.value)
    subscribed.value = true
    email.value = ''
    setTimeout(() => {
      subscribed.value = false
    }, 3000)
  }
  function login() {
    const router = useRouter();
    const authStore = useAuthStore();
    if (!authStore.user) {
        authStore.checkUserAuthentication();
    }
    if (authStore.authenticated) {
        if (authStore.user?.role == "CLIENT") {
            router.push('/client/profile')
        }else{
            router.push('/user/prorile')
        }
    } else {
        router.push('/login')
    }
}
  </script>
  
  <style scoped>
  /* Animations */
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes slideUp {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  
  section {
    animation: fadeIn 0.8s ease-out;
  }
  
  .container > div {
    animation: slideUp 0.8s ease-out;
  }
  
  /* Hover effects */
  .group:hover {
    transform: translateY(-5px);
    transition: transform 0.3s ease;
  }
  
  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  </style>
<!-- <script setup lang="ts">
definePageMeta({
    layout: false,
})
import { computed } from "vue";
import { useColorMode } from "@vueuse/core";
import { Motion } from "motion-v";
import LandingHeader from "~/components/me/LandingHeader.vue";
import ServiceCard from "~/components/me/ServiceCard.vue";
import { ORBIT_DIRECTION } from "~/components/ui/orbit";
import Orbit from "~/components/ui/orbit/Orbit.vue";
function login() {
    const router = useRouter();
    const authStore = useAuthStore();
    if (!authStore.user) {
        authStore.checkUserAuthentication();
    }
    
    if (authStore.authenticated) {
        if (authStore.user?.role == "CLIENT") {
            router.push('/client/profile')
        }else{
            router.push('/user/prorile')
        }
    } else {
        router.push('/login')
    }
}
</script> -->