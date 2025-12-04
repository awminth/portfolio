import React from 'react';
import Section from './Section';
import { SKILLS } from '../constants';
import { CheckCircle2 } from 'lucide-react';
import { useTheme } from '../ThemeContext';

const Skills: React.FC = () => {
  const { styles, theme } = useTheme();

  return (
    <Section id="skills" title="Professional Skills" backgroundClass={`bg-gradient-to-b from-white ${theme === 'pink' ? 'to-rose-100' : 'to-sky-100'} transition-colors duration-700`}>
      <div className="grid md:grid-cols-3 gap-8">
        {SKILLS.map((category, idx) => (
          <div key={idx} className={`bg-white p-8 rounded-2xl shadow-sm border ${styles.border} hover:-translate-y-1 transition-all duration-300 group`}>
            <h3 className="text-xl font-bold text-slate-800 mb-6 pb-4 border-b border-slate-50 flex items-center gap-2">
              <span className={`w-2 h-8 ${theme === 'pink' ? 'bg-rose-400 group-hover:bg-rose-500' : 'bg-sky-400 group-hover:bg-sky-500'} rounded-full transition-colors`}></span>
              {category.category}
            </h3>
            <ul className="space-y-3">
              {category.skills.map((skill, sIdx) => (
                <li key={sIdx} className="flex items-start gap-3 text-slate-600">
                  <CheckCircle2 size={18} className={`${theme === 'pink' ? 'text-rose-500' : 'text-sky-500'} mt-1 shrink-0 transition-colors`} />
                  <span className="text-sm font-medium">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;