import { notFound } from 'next/navigation';
import { ModuleShell } from '@/components/empower-lab/module-shell';
import { getModuleBySlug, getModuleNavigation } from '../data/modules';

type ModuleRouteProps = {
  params: {
    slug: string;
  };
};

export default function EmpowerLabModulePage({ params }: ModuleRouteProps) {
  const module = getModuleBySlug(params.slug);

  if (!module) {
    notFound();
  }

  const { previous, next } = getModuleNavigation(params.slug);

  return <ModuleShell module={module} previous={previous} next={next} />;
}
