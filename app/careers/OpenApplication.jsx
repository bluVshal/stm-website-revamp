'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { fadeUp, scaleIn } from "../Data";
import { Field } from "../components/Field";

const cx = (...classes) => classes.filter(Boolean).join(" ");

const stagger = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.05,
        },
    },
};

function Button({ children, variant = "primary", className, ...props }) {
    const styles = {
        primary:
            "bg-[#8DC53E] text-[#414042] shadow-[0_8px_24px_rgba(24,32,28,0.08)] hover:bg-[#7FB436] hover:-translate-y-0.5",
        secondary:
            "border border-[#E6EBE7] bg-white text-[#414042] shadow-sm hover:bg-[#F8FAF9] hover:-translate-y-0.5",
    };

    return (
        <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className={cx(
                "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition duration-200",
                styles[variant],
                className
            )}
            {...props}
            type="button"
        >
            {children}
        </motion.button>
    );
}

function Container({ children, className }) {
    return <div className={cx("mx-auto max-w-7xl px-0 sm:px-6 md:px-8", className)}>{children}</div>;
}

const OpenRoles = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [file, setFile] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [position, setPosition] = useState("");
    const [message, setMessage] = useState("");
    const [motLetterFile, setMotLetterFile] = useState(null);

    const handleSendCV = async () => {
        try {
            if (!name || !email || !phone) {
                alert("Please fill in all the fields before sending.");
                return;
            }
            if (!file) {
                alert("Please upload your CV before sending.");
                return;
            }

            if (name && email && phone && file) {
                // Implement the logic to send the CV via email or API
                alert("Your CV has been sent successfully!");
                // Reset form fields            setName("");
                setEmail("");
                setPhone("");
                setPosition("");
                setFile(null);
                setMotLetterFile(null);
                setIsOpen(false);

                const formData = new FormData();

                formData.append("name", name);
                formData.append("email", email);
                formData.append("message", message);

                if (file) {
                    formData.append("file", file);
                }

                if (motLetterFile) {
                    formData.append("motivationLetter", motLetterFile);
                }

                setMessage(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nDesired Position(s): ${position} \n\n[CV attached] \n ${motLetterFile ? "[Motivation Letter attached]" : "[No Motivation Letter]"} `);

                const res = await fetch("/api/send-email", {
                    method: "POST",
                    body: formData,
                });

                const data = await res.json();

                if (data.success) {
                    alert("Email sent!");
                } else {
                    alert(`Failed: ${data.error || "Unknown error"}`);
                }
            }
        }

        catch (error) {
            console.error("FRONTEND ERROR:", error);
            alert("Something went wrong. Check console.");
        };
    }

    return (
        <div>
            <Container>
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    className="rounded-[2.1rem]"
                >
                    <div className="rounded-2xl sm:rounded-[1.8rem] border border-white/70 bg-[#F6F8F7] p-4 text-center shadow-[0_16px_40px_rgba(24,32,28,0.06)] sm:p-8 md:p-12">
                        <motion.div initial="hidden" animate="visible" variants={stagger}>
                            <motion.div variants={fadeUp}>
                                <span className="inline-flex rounded-full border border-[#E6EBE7] bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#5E645F] shadow-sm sm:px-4 sm:py-1.5 sm:text-xs">
                                    Connect with us
                                </span>
                            </motion.div>
                            <motion.h1
                                variants={fadeUp}
                                className="mt-4 max-w-2xl text-2xl font-semibold leading-tight tracking-[-0.03em] text-[#414042] sm:mt-6 sm:text-3xl sm:leading-[1.1] sm:tracking-[-0.04em] md:text-4xl lg:text-5xl"
                            >
                                Don’t see a role that fits?
                            </motion.h1>
                        </motion.div>
                        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#5E645F] sm:mt-5 sm:text-lg sm:leading-8">
                            We’re always open to meeting great talent. If you think you’d add value to the team, send us your profile anyway.
                        </p>
                        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-8">
                            <Button variant='secondary' icon={<Send size={16} />} onClick={() => setIsOpen(true)}>
                                Send Your CV
                            </Button>
                        </div>

                        {isOpen && (
                            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 overflow-y-auto">
                                <motion.form
                                    variants={scaleIn}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                    className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-[#E6EBE7] bg-white p-5 shadow-[0_8px_24px_rgba(24,32,28,0.05)] sm:rounded-[2rem] sm:p-8 md:p-10 lg:px-16 lg:py-12 text-left"
                                >
                                    <div className="grid gap-4 sm:gap-5 md:grid-cols-2 mb-4 sm:mb-5">
                                        <Field required label="Name" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
                                        <Field required label="Email" placeholder="you@mail.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="grid gap-4 sm:gap-5 md:grid-cols-2 mb-4 sm:mb-5">
                                        <Field required label="Phone" placeholder="Your phone number" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                        <Field required label="Desired Position/s" placeholder="Your desired position/s" value={position} onChange={(e) => setPosition(e.target.value)} />
                                    </div>
                                    <div className="grid gap-4 sm:gap-5 md:grid-cols-2 mb-4 sm:mb-5">
                                        <label className="block"><span><p className="text-sm font-semibold mb-1">Upload your CV</p></span>
                                            <input id='cv-file' accept=".pdf, .doc, .docx" className="w-full border border-[#E6EBE7] bg-input p-2 shadow-sm text-sm" type="file" onChange={(e) => setFile(e.target.files[0])} />
                                        </label>
                                        <label className="block"><span><p className="text-sm font-semibold mb-1">Upload your Motivation Letter</p></span>
                                            <input id='motivation-letter-file' accept=".pdf, .doc, .docx" className="w-full border border-[#E6EBE7] bg-input p-2 shadow-sm text-sm" type="file" onChange={(e) => setMotLetterFile(e.target.files[0])} />
                                        </label>
                                    </div>
                                    <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                                        <Button icon={<Send size={16} />} onClick={handleSendCV}>
                                            Send Your CV
                                        </Button>
                                        <Button variant="outline" onClick={() => setIsOpen(false)}>
                                            Close
                                        </Button>
                                    </div>
                                </motion.form>
                            </div>
                        )}
                    </div>
                </motion.div>
            </Container>
        </div >
    )
}

export default OpenRoles;