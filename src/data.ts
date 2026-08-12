import { CheckCircle2, ShieldCheck, Leaf, HeartPulse, Lock, Award } from 'lucide-react';

export const services = [
  {
    id: 'iso-9001',
    title: 'ISO 9001:2015',
    subtitle: 'Quality Management Systems',
    description: 'Enhance your customer satisfaction and improve your internal processes with the world\'s most recognized quality management standard.',
    icon: CheckCircle2,
  },
  {
    id: 'iso-14001',
    title: 'ISO 14001:2015',
    subtitle: 'Environmental Management',
    description: 'Demonstrate your commitment to environmental responsibility and sustainable business practices.',
    icon: Leaf,
  },
  {
    id: 'iso-45001',
    title: 'ISO 45001:2018',
    subtitle: 'Occupational Health & Safety',
    description: 'Protect your workforce and create a safer working environment with robust health and safety management.',
    icon: HeartPulse,
  },
  {
    id: 'iso-27001',
    title: 'ISO 27001:2022',
    subtitle: 'Information Security',
    description: 'Safeguard your organization\'s valuable data and intellectual property against security threats.',
    icon: Lock,
  },
  {
    id: 'iso-22000',
    title: 'ISO 22000:2018',
    subtitle: 'Food Safety Management',
    description: 'Ensure food safety across the entire supply chain with a comprehensive management system.',
    icon: ShieldCheck,
  },
  {
    id: 'iso-50001',
    title: 'ISO 50001:2018',
    subtitle: 'Energy Management',
    description: 'Improve energy performance, reduce costs, and meet environmental targets systematically.',
    icon: Award,
  }
];

export const processSteps = [
  {
    step: '01',
    title: 'Application & Review',
    description: 'Submit your application. We review your requirements and provide a customized certification proposal.',
  },
  {
    step: '02',
    title: 'Stage 1 Audit',
    description: 'Document review to ensure your management system is designed to meet the standard\'s requirements.',
  },
  {
    step: '03',
    title: 'Stage 2 Audit',
    description: 'On-site assessment to verify that your management system is fully implemented and effective.',
  },
  {
    step: '04',
    title: 'Certification',
    description: 'Upon successful audit completion, we issue your internationally recognized ISO certificate.',
  },
  {
    step: '05',
    title: 'Surveillance',
    description: 'Annual audits to ensure ongoing compliance and continuous improvement of your systems.',
  },
];
