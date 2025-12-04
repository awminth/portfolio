import { ExperienceItem, EducationItem, SkillCategory, SocialLink } from './types';
import React from 'react';

// ==========================================
// ဓာတ်ပုံများကို ပြောင်းလဲရန် ဤနေရာတွင် ပြင်ဆင်ပါ။
// မိမိ Upload လုပ်ထားသော ပုံနာမည်အတိုင်း အတိအကျ ပြင်ပေးရပါမည်။
// ဥပမာ - မိမိပုံနာမည်က "my-photo.jpg" ဆိုရင် အောက်ကနေရာမှာ "./my-photo.jpg" လို့ ပြောင်းပေးပါ။
// ==========================================

// Profile ပုံ (အဓိက ပုံ)
export const PROFILE_IMAGE = "./3.png"; 

// Gallery ပုံများ (အောက်ဆုံးနားက ပုံ ၃ ပုံ)
export const GALLERY_IMAGES = [
  "./1.png", // ပုံ ၁
  "./2.png",   // ပုံ ၂
  "./3.png",  // ပုံ ၃
  "./4.png"  // ပုံ ၃
];

export const PERSONAL_INFO = {
  name: "Eaint Chan Myae",
  title: "Accounting | Financial Management | SME Advisory",
  email: "emmkim061210@gmail.com",
  phone: "+95 9402590557",
  location: "Mandalay, Myanmar",
  about: `Dedicated and detail-oriented accounting professional with hands-on experience in financial management, accounting operations, and advisory roles across both corporate and development sectors. Demonstrates strong analytical abilities, a commitment to accuracy, and an in-depth understanding of financial policies, procedures, and tools. Known for strong communication, teamwork, and leadership capabilities developed through training and practical experience. Passionate about contributing to organizational growth with integrity and accountability.`
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "toyota",
    role: "Account Executive",
    company: "Toyota",
    period: "Jul 2023 – Present",
    description: [
      "Manage full set of accounts, including the preparation and analysis of monthly and annual financial reports (P&L, balance sheet, cash flow).",
      "Perform daily bookkeeping tasks such as bank reconciliations, accounts payable/receivable, and general ledger entries.",
      "Ensure accuracy and compliance in financial reporting and maintain proper documentation of all accounting records.",
      "Oversee invoice processing, payment vouchers, staff expense claims, and vendor payments.",
      "Coordinate internal audits and assist external auditors during year-end financial reviews.",
      "Ensure compliance with local tax regulations and prepare documentation for commercial tax and income tax."
    ]
  },
  {
    id: "kingriver",
    role: "Accountant",
    company: "King River Company Limited",
    period: "Feb 2019 - Jun 2023",
    description: [
      "Maintained accurate bookkeeping and performed daily transaction entries and monthly reconciliations using Xero accounting software.",
      "Managed accounts payable by processing supplier invoices, scheduling payments, and maintaining supplier relationships.",
      "Prepared weekly and monthly cash flow forecasts and monitored cash movements.",
      "Supported management reporting, budgeting, and conducted ad-hoc financial analyses."
    ]
  },
  {
    id: "linn",
    role: "Job training for Professional Accountant (Singapore)",
    company: "Linn Singapore Accountancy",
    period: "Jul 2021 – Dec 2022",
    description: [
      "Acquired hands-on experience assisting with the full set of accounts, including bookkeeping and maintaining accurate financial records.",
      "Gained practical exposure to accounts payable and receivable processes.",
      "Trained in preparing and submitting CPF e-forms and GST submissions.",
      "Assisted in the preparation and timely submission of Form C and Form CS to the Comptroller of Income Tax."
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: "bba",
    degree: "Bachelor of Business Administration",
    institution: "Meiktila University of Economics"
  },
  {
    id: "dip",
    degree: "Diploma in Business English",
    institution: "Myanmar International Business Academy"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Accounting & Financial Tools",
    skills: ["Advanced Microsoft Excel", "Audit Preparation & Reporting", "Financial Analysis", "Cash Flow Management"]
  },
  {
    category: "Software Proficiency",
    skills: ["Microsoft Office", "DMS Software", "MYOB", "Xero", "Quickbooks", "Peachtree", "ERP Software"]
  },
  {
    category: "Languages",
    skills: ["Burmese (Native)", "English (Intermediate)", "Chinese (Basic-in progress)"]
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'Phone', url: 'tel:+959402590557', displayText: '+95 9402590557' },
  { platform: 'Facebook', url: 'https://www.facebook.com/eaint.chan.myae.694187', displayText: 'Facebook' },
  { platform: 'Instagram', url: 'https://www.instagram.com/eaint_chan_myae05?igsh=Ynd1d2RoNDdmMng2&utm_source=qr', displayText: 'Instagram' },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/', displayText: 'LinkedIn' },
  { platform: 'Telegram', url: 'https://t.me/+959402590557', displayText: 'Telegram' },
  { platform: 'Viber', url: 'viber://chat?number=%2B959402590557', displayText: 'Viber' }
];