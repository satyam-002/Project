
import { motion } from 'framer-motion';

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  index: number;
}

const CertificationCard = ({ title, issuer, date, credentialUrl, index }: CertificationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-6 rounded-xl"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-2">Issued by {issuer}</p>
      <p className="text-sm text-muted-foreground mb-4">{date}</p>
      <a
        href={credentialUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline text-sm"
      >
        View Credential
      </a>
    </motion.div>
  );
};

export default CertificationCard;
