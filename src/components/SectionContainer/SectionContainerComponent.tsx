import type { FunctionalComponent } from 'preact';

interface Props {
  id?: string;
  className?: string;
  header?: string;
  children: any;
}

const SectionContainer: FunctionalComponent<Props> = ({
  id,
  className = '',
  header,
  children,
}) => {
  const isIntro = id === 'introduction';

  return (
    <section
      id={id}
      {...(!isIntro ? { 'data-fade': '' } : {})}
      className={`section-container p-5 flex flex-col md:flex-row gap-4 ${className.trim()}`}
      style={{ opacity: isIntro ? 1 : 0 }}
    >
      {header && <h2 class="font-bold text-gray-900 mb-4 w-40">{header}</h2>}
      {children}
    </section>
  );
};

export default SectionContainer;
