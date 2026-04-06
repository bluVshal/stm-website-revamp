'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } }
}

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const services = [
  'SEO Strategy',
  'Paid Media',
  'CRM & Retention',
  'Creative & Content',
  'Analytics & CRO',
  'Growth Strategy'
]

export default function ServicesPage() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })

  const y = useTransform(scrollYProgress, [0, 1], [0, -150])

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#f7f7f7] text-[#1a1a1a]"
    >

      {/* PARALLAX HERO */}
      <section ref={ref} className="relative overflow-hidden">
        <motion.div
          style={{ y }}
          className="max-w-6xl mx-auto px-6 py-28"
        >
          <p className="text-green-600 text-sm mb-4">SERVICES</p>
          <h1 className="text-5xl font-semibold max-w-2xl leading-tight">
            Services designed to scale brands intelligently
          </h1>
        </motion.div>
      </section>

      {/* SERVICES GRID */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 pb-20"
      >
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -8 }}
              className="bg-white p-6 rounded-xl border"
            >
              <div className="w-10 h-10 bg-green-100 rounded-full mb-4" />
              <h3 className="font-semibold">{s}</h3>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* COUNTER SECTION */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
        className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-6"
      >
        {[100, 250, 500].map((num, i) => (
          <motion.div key={i} variants={item} className="text-center">
            <motion.h3
              initial={{ count: 0 }}
              animate={{ count: num }}
              transition={{ duration: 2 }}
              className="text-4xl font-bold text-green-600"
            >
              {num}+
            </motion.h3>
            <p className="text-gray-600 mt-2">Projects Delivered</p>
          </motion.div>
        ))}
      </motion.section>

      {/* GALLERY WITH HOVER */}
      <section className="bg-[#2b2b2b] py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="relative group rounded-xl overflow-hidden">
              <div className="h-40 bg-gray-400" />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <p className="text-white">View Moment</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        className="max-w-6xl mx-auto px-6 py-20"
      >
        <h2 className="text-3xl font-semibold mb-10">Our Process</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {['Discover','Plan','Execute','Scale'].map((step,i)=> (
            <motion.div key={i} variants={item} className="p-6 bg-white rounded-xl border">
              <div className="text-green-600">0{i+1}</div>
              <h4>{step}</h4>
            </motion.div>
          ))}
        </div>
      </motion.section>

    </motion.main>
  )
}
