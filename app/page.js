import Testimonials from "@/components/testimonials";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calendar, Clock, LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    icon: Calendar,
    title: "Schedule Events",
    description: "Effortlessly organize and personalize your events",
  },
  {
    icon: Clock,
    title: "Availability Management",
    description: "Set your available times to simplify scheduling",
  },
  {
    icon: LinkIcon,
    title: "Personalized Links",
    description: "Distribute your unique scheduling link",
  },
];

const howItWorks = [
  { step: "Sign Up", description: "Create your free Schedlit account" },
  {
    step: "Set Availability",
    description: "Define when you're available for meetings",
  },
  {
    step: "Share Your Link",
    description: "Send your scheduling link to clients or colleagues",
  },
  {
    step: "Get Booked",
    description: "Receive confirmations for new appointments automatically",
  },
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-24">
        <div className="lg:w-1/2">
          <h1 className="text-7xl font-extrabold gradient-title pb-6">
            Scheduling, Simplified.
          </h1>
          <p className="text-xl text-gray-600 mb-10">
            Schedlit helps you schedule meetings efficiently. Set your
            availability, share your link, and let others book time with you
            seamlessly.
          </p>
          <Link href="/dashboard">
            <Button size="lg" className="text-lg">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md aspect-square">
            <Image
              src="/poster.png"
              alt="Scheduling illustration"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>

      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-600">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            return (
              <Card key={index}>
                <CardHeader>
                  <feature.icon className="w-12 h-12 text-green-500 mb-4 mx-auto" />
                  <CardTitle className="text-center text-green-600">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-600">
          What Our Users say
        </h2>
        <Testimonials />
      </div>

      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-600">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {howItWorks.map((step, index) => {
            return (
              <div key={index} className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 font-bold text-xl">
                    {index + 1}
                  </span>
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.step}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-green-600 text-white rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to simplify your Scheduling?
        </h2>
        <p className="text-xl mb-6">
          Sign up today and reclaim your time. It&apos;s free to get started.
        </p>
        <Link href="/dashboard">
          <Button size="lg" variant="secondary" className="text-green-600">
            Start For Free <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </main>
  );
}
