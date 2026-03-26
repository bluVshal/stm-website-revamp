import React from 'react';

const cx = (...classes) => classes.filter(Boolean).join(" ");
function Container({ children, className }) {
  return <div className={cx("mx-auto max-w-7xl px-6 md:px-8", className)}>{children}</div>;
}

const Header = () => {
  return (
    <section className="relative overflow-hidden pb-20 pt-14 md:pb-24 md:pt-20">
      <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_75%_15%,rgba(141,197,62,0.20),transparent_25%),linear-gradient(180deg,#FFFFFF_0%,#F6F8F7_100%)]" />
      <Container className="text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-[#414042] md:text-5xl">About Us</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5E645F] md:text-xl mx-auto">
          We are a team of passionate marketers, strategists, and creatives dedicated to helping brands grow in the digital age. Our mission is to build digital growth systems that drive measurable results for ambitious brands.
        </p>
      </Container>
    </section>
  )
}

export default Header;
