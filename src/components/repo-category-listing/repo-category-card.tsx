'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Category } from '@/data/types/job';
import { cn } from '@/lib/utils';
import { getCategoryColor } from '@/utils/styles';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';

interface RepoCategoryCardProps {
  category: Category;
  title: string;
  description: string;
}

const backgroundMotion = {
  rest: {
    width: '1%',
  },
  hover: {
    width: '100%',
  },
};

const textMotion = {
  rest: {
    opacity: 0,
  },
  hover: {
    opacity: 1,
  },
};

export function RepoCategoryCard(props: RepoCategoryCardProps) {
  const { push } = useRouter();

  const handleClick = () => {
    push(`/repo/${props.category}`);
  };

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      className="cursor-pointer"
      onClick={() => handleClick()}
    >
      <Card className="relative flex flex-row overflow-hidden">
        <motion.div
          className={cn(
            'absolute left-0 top-0 h-full',
            getCategoryColor(props.category),
          )}
          variants={backgroundMotion}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="absolute inset-0 flex items-center justify-between px-12 text-4xl font-bold text-background"
          variants={textMotion}
          transition={{ duration: 0.5 }}
        >
          {props.title}
          <ArrowRight className="h-10 w-10" />
        </motion.div>
        <div className="flex flex-row">
          <div>
            <CardHeader className="pb-2">
              <CardTitle>{props.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{props.description}</CardDescription>
            </CardContent>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
