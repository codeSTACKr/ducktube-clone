import styles from './new-component.module.scss';

export interface NewComponentProps {
    className?: string;
}

export const NewComponent = ({ className }: NewComponentProps) => {
    return <div className={`${styles.root} ${className}`}>NewComponent</div>;
};
