import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

export default function FreshBioSite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 text-gray-800">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold text-green-700 mb-2">FreshBio Inc.</h1>
        <p className="text-lg text-gray-600">Cultured Life Probiotic Kit</p>
      </header>

      <main className="max-w-4xl mx-auto px-4">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-6 items-center"
        >
          <img
            src="/images/probiotic-kit.jpg"
            alt="Cultured Life Probiotic Kit"
            className="rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-green-700">
              A Healthier You Starts in the Gut
            </h2>
            <p className="mb-4">
              Our Cultured Life Probiotic Kit empowers you to easily grow your
              own fresh, active probiotics at home. Supporting gut health,
              immunity, and overall wellness, this kit brings science and nature
              together for your everyday health.
            </p>
            <Button className="bg-green-600 hover:bg-green-700 text-white rounded-xl">
              Order Now
            </Button>
          </div>
        </motion.section>

        <section className="mt-12">
          <h3 className="text-xl font-semibold mb-4 text-green-700">
            Why Choose FreshBio?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Sustainable Materials",
                desc: "Eco-friendly packaging and responsibly sourced ingredients.",
              },
              {
                title: "Scientifically Proven",
                desc: "Clinically tested strains for digestive and immune support.",
              },
              {
                title: "Easy to Use",
                desc: "Simple instructions so anyone can culture probiotics at home.",
              },
            ].map((feature, idx) => (
              <Card key={idx} className="rounded-2xl shadow-md">
                <CardContent className="p-5">
                  <h4 className="font-semibold mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="text-center mt-16 py-6 text-gray-600 border-t">
        © {new Date().getFullYear()} FreshBio Inc. — Promoting a Cultured Life.
      </footer>
    </div>
  );
}
