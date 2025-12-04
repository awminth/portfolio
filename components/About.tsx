import React from 'react';
import Section from './Section';
import { PERSONAL_INFO, EXPERIENCE, EDUCATION } from '../constants';
import { Briefcase, GraduationCap, MapPin } from 'lucide-react';
import { useTheme } from '../ThemeContext';

const About: React.FC = () => {
  const { styles, theme } = useTheme();

  return (
    <Section id="about" title="About & Experience" backgroundClass="bg-white">
      
      {/* About Summary */}
      <div className="mb-16 text-center md:text-left">
        <div className={`bg-slate-50 p-8 rounded-2xl border ${styles.border} transition-colors duration-500`}>
          <p className="text-slate-700 text-lg leading-relaxed font-light">
            {PERSONAL_INFO.about}
          </p>
          <div className="mt-6 flex items-center justify-center md:justify-start gap-2 text-slate-500 text-sm font-medium">
             <MapPin size={16} />
             <span>{PERSONAL_INFO.location}</span>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Experience Column */}
        <div>
          <h3 className="text-2xl font-serif font-bold text-slate-800 mb-8 flex items-center gap-3">
            <span className={`p-2 ${theme === 'pink' ? 'bg-rose-100 text-rose-600' : 'bg-sky-100 text-sky-600'} rounded-lg transition-colors`}><Briefcase size={20} /></span>
            Experience
          </h3>
          <div className={`space-y-10 border-l-2 ${theme === 'pink' ? 'border-rose-100' : 'border-sky-100'} pl-8 ml-3 relative transition-colors duration-500`}>
            {EXPERIENCE.map((job) => (
              <div key={job.id} className="relative">
                <span className={`absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white ${theme === 'pink' ? 'bg-rose-400' : 'bg-sky-400'} transition-colors`}></span>
                <div className={`mb-1 text-sm ${styles.primary} font-bold uppercase tracking-wide transition-colors`}>{job.period}</div>
                <h4 className="text-xl font-bold text-slate-800">{job.role}</h4>
                <div className="text-slate-500 mb-3 italic">{job.company}</div>
                <ul className="space-y-2">
                  {job.description.map((point, idx) => (
                    <li key={idx} className="text-slate-600 text-sm leading-relaxed relative pl-4">
                      <span className="absolute left-0 top-2 h-1 w-1 bg-slate-400 rounded-full"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div>
           <h3 className="text-2xl font-serif font-bold text-slate-800 mb-8 flex items-center gap-3">
            <span className={`p-2 ${theme === 'pink' ? 'bg-rose-50 text-rose-500' : 'bg-sky-50 text-sky-500'} rounded-lg transition-colors`}><GraduationCap size={20} /></span>
            Education
          </h3>
          <div className="space-y-8">
            {EDUCATION.map((edu) => (
              <div key={edu.id} className="bg-slate-50 p-6 rounded-xl hover:shadow-md transition-shadow border border-slate-100">
                <h4 className="text-lg font-bold text-slate-800 mb-2">{edu.degree}</h4>
                <div className={`${styles.primary} font-medium transition-colors`}>{edu.institution}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;