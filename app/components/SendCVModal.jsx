'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { scaleIn } from '../Data';
import { Field } from './Field';
import { Button } from './Buttons';

export function SendCVModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [position, setPosition] = useState('');
  const [message, setMessage] = useState('');
  const [file, setFile] = useState(null);
  const [motLetterFile, setMotLetterFile] = useState(null);

  const handleSendCV = async () => {
    try {
      if (!name || !email || !phone) {
        alert('Please fill in all the fields before sending.');
        return;
      }
      if (!file) {
        alert('Please upload your CV before sending.');
        return;
      }

      alert('Your CV has been sent successfully!');

      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append(
        'message',
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nDesired Position(s): ${position}\n\n[CV attached]\n${motLetterFile ? '[Motivation Letter attached]' : '[No Motivation Letter]'}`
      );
      if (file) formData.append('file', file);
      if (motLetterFile) formData.append('motivationLetter', motLetterFile);

      setName('');
      setEmail('');
      setPhone('');
      setPosition('');
      setMessage('');
      setFile(null);
      setMotLetterFile(null);
      onClose();

      const res = await fetch('/api/send-email', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (!data.success) {
        alert(`Failed: ${data.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('FRONTEND ERROR:', error);
      alert('Something went wrong. Check console.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 overflow-y-auto">
      <motion.form
        variants={scaleIn}
        initial="hidden"
        animate="visible"
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
          <label className="block">
            <p className="text-sm font-semibold mb-1">Upload your CV</p>
            <input
              id="cv-file"
              accept=".pdf, .doc, .docx"
              className="w-full border border-[#E6EBE7] bg-input p-2 shadow-sm text-sm"
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </label>
          <label className="block">
            <p className="text-sm font-semibold mb-1">Upload your Motivation Letter</p>
            <input
              id="motivation-letter-file"
              accept=".pdf, .doc, .docx"
              className="w-full border border-[#E6EBE7] bg-input p-2 shadow-sm text-sm"
              type="file"
              onChange={(e) => setMotLetterFile(e.target.files[0])}
            />
          </label>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
          <Button icon={<Send size={16} />} onClick={handleSendCV} type="button">
            Send Your CV
          </Button>
          <Button variant="secondary" onClick={onClose} type="button">
            Close
          </Button>
        </div>
      </motion.form>
    </div>
  );
}
