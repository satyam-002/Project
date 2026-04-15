
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  index: number;
}

const TimelineItem = ({ 
  date, 
  title, 
  description,
  index
}: TimelineItemProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`mb-12 grid grid-cols-[1fr_auto_1fr] gap-x-4 md:gap-x-8 items-start ${index % 2 === 0 ? '' : 'md:grid-cols-[1fr_auto_1fr]'}`}>
      {/* Date - For odd indices on mobile and all on desktop */}
      <motion.div
        className={`${index % 2 === 0 ? 'col-start-1 text-right' : 'col-start-1 text-right md:col-start-3 md:text-left'}`}
        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
        transition={{ duration: 0.5 }}
      >
        <span className="glass inline-block px-3 py-1 rounded-full text-sm font-medium">
          {date}
        </span>
      </motion.div>

      {/* Timeline stem */}
      <div className="flex flex-col items-center">
        <motion.div 
          className="w-4 h-4 rounded-full bg-primary z-10"
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div 
          className="w-0.5 bg-primary/30 h-full"
          initial={{ height: 0 }}
          animate={inView ? { height: '100%' } : { height: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
      </div>

      {/* Content - For even indices on mobile and all on desktop */}
      <motion.div
        className={`${index % 2 === 0 ? 'col-start-3' : 'col-start-3 md:col-start-1 md:text-right'}`}
        initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="glass-card p-4 rounded-lg inline-block">
          <h3 className="text-lg font-bold mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default TimelineItem;
