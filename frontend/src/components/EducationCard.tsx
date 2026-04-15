
import { motion } from 'framer-motion';

export interface EducationProps {
  institution: string;
  degree: string;
  period: string;
  description?: string;
  index: number;
}

const EducationCard = ({
  institution,
  degree,
  period,
  description,
  index
}: EducationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-6 rounded-xl"
    >
      <h3 className="text-xl font-bold mb-1">{institution}</h3>
      <h4 className="text-lg mb-2">{degree}</h4>
      <div className="text-sm text-muted-foreground mb-4">{period}</div>
      {description && <p className="text-muted-foreground">{description}</p>}
    </motion.div>
  );
};

export default EducationCard;
