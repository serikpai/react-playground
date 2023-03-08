import css from './LayoutWrapper.module.css'

export function LayoutContainer({children}) {
  return (
    <main className={css.pageContainer}>
      {children}
    </main>
  );
}