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
      className={`section-container p-5 flex flex-col items-center ${className.trim()} ${isIntro ? '' : 'retro-border-t'}`}
      style={{ opacity: isIntro ? 1 : 0 }}
    >
      {isIntro && (
        <div
          class="absolute inset-0 w-full h-full retro-border-h opacity-0"
          data-fade
        ></div>
      )}
      {header && <h2 class="font-bold text-gray-900 mb-4">{header}</h2>}
      {children}
    </section>
  );
};

export default SectionContainer;
