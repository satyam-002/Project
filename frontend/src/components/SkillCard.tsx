
import { motion } from 'framer-motion';

interface SkillCardProps {
  title: string;
  skills: string[];
  index: number;
}

const SkillCard = ({ title, skills, index }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-6 rounded-xl h-full"
    >
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, i) => (
          <li key={i} className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SkillCard;
